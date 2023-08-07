import { useContext } from "react";
import { ClientContext } from "../../providers/clientContext";

const SearchFormHeader = () => {
  const { filteredClient, setFilteredClient, setSearch } =
    useContext(ClientContext);
  const submit = (event: any) => {
    event.preventDefault();
    setSearch(filteredClient);
    setFilteredClient("");
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Pesquise o cliente que você logou, ou outros clientes"
        value={filteredClient}
        onChange={(event) => setFilteredClient(event.target.value)}
      />
      <button type="submit">
        Clique para buscar pelo cliente logado ou cliente que deseja ou para
        listar todos
      </button>
    </form>
  );
};

export default SearchFormHeader;
