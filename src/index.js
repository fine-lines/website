import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.2.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

import Index from "views/Index.js";
import BlogPost from "views/Blog.js";


ReactDOM.render(
  <BrowserRouter>
    <Route path="/index" render={(props) => <Index {...props} />} />
    <Route path="/blog-post" render={(props) => <BlogPost {...props} />} />
    <Redirect from={`/`} to="/blog-post" />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
