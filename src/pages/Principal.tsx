import { useEffect, useState } from "react";
import { Acumulou } from "../components/Acumulou";
import { Cabecalho } from "../components/Cabecalho";
import { Dezenas } from "../components/Dezenas";
import { NaoAcumulou } from "../components/NaoAcumulou";
import service from "../services";
import { Props } from "../types";

function Principal() {
  const [concurso, setConcurso] = useState<Props>({} as Props);

  useEffect(function () {
    (async function () {
      const numero = Math.floor(Math.random() * 2533);
      const concursoTemp: Props = await service.get(numero);
      setConcurso(concursoTemp);
    })();
  }, []);

  return (
    <>
      <Cabecalho
        dataApuracao={concurso.dataApuracao}
        numero={concurso.numero}
      />

      {concurso.acumulado ? (
        <>
          <Acumulou />
          <Dezenas listaDezenas={concurso.listaDezenas} />
        </>
      ) : (
        <NaoAcumulou />
      )}
    </>
  );
}

export default Principal;
