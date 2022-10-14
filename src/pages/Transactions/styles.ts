import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 64px auto 0;
  padding: 0 24px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
  /* margin-top: 24px; */

  td {
    padding: 20px 32px;
    background: ${({ theme }) => theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

interface PriceHighlightProps {
  variant: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ variant, theme }) =>
    ({ income: theme["green-300"], outcome: theme["red-300"] }[variant])};
`;
