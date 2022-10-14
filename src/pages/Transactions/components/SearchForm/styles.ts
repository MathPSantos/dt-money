import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  gap: 16px;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${({ theme }) => theme["gray-900"]};
    color: ${({ theme }) => theme["gray-300"]};
    padding: 16px;

    &::placeholder {
      color: ${({ theme }) => theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 12px;

    border: 0;
    padding: 16px;
    border: 1px solid ${({ theme }) => theme["green-300"]};
    background: transparent;
    color: ${({ theme }) => theme["green-300"]};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme["green-500"]};
      border-color: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme["white"]};

      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;
