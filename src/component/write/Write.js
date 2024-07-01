import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Quill from 'quill';
import "quill/dist/quill.snow.css";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import "../../css/Write.css"
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../modules/post';
// const WriteDiv = styled.div`
//   padding-top: 5rem;
//   padding-bottom: 5rem;
//   width: 990px;
//   margin:0 auto;
// `;

// const TitleInput = styled.input`
//   font-size: 1.2rem;
//   font-weight: bold;
//   outline: none;
//   padding: 0.5rem 1rem;
//   border: 2px solid #ccc;
//   border-radius: 5px;
//   margin-bottom: 2rem;
//   width: 950px;
//   transition: border-color 0.3s;
//   &:focus {
//     border-color: #4CAF50;
//   }
// `;

// const QuillDiv = styled.div`
//   .ql-editor {
//     min-height: 320px;
//     font-size: 1.25rem;
//     line-height: 1.5;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     padding: 1rem;
//     color: #333;
//     background-color: #fff;
//   }
//   .ql-toolbar {
//     border: none;
//     border-radius: 5px;
//     background-color: #f3f3f3;
//   }
//   .ql-toolbar button:hover {
//     background-color: #ddd;
//   }
// `;

// const UserDiv = styled.div`
//   width: 990px;
//   display: flex;
//   align-items: center;
//   text-align: left; /* 텍스트 왼쪽 정렬 */
//   padding: 10px; /* 내부 패딩 추가 */
  
//   span {
//     margin-left: 10px; /* 아이콘과 텍스트 간의 간격 조정 */
//   }
// `;
const Write = () => {
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const {user} = useSelector(state => ({
        user:state.user.user
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
        dispatch(createPost(title,content,username))
        alert("글작성 완료")
        navigate("/Community")
    }
        
    return (
        <div className='WriteDiv'>
            <div className="UserDiv">
                <FaRegUserCircle class="userIcon"/>
                <span>{user && user.username}님</span>
                <div className='WrteBtnBox'>
                    <button onClick={()=>navigate("/Community")}>취소</button>   
                    <button onClick={handleWriteClick}>글쓰기</button>
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