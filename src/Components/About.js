import img from "./images/bhushan_2.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <section id="about" class="about background-alt">
      <Container data-aos="fade-up">
        <div class="section-title">
          <h2>About me</h2>
        </div>

        <Row>
          <Col lg={4} className="d-flex justify-content-center">
            <img
              src={img}
              height="100%"
              width="50%"
              style={{ borderRadius: "50%" }}
            />
          </Col>
          <Col lg={8} pt={4} className="content">
            <br></br>
            <h3>DevOps Engineer.</h3>
            <br></br>
            <p style={{ color: "#728394" }}>
              I'm a DevOps Engineer, enthusiastic and passionate about Cloud technologies.
            </p>
            <br></br>
            <p style={{ color: "#728394" }}>
              Always motivated to generate value 
              for digital products within software development world.    
            </p>
            <br></br>
            <Row>
              <Col lg={4}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Phone:</strong>{" "}
                    <span>+57 3137309551</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                    <span>Cali, Colombia</span>
                  </li>
                </ul>
              </Col>
              <Col lg={7}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Degree:</strong>{" "}
                    <span>Electronic Engineer</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Email:</strong>{" "}
                    <span>
                      <a href="mailto:manveira159@gmail.com">
                        manveira159@gmail.com
                      </a>
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
