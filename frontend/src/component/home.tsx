import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import { FaUser} from "react-icons/fa";


export default function Home() {
  
  return (
    <Container>
        <Row className="my-2 my-5  text-center">
          <Col lg={6}>
            <Card className="m-3 p-5 w-100 border-0">
              <Card.Header className=" border-left-primary">
                <h2>
                 Welcome to Medicee{" "}
                </h2>
              </Card.Header>
              <Card.Body>
                <Card.Text className="p-3">
                  <Button
                    variant="primary"
                  >
                    Sign Up
                  </Button>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Text className="p-3">
                  <Button
                    variant="primary"
                  >
                    Sign In
                  </Button>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Text className="p-3">
                  <Button
                    variant="primary"
                  >
                    Services
                  </Button>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Text className="p-3">
                  <Button
                    variant="primary"
                  >
                    About
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
  );
}
