import React, { useRef } from 'react';
import TextAnimation from './TextAnimation';
import styled from 'styled-components';
import "../../css/Home.css"
import MainAnimation from '../../animation/MainAnimation';
import MainAnimation2 from '../../animation/MainAnimation2';
import MainAnimation3 from '../../animation/MainAnimation3';

const Spacer = styled.div`
  height: 2.7rem;
`;
const Spacer2 = styled.div`
padding-bottom: 120px;
`
const Spacer3 = styled.div`
height: 1.7rem;
`
const Home = ({goodsTabs}) => {
    
  return (
    <div className='HomeBody'>
          <Spacer ref={goodsTabs[0].element}/>
        <div  className='HomeContent'>
          <div className='myProfile'>
             <TextAnimation   text ={ `안녕하세요 저는 "자유로운 발상과 꾸준한 노력으로성장하고 싶은" 송성민입니다`} tiem={200}/>
             <Spacer2 />
          </div>    
       </div>

      <div  className='HomeContent2' ref={goodsTabs[1].element}>
        <div >
            <MainAnimation/>
            <Spacer3/>
            <MainAnimation2/>
        </div>
      </div>

      <div ref={goodsTabs[2].element} className='HomeContent3'>
            <h2>PORTFOLIO</h2>
            <MainAnimation3/>

      </div>
    </div>
  );
};

export default Home;
