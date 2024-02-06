import { Spinner } from "react-bootstrap";

export function Loading({ isLoading, loadingDescription }) {
  return (
    <>
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">{`Loading ${loadingDescription}...`}</span>
        </Spinner>
      )}
    </>
  );
}
