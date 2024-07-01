import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';
import { MdMargin } from 'react-icons/md';


const ButtonsDiv =styled.div`
// background:red;
`
const ButtonStyle=styled(Button)`
margin-right:10px;
`

const PurchaseButtons = (props) => {
    const {handleAddToCart,handlePurchase} = props

 
    return (
    <ButtonsDiv className="purchase-buttons">
        <div>
            <ButtonStyle styled={{marginRight:"10px"}} onClick={handlePurchase}>구매하기</ButtonStyle>
            <Button onClick={handleAddToCart}>장바구니 담기</Button>
        </div>
    </ButtonsDiv>
    );
};

export default PurchaseButtons;