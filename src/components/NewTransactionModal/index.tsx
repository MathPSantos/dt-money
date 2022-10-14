import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

import * as NTM from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <NTM.Overlay />

      <NTM.Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <NTM.CloseButton>
          <X size={24} />
        </NTM.CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit">Cadastrar</button>
        </form>
      </NTM.Content>
    </Dialog.Portal>
  );
}
