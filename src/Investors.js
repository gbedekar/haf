import Form from './components/Form';
import PlainText from './components/plainText';
import TextField from './components/TextField';
import { useState,useEffect } from "react";
import {mappings} from '@aemforms/af-react-components'
import { AdaptiveForm } from "@aemforms/af-react-renderer";



export default function Investors(){
    const [selectedForm, setForm] = useState("");
    const extendMappings = {
        'plain-text' : PlainText,
        'text-input' : TextField,
        'form': Form
      };
      const getForm = async () => {
        
        const SUFFIX = "jcr:content/guideContainer.model.json";
        const formPath="/content/forms/af/firstheadless/";
        //const formAPI = {formPath}/{SUFFIX};
        //console.log(formAPI);
        const resp = await fetch('/content/forms/af/registrationform/jcr:content/guideContainer.model.json');
        let formJSON = await resp.json();
        console.log(formJSON);
        setForm(formJSON)
      }
      useEffect( ()=>{
        getForm()
        

    },[]);
    return(
        
        <div>
            <h1>This is for investors</h1>
            <AdaptiveForm mappings={extendMappings} formJson={selectedForm}/>
        </div>
    )
}