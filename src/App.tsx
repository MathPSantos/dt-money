import { ThemeProvider } from "styled-components";

import { TransactionsContextProvider } from "./contexts";

import { Transactions } from "./pages/Transactions";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsContextProvider>
        <Transactions />
      </TransactionsContextProvider>
    </ThemeProvider>
  );
}
