import { handleActions } from "redux-actions";
import post from "../component/post/postData.json"
const CREATEPOST  = "post/CREATEPOST"
const DETAIL_POST = "post/DETAIL_POST"

export const createPost = (title, content,username) =>({type:CREATEPOST,  payload: { title, content, username }})
export const Detail_post = (id) => ({type:DETAIL_POST, payload: { id}})

const initialState = {
    postData:post.post || [],
    DetailPost:null
}

export const PostRedux = handleActions(
    {
      [CREATEPOST]: (state, { payload: { title, content, username } }) => {
        // 오늘의 날짜 생성
        const date = new Date().toISOString().split('T')[0];
  
        // 새로운 게시물 객체 생성
        const newPost = {
          id: state.postData.length + 1,
          title,
          content,
          username,
          date,
        };
  
        // postData 배열에 새로운 게시물 추가
        return {
          ...state,
          postData: [...state.postData, newPost],
        };
      },
      [DETAIL_POST]:(state,{ payload:{ id } } ) => {
        // console.log(id)
        // console.log(state.posts)
        const newPosts = [...state.postData]
        // console.log(newPosts)
        const detail_post = newPosts.find(item => item.id === id)
        console.log(detail_post)
        return{
            ...state,DetailPost:detail_post
        }
    }  
    },
    initialState
  );