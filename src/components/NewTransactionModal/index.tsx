import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

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

          <NTM.TransactionType>
            <NTM.TransactionTypeButton value="income" variant="income">
              <ArrowCircleUp size={24} />
              Entrada
            </NTM.TransactionTypeButton>

            <NTM.TransactionTypeButton value="outcome" variant="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </NTM.TransactionTypeButton>
          </NTM.TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </NTM.Content>
    </Dialog.Portal>
  );
}
