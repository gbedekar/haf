import React,{Component} from "react";

import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import json from './forms/registration-form.json';
import Form from './components/Form';
import PlainText from './components/plainText';
import TextField from './components/TextField';
const extendMappings = {
  'plain-text' : PlainText,
  'text-input' : TextField,
  'form': Form
};
 
ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);