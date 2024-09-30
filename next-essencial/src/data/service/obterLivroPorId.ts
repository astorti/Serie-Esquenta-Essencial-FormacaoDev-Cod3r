'use server'
import { esperar } from './utils'
import livros from '../constants/livros'

export default async function obterLivroPorId(id: number) {
    await esperar(3000)
    const livro = livros.find((livro) => livro.id === id)
    return livro
}
