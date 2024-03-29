import React from "react";
import changeTheme from '../theme';
import '../images/changetheme.webp';
import '../images/avatar.webp';
import '../images/github.webp';
import '../images/linkedin.webp';

function Avatar() {
  return (
    <div className='avatar-section'>
        <img className='avatar' alt="avatar" src="../images/avatar.webp" width={'160px'} height={'160px'}/>
        <div className='icons'>
          <a href="https://github.com/21fernandinhow" target="_blank" rel="noopener noreferrer"><img className='icon' alt="github" src="../images/github.webp" width={'25px'} height={'25px'}/></a>
          <a href="https://www.linkedin.com/in/fernando-carvalho-6005b024b/" target="_blank" rel="noopener noreferrer"><img className='icon' alt="linkedin" src="../images/linkedin.webp" width={'25px'} height={'25px'}/></a>
          <img onClick={changeTheme} className='btn-theme' alt="change-theme" src="../images/changetheme.webp" width={'90px'} height={'51px'}/>
        </div>
    </div>
  );
};

export default Avatar;