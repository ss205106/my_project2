import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
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


const MainAnimation2 = () => {
    const ref = useRef(null)
    const inView = useInView(ref,{
        once: false, // 요소가 보일 때마다 반복적으로 애니메이션이 실행되게 함
      });
    
    const windowWidth = useWindowWidth();
    const isMobile = windowWidth <= 768;
  
    const variants = {
      hidden: isMobile? { opacity: 0, x: 0 }:{ opacity: 0, x: -300 },
      visible: { opacity: 1, x: 0, transition: { ease: "easeInOut", duration: 2, type: "spring", stiffness: 100 } }
    };

    return (
        <>
        <motion.div  
       ref={ref}
       initial='hidden'
       animate={inView ? 'visible' : 'hidden'}
       variants={variants}
       className='homeContent2-container2'
    >           
             <h3>SKILL</h3>
            <div className='homeContent2-contentBox2'>
                <img src='/img/HTML5_logo.png' alt='html-logo'/>
                <img  src='/img/CSS3_logo.png' alt='css-logo'/>
                <img  src='/img/js-logo.png' alt='js-logo'/>
                <img  src='/img/react_logo.png' alt='react-logo'/>
                
            </div>
        </motion.div>
    </>
    );
};

export default MainAnimation2;