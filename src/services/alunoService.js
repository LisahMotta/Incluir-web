import { supabase } from './supabaseClient';

const validarEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Email inválido');
  }
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export const cadastrarAluno = async (dadosAluno) => {
  try {
    // Validar email antes de prosseguir
    validarEmail(dadosAluno.email);

    // Primeiro, criar o usuário de autenticação
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: dadosAluno.email,
      password: dadosAluno.senha,
      options: {
        data: {
          nome: dadosAluno.nome,
          serie: dadosAluno.serie
        },
        emailRedirectTo: `${window.location.origin}/login`
      }
    });

    if (authError) {
      if (authError.message.includes('For security purposes')) {
        const waitTime = parseInt(authError.message.match(/\d+/)[0]);
        console.log(`Aguardando ${waitTime} segundos antes de tentar novamente...`);
        await delay(waitTime * 1000);
        return cadastrarAluno(dadosAluno);
      }
      console.error('Erro na autenticação:', authError.message);
      throw new Error(`Erro na autenticação: ${authError.message}`);
    }

    if (!authData?.user?.id) {
      console.error('Erro: Usuário não foi criado corretamente');
      throw new Error('Erro: Usuário não foi criado corretamente');
    }

    console.log('Usuário criado com sucesso:', authData.user.id);

    // Retornar um objeto com informações sobre o status do cadastro
    return {
      success: true,
      message: 'Cadastro realizado com sucesso! Por favor, verifique seu email para confirmar sua conta. Após a confirmação, você poderá fazer login.',
      user: authData.user,
      requiresEmailConfirmation: true
    };

  } catch (error) {
    console.error('Erro completo:', error);
    throw error;
  }
};

export const loginAluno = async (email, senha) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: senha,
    });

    if (error) {
      if (error.message.includes('Email not confirmed')) {
        throw new Error('Por favor, confirme seu email antes de fazer login. Verifique sua caixa de entrada e spam.');
      }
      console.error('Erro no login:', error.message);
      throw new Error(`Erro no login: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error('Erro completo no login:', error);
    throw error;
  }
};

export const buscarAlunoPorId = async (id) => {
  try {
    const { data, error } = await supabase
      .from('alunos')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erro ao buscar aluno:', error);
    throw error;
  }
};

export const atualizarAluno = async (id, dadosAluno) => {
  try {
    const { data, error } = await supabase
      .from('alunos')
      .update(dadosAluno)
      .eq('id', id)
      .select();

    if (error) throw error;
    return data[0];
  } catch (error) {
    console.error('Erro ao atualizar aluno:', error);
    throw error;
  }
};
