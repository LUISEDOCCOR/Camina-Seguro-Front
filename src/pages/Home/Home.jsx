import { useState, useEffect } from "react";
import { Layout } from "@/layouts/layout";
import NumberFlow from "@number-flow/react";

export const HomePage = () => {
  const [valueUANL, setvalueUANL] = useState(0);
  const [valueENVIPE, setvalueENVIPE] = useState(0);

  useEffect(() => {
    setvalueUANL(0.3);
    setvalueENVIPE(0.25);
  }, []);

  const solutions = [
    `Aplicación en donde podrás encontrar grupos de estudiantes, que siguen una misma ruta para llegar a sus escuelas.`,
    `Tú como usuario podrás crear grupos, pero para evitar algún problema, estos tendrán que ser aceptados por alguien más`,
    `En los grupos te podrás unir únicamente por una sola vez. Tienes dos opciones para unirte como estudiante o padre de familia, ya que los grupos son acompañados por ellos`,
    `Para la revisión de los grupos, creados por el usuario, se ha creado un dashboard donde se puede manejar todo lo relacionado con ellos.`,
  ];

  return (
    <Layout>
      <main className="space-y-12">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            ¿Cuántos estudiantes sufren violencia en el trayecto escolar?
          </h2>
          <div className="flex gap-6 flex-col items-start xl:items-center xl:flex-row">
            <p className="text-md text-neutral-500">
              Un estudio realizado por investigadores de la UANL reveló que el
              30% de los estudiantes encuestados reportaron haber sido víctimas
              de algún tipo de violencia en su camino hacia la escuela. Esto
              incluye agresiones físicas, robos y acoso. Según la ENVIPE 2021,
              el 25.8% de los jóvenes de 12 a 17 años reportaron haber sido
              víctimas de algún delito en espacios públicos, que incluye el
              trayecto hacia la escuela.
            </p>
            <div className="flex gap-6">
              <article>
                <h3>ENVIPE</h3>
                <NumberFlow
                  format={{ style: "percent" }}
                  className="text-3xl font-semibold"
                  value={valueENVIPE}
                />
              </article>
              <article>
                <h3>UANL</h3>
                <NumberFlow
                  format={{ style: "percent" }}
                  className="text-3xl font-semibold"
                  value={valueUANL}
                />
              </article>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Nuestra solución</h2>
          <div className="w-full grid grid-cols-2 gap-5 xl:grid-cols-4">
            {solutions.map((solution, index) => (
              <article key={index} className="space-y-3">
                <div className="bg-teal-500 text-teal-800 rounded-full w-9 h-9 grid place-content-center text-xl font-bold">
                  {index + 1}
                </div>
                <p className="text-md text-neutral-500">{solution}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};
