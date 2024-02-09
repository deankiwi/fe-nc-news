import { Form, Button, Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function Filter(params) {
  const navigate = useNavigate();
  function handleFilter(event) {
    event.preventDefault();

    const topic = event.target.elements.topic.value;
    const sort_by = event.target.elements.sort_by.value;
    const reverseOrder = event.target.elements.reverseOrder.checked;

    const url = `/articles?topic=${topic}&sort_by=${sort_by}&reverseOrder=${reverseOrder}`;
    navigate(url);
  }

  return (
    <Navbar bg="light" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Filter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form onSubmit={handleFilter}>
            <Form.Group className="mb-3">
              <Form.Label>Topic</Form.Label>
              <Form.Select name="topic">
                <option value="">all</option>
                <option value="cooking">cooking</option>
                <option value="football">football</option>
                <option value="coding">coding</option>
              </Form.Select>
              <Form.Label>Sort by</Form.Label>
              <Form.Select name="sort_by">
                <option value="created_at">date</option>
                <option value="votes">votes</option>
                <option value="comment_count">comment_count</option>
              </Form.Select>
              <Form.Check type="checkbox" label="reverse order" name="reverseOrder" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
