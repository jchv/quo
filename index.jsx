require("bootstrap/dist/css/bootstrap.css");
require("./index.css");

import React from "react";
import { render } from "react-dom";

import Page from "./components/page";

const app = document.createElement("div");
document.body.appendChild(app);
render(<Page />, app);
