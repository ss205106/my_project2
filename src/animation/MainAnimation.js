import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import TextAnimation from '../component/main/TextAnimation';
import "../css/MainAnimation.css"

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

const MainAnimation = () => {

 
    const ref = useRef(null)
    const inView = useInView(ref,{
        once: false, // 요소가 보일 때마다 반복적으로 애니메이션이 실행되게 함
      });

    const windowWidth = useWindowWidth();
    const isMobile = windowWidth <= 768;

    const variants = {
      hidden: isMobile ? { opacity: 0, x: 0 }: { opacity: 0, x: 310 },
      visible: 
      { opacity: 1, x: 0, transition: { ease: "easeInOut", duration: 2, type: "spring", stiffness: 100 } }
    };
    return (
        <>
        <motion.div  
       ref={ref}
       initial='hidden'
       animate={inView ? 'visible' : 'hidden'}
       variants={variants}
       className='homeContent2-container'
    >       
            <h3>ABOUT</h3>
            <div className='homeContent2-contentBox'>
                <img src='/img/myimg.png' alt='본인 얼굴 이미지'/>
                <div className='content'>
                        <p><strong>Name:</strong>송성민</p>
                        <p><strong>Address:</strong>경기도 안산시 단원구 와동</p>
                        <p><strong>Email:</strong>ss205106@gmail.com</p>
                        <p><strong>Phone:</strong>010-4046-6645</p>
                </div>
            </div>
        </motion.div>
    </>
    );
};

export default MainAnimation;