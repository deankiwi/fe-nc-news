import { useSearchParams } from "react-router-dom";
import { NewsList } from "../components/NewsList";

export function ArticlesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <h1>{searchParams.get("topic")}</h1>
      <NewsList />
    </>
  );
}
