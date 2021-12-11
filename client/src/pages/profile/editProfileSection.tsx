import React from 'react'
import './style.css';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { Input } from '../../components/common/Input';
interface EditProfileSectionProps {
  name: string,
  phoneNumber: string,
  bio: string,
  handleBioChang?: React.ChangeEventHandler<HTMLInputElement>,
  changeHandler: React.ChangeEventHandler<HTMLInputElement>,
  handleSubmit: React.FormEventHandler<HTMLButtonElement>
  image: string
}

export const EditProfileSection: React.FC<EditProfileSectionProps> = ({
  name,
  phoneNumber,
  bio,
  handleBioChang,
  changeHandler,
  handleSubmit,
  image
}) => {
  return (
    <div className='editProfileSection'>
      <nav className='profileNav'>
        <Link to='/'>
        <ArrowBackIcon />
        </Link>
        <h3 className='profileTitle'>Profile</h3>
      </nav>
      <div className='userInfoSection'>
        <div className='profileImgContainer'>
          <img alt={`${name} profile`} src={image} className='profileImg' />
          <label htmlFor="User Image" className='imageInputLabel'><ModeEditOutlineIcon /></label>
        </div>
        <div className='userInformation'>
          <Input name={name} value={name} type='text' label='Name' disabled={true} styleName='divStyle' labelStyle='labelStyle' inputStyle='inputStyle' />
          <Input name={phoneNumber} value={phoneNumber} type='text' label='Phone Number' disabled={true} styleName='divStyle' labelStyle='labelStyle' inputStyle='inputStyle' />
          <Input onChange={handleBioChang} name={bio}  type='text' label='Bio' styleName='divStyle' labelStyle='labelStyle' inputStyle='inputStyle' />
        </div>
        <div className='divStyle'>
          <input
            onChange={changeHandler}
            name="User Image"
            id="User Image"
            type='file'
            className='imageInput'
          />
        </div>
        <button className='updateButton' onClick={handleSubmit}>Update Profile</button>
      </div>
    </div>
  );
}