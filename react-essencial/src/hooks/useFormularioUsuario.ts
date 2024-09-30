import { useState } from 'react'

export default function useFormularioUsuario() {
    const [nome, alterarNome] = useState('')
    const [email, alterarEmail] = useState('')
    const [senha, alterarSenha] = useState('')

    function salvar() {
        console.log('Nome:', nome)
        console.log('Email:', email)
    }

    return {
        nome,
        alterarNome,
        email,
        alterarEmail,
        senha,
        alterarSenha,
        salvar,
    }
}
