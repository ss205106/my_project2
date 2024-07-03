import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../css/Mypage.css"
import Header from '../common/Header';
import Footer from '../common/Footer';
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { Detail_item } from '../modules/sotreRedux';
import { ReviewClick_item } from '../modules/sotreRedux';
const MyPage = () => {
    const {user,ShoppingBasket,paymentItems} = useSelector(state=>({
        user:state.user.user,   
        ShoppingBasket:state.sotreRedux.ShoppingBasket,
        paymentItems:state.sotreRedux.paymentItems
    }))

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const date = new Date().toISOString().split('T')[0];

    const myPageBtnClick=(id,img)=>{
         // console.log(img)
         if(img==="img1"){
            dispatch(Detail_item(id,"item1"))
        }else if(img === "img2"){
            dispatch(Detail_item(id,"item2"))
        }else if(img === "img3"){
            dispatch(Detail_item(id,"item3"))
        }else if(img === "img4"){
            dispatch(Detail_item(id,"item4"))
        }
        
        navigate("/Payment")

    }

    const ReviewBtnClick = (item) => {
        dispatch(ReviewClick_item(item))
        navigate("/ReviewWrite")
    }
    return (
        <div>
            <Header/>
            {user ? (<div id="mypageBody">
                <div className='myContent'>
                    <ul className='list'>
                        <li><Link to="#">주문조회</Link></li>
                        <li><Link to="#">위시 리스트</Link></li>
                        <li><Link to="#">취소/교환/반품</Link></li>
                        <li><Link to="#">포인트</Link></li>
                        <li><Link to="#">1:1문의</Link></li>
                        <li><Link to="#">정보수정</Link></li>
                        <li><Link to="#">회원탈퇴</Link></li>
                    </ul>
                    <div className='userBody'>
                        <div className='userContent'>
                            <div className='userprofile'>
                                <FaRegUserCircle id='icon'/>
                                <div>
                                    <h4><span style={{color:"#FFA811"}}>{user && user.username}</span>님 안녕하세요.</h4>
                                    <p>누적 구매금액:0원</p>
                                </div>
                            </div>
                            <div className='point'>
                                <p>포인트</p>
                                <h1>1,000P</h1>
                            </div>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                            <h1>주문내역</h1>
                            {paymentItems && paymentItems.map(item =>
                                <div className='mypageBasket'>
                                <div className='mypageBasketContent'>
                                    <img src={item.payItem[0].imge}/>
                                    <div>
                                        <p>{item.payItem[0].type}</p>
                                        <p><span style={{color:"red"}}>{item.payItem[0].discounted_price}</span>원</p>
                                        <p>배송메모:{item.Delivery && item.Delivery }</p>
                                        {item.Address ? (<p>
                                            
                                            <p>주소:{item.Address.zipcode}</p>
                                            <p>지번 주소:{item.Address.roadAddress}</p>
                                            <p>도로명 주소:{item.Address.jibunAddress}</p>
                                            <p>{item.Address.namujiAddress}</p>
                                            </p>): ''} 
                                        <p>{date}</p>
                                    </div>
                                </div>
                                <div className='myPageBtn'>
                                        <button style={{marginTop:"15px"}} onClick={()=>ReviewBtnClick(item.payItem[0])}>구매평작성</button>
                                        <button>배송조회</button>
                                </div>
                            </div>
                            )}
                        </div>
                        <div className='userItem'>
                            <h1>장바구니</h1>
                            
                            {ShoppingBasket && ShoppingBasket.map(item =>
                            <div className='mypageBasket'>
                                <div className='mypageBasketContent'>
                                    <img src={item.imge}/>
                                    <div>
                                        <p>{item.type}</p>
                                        <p><span style={{color:"red"}}>{item.discounted_price}</span>원</p>
                                        <p>{date}</p>
                                    </div>
                                </div>
                                <div className='myPageBtn'>
                                        <button onClick={()=>myPageBtnClick(item.id,item.imgName)}
                                             style={{marginTop:"30px"}}>구매하기</button>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>):<div>죄송합니다 다시 시도해주세요...</div>}
            
            <Footer/>
        </div>
    );
};

export default MyPage;