import { useTransactionsContext } from "../../contexts";

import { Header, Summary } from "../../components";
import { SearchForm } from "./components";

import * as T from "./styles";

type Transaction = {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
};

export function Transactions() {
  const { transactions } = useTransactionsContext();

  return (
    <div>
      <Header />
      <Summary />

      <T.Container>
        <SearchForm />

        <T.Table>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="40%">{transaction.description}</td>
                <td>
                  <T.PriceHighlight variant={transaction.type}>
                    {transaction.price}
                  </T.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </T.Table>
      </T.Container>
    </div>
  );
}
