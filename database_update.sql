-- Adicionar novas colunas se não existirem
ALTER TABLE public.alunos
  ADD COLUMN IF NOT EXISTS data_nascimento date,
  ADD COLUMN IF NOT EXISTS serie text,
  ADD COLUMN IF NOT EXISTS responsaveis text,
  ADD COLUMN IF NOT EXISTS login text,
  ADD COLUMN IF NOT EXISTS email text,
  ADD COLUMN IF NOT EXISTS created_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
  ADD COLUMN IF NOT EXISTS updated_at timestamp with time zone DEFAULT timezone('utc'::text, now());

-- Adicionar restrição de unicidade ao login se não existir
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'alunos_login_key'
  ) THEN
    ALTER TABLE public.alunos ADD CONSTRAINT alunos_login_key UNIQUE (login);
  END IF;
END$$;

-- Criar índices se não existirem
CREATE INDEX IF NOT EXISTS alunos_login_idx ON public.alunos (login);
CREATE INDEX IF NOT EXISTS alunos_nome_idx ON public.alunos (nome);

-- Habilitar RLS se ainda não estiver habilitado
ALTER TABLE public.alunos ENABLE ROW LEVEL SECURITY;

-- Remover políticas existentes (se houver) e criar novas
DROP POLICY IF EXISTS "Usuários podem ver seus próprios dados" ON public.alunos;
DROP POLICY IF EXISTS "Usuários podem atualizar seus próprios dados" ON public.alunos;

CREATE POLICY "Usuários podem ver seus próprios dados"
    ON public.alunos FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Usuários podem atualizar seus próprios dados"
    ON public.alunos FOR UPDATE
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
END$$; 