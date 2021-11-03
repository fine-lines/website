/*!

=========================================================
* BLK Design System PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {Card, CardBody, CardFooter } from "reactstrap";
// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// Sections for this page
// (we've divided this page into multiple react components to make it a bit more readable)
import Basic from "./IndexSections/Basic.js";
import Navbars from "./IndexSections/Navbars.js";
import Tabs from "./IndexSections/Tabs.js";
import Pills from "./IndexSections/Pills.js";
import Pagination from "./IndexSections/Pagination.js";
import Notifications from "./IndexSections/Notifications.js";
import PreFooter from "./IndexSections/PreFooter.js";
import Footers from "./IndexSections/Footers.js";
import Typography from "./IndexSections/Typography.js";
import ContentAreas from "./IndexSections/ContentAreas.js";
import Cards from "./IndexSections/Cards.js";
import PlainCards from "./IndexSections/PlainCards.js";
import JavaScript from "./IndexSections/JavaScript.js";
import NucleoIcons from "./IndexSections/NucleoIcons.js";

export default function Index() {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("index-page");
    return function cleanup() {
      document.body.classList.remove("index-page");
    };
  }, []);
  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <IndexHeader />
        <div className="main">
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
        </div>
        <DemoFooter />
      </div>
    </>
  );
}
