import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Track } from "../typing/index";

// interface SongList {
//   id: number;
//   title: string;
//   title_short: string;
// }
function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const [data, setData] = useState<Track[]>([]);

  const handLerInput = (valueSearch: string) => {
    setSearchTerm(valueSearch);
  };

  // useEffect(() => {
  //   const getInfo = async () => {
  //     const response = await fetch(
  //       `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchTerm}`
  //     );

  //     const data = await response.json();

  //     setData(data);
  //   };

  //   getInfo();
  // }, []);

  const handlerSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchTerm}`
    );

    const { data } = await response.json();

    setData(data);
  };
  console.log(data);

  return (
    <Container>
      <Row>
        <Col xs={10} md={8} className="mx-auto">
          <Form onSubmit={handlerSubmit}>
            <Form.Control
              type="text"
              value={searchTerm}
              placeholder="Enter the song want"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handLerInput(e.target.value)
              }
            />
          </Form>
        </Col>

        <Col xs={10} md={8} className="mx-auto mt-5">
          <Row>
            {data.map((track) => (
              <Col xs={10} md={4}>
                <Card>
                  <Card.Img variant="top" src={track.album.cover_medium} />
                  <Card.Body>
                    <Card.Title>{track.title}</Card.Title>
                    <Card.Text>{track.artist.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
      </Row>
    </Container>
  );
}

export default Home;
