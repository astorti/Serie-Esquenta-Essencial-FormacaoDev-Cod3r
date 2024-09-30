'use server'
import { esperar } from './utils'
import livros from '../constants/livros'

export default async function obterLivros() {
    await esperar(3000)
    return livros
}
