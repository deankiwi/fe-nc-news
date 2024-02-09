import { useSearchParams } from "react-router-dom";
import { NewsList } from "../components/NewsList";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Filter } from "../components/Filter";

export function ArticlesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <Filter />
      <h1>{searchParams.get("topic")}</h1>
      <NewsList />
    </div>
  );
}
