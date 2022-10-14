import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

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
