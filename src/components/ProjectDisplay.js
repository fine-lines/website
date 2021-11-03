import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function ProjectDisplay() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <div className="cd-section" id="projects">
        <div className="projects-2 project-raised">
            <Container>
                <Row>
                    <Col className="ml-auto mr-auto text-center mb-5" lg="8">
                    <h2 className="title">Some of Our Awesome Products - 2</h2>
                    <div className="section-space" />
                    </Col>
                </Row>
                <Nav
                    className="nav-pills-info nav-pills-icons nav-pills-lg"
                    pills
                    role="tablist"
                >
                    <NavItem className="m-auto">
                    <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                        toggle("1");
                        }}
                    >
                        <i className="tim-icons icon-spaceship" />
                        Project 1
                    </NavLink>
                    </NavItem>
                    <NavItem className="m-auto">
                    <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                        toggle("2");
                        }}
                    >
                        <i className="tim-icons icon-bag-16" />
                        Project 2
                    </NavLink>
                    </NavItem>
                    <NavItem className="m-auto">
                    <NavLink
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => {
                        toggle("3");
                        }}
                    >
                        <i className="tim-icons icon-light-3" />
                        Project 3
                    </NavLink>
                    </NavItem>
                    <NavItem className="m-auto">
                    <NavLink
                        className={activeTab === "4" ? "active" : ""}
                        onClick={() => {
                        toggle("4");
                        }}
                    >
                        <i className="tim-icons icon-molecule-40" />
                        Project 4
                    </NavLink>
                    </NavItem>
                    <NavItem className="mx-auto">
                    <NavLink
                        className={activeTab === "5" ? "active" : ""}
                        onClick={() => {
                        toggle("5");
                        }}
                    >
                        <i className="tim-icons icon-planet" />
                        Project 5
                    </NavLink>
                    </NavItem>
                </Nav>
                <TabContent className="tab-space" activeTab={"project" + activeTab}>
                    <TabPane tabId="project1">
                    <Row className="mt-5">
                        <Col md="4">
                        <Card>
                            <div className="card-image h-100">
                            <img
                                alt="..."
                                className="img rounded"
                                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/main/material-kit-react/material-kit-react.jpeg"
                            />
                            </div>
                            <CardBody className="text-left">
                            <CardFooter className="mt-0">
                                <div className="stats stats-right">
                                <div className="stars text-warning">
                                    <i className="tim-icons icon-shape-star" />
                                    <i className="tim-icons icon-shape-star ml-1" />
                                    <i className="tim-icons icon-shape-star ml-1" />
                                    <i className="tim-icons icon-shape-star ml-1" />
                                    <i className="tim-icons icon-shape-star ml-1" />
                                </div>
                                </div>
                                <div className="author">
                                <img
                                    alt="..."
                                    className="avatar img-raised"
                                    src={require("assets/img/Tim.png").default}
                                />
                                <span className="ml-1">Material Kit React</span>
                                </div>
                            </CardFooter>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col md="4">
                        <Card>
                            <div className="card-image h-100">
                            <img
                                alt="..."
                                className="img rounded"
                                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/main/black-dashboard-react/black-dashboard-react.jpg"
                            />
                            </div>
                                <CardBody className="text-left">
                                    <CardFooter className="mt-0">
                                        <div className="stats stats-right">
                                        <i className="tim-icons icon-heart-2 text-danger" />{" "}
                                        342 ·{" "}
                                        <i className="tim-icons icon-single-copy-04 text-info" />{" "}
                                        43
                                        </div>
                                        <div className="author">
                                        <img
                                            alt="..."
                                            className="avatar img-raised"
                                            src={require("assets/img/Tim.png").default}
                                        />
                                        <span className="ml-1">Black Dashboard React</span>
                                        </div>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card>
                                <div className="card-image h-100">
                                <img
                                    alt="..."
                                    className="img rounded"
                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/main/argon-dashboard-pro-react/argon-dashboard-pro-react.jpg"
                                />
                                </div>
                                <CardBody className="text-left">
                                <CardFooter className="mt-0">
                                    <div className="stats stats-right">
                                    <i className="tim-icons icon-heart-2 text-danger" />{" "}
                                    127
                                    </div>
                                    <div className="author">
                                    <img
                                        alt="..."
                                        className="avatar img-raised"
                                        src={require("assets/img/Tim.png").default}
                                    />
                                    <span className="ml-1">
                                        Argon Dashboard Pro React
                                    </span>
                                    </div>
                                </CardFooter>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="project2">
                    <div className="space-100" />
                    <Col className="ml-auto mr-auto text-center mt-4" md="8">
                        <p className="description mb-5">
                        Add your information here for Project2.
                        </p>
                    </Col>
                    <div className="space-100" />
                </TabPane>
                <TabPane tabId="project3">
                    <div className="space-100" />
                    <Col className="ml-auto mr-auto text-center mt-4" md="8">
                        <p className="description mb-5">
                        Add your information here for Project3.
                        </p>
                    </Col>
                    <div className="space-100" />
                </TabPane>
                <TabPane tabId="project4">
                    <div className="space-100" />
                    <Col className="ml-auto mr-auto text-center mt-4" md="8">
                        <p className="description mb-5">
                        Add your information here for Project4.
                        </p>
                    </Col>
                    <div className="space-100" />
                </TabPane>
                <TabPane tabId="project5">
                    <div className="space-100" />
                    <Col className="ml-auto mr-auto text-center mt-4" md="8">
                        <p className="description mb-5">
                        Add your information here for Project5.
                        </p>
                    </Col>
                    <div className="space-100" />
                </TabPane>
            </TabContent>
            <Row>
                <Col className="ml-auto mr-auto text-center mt-4" md="8">
                    <h3 className="title">Interested in our projects?</h3>
                    <h4 className="description mb-5">
                        This is the paragraph where you can write more details about
                        your projects. Keep you user engaged by providing meaningful
                        information.
                    </h4>
                    <Button color="primary" size="lg">
                        Contact us
                    </Button>
                </Col>
            </Row>
        </Container>
      </div>
    </div>{" "}
  </>
  );
}