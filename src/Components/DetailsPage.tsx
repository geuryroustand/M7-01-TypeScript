import React, { useEffect, useState } from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { TrackDetail } from "../typing/index";

interface IdParams {
  id: string;
}
export const DetailsPage = () => {
  const id = parseInt(useParams<IdParams>().id);
  console.log(id);

  const [trackDetails, setTrackDetails] = useState<TrackDetail | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/track/${id}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        setTrackDetails(data);
      }
    })();
  }, []);

  return trackDetails ? (
    <Container>
      <Row>
        <Col xs={10}>
          <Image fluid src={trackDetails.album.cover_big} />
          <h4>{trackDetails.title}</h4>
          <h6>{trackDetails.artist.name}</h6>
        </Col>
      </Row>
    </Container>
  ) : null;
  // return trackDetails ? (
  //   <Container>
  //     <Row>
  //       <Image fluid src={trackDetails.album.cover_big} />
  //       <h4>{trackDetails.title}</h4>
  //       <h6>{trackDetails.artist}</h6>
  //     </Row>
  //   </Container>
  // ) : null;
};
