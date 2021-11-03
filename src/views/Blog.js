import React from "react";
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Input,
  Media,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Panels from "components/Panels/Panels";
import Features from "components/Features/Social";
import SlickCarousel from "components/Carousels/SlickCarousel";

import background from "assets/img/02-01-anatomy.png";


export default function BlogPost() {
  const wrapper = React.useRef(null);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("blog-post");
    return function cleanup() {
      document.body.classList.remove("blog-post");
    };
  }, []);

  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="page-header header-filter">
          <div
            className="page-header-image"
            data-parallax={true}
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/qr-codes_orig.jpg").default +
                ")",
            }}
          />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h1 className="title">Crypto Concepts</h1>
                <h1>QR Codes Explained</h1>
                <div className="author">
                  <img
                    alt="..."
                    className="avatar img-raised"
                    src={require("assets/img/christian.jpg").default}
                  />
                </div>
                <h4 className="description">Paul Cooper</h4>
              </Col>
            </Row>
          </Container>
        </div>        
        <div className="section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h6 className="category">Oct 10, 2021</h6>
                <h3 className="title">
                  What is a QR Code?
                </h3>
                <p>
                  Short for `Quick Response code,` QR codes are square barcodes first developed in Japan.
                  Unlike traditional UPC barcodes, which are made up of a number of horizontal lines, a QR code can be
                  captured more quickly and can contain more information.
                </p>
                <br />
                <p>
                  QR codes are machine-readable labels — computers can understand them much more easily than they can
                  understand text. QR codes are used for everything from tracking products to identifying items — typical
                  tasks where they function as improved UPC barcodes.
                </p>
                <br />               
                <h3 className="title">What are the use cases?</h3>
                <p>
                  QR codes are used for a variety of purposes.
                  They can be used to provide links to websites and provide an easy way for people to go to a website without typing in the address.
                  They can also be used to provide telephone numbers, email addresses and other useful contact information.
                  A QR code can also hold control information, otherwise known as “actions”, such as dialing a phone, sending an instant message or tweet, updating status on social networks.
                  There are a lot of different possibilities with these codes.
                </p>
                <Features className="mt-1" />
              </Col>
            </Row>               
          </Container>         
        </div>     
        <div className="section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h3 className="title">Summary</h3>
                <p>
                  Packaging isn`t always exciting.
                  That`s why it`s so often overlooked.
                  And that, in turn, is a reason you should pay attention to your packaging design.
                </p>
                <br />
                <p>
                  Using a QR Code is a unique way that you can turn your packaging into more than just a box and create a genuine
                  unboxing experience around your product — one that fosters brand loyalty and makes your customer feel that they got a lot more than they bargained for!
                </p>
                <br />
                <Row>
                  <Col md="10">
                    <div className="blog-tags">
                      Tags: <Badge color="primary">Crypto</Badge>
                      <Badge color="primary" className="ml-1">
                        Payments
                      </Badge>
                      <Badge color="primary" className="ml-1">
                        Interactive
                      </Badge>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-comments">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h3 className="title text-center">Post your comment</h3>
                <Media className="media-post">
                  <a
                    className="pull-left author"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <div className="avatar">
                      <Media
                        alt="..."
                        className="img-raised"
                        src={require("assets/img/02-01-anatomy.png").default}
                      />
                    </div>
                  </a>
                  <Media body>
                    <Input
                      placeholder="Write a nice reply or go home..."
                      rows="4"
                      type="textarea"
                    />
                    <div className="media-footer">
                      <Button
                        className="pull-right"
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Reply
                      </Button>
                    </div>
                  </Media>
                </Media>
                {/* end media-post */}
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Col md="12">
              <h2 className="title text-center">Related Stories</h2>
              <br />
              <div className="blogs-1">
                <Row>
                  <Col className="ml-auto mr-auto" md="12">
                    <Card className="card-blog card-plain blog-horizontal">
                      <Row>
                        <Col lg="4">
                          <div className="card-image">
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                className="img rounded"
                                src={
                                  require("assets/img/02-01-anatomy.png").default
                                }
                              />
                            </a>
                          </div>
                        </Col>
                        <Col lg="8">
                          <CardBody>
                            <CardTitle tag="h3">
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                MateLabs mixes machine learning with IFTTT
                              </a>
                            </CardTitle>
                            <p className="card-description">
                              If you’ve ever wanted to train a machine learning
                              model and integrate it with IFTTT, you now can
                              with a new offering from MateLabs. MateVerse, a
                              platform where novices can spin out machine...If
                              you’ve ever wanted to train a machine learning
                              model and integrate it with IFTTT, you now can
                              with a new offering from MateLabs. MateVerse, a
                              platform where novices can spin out machine...{" "}
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Read More
                              </a>
                            </p>
                            <div className="author">
                              <img
                                alt="..."
                                className="avatar img-raised"
                                src={require("assets/img/02-01-anatomy.png").default}
                              />
                              <div className="text">
                                <span className="name">Tom Hanks</span>
                                <div className="meta">Drawn on 23 Jan</div>
                              </div>
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                    <Card className="card-blog card-plain blog-horizontal">
                      <Row>
                        <Col lg="4">
                          <div className="card-image">
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                className="img rounded"
                                src={
                                  require("assets/img/02-01-anatomy.png")
                                    .default
                                }
                              />
                            </a>
                          </div>
                        </Col>
                        <Col lg="8">
                          <CardBody>
                            <CardTitle tag="h3">
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                US venture investment ticks up in Q2 2017
                              </a>
                            </CardTitle>
                            <p className="card-description">
                              Venture investment in U.S. startups rose
                              sequentially in the second quarter of 2017,
                              boosted by large, late-stage financings and a few
                              outsized early-stage rounds in tech and
                              healthcare..enture investment in U.S. startups
                              rose sequentially in the second quarter of 2017,
                              boosted by large, late-stage financings and a few
                              outsized early-stage rounds in tech and
                              healthcare..{" "}
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Read More
                              </a>
                            </p>
                            <div className="author">
                              <img
                                alt="..."
                                className="avatar img-raised"
                                src={require("assets/img/02-01-anatomy.png").default}
                              />
                              <div className="text">
                                <span className="name">Tom Hanks</span>
                                <div className="meta">Drawn on 23 Jan</div>
                              </div>
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}
