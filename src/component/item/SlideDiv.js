import styled from "styled-components";
// import productObj from "./product.json"
import { Link } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useState } from "react";
import "../../css/Slide.css"
const DivContent=styled.div`
  width:100%;
  display:flex;
  transition: all 1s;
  transform:translateX(${props=>props.moveX}px);
`
const ImgDiv=styled.div`
        width:190px;
        margin-top:2px;
        margin-right:15px;
        &:hover {
          border: 1px solid red; /* 테두리 두께와 색상 설정 */
        }
`
const Img=styled.img`
        // border-radius:3px;
        width:150px;
        height:100px;
        margin:0;
`
const ContentDIv=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const TypeDiv=styled(Link)`
        font-size:9px; 
        font-weight: 700;
        width:150px;
        color:#000;
        text-decoration:none;
        text-align: center;
`
const ContentLink=styled(Link)`
font-size:10px; 
        font-weight: 700;
  color:#000;
  text-decoration:none;
`
const PriceSpan=styled.span`
font-size:10px; 
 font-weight: 700;
`
const Div=styled.div`
    display:flex;
    padding:0;
    margin:4px;
    justify-content: space-between;
`
const P=styled.p`
    margin:0;
`
const LeftButton=styled(SlArrowLeft)`
    transition:0.5s;
    border-radius:10px;
    cursor: pointer;
    opacity:${props=>props.leftOpacity};
    &:hover {
        background: cornflowerblue;
        color: white;
       
  }

`
const RightButton=styled(SlArrowRight)`
    transition:0.5s;
    border-radius:10px;
    cursor: pointer;
    opacity:${props=>props.rightOpacity};
    &:hover {
        background: cornflowerblue;
        color: white;
        transform: scale(${props=>props.rightMoveX});
  } 

`
export default function SlideDiv(props){
    const {count,product,img,title,itemClick} = props
    // console.log(product)
    const [totalX,setTotalX]=useState(165*count)
    const [moveX,setMoveX]=useState(0)
    const [leftOpacity,setLeftOpacity]=useState(1)
    const [rightOpacity,setRightOpacit]=useState(0.2)
    const [leftMoveX,setLeftMove]=useState(1.3)
    const [rightMoveX,setRightMoveX]=useState(1.3)
    const maxWidth = window.innerWidth<= 480 ? 270 : 810
    function importAll(imgs) {
        const images = {};
        imgs.keys().map((img, idx) => {
          images[img.replace("./", "")] = imgs(img);
        });
        return images;
      }
      if(img==="img2"){
        const imgObject = importAll(require.context(`./img2`, false, /\.(png|jpe?g|svg)$/));
        const keys = Object.keys(imgObject);
        for(let i=0; i<product.length; i++){
          product[i].imge=imgObject[keys[i]]
        }
    }else if(img ==="img1"){
        const imgObject = importAll(require.context(`./img1`, false, /\.(png|jpe?g|svg)$/));
        const keys = Object.keys(imgObject);
        for(let i=0; i<product.length; i++){
          product[i].imge=imgObject[keys[i]]
        }
        
    }else if(img ==="img3"){
        const imgObject = importAll(require.context(`./img3`, false, /\.(png|jpe?g|svg)$/));
        const keys = Object.keys(imgObject);
        for(let i=0; i<product.length; i++){
          product[i].imge=imgObject[keys[i]]
        }
    }else if(img ==="img4"){
        const imgObject = importAll(require.context(`./img4`, false, /\.(png|jpe?g|svg)$/));
        const keys = Object.keys(imgObject);
        for(let i=0; i<product.length; i++){
          product[i].imge=imgObject[keys[i]]
        }
    }
    const handleSetMoeveX=(direction)=>{
            if(direction==="left"){
                if(totalX >= maxWidth){
                    setMoveX(moveX-165)
                    // console.log(moveX)
                    setTotalX(totalX-165)
                    setLeftMove(1.3)
                    setRightOpacit(1);
                }else if(totalX<maxWidth){
                    setLeftOpacity(0.2)
                    setLeftMove(1)
                    setRightOpacit(1)
                    // console.log("totalX<600",moveX)
                    return;
                }
            }else{
                if(moveX<0){
                    setMoveX(moveX+165)
                    setTotalX(totalX+165)
                    setLeftOpacity(1)
                    setRightMoveX(1.3)
                }else if(moveX===0){
                    setRightOpacit(0.2)
                    setRightMoveX(1)
                    // setTotalX(210*count)
                    return;
                }
            }
    }
    
    return(
        <div>
            <Div>
                <P>{title}</P>
                <div style={{display:"flex"}}>
                    <div style={{marginRight:"20px"}} onClick={()=>handleSetMoeveX("left")}>
                        <LeftButton leftOpacity={leftOpacity} leftMoveX={leftMoveX}/>
                    </div>
                    <div onClick={()=>handleSetMoeveX("right")} >
                        <RightButton rightOpacity={rightOpacity} rightMoveX={rightMoveX}/>
                    </div>
                </div>
            </Div>
            <DivContent moveX={moveX}>
                {
                    product.map(product=>(
                        <ImgDiv onClick={()=>itemClick(product.id,img)}>
                            <Img src={product.imge}></Img>
                            <ContentDIv>
                                <TypeDiv>{product.type}</TypeDiv>
                                <PriceSpan>{product.price}원</PriceSpan>
                            
                            </ContentDIv>
                        </ImgDiv>
                    ))
                }
            </DivContent>
        </div>

    )
}