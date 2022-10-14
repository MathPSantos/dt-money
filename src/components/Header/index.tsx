import logoImg from "../../assets/logo.svg";

import * as H from "./styles";

export function Header() {
  return (
    <H.Container>
      <H.Content>
        <img src={logoImg} alt="" />

        <H.NewTransactionButton>Nova transação</H.NewTransactionButton>
      </H.Content>
    </H.Container>
  );
}
