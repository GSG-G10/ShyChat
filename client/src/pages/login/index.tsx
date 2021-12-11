import React from "react";
import Img from "../../components/common/Img";
import { LoginForm } from "./LoginForm";
import signup from "../../util/images/signup.jpg";
import  "../signUp/style.css";
const Login: React.FC = () => {
  return (
    <div className='page'>
      <div className='signUpContainer'>
        <div className='imageContainer'>
          <Img src='https://img.freepik.com/free-vector/boy-girl-as-couple-chat-each-other-with-bubble-words_10045-282.jpg?size=338&ext=jpg' alt="image-chat" styleName='image' />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
