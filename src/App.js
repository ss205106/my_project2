
import './App.css';
// import Header from './common/Header';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import { Route,Routes } from 'react-router-dom';
import MainPage from './page/MainPage';
import StorePage from './page/StorePage';
import ItemPage from './page/ItemPage';
import CommunityPage from './page/CommunityPage';
import PostPage from './page/PostPage';
import PaymentPage from './page/PaymentPage';
import WritePage from './page/WritePage';
import MyPage from './page/MyPage';
import ReviewWritePage from './page/ReviewWritePage';
function App() {
  return (
    <div className="App">
        <Routes>.
           <Route path='/' element={<MainPage/>}/>
         
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>

          <Route path='/store' element={<StorePage/>}/>
          <Route path='/ItemPage' element={<ItemPage/>}/>
          <Route path='/Community' element={<CommunityPage/>}/>
          <Route path='/post' element={<PostPage/>}/>
          <Route path='/Payment' element={<PaymentPage/>}/>
          <Route path='/write' element={<WritePage/>}/>
          <Route path='/mypage' element={<MyPage/>}/>

          <Route path='/ReviewWrite' element={<ReviewWritePage/>}/>
        </Routes>
      </div>
  );
}

export default App;
