import { Action } from "@ngrx/store" 
export enum ProductActionType{
    ON_GETProduct_ACTION="[Product] on Get Product",
    ON_GETProduct_SUCCES_ACTION="[Product] on Get Product success",
    ON_GETProduct_ERROR_ACTION="[Product] on Get Product error",

    ON_SETProduct_ACTION="[Product] on Set Product",
    ON_SETProduct_SUCCES_ACTION="[Product] on Set Product success",
    ON_SETProduct_ERROR_ACTION="[Product] on Set Product error",

    ON_UPDATEProduct_ACTION="[Product] on Update Product",
    ON_UPDATEProduct_SUCCES_ACTION="[Product] on et Update success",
    ON_UPDATEProduct_ERROR_ACTION="[Product] on Set Update error",

    ON_DELETEProduct_ACTION="[Product] on Delete Product",
    ON_DELETEProduct_SUCCES_ACTION="[Product] on Delete Product success",
    ON_DELETEProduct_ERROR_ACTION="[Product] on Delete Product error",

}

export class OnGetProductAction implements Action{
    type:ProductActionType = ProductActionType.ON_GETProduct_ACTION
    constructor(public payload:any){
       
    }

}

export class OnGetProductSuccessAction implements Action{
    type:ProductActionType  = ProductActionType .ON_GETProduct_SUCCES_ACTION
    constructor(public payload:any){
       
    }

}

export class OnGetProductErrorAction implements Action{
    type:ProductActionType  = ProductActionType .ON_GETProduct_ERROR_ACTION
    constructor(public payload:string){
       
    }

}

export class OnSetProductAction implements Action{
    type:ProductActionType  = ProductActionType .ON_SETProduct_ACTION
    constructor(public payload:any){
       
    }

}

export class OnSetProductSuccessAction implements Action{
    type:ProductActionType  = ProductActionType .ON_GETProduct_SUCCES_ACTION
    constructor(public payload:any){
       
    }

}

export class OnSetProductErrorAction implements Action{
    type:ProductActionType  = ProductActionType .ON_SETProduct_ERROR_ACTION
    constructor(public payload:string){
       
    }

}

export class OnUpdateProductAction implements Action{
    type:ProductActionType  = ProductActionType .ON_UPDATEProduct_ACTION
    constructor(public payload:any){
       
    }

}

export class OnUpdateProductSuccessAction implements Action{
    type:ProductActionType  = ProductActionType .ON_UPDATEProduct_SUCCES_ACTION
    constructor(public payload:any){
       
    }

}

export class OnUpdateProductErrorAction implements Action{
    type:ProductActionType  = ProductActionType .ON_UPDATEProduct_ERROR_ACTION
    constructor(public payload:string){
       
    }

}

export class OnDeleteProductAction implements Action{
    type:ProductActionType  = ProductActionType .ON_DELETEProduct_ACTION
    constructor(public payload:any){
       
    }

}

export class OnDeleteProductSuccessAction implements Action{
    type:ProductActionType  = ProductActionType .ON_DELETEProduct_SUCCES_ACTION
    constructor(public payload:any){
       
    }

}

export class OnDeleteProductErrorAction implements Action{
    type:ProductActionType  = ProductActionType.ON_DELETEProduct_ERROR_ACTION
    constructor(public payload:string){
       
    }

}

export type ProductActions = OnGetProductAction | OnGetProductSuccessAction | OnGetProductErrorAction| OnGetProductAction | OnSetProductSuccessAction | OnSetProductErrorAction | OnUpdateProductAction | OnUpdateProductSuccessAction | OnUpdateProductErrorAction | OnDeleteProductAction | OnDeleteProductSuccessAction | OnDeleteProductErrorAction