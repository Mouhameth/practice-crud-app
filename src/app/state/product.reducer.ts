import { Action } from "@ngrx/store"
import { ProductActions, ProductActionType } from "./product.action"

export enum ProductStateEnum{
    INITIAL ="Initial",
    LOADING="Loading",
    LOADED="Loaded",
    ERROR="Error"
}

export interface ProductState{
    dataState:ProductStateEnum,
    data?:any,
    errorMessage?:string
}

const initState : ProductState = {
    dataState:ProductStateEnum.INITIAL
}

export function productReducer(state:ProductState = initState,action:Action):ProductState{
      switch(action.type){
        case ProductActionType.ON_GETProduct_ACTION:
            return {...state, dataState:ProductStateEnum.LOADING}
        case ProductActionType.ON_GETProduct_SUCCES_ACTION:
            return {...state, dataState:ProductStateEnum.LOADED,data:(<ProductActions>action).payload}
        case ProductActionType.ON_GETProduct_ERROR_ACTION:
            return {...state,dataState:ProductStateEnum.ERROR,errorMessage:(<ProductActions>action).payload}  
        case ProductActionType.ON_SETProduct_ACTION:
            return {...state, dataState:ProductStateEnum.LOADING}
        case ProductActionType.ON_SETProduct_SUCCES_ACTION:
            return {...state, dataState:ProductStateEnum.LOADED,data:(<ProductActions>action).payload}
        case ProductActionType.ON_SETProduct_ERROR_ACTION:
            return {...state,dataState:ProductStateEnum.ERROR,errorMessage:(<ProductActions>action).payload}  
        case ProductActionType.ON_UPDATEProduct_ACTION:
            return {...state, dataState:ProductStateEnum.LOADING}
        case ProductActionType.ON_UPDATEProduct_SUCCES_ACTION:
            return {...state, dataState:ProductStateEnum.LOADED,data:(<ProductActions>action).payload}
        case ProductActionType.ON_UPDATEProduct_ERROR_ACTION:
            return {...state,dataState:ProductStateEnum.ERROR,errorMessage:(<ProductActions>action).payload}    
            case ProductActionType.ON_DELETEProduct_ACTION:
            return {...state, dataState:ProductStateEnum.LOADING}
        case ProductActionType.ON_DELETEProduct_SUCCES_ACTION:
            return {...state, dataState:ProductStateEnum.LOADED,data:(<ProductActions>action).payload}
        case ProductActionType.ON_DELETEProduct_ERROR_ACTION:
            return {...state,dataState:ProductStateEnum.ERROR,errorMessage:(<ProductActions>action).payload}          
        default:
        return {...state}      
      }
}