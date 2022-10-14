import * as Dialog from "@radix-ui/react-dialog";

import { NewTransactionModal } from "../NewTransactionModal";

import logoImg from "../../assets/logo.svg";

import * as H from "./styles";

export function Header() {
  return (
    <H.Container>
      <H.Content>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <H.NewTransactionButton>Nova transação</H.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </H.Content>
    </H.Container>
  );
}
