import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: -80px;
`;

interface CardProps {
  variant?: "green";
}

export const Card = styled.div<CardProps>`
  background: ${({ theme }) => theme["gray-600"]};
  border-radius: 6px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 16px;
    font-size: 2rem;
  }

  ${({ variant }) =>
    variant === "green" &&
    css`
      background: ${({ theme }) => theme["green-700"]};
    `}
`;
