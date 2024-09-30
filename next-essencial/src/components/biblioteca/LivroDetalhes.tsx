import Biblioteca from '@/data/model/Livro'

interface BibliotecaDetalhesProps {
    biblioteca: Biblioteca
}

export default function BibliotecaDetalhes(props: BibliotecaDetalhesProps) {
    const { biblioteca } = props
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center text-center gap-5 max-w-[500px]">
                <h1 className="text-4xl font-bold">{biblioteca.titulo}</h1>
                <p className="text-lg text-gray-500">{biblioteca.autor}</p>
                <span className="text-sm">{biblioteca.descricao}</span>
            </div>
        </div>
    )
}
