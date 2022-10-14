import { Header, Summary } from "../../components";
import { SearchForm } from "./components";

import * as T from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <T.Container>
        <SearchForm />

        <T.Table>
          <tbody>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <T.PriceHighlight variant="income">
                  R$ 12.000,00
                </T.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="40%">Hamburguer</td>
              <td>
                <T.PriceHighlight variant="outcome">
                  - R$ 52,00
                </T.PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </T.Table>
      </T.Container>
    </div>
  );
}
