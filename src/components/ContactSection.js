import React from "react";
import classnames from "classnames";

// reactstrap components
import {
    Badge,
    Button,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
  } from "reactstrap";

export default function ContactSection() {
  const [firstNameFocus, setFirstNameFocus] = React.useState(undefined);
  const [lastNameFocus, setLastNameFocus] = React.useState(undefined);
  const [emailFocus, setEmailFocus] = React.useState(undefined);
  return (
    <>
      <div className="section">
        <Container fluid>
            <Row className="infos mb-5">
              <Col lg="3">
                <div className="info info-hover">
                  <div className="icon icon-primary">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={
                        require("assets/img/feature-blob/primary.png").default
                      }
                    />
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <h4 className="info-title">Address</h4>
                  <p className="description">12124 First Street, nr 54</p>
                </div>
              </Col>
              <Col lg="3">
                <div className="info info-hover">
                  <div className="icon icon-info">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/info.png").default}
                    />
                    <i className="tim-icons icon-email-85" />
                  </div>
                  <h4 className="info-title">Email</h4>
                  <p className="description">support@youremail.com</p>
                </div>
              </Col>
              <Col lg="3">
                <div className="info info-hover">
                  <div className="icon icon-warning">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={
                        require("assets/img/feature-blob/warning.png").default
                      }
                    />
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <h4 className="info-title">Phone Number</h4>
                  <p className="description">+1(424) 535 3523</p>
                </div>
              </Col>
              <Col lg="3">
                <div className="info info-hover">
                  <div className="icon icon-success">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={
                        require("assets/img/feature-blob/success.png").default
                      }
                    />
                    <i className="tim-icons icon-single-02" />
                  </div>
                  <h4 className="info-title">Contact</h4>
                  <p className="description">Andrew Samian</p>
                </div>
              </Col>
            </Row>
            <Row className="mt-5 mb-4 pt-5">
              <Col className="ml-auto mr-auto text-center mt-5" md="8">
                <Badge color="info">Leave a message</Badge>
                <h1 className="title">
                  Tell us more about <b>yourself</b>
                </h1>
                <h4 className="desc">
                  Whether you have questions or you would just like to say
                  hello, contact us.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className="mx-auto" md="10">
                <Form
                  className="p-3"
                  id="contact-form-1"
                  method="post"
                  role="form"
                >
                  <CardBody>
                    <Row>
                      <Col md="6">
                        <label>First name</label>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": firstNameFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            aria-label="First Name..."
                            placeholder="First Name..."
                            type="text"
                            onFocus={(e) => setFirstNameFocus(true)}
                            onBlur={(e) => setFirstNameFocus(false)}
                          />
                        </InputGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label>Last name</label>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": lastNameFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-caps-small" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="Last Name..."
                              placeholder="Last Name..."
                              type="text"
                              onFocus={(e) => setLastNameFocus(true)}
                              onBlur={(e) => setLastNameFocus(false)}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <label>Email address</label>
                      <InputGroup
                        className={classnames({
                          "input-group-focus": emailFocus,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email Here..."
                          type="text"
                          onFocus={(e) => setEmailFocus(true)}
                          onBlur={(e) => setEmailFocus(false)}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <label>Your message</label>
                      <Input
                        id="message-1"
                        name="message"
                        rows="6"
                        type="textarea"
                      />
                    </FormGroup>
                    <Row>
                      <Col className="ml-auto" md="6">
                        <Button
                          className="btn-round pull-right"
                          color="primary"
                        >
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
    </>
  );
}