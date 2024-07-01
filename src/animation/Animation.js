import React from 'react';
import { motion } from 'framer-motion';
import { CiDumbbell } from "react-icons/ci";
import "../css/Animation.css"
const Animation = () => {
    return (
        <>
             
        <motion.div  
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 6 ,repeat: Infinity,}}
        className="intro-container"
    >   
        <CiDumbbell className='icon'/>
        <h1>게임 아이템은 사면서 왜 운동 아이템은 사지 않으십니까?</h1>
            <motion.div  
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ ease: "easeInOut", duration: 6  ,repeat: Infinity,}}

        >   

            <p>최고의 헬스 용품으로 당신의 운동 목표를 달성하세요!</p>
            <p>지금 투자하세요. 건강한 삶이 기다리고 있습니다.</p>
            </motion.div>
        </motion.div>
      
  
      
    </>
    );
};

export default Animation;