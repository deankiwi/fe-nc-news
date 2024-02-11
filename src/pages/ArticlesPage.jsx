import { NewsList } from "../components/NewsList";
import { Filter } from "../components/Filter";

export function ArticlesPage() {
  return (
    <div>
      <Filter />
      <NewsList />
    </div>
  );
}
