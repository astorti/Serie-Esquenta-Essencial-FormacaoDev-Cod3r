import LivroItem from '@/components/biblioteca/LivroItem'
import obterLivros from '@/data/service/obterLivros'

export default async function PaginaBibliotecas() {
    const bibliotecas = await obterLivros()
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-black">Biblioteca</h1>
            <div className="flex flex-col gap-5">
                {bibliotecas.map((biblioteca) => (
                    <LivroItem key={biblioteca.id} biblioteca={biblioteca} />
                ))}
            </div>
        </div>
    )
}
