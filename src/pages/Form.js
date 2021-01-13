import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FormProvider } from "../components/Validation"
import Field from '../components/Validation';

const Form = ({data, setData, onChange, onInsert}) => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    (location.state) ? setData({...data, ...location.state}) : setData({...data});
  }, []);

  return <>
    <FormProvider>
      <Field  
        Element="input"
        value={data.title}
        label="title"
        name="title"
        feedback="Please enter a title"
        placeholder="Please enter a title."
        validation={value => Boolean(value.length > 1)}
        onChange={onChange}
      />
      <Field  
        Element="textarea"
        value={data.content}
        label="content"
        name="content"
        feedback="Please enter a content"
        placeholder="Please enter a content."
        validation={value => Boolean(value.length > 1)}
        onChange={onChange}
        style={{height: 200}}
      />
    </FormProvider>
    <div className="flex justify-center mb-3">
      <button 
        onClick={_=> history.push('/')}
        className="flex-1 py-3 px-4 text-base font-mono font-bold uppercase rounded-md text-gray-400 hover:text-gray-600 bg-neumo shadow-neumo hover:shadow-neumo-active focus:outline-none"
      > cancel </button>
      <button 
        onClick={_=> onInsert(data.id)}
        className="flex-1 py-3 px-4 ml-5 text-base font-mono font-bold uppercase rounded-md text-gray-400 hover:text-gray-600 bg-neumo shadow-neumo hover:shadow-neumo-active focus:outline-none"
      > save </button>
    </div>
  </>
}

export default Form;