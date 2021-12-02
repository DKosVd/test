import api from "../api/api";
import { IFormValue } from "../interfaces";
import Form from "./Form";
import FormInput from "./FormInput";


const Login = () => {

    const sendData = (data:IFormValue) => {
      api.login(data)
    }

    return (
        <Form sendData={sendData} buttonTitle={"Login"} initialState={
            {
              username: '',
              password: ''
            }
          }>
              <FormInput label={"User name"} id={"username"} placeholder={"Enter your User name"} isRequired={true} type={'text'}/>
              <FormInput label={"Password"} id={"password"} placeholder={"Enter your Password"} isRequired={true} type={'password'}/>
          </Form>
    );
}

export default Login;