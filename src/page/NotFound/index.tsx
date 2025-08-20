import { Link } from "react-router";
import Chopin from "@/assets/Images/Chopin.png";

function NotFound() {
  return (
    <section className="flex-grow flex items-center justify-center">
      <div className="max-w-[500px] flex flex-col gap-6 items-center">
        <img
          alt="Chopin, o gato."
          src={Chopin}
          className="max-w-[200px] w-full"
        />
        <h1 className="text-center text-4xl font-bold">
          😿 Ops... Página não encontrada!
        </h1>
        <p className="text-center text-text">
          Parece que o Chopin passou por aqui e... <br />
          ops! acabou derrubando essa página da prateleira.
        </p>
        <p className="text-center text-text">
          Mas não se preocupe, ele já está fingindo que nada aconteceu.
        </p>
        <Link
          to="/"
          className="py-2 px-4 bg-primary font-bold rounded-lg text-white"
        >
          Voltar para página inicial
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
