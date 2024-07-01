import React from 'react';
import '../css/Footer.css';
import { CiDumbbell } from "react-icons/ci";
const Footer = () => {
   return (
    <div id='footer'>
          <div className='navbar_logo'>
            <CiDumbbell size={35} color="blue" className='icon_logo' />
            <h2>BRAND</h2>
        </div>
         <p>이 사이트는 상업적용도가 아닌 포트폴리오용으로 제작되었습니다</p>
        <ul>
            <li>이름: 송성민</li>
            <li>전화번호: 010-4046-6645</li>
            <li>이메일: ss205106@gmail.com</li>
        </ul>

    </div>
);
};
export default Footer;