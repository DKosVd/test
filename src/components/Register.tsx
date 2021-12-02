import api from "../api/api";
import { IFormValue } from "../interfaces";
import Form from "./Form";
import FormInput from "./FormInput";


const Register = () => {

    const sendData = (data:IFormValue) => {
      api.register(data)
    }


    return (
        <Form sendData={sendData} buttonTitle={"Register"} initialState={
            {
              username: '',
              password: '',
              email: ''
            }
          }>
              <FormInput label={"User name"} id={"username"} placeholder={"Enter your User name"} isRequired={true} type={'text'}/>
              <FormInput label={"Email"} id={"email"} placeholder={"Enter your Email"} isRequired={true} type={'email'}/>
              <FormInput label={"Password"} id={"password"} placeholder={"Enter your Password"} isRequired={true} type={'password'}/>
          </Form>
    );
}

export default Register;