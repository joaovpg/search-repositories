import Card from "@/components/UI/Card";

//icons
import StarIcon from "@/assets/Icons/Star.svg?react";
import ProgressBar from "@/components/ProgressBar";

function Repository() {
  return (
    <section className="flex-grow flex flex-col md:flex-row gap-6 items-center justify-center">
      <Card className="md:max-w-[410px]">
        <div className="p-4 flex flex-col gap-4">
          <div>
            <h1 className="text-2xl font-bold text-primary">notepad-black</h1>
            <div className="flex flex-row items-center gap-3 text-text/70">
              <span>atualizado em 16/08/2025</span>
              <div
                className="flex gap-2  items-center text-text/70"
                title="Estrelas"
              >
                <StarIcon />
                700
              </div>
            </div>
          </div>

          <p>
            A notepad developed by me to practice and learn the C language and
            its C ++ / C # variants, I was inspired by the dark mode of the
            windows.
          </p>

          <table>
            <thead>
              <tr>
                <th colSpan={3} className="text-start">
                  Principais linguagens
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index = 0) => (
                <tr key={index}>
                  <td>
                    <div className="flex gap-2 items-center">React</div>
                  </td>
                  <td>
                    <div className="ml-auto px-4 w-[150px]">
                      <ProgressBar value={50} />
                    </div>
                  </td>
                  <td>100%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Card className="flex-grow h-[600px]">
        <div className="p-4"></div>
      </Card>
    </section>
  );
}

export default Repository;
