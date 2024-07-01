import React, { useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
// import postData from "../component/post/postData.json";
import "../css/Community.css";
import {  useNavigate } from 'react-router-dom';
import Carousel from '../common/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { Detail_post } from '../modules/post';

const CommunityPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    
    const {user,postData} = useSelector(state => ({
        user:state.user.user,
        postData:state.PostRedux.postData
    }))
    // 총 페이지 수 계산
    const totalPages = Math.ceil(postData.length / itemsPerPage);
    
    // 현재 페이지에 표시할 데이터 계산
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = postData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = (id)=>{
        // console.log(id)
        dispatch(Detail_post(id))
        navigate("/post")
    }
    
    const WriteClick = ()=>{
        if(!user){
            alert("로그인후 사용해주세요")
            return
        }else{
            navigate("/write")
        }
    }
    return (
        <div>
            <Header />
            <Carousel />
            <div style={{ marginTop: "30px" }}>
                <div id='CommunityBody'>
                    {currentItems.map((item, index) => (
                        <div key={index} className='CommunitContent' onClick={()=>handleClick(item.id)}>
                            <div>{item.content}</div>
                            <div style={{ display: "flex" }}>
                              <div>{item.username}</div>
                             <div style={{ marginLeft: "10px" }}>{item.date}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='WrteBtnDiv'>
                    <button onClick={WriteClick}>글 작성하기</button>
                </div>
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CommunityPage;