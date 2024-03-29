import { Container, Image } from "react-bootstrap";

export function ErrorComponent({ error }) {
  return (
    <Container>
      <h2>ERROR: {error.message}</h2>
      {error.response.status && (
        <Image src={`https://http.cat/${error.response.status}`} fluid />
      )}
    </Container>
  );
}
