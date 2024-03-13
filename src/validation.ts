import { z } from 'zod';

export const acaiSchema = z.object({
  sabor: z.enum(['MORANGO', 'BANANA', 'KIWI']),
  tamanho: z.enum(['PEQUENO', 'MEDIO', 'GRANDE']),
  complemento: z.enum(['GRANOLA', 'PAÇOCA', 'LEITE NINHO', 'NENHUM']),
});
