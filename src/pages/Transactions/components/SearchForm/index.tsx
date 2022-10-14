import { MagnifyingGlass } from "phosphor-react";

import * as SF from "./styles";

export function SearchForm() {
  return (
    <SF.Container>
      <input type="text" placeholder="Busque por transações" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SF.Container>
  );
}
