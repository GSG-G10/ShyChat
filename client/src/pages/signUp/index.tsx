import React from "react";
import Img from "../../components/common/Img";
import { SignUpForm } from "./SignUpForm";
import "./style.css";

export const SignUp: React.FC = () => {
  return (
    <div className='page'>
    <div className='signUpContainer'>
      <div className='imageContainer'>
        <Img src='https://img.freepik.com/vetores-gratis/pessoas-falando-ilustracao-do-personagem-conceito-de-trabalho-em-equipe-entrevista-de-emprego_101484-28.jpg?size=626&ext=jpg' alt="image-chat" styleName='image' />
      </div>
        <SignUpForm />
    </div>
    </div>
  );
};
