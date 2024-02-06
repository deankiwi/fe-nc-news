import { ErrorComponent } from "../components/ErrorComponent";

export function ErrorPage() {
  return (
    <ErrorComponent
      error={{
        message: "404 page not found",
        response: { status: 404 },
      }}
    />
  );
}
