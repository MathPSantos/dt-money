import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Transaction = {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
};

interface TransactionsContextType {
  transactions: Transaction[];
}

const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsContextProviderProps {
  children: ReactNode;
}

export function TransactionsContextProvider({
  children,
}: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(function fetchTransactionsData() {
    (async () => {
      const response = await fetch("http://localhost:3333/transactions");
      const data = await response.json();

      setTransactions(data);
    })();
  });

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export const useTransactionsContext = () => useContext(TransactionsContext);
