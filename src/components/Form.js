import React, {useContext} from 'react';
import { useRuleEngine, renderChildren, FormContext } from '@aemforms/af-react-renderer';
const Form = function (fieldset) {
  const context = useContext(FormContext);
  const [props, handlers] = useRuleEngine(fieldset);
  return (
    <form>
      {props?.label?.value ?<h2>{props.label.value}</h2> : null}
      {renderChildren(props, context.mappings, context.modelId, handlers)}
    </form>
  );
};
export default Form;
