import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";

export default function PaginaPadding() {
    return (
        <Pagina className="flex flex-col gap-7">
            <Titulo texto="Utilizando Padding" descricao="O preenchimento interno dos elementos"/>
            <div>
                <div className="inline-block bg-blue-500 p-7">Conteúdo</div>
                <div className="inline-block bg-blue-500 pt-7">Conteúdo</div>
                <div className="inline-block bg-blue-500 pb-7">Conteúdo</div>
                <div className="inline-block bg-blue-500 py-7">Conteúdo</div>
                <div className="inline-block bg-blue-500 px-7">Conteúdo</div>
            </div>
        </Pagina>
    )
}