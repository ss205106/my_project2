import React, { useRef } from 'react';
import MainHeader from '../common/MainHeader';
import Home from '../component/main/Home';

const MainPage = () => {

  function useMoveScroll() {
    const element = useRef(null);
    const onMoveToElement = () => {
        console.log("dlqpsxms")
      element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return { element, onMoveToElement };
  }

  const goodsTabs = {
    0: { ...useMoveScroll(), name: 'Home' },
    1: { ...useMoveScroll(), name: 'About' },
    2: { ...useMoveScroll(), name: 'Portfolio' },
  };

  return (
    <>
      <MainHeader goodsTabs={goodsTabs}/>
      
      <Home goodsTabs={goodsTabs}/>
    </>
  );
};

export default MainPage;