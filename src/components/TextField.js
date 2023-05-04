import React from 'react';
import { useRuleEngine } from '@aemforms/af-react-renderer';

const TextField = (fieldset) => {
  const [props, handlers] = useRuleEngine(fieldset);

  const {
    id, value, label, required, readOnly = false, placeholder, description,
    valid, errorMessage, minLength, maxLength, enabled
  } = props;
  
  const validateState = valid === false ? 'invalid' : 'valid';
  const error = validateState === 'invalid';

  const handleChange = (event) => {
    const thisVal = event?.target?.value;
    handlers.dispatchChange(thisVal);
  };

  const handleBlur = (event) => {
    handlers.dispatchBlur(event?.target?.value);
  };

  const handleFocus = () => {
    handlers.dispatchFocus();
  };

  return (
    <div>
      <div className="cmp-adaptiveform-textinput">
        {label?.visible && <label className="cmp-adaptiveform-textinput__label" htmlFor={id}>{label?.value}</label>}
        <input
          type="text"
          className="cmp-adaptiveform-textinput__widget"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          required={required}
          placeholder={placeholder}
          readOnly={readOnly}
          minLength={minLength}
          maxLength={maxLength}
          disabled={!enabled}
        />
      </div>
      {error && <div className="cmp-adaptiveform-textinput__errormessage">{errorMessage}</div>}
      {description && !error && <div className="cmp-adaptiveform-textinput__shortdescription">{description}</div>}
    </div>
  );
};

export default TextField;
