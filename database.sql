-- Verificar e criar a tabela de alunos se não existir
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'alunos') THEN
        CREATE TABLE public.alunos (
            id uuid references auth.users not null primary key,
            nome text not null,
            data_nascimento date not null,
            serie text not null,
            responsaveis text,
            login text not null unique,
            senha text not null,
            email text not null unique,
            created_at timestamp with time zone default timezone('utc'::text, now()) not null,
            updated_at timestamp with time zone default timezone('utc'::text, now()),
            pontos integer default 0
        );
    END IF;
END $$;

-- Criar índices se não existirem
CREATE INDEX IF NOT EXISTS alunos_login_idx ON public.alunos (login);
CREATE INDEX IF NOT EXISTS alunos_nome_idx ON public.alunos (nome);

-- Habilitar RLS se ainda não estiver habilitado
ALTER TABLE public.alunos ENABLE ROW LEVEL SECURITY;

-- Remover todas as políticas existentes
DROP POLICY IF EXISTS "Usuários podem ver seus próprios dados" ON public.alunos;
DROP POLICY IF EXISTS "Usuários podem atualizar seus próprios dados" ON public.alunos;
DROP POLICY IF EXISTS "Permitir inserção durante cadastro" ON public.alunos;

-- Criar novas políticas
CREATE POLICY "Permitir inserção durante cadastro"
ON public.alunos
FOR INSERT
WITH CHECK (auth.uid() = id);

CREATE POLICY "Usuários podem ver seus próprios dados"
ON public.alunos
FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Usuários podem atualizar seus próprios dados"
ON public.alunos
FOR UPDATE
USING (auth.uid() = id);

-- Criar ou substituir a função de atualização do updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS trigger AS $$
BEGIN
    new.updated_at = timezone('utc'::text, now());
    RETURN new;
END;
$$ LANGUAGE plpgsql;

-- Criar trigger se não existir
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_trigger WHERE tgname = 'handle_alunos_updated_at'
    ) THEN
        CREATE TRIGGER handle_alunos_updated_at
            BEFORE UPDATE ON public.alunos
            FOR EACH ROW
            EXECUTE PROCEDURE public.handle_updated_at();
    END IF;
END $$;

-- Adicionar colunas se não existirem
ALTER TABLE public.alunos
    ADD COLUMN IF NOT EXISTS nome text,
    ADD COLUMN IF NOT EXISTS data_nascimento date,
    ADD COLUMN IF NOT EXISTS serie text,
    ADD COLUMN IF NOT EXISTS responsaveis text,
    ADD COLUMN IF NOT EXISTS login text,
    ADD COLUMN IF NOT EXISTS created_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
    ADD COLUMN IF NOT EXISTS updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
    ADD COLUMN IF NOT EXISTS pontos integer DEFAULT 0; 