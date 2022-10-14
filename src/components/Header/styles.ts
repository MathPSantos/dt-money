import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme["gray-900"]};
  padding: 40px 0 120px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  padding: 0 24px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme["green-700"]};
    transition: background-color 0.2s;
  }
`;
