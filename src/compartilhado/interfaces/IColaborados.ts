// I DE INTERFACE
export interface IColaborador {
    nome: string
    cargo: string
    imagem: string
    time?: string
    data: string
}

// INTERFACES PODEM SER EXPANDIDAS COM EXTEND OU DECLARANDO NOVAMENTE
// TYPE NÃO