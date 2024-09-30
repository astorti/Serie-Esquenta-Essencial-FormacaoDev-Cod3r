import LivroDetalhes from '@/components/biblioteca/LivroDetalhes'
import obterLivroPorId from '@/data/service/obterLivroPorId'
import Link from 'next/link'

export default async function PaginaBibliotecaPorId(props: any) {
    const biblioteca = await obterLivroPorId(+props.params.id)
    if (!biblioteca) return <div>Livro não encontrado</div>
    return (
        <div className="flex flex-col gap-5">
            <LivroDetalhes biblioteca={biblioteca}/>
            <Link href="/livros" className="self-center bg-blue-500 p-2 rounded-md">
                Voltar
            </Link>
        </div>
    )
}
