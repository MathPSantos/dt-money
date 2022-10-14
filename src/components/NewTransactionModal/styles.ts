import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as Radio from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 512px;
  border-radius: 6px;
  padding: 40px 48px;
  background: ${({ theme }) => theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 32px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    input {
      border-radius: 6px;
      border: 0;
      background: ${({ theme }) => theme["gray-900"]};
      color: ${({ theme }) => theme["gray-300"]};
      padding: 16px;

      &::placeholder {
        color: ${({ theme }) => theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 58px;
      border: 0;
      background: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme["white"]};
      font-weight: bold;
      padding: 0 20px;
      border-radius: 6px;
      margin-top: 24px;
      cursor: pointer;

      &:hover {
        background: ${({ theme }) => theme["green-700"]};
        transition: background-color 0.2s;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 24px;
  right: 24px;
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme["gray-500"]};
`;

export const TransactionType = styled(Radio.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 8px;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(
  Radio.Item
)<TransactionTypeButtonProps>`
  background: ${({ theme }) => theme["gray-700"]};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${({ theme }) => theme["gray-300"]};

  svg {
    color: ${({ variant, theme }) =>
      ({
        income: theme["green-300"],
        outcome: theme["red-300"],
      }[variant])};
  }

  &[data-state="unchecked"]:hover {
    background: ${({ theme }) => theme["gray-600"]};
    transition: background-color 0.2s;
  }

  &[data-state="checked"] {
    color: ${({ theme }) => theme.white};
    background: ${({ variant, theme }) =>
      ({
        income: theme["green-500"],
        outcome: theme["red-500"],
      }[variant])};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`;
