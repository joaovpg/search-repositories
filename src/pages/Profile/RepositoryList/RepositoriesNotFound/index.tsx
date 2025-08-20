import Card from "@/components/UI/Card";

function RepositoriesNotFound() {
  return (
    <Card className="flex-grow px-4 py-10">
      <h2 className="text-2xl font-bold text-center">
        Nenhum repositório encontrado
      </h2>
      <h4 className="text-xl font-bold mb-2 text-center">
        Esse usuário ainda não publicou nada por aqui.
      </h4>
      <p className="text-center font-medium text-text/70">
        Se for você, que tal criar seu primeiro repositório e compartilhar suas
        ideias com o mundo?
      </p>
    </Card>
  );
}

export default RepositoriesNotFound;
