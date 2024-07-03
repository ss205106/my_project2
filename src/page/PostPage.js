import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Detail_post } from '../modules/post';
import { useNavigate } from 'react-router-dom';
import "../css/Post.css"
const PostPage = () => {
    const {DetailPost,postData} = useSelector(state =>({
        DetailPost:state.PostRedux.DetailPost,
        postData:state.PostRedux.postData
    }))

    const [btnstyle,setBtnStyle] = useState(null)
    // console.log(DetailPost)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Previous = (id)=>{
        const PreviousID = id -1
        // console.log(id)
        if(id===1){
            alert("이전글이없습니다.")
            return
        }
        dispatch(Detail_post(PreviousID))
    }

    const Next = (id)=>{
        // console.log(id)
        const NextID = id +1
        dispatch(Detail_post(NextID))
    }

    return (
        <div>
            <Header/>
            {DetailPost ?
                    <div className='PostContainer'>
                        <h4>커뮤니티 & 구매후기</h4>
                        <div className='PostBox'>
                            <div>{DetailPost.title}</div>
                            <div className='PostUser'>
                                <p>{DetailPost.username}</p>
                                <p>{DetailPost.date}</p>
                            </div>
                            <div className='PostContent'>{DetailPost.content}</div>
                        </div>
                        <div className='PostBtnBox'>
                            <button onClick={()=>Previous(DetailPost.id)}>이전글</button> 
                            <button onClick={()=>Next(DetailPost.id)}>다음글</button>
                            <button onClick={()=>navigate("/Community")}>목록</button>
                        </div>
                    </div>: 
                    <div>...다시시도해주세요</div>}
            <Footer/>
        </div>
    );
};

export default PostPage;