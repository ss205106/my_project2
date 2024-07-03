import { handleActions } from "redux-actions"
import product from "../component/item/product.json"

const DETAIL_ITEM = "store/DETAIL_ITEM"
const BASKET_ITEM = "store/BASKET_ITEM"
const PAYMENT_ITEM = "store/PAYMENT_ITEM"
const REVIEWCLICK_ITEM = "stroe/REVIEWCLICK_ITEM"


export const Detail_item = (id,itemNum) =>({type:DETAIL_ITEM, payload: { id, itemNum }})
export const Basket_item = () => ({type:BASKET_ITEM})
export const payment_item = (Delivery,Address)=>({type:PAYMENT_ITEM,payload:{Delivery,Address}})
export const ReviewClick_item = (item)=>({type:REVIEWCLICK_ITEM,payload:{item}})


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
    paymentItems:[],
    ReviewItems:[],
    ReviewDtailItem:[]
}
export const sotreRedux = handleActions({
    [DETAIL_ITEM] : (state,{ payload: { id, itemNum } } ) => {  
        // console.log(itemNum,"itemNum")
        const NewProduct = [...state.items[itemNum]]
        const Detail = NewProduct.filter(itme=>itme.id===id)
        // console.log(NewProduct)
        // console.log(state.items)
        return{
        ...state,Detail
    }
    },
    [BASKET_ITEM] : (state ) => {  
        // console.log(newBasket_item)
        state.ShoppingBasket.push(state.Detail[0])
        return{
        ...state,
    }
    },
    [PAYMENT_ITEM] : (state,{payload:{Delivery,Address} } ) => {
        const newPayItem = [...state.paymentItem.payItem,state.Detail[0]];
        // console.log(newPayItem)
        const newPaymentItem = {
            Delivery,
            Address,
            payItem: newPayItem
        };
        const newPaymentItems = [...state.paymentItems, newPaymentItem];
        return{
            ...state,paymentItems:newPaymentItems
        }
    },
    [REVIEWCLICK_ITEM]:(state,{payload:{item}}) => {
        // console.log(item)
        const newItems = state.paymentItems.filter(payitem => payitem.payItem[0].imge === item.imge)
        // console.log(newItems)
        return{
            ...state,ReviewDtailItem:newItems
        }
    }

},initialState)