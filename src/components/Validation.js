import { createContext, useState } from "react"

const FormContext = createContext();
export const FormProvider = ({...props}) => {
  const [state, setState] = useState({});
  return <FormContext.Provider {...props} value={{
    state,
    setState: value => setState(Object.assign(state, value))
  }} />
}

export const withFormValidation = Component => props => {
  const [isValid, setIsValie] = useState(false);
  return <FormContext.Consumer>
    {({setState}) => {
      const validation = props.validation 
      ? (value) => {
        const getValid = props.validation(value);
        setState({[props.name] : getValid ? getValid : false});
        return getValid;
      }
      : () => true;
      
      return <Component {...props}
        isValid={isValid}
        setIsValid={setIsValie}
        validation={validation}
      />
    }}
  </FormContext.Consumer>
}

const Field = ({Element, label, name, feedback, placeholder, isValid, setIsValid, validation, ...props}) => {
  return <div className="mb-7">
    {/* <label htmlFor={label} className="block text-base font-bold text-gray-700 uppercase">{label}</label> */}
    <div className="mt-3 relative rounded-md shadow-sm">
      <Element
        {...props}
        type="text"
        id={name}
        name={name}
        onBlur={({target}) => setIsValid(!validation(target.value))}
        placeholder={placeholder}
        className="block w-full px-5 py-4 text-sm font-square rounded-md shadow-neumo-active bg-neumo focus:outline-none"
      />
    </div>
    {isValid && <div className="mt-1">
      <svg className="inline-block w-5 h-5 text-sm text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      <span className="pl-2 text-sm text-gray-600">{feedback}</span>
    </div>}
  </div>
}

export default withFormValidation(Field);