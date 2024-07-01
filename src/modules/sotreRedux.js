import { handleActions } from "redux-actions"
import product from "../component/item/product.json"

const DETAIL_ITEM = "store/DETAIL_ITEM"
const BASKET_ITEM = "store/BASKET_ITEM"
const PAYMENT_ITEM = "store/PAYMENT_ITEM"

export const Detail_item = (id,itemNum) =>({type:DETAIL_ITEM, payload: { id, itemNum }})
export const Basket_item = () => ({type:BASKET_ITEM})
export const payment_item = (Delivery,Address)=>({type:PAYMENT_ITEM,payload:{Delivery,Address}})

const initialState = {
    items:{
        item1:product.itme1,
        item2:product.itme2,
        item3:product.itme3,
        item4:product.itme4,
    },
    Detail:null,
    ShoppingBasket:[],
    paymentItem:{
        Delivery:'',
        Address:{},
        payItem:[]
    }
    ,
    paymentItems:[]
}
export const sotreRedux = handleActions({
    [DETAIL_ITEM] : (state,{ payload: { id, itemNum } } ) => {  //체인지 함수 
        // console.log(itemNum,"itemNum")
        const NewProduct = [...state.items[itemNum]]
        const Detail = NewProduct.filter(itme=>itme.id===id)
        // console.log(NewProduct)
        // console.log(state.items)
        return{
        ...state,Detail
    }
    },
    [BASKET_ITEM] : (state ) => {  //체인지 함수 
        const newBasket_item = state.Detail[0]
        console.log(newBasket_item)
        state.ShoppingBasket.push(state.Detail[0])
        return{
        ...state,
    }
    },
    [PAYMENT_ITEM] : (state,{payload:{Delivery,Address} } ) => {
        const newPayItem = [...state.paymentItem.payItem,state.Detail[0]];
        console.log(newPayItem)
        const newPaymentItem = {
            Delivery,
            Address,
            payItem: newPayItem
        };
        const newPaymentItems = [...state.paymentItems, newPaymentItem];
        return{
            ...state,paymentItems:newPaymentItems
        }
    }

},initialState)