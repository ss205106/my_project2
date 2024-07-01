import React, { useEffect, useState } from 'react';
import Template from '../component/auth/Template';
import Form from '../component/auth/Form';
import { change_mode } from '../modules/authRedux';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../common/Header';
// import { Login } from '../modules/authRedux';
import { set_user } from '../modules/user';
import { Login } from '../modules/authRedux';
import Footer from '../common/Footer';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { check } from '../modules/user';
const PageContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;
const LoginPage = () => {
    
    const {login,authError,auth,user} = useSelector(state => ({
        login:state.authRedux.login,
        authError:state.authRedux.authError,
        auth:state.authRedux.auth,
        user:state.user.user
    }))
    const [error,setError] = useState(null)

    const navigate = useNavigate();
    const dispatch = useDispatch()
    
    const onchange=(e)=>{
        const { name, value } = e.target;
        dispatch(change_mode("login", name, value));
    }
    
    const login_click = (e)=>{
        e.preventDefault()
        //koa서버에 연결했지만 배포문제로 사용안함
        const {username,password}=login;
        // dispatch(Login(username,password))
        dispatch(set_user({username,password})) 
        navigate("/store")
    }
    
    // koa서버로 연결했지만 배포문제로 사용안함
    // useEffect(() => {
    //     setError("")
    //     if (authError){
    //         console.log(authError)
    //         setError("로그인 실패")
    //         return
    //     }
    //     if (auth) {
    //         dispatch(check())  //user에 사용자 이름 등록
    //     }
    // }, [authError,setError,dispatch,auth]);

    
    // useEffect(()=>{
    //     if(user){
    //        try{
    //         localStorage.setItem('user',JSON.stringify(user))
    //        }catch(e){
    //         console.log('localStorage is not working')
    //        }
    //         navigate(`/store`)
    //     }
    // },[user,navigate])
             
    return (
        <PageContainer>
        <Header/>
        <div style={{height:"70vh"}}>
            <Template>
                <Form text="로그인" mode="login" onchange={onchange} onclick={login_click} error={error}/>
            </Template>
        </div>
        <Footer/>
        </PageContainer>
    
    );
};

export default LoginPage;