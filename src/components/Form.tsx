/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { createContext, useCallback, useState } from "react"
import { IContextProps, IFormValue } from "../interfaces";



export const FormContext = createContext({} as IContextProps); 

interface IFormProps {
    children: JSX.Element | JSX.Element[];
    buttonTitle: string;
    initialState: IFormValue;
    sendData: (data:IFormValue) => void;
}


const Form: React.FC<IFormProps> = ({children, buttonTitle, initialState, sendData}: IFormProps): React.ReactElement => {

    const [form, setForm] = useState<IFormValue>(initialState);
    const handleFormChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        const {value, id} = e.currentTarget; 
        setForm({...form, [id]: value})
    }, [form])

    const handleSendData = () => {
        if(!form.password || !form.username || !form.email) {
            return
        }
        sendData(form)
    }
    

    return (
        <div className="main-form">
        <FormContext.Provider value={{
            form,
            handleFormChange
        }}>
            {children}
        </FormContext.Provider>
        <div className="main-form__forgotps">
            <a href="#">Forgot password?</a>
        </div>
        <div className="main-form__send">
            <button type="button" onClick={handleSendData} className="btn btn-active btn-large">{buttonTitle}</button>
        </div>      
        </div>
    )
}

export default React.memo(Form);