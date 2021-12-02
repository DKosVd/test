import React, { useState, useContext } from "react";
import { FormContext } from "./Form";


interface IFormInput {
    type: string;
    label: string;
    id: string;
    placeholder: string;
    isRequired: boolean;
}


const FormInput: React.FC<IFormInput> = ({type, label, id, placeholder, isRequired}:IFormInput) : React.ReactElement => {
    const [isVisibility, setVisibility] = useState<boolean>(false);
    const isPassword = type === "password"
    const formContext = useContext(FormContext);
    const { form, handleFormChange} = formContext;
    
    const handleChangeVisibility = () => {
        setVisibility(!isVisibility);
    }

    return (
    <div className="main-form__elem">
        <label htmlFor={id}>{label}</label>
        <input className="custom-input" onChange={handleFormChange} id={id} value={form[id]} type={isPassword ? isVisibility ? "text" : type : type} placeholder={placeholder} required={isRequired}/>
        {type === "password" ?  <i className="btn-eye"><span onClick={handleChangeVisibility} className="material-icons">{isVisibility ? 'visibility': 'visibility_off'}</span></i> : null}
      </div>
    )
}

export default FormInput;