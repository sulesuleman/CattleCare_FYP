import { Container, Row } from "react-bootstrap";
import { GreenUnderline } from "../../../../globalComponents";
import { greyishWhiteColor } from "../../../../globalStyles/globalStyle";
import ServiceCard from "../ServiceCard";
import COWCARE_IMG from "../../../../assets/images/CowCare.jpg";
import COWMONIORING_IMG from "../../../../assets/images/CowMonitoring.jpg";
import ECONOMIC_IMG from "../../../../assets/images/economic-growth.jpg";

import "./index.css";

const ServiceSection = () => {
  const services = [
    {
      heading: "Cow Care",
      description:
        "Enhance productivity and farm efficiency with all in one herd monitoring and management system",
      imgSrc: COWCARE_IMG,
    },
    {
      heading: "Health Monitoring",
      description:
        "Manage animal pharmacy record and get timely alerts for medicine retakes",
      imgSrc: COWMONIORING_IMG,
    },
    {
      heading: "Yield and Economy",
      description:
        "Record daily Milk production, revenue and expences of your farm",
      imgSrc: ECONOMIC_IMG,
    },
  ];

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
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceSection;
