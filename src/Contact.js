import React, { Component } from "react";
import json from './forms/registration-form.json';
import Form from './components/Form';
import PlainText from './components/plainText';
import TextField from './components/TextField';
import {mappings} from '@aemforms/af-react-components'
import { AdaptiveForm } from "@aemforms/af-react-renderer";


const extendMappings = {
  'plain-text' : PlainText,
  'text-input' : TextField,
  'form': Form
};


class Contact extends Component {
  
  
  
  render() {
    return (
      <div>
        <AdaptiveForm mappings={extendMappings} formJson={json}/>
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
      </div>
    );
  }
}
 
export default Contact;