import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import "quill/dist/quill.snow.css";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import "../../css/Write.css"
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../modules/post';
const Write = (props) => {
    const {page} = props

    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const {user,ReviewDtailItem} = useSelector(state => ({
        user:state.user.user,
        ReviewDtailItem:state.sotreRedux.ReviewDtailItem
    }))

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const quillElement = useRef(null);
    const quillInstance = useRef(null);
    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
          theme: 'snow',
          placeholder: '내용을 작성하세요....',
          modules: {
            toolbar: [
              [{ header: '1' }, { header: '2' }, { font: [] }],
              [{ size: [] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['link', 'image', 'video'],
              ['clean'],
            ],
          },
        });
    
        const quill = quillInstance.current;
    
        quill.on('text-change', (delta, oldDelta, source) => {
          if (source === 'user') {
            //글 작성하는 텍스트 source이게 뭔지는 모름 전에 했던거 복사함 
            const text = quill.getText();;
            setContent(text)   //bod
           
          }
        } );
    }, [] );

    const handleWriteClick=()=>{
        if(!user){
          alert("로그인후 이용해주세요")
          return navigate("/login")
        }
        const {username} = user
        if(page === "Review"){
          if(title==="" && content===""){
            dispatch(createPost(ReviewDtailItem[0].payItem[0].type,ReviewDtailItem[0].payItem[0].type,username))
          }
          alert("구매후기 작성완료")
          navigate("/Community")
          return
        }
        dispatch(createPost(title,content,username))
        alert("글작성 완료")
        navigate("/Community")
    }
    const CancelClick = ()=>{
      navigate("/Community")
      if(page==="Review"){
        navigate("/Review")
      }
    }
    return (
        <div className='WriteDiv'>
            { page === "Review" && ReviewDtailItem[0] ? 
                      <div className='ReviewItemBox'>
                        <img src= { ReviewDtailItem[0].payItem[0].imge} alt='상품이미지'/>
                        <div>
                        <p>{ReviewDtailItem[0].payItem[0].type} </p>
                        <p><span style={{color:"red"}}>{ ReviewDtailItem[0].payItem[0].discounted_price}</span> 원 </p>
                        </div>
                    </div>:''}
            <div className="UserDiv">
                <FaRegUserCircle class="userIcon"/>
                <span>{user && user.username}님</span>
                <div className='WrteBtnBox'>
                    <button onClick={CancelClick}>취소</button>   
                    <button onClick={handleWriteClick}>{page==="Review" ? "리뷰작성하기" : "글 작성하기"}</button>
                </div>
            </div>
            <input className='TitleInput' name='title' placeholder='제목을 입력하세요' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <div className='QuillDiv'>
                <div ref={quillElement} />
            </div>
         
        </div>
    );
};

export default Write;