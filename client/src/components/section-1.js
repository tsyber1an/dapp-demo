import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default () => {
  return (
    <section className="s1">
      <Container>
        <Row>
          <Col md="12" className="text-center s1-intro">
            <h1>Title</h1>
            <h3>subtitle</h3>
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">
            <img
              className="s1-avatar"
            />
            <h3>introducing whatsup</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <a href="">read more</a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
