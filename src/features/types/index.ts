export interface Produto {
    id: string;
    tipo: 'tamanho' | 'sabor' | 'complemento';
    nome: string;
    valor?: string;
    avatar: string;
  }