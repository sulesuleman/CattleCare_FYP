import { Container, Row } from "react-bootstrap";
import { GreenUnderline } from "../../../../globalComponents";
import { greyishWhiteColor } from "../../../../globalStyles/globalStyle";
import ServiceCard from "../ServiceCard";
import "./index.css";

const ServiceSection = () => {
  return (
    <section
      className="service_section_container"
      style={{ backgroundColor: greyishWhiteColor }}
    >
      <Container className="d-flex flex-column align-items-center">
        <p className="subHeading">What we Offer</p>
        <h1 className="heading mt-2 mb-3">Services We Offer</h1>
        <GreenUnderline />
        <Row className="mt-3 gy-5">
          <ServiceCard
            imgSrc={
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80"
            }
          />
           <ServiceCard
            imgSrc={
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80"
            }
          />
           <ServiceCard
            imgSrc={
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80"
            }
          />
        </Row>
      </Container>
    </section>
  );
};

export default ServiceSection;
