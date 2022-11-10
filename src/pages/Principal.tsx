import { useEffect } from "react";
import { Cabecalho } from "../components/Cabecalho";
import service from "../services";
import { Props } from "../types";

function Principal() {
  useEffect(function () {
    (async function () {
      const numero = Math.floor(Math.random() * 2533);
      const concurso: Props = await service.get(numero);
      console.log(concurso);
    })();
  }, []);

  return <Cabecalho />;
}

export default Principal;
