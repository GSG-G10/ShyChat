import React from "react";
import Img from "../../components/common/Img";
import { VerifyForm } from "./VerifyForm";
import  "../signUp/style.css";

const Verify: React.FC = () => (
  <div className='page'>
    <div className='signUpContainer'>
      <div className='imageContainer'>
        <Img src='https://img.freepik.com/vetores-gratis/pessoas-falando-ilustracao-do-personagem-conceito-de-trabalho-em-equipe-entrevista-de-emprego_101484-28.jpg?size=626&ext=jpg' alt="image-chat" styleName='image' />
      </div>
      <VerifyForm />
    </div>
  </div>
);

export default Verify;
