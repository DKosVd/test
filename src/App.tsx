import { useState } from 'react';
import './App.css'
import Login from './components/Login';
import Register from './components/Register';
import { CSSTransition } from 'react-transition-group';

function App() {
  const [isLogin, setLogin] = useState<boolean>(true);
  const handleSetLogin = () => {
    setLogin(true)
  }
  const handleSetRegister = () => {
    setLogin(false)
  }
  return (
    <div className="wrapper">
    <div className="main">
      <div className="main__picture main__elem">
        <div className="main__picture__description">
          <h2 className="main-title">Lorem ipsum is simply</h2>
          <p className="main-text">Lorem ipsum dolor simply</p>
        </div>
      </div>
      <div className="main__manipulation main__elem">
          <div className="main__switch">
            <h3 className="main__switch_title">Welcome to lorem..!</h3>
            <div className="main-switch">
              <button onClick={handleSetLogin} className={`btn ${isLogin ? 'btn-active': ''}`}>Login</button>
              <button onClick={handleSetRegister} className={`btn ${!isLogin ? 'btn-active': ''}`}>Register</button>
            </div>
          </div>
          <div className="main__form">
              <div className="main__form__text_block">
                <p className="main__form__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>     
              <CSSTransition 
                  in={isLogin}
                  timeout={500}
                  classNames="item">                    
              { isLogin ? <Login/> : <Register/> }    
                </CSSTransition> 
          </div>
      </div>
    </div>
    </div>
  );
}

export default App;
