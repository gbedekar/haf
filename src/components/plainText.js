import React, {useContext} from 'react';
import { useRuleEngine, renderChildren, FormContext } from '@aemforms/af-react-renderer';
const PlainText = function (fieldset) {
  const context = useContext(FormContext);
  const [props, handlers] = useRuleEngine(fieldset);
  return (<div>{props.value}</div>);
};
export default PlainText;