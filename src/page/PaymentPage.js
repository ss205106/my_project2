import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../common/Header';
import Footer from '../common/Footer';
import "../css/PaymentPage.css"
import DaumPostcode from "react-daum-postcode";
import { payment_item } from '../modules/sotreRedux';
import { useNavigate } from 'react-router-dom';
const PaymentPage = () => {
    const { Detail,user } = useSelector(state => ({
        Detail: state.sotreRedux.Detail,
        user:state.user.user
    }));
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [custom,setCustom] = useState(false)
    const [customValue,setCustomValue] = useState("")
    const [form, setForm] = useState({
        zipcode: '',
        roadAddress: '',
        jibunAddress: '',
        namujiAddress:''
      });
    
    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    };
    
    const execDaumPostcode = () => {
        
        new window.daum.Postcode({
          oncomplete: function (data) {
            let fullRoadAddr = data.roadAddress;
            let extraRoadAddr = '';
            if (data.bname && /[동|로|가]$/g.test(data.bname)) {
              extraRoadAddr += data.bname;
            }
            if (data.buildingName && data.apartment === 'Y') {
              extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            if (extraRoadAddr !== '') {
              fullRoadAddr += ' (' + extraRoadAddr + ')';
            }
            setForm({
              ...form,
              zipcode: data.zonecode,
              roadAddress: fullRoadAddr,
              jibunAddress: data.jibunAddress
            });
          }
        }).open();
      };

      const HandelselectChage = (e)=>{
        setCustomValue(e.target.value)
       if(e.target.value === "custom"){
            setCustom(true)
            setCustomValue('')
       }else{
        setCustom(false)
       }
      }

      const customMsgChage = (e) => {
        setCustomValue(e.target.value)
      }
      
      const PaymentClick = () =>{
        dispatch(payment_item(customValue,form))
        alert("결제가 완료되었습니다.")
        navigate("/mypage")
      }

    return (
        <div>
            <Header/>
            <div id="paymentBody">
                <h2>결제하기</h2>
            {Detail ? 
                <div id="paymentContainer">
                    <div id="content1">
                             <div id="box1">
                                <p>주문상품정보</p>
                                <div id="box1Content">
                                    <img src={Detail[0].imge} alt={Detail[0].content} />
                                    <div>
                                        <p style={{marginTop:"25px"}}>{Detail[0].type}</p>
                                        <p>{Detail[0].discounted_price}원</p>
                                    </div>
                                </div>
                                <p id="delivery">배송비:3000원</p>
                            </div>
                            <div id="box2">
                                <p>주문자 정보</p>
                                <div>{user && user.username}</div>
                                <div>{user && user.email}</div>
                            </div>
                            <div id="box3" >
                                <p>배송메모</p>
                                <select className='meno' onChange={HandelselectChage}> 
                                    <option value>배송 메모를 선택해주세요.</option>
                                    <option value="배송 전에 미리 연락 바랍니다.">배송 전에 미리 연락 바랍니다.</option>
                                    <option value="부재시 경비실에 맡겨주세요.">부재시 경비실에 맡겨주세요.</option>
                                    <option value="부재시 전화나 문자를 남겨주세요.">부재시 전화나 문자를 남겨주세요.</option>
                                    <option value="custom">직접입력</option>
                                </select>
                                <input name='custom' className={custom ? "open" : "close"} onChange={customMsgChage}/>
                            </div>
                           
                            <div id="box4">
                                 <p style={{marginBottom:"5px"}}>배송정보</p>
                                <div style={{marginBottom:"5px"}}>
                                    주소:
                                    <input
                                        type="text"
                                        id="zipcode"
                                        name="zipcode"
                                        value={form.zipcode}
                                        onChange={handleChange}
                                        size="10"
                                    />
                                    <button  type="button"  onClick={execDaumPostcode}>우편번호검색</button>
                                    <DaumPostcode style={{display:"none"}}/>
                                </div>
                                <div style={{marginBottom:"5px"}}>
                                    <p>지번 주소</p>
                                    <input
                                        type="text"
                                        id="roadAddress"
                                        name="roadAddress"
                                        value={form.roadAddress}
                                        onChange={handleChange}
                                        size="50"
                                    />
                                </div>
                                <div style={{marginBottom:"5px"}}>
                                     <p> 도로명 주소</p>
                                    <input
                                        type="text"
                                        id="jibunAddress"
                                        name="jibunAddress"
                                        value={form.jibunAddress}
                                        onChange={handleChange}
                                        size="50"
                                    />
                                </div>
                                <div style={{marginBottom:"5px"}}>
                                    <p> 나머지 주소</p>
                                        <input
                                            type="text"
                                            name="namujiAddress"
                                            value={form.namujiAddress}
                                            onChange={handleChange}
                                            size="50"
                                        />
                                </div>
                            </div>
                    </div>
                    <div id="content2">
                            <table id="t1">
                                <tr>
                                    <td>주문요약</td>
                                </tr>
                                <tr>
                                    <td>상품가격</td>
                                    <td>{Detail[0].discounted_price}원</td>
                                </tr>
                                <tr >
                                    <td>배송비</td>
                                    <td>3000원</td>
                                </tr>
                               
                                <tr>
                                    <td>총 주문금액:{Number(Detail[0].discounted_price)+3000}원</td>
                                </tr>
                            </table>
                            <div id="t2">
                                <p>결제수단</p>
                                <div id="paymentContent">
                                    <div class="payment-methods">
                                        <div>
                                            <input type="checkbox" id="credit-card" name="payment-method" value="credit-card"/>
                                            <label for="credit-card">신용카드</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="debit-card" name="payment-method" value="debit-card"/>
                                            <label for="debit-card">체크카드</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="kakaopay" name="payment-method" value="kakaopay"/>
                                            <label for="kakaopay">카카오페이</label>
                                        </div>
                                    </div>
                                    <div class="payment-methods">
                                            <div>       
                                                <input type="checkbox" id="naver-pay" name="payment-method" value="naver-pay"/>
                                                <label for="naver-pay">네이버 페이</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="bank-transfer" name="payment-method" value="bank-transfer"/>
                                                <label for="bank-transfer">실시간 계좌이체</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="mobile-payment" name="payment-method" value="mobile-payment"/>
                                                <label for="mobile-payment">휴대폰 결제</label>
                                            </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div id="t3">
                            <div id="t3Content">
                                    <div >
                                        <input type="checkbox" id="mobile-payment" name="payment-method" value="mobile-payment"/>
                                        <label for="mobile-payment">구매조건 확인 및 결제진행에 동의</label>
                                    </div>
                                </div>
                                <button id='paymentBtn' onClick={PaymentClick}>결제하기</button>
                            </div>
                    </div>
                </div>
                :<div>...다시시도해주세요</div>}
            </div>
            <Footer/>
        </div>
    );
};

export default PaymentPage;