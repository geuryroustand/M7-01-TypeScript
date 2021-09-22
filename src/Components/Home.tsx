import React from "react";
import { Form, Button } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Form>
        <Form.Control type="text" placeholder="Enter email" />

        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
      </Form>
    </div>
  );
}

export default Home;
