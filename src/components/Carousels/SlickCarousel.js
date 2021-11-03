import React from "react";
import Slick from "react-slick";

import { Row, Col, Button } from "reactstrap";

// custom previous button for the slick component
const PrevButton = props => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-prev slick-arrow"
      color="primary"
      aria-label="Previous"
      type="button"
      onClick={props.onClick}
    >
      <i className="tim-icons icon-minimal-left" />
    </Button>
  );
};

// custom next button for the slick component
const NextButton = props => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-next slick-arrow"
      color="primary"
      aria-label="Next"
      type="button"
    >
      <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
    </Button>
  );
};

let slickSettings = {
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  className: "slider col-md-8 ml-auto mr-auto",
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 2,
  slidesToScroll: 1
}

class SlickCarousel extends React.Component {
  render() {
    return (
      <>
      <Row>
        <Col md="12">
          <section className="light slider" />
          <Slick {...slickSettings}>
            <div>
              <img
                alt="..."
                src={require("assets/img/04_phil-forbes.png").default}
                width="768"
              />
            </div>
            <div>
              <img
                alt="..."
                src={require("assets/img/05_phil-forbes.png").default}
                width="768"
              />
            </div>
            <div>
              <img
                alt="..."
                src={require("assets/img/06_phil-forbes.png").default}
                width="768"
              />
            </div>
            <div>
              <img
                alt="..."
                src={require("assets/img/07_phil-forbes.png").default}
                width="768"
              />
            </div>
            <div>
              <img
                alt="..."
                src={require("assets/img/08_phil-forbes.png").default}
                width="768"
              />
            </div>
          </Slick>
        </Col>
      </Row>
      </>
    );
  }
}

export default SlickCarousel;