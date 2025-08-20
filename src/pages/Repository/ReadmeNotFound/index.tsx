import NotFound from "@/assets/Icons/NotFound.svg?react";

function ReadmeNotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div>
        <h3 className="font-bold text-2xl text-center">
          Ops! README não encontrado
        </h3>
        <h4 className="font-semibold text-xl text-center text-text/70">
          Parece que este repositório ainda não tem um README.
        </h4>
      </div>
      <NotFound className="size-[250px] md:size-[300px]" />
      <p className="text-center text-text/70 font-medium">
        Se você é o dono, aproveite para criar um README incrível e mostrar ao
        mundo todo o potencial do seu projeto!
      </p>
    </div>
  );
}

export default ReadmeNotFound;
