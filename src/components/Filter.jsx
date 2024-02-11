import { Form, Button, Navbar, Container, Stack } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";

//TODO dynamic change column / row layout depending on size of window
//TODO able to click filters to remove them

export function Filter() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const sort_by = searchParams.get("sort_by");
  const reverseOrder = searchParams.get("reverseOrder");
  const author = searchParams.get("author");
  const topic = searchParams.get("topic");

  function handleFilter(event) {
    event.preventDefault();

    const topic = event.target.elements.topic.value;
    const sort_by = event.target.elements.sort_by.value;
    const reverseOrder = event.target.elements.reverseOrder.checked;
    const author = event.target.elements.author.value;

    const url =
      `/articles?` +
      (topic ? `topic=${topic}&` : "") +
      (sort_by ? `sort_by=${sort_by}&` : "") +
      (reverseOrder ? `reverseOrder=${reverseOrder}&` : "") +
      (author ? `author=${author}&` : "");
    navigate(url);
  }

  return (
    <>
      <Navbar bg="light" expand="" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Filter</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form onSubmit={handleFilter}>
              <Form.Group className="">
                <Form.Label>Topic</Form.Label>
                <Form.Select name="topic">
                  <option value="">all</option>
                  <option value="cooking">cooking</option>
                  <option value="football">football</option>
                  <option value="coding">coding</option>
                </Form.Select>
                <Form.Label>Sort by</Form.Label>
                <Form.Select name="sort_by">
                  <option value="created_at">date {"(default)"}</option>
                  <option value="votes">votes</option>
                  <option value="comment_count">comment_count</option>
                </Form.Select>
                <Form.Label>Author</Form.Label>
                <Form.Select name="author">
                  <option value="">all</option>
                  {author && <option value={`${author}`}>{author}</option>}
                </Form.Select>
                <Form.Check
                  type="checkbox"
                  label="reverse order"
                  name="reverseOrder"
                />
              </Form.Group>
              <Button variant="primary" type="reset">
                reset
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
        <Container>
          <Stack direction="horizontal" gap={3}>
            {topic && <div className="p-2">Topic: {topic}</div>}
            {sort_by && (
              <div className="p-2">
                sort by: {sort_by === "created_at" ? "date" : sort_by}
              </div>
            )}
            {author && <div className="p-2">Author: {author}</div>}
            {reverseOrder === "true" && (
              <div className="p-2">Descending: {reverseOrder}</div>
            )}
          </Stack>
        </Container>
      </Navbar>
    </>
  );
}
