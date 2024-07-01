import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import "../css/MainAnimation.css"
import { Link } from 'react-router-dom';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};


const MainAnimation3 = () => {
    const ref = useRef(null)
    const inView = useInView(ref,{
        once: false, // 요소가 보일 때마다 반복적으로 애니메이션이 실행되게 함
      });
    
    const windowWidth = useWindowWidth();
    const isMobile = windowWidth <= 768;
  
    const variants = {
      hidden: isMobile? { opacity: 0, x: 0 }:{ opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { ease: "easeInOut", duration: 2, type: "spring", stiffness: 100 } }
    };

    return (
        <>
        <motion.div  
       ref={ref}
       initial='hidden'
       animate={inView ? 'visible' : 'hidden'}
       variants={variants}
       className='homeContent3-container3'
    >           <div className='homeContent3-container3-flex'>
                        <div className='homeContent3-contentBox3'>
                            
                           <Link to="/store">
                           <div  className="Box3-Content">
                                    <div>
                                        <p>헬스 쇼필몰 사이트</p>
                                        <p>로그인 기능 구현 api연결,Redux를 사용하여 상태관리</p>
                                    </div>
                            </div>
                            </Link> 
                        </div>
                        <div className='homeContent3-contentBox3'>
                        <div  className="Box3-Content">
                                <div>
                                    <p>헬스 쇼필몰 사이트</p>
                                    <p>로그인 기능 구현 api연결,Redux를 사용하여 상태관리</p>
                                </div>
                        </div>
                        </div>
                        <div className='homeContent3-contentBox3'>
                        <div  className="Box3-Content">
                                <div>
                                    <p>헬스 쇼필몰 사이트</p>
                                    <p>로그인 기능 구현 api연결,Redux를 사용하여 상태관리</p>
                                </div>
                        </div>
                        </div>
                 </div>
                  <div className='homeContent3-container3-flex'>
                            <div className='homeContent3-contentBox3'>
                            <div  className="Box3-Content">
                                    <div>
                                        <p>헬스 쇼필몰 사이트</p>
                                        <p>로그인 기능 구현 api연결,Redux를 사용하여 상태관리</p>
                                    </div>
                            </div>
                            </div>
                            <div className='homeContent3-contentBox3'>
                            <div  className="Box3-Content">
                                    <div>
                                        <p>헬스 쇼필몰 사이트</p>
                                        <p>로그인 기능 구현 api연결,Redux를 사용하여 상태관리</p>
                                    </div>
                            </div>
                            </div>
                            <div className='homeContent3-contentBox3'>
                            <div  className="Box3-Content">
                                    <div>
                                        <p>헬스 쇼필몰 사이트</p>
                                        <p>로그인 기능 구현 api연결,Redux를 사용하여 상태관리</p>
                                    </div>
                            </div>
                </div>
            </div>
            
        </motion.div>

        
    </>
    );
};

export default MainAnimation3;