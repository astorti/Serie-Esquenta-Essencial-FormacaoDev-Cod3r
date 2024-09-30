import Biblioteca from '@/data/model/Livro'
import Link from 'next/link'

interface BibliotecaItemProps {
    biblioteca: Biblioteca
}

export default function BibliotecaItem(props: BibliotecaItemProps) {
    const { biblioteca } = props
    return (
        <Link
            href={`/livros/${biblioteca.id}`}
            className="flex gap-4 bg-zinc-900 rounded-md overflow-hidden"
        >
            <div className="flex flex-col justify-center gap-1.5 p-3">
                <h2 className="text-2xl font-bold">{biblioteca.titulo}</h2>
                <p className="text-lg text-zinc-400">{biblioteca.autor}</p>
                <p className="text-sm">{biblioteca.descricao}</p>
            </div>
        </Link>
    )
}
