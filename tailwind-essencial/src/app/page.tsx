import Link from "next/link";
import Pagina from "./components/template/Pagina";
import Titulo from "./components/template/Titulo";

export default function Home() {
  return (
    <Pagina>
      <Titulo texto="Tailwind" />
      <Link href="/box-model/padding">
        <button className="botao mt-10">Iniciar</button>
      </Link>
    </Pagina>
  );
}
