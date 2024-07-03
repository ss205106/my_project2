import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import "../css/Header.css";
import { CiDumbbell } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import {set_user} from "../modules/user"
// import { logout } from '../modules/user';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {user} = useSelector(state =>({
        user:state.user.user
    }))
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    // console.log(user)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        const handleResize = () => {
            if (menuOpen && window.innerWidth > 625) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [menuOpen]);
    
    const Logoutclick = useCallback(()=>{
        if(window.confirm("로그아웃하시겠씁니까?")){
            //koa서버로 연결했으나 배포문제로 사용안함
            // dispatch(logout())
            dispatch(set_user(""))
            navigate("/store")
        }
    },[navigate,dispatch])
    
    return (
        <nav className='navbar'>
        <div className='navbar_logo'>
            <CiDumbbell size={35} color="blue" className='icon_logo' />
            <h2>BRAND</h2>
        </div>
            <ul id='navbar_menu' className={menuOpen ? 'open' : ''}>
                <li><Link to="/store" >store</Link></li>
                <li><Link to="/Community">커뮤니티 & 구매후기</Link></li>
            </ul>
            
            {user  ? (
            <ul id='navbar_menu2' className={menuOpen ? 'open' : ''}>
                <li>  <Link to="#">{user.username}  님</Link></li>
                <li><Link to="/store" onClick={Logoutclick}>로그아웃</Link></li>
                <li><Link to="/mypage">마이페이지</Link></li>
                <li><Link to="/">메인으로</Link></li>
            </ul>):
           (<ul id='navbar_menu2' className={menuOpen ? 'open' : ''}>
                <li><Link to="/login">로그인</Link></li>
                <li><Link to="/register">회원가입</Link></li>
                <li><Link to="/mypage">마이페이지</Link></li>
                <li><Link to="/">메인으로</Link></li>
            </ul>)}
            <GiHamburgerMenu id='icon_hamburger' onClick={toggleMenu}/>
    </nav>
    );
};

export default Header;