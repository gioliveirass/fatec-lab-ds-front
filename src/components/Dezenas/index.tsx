import { WrapperSld, DezenasSld } from "./styles";

type Props = {
  listaDezenas: string[];
};

export function Dezenas({ listaDezenas }: Props) {
  return (
    <WrapperSld>
      {listaDezenas.map((dezena, index) => (
        <DezenasSld key={index}>{dezena}</DezenasSld>
      ))}
    </WrapperSld>
  );
}
