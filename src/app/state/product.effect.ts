import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ProductService } from "../services/product.service";
import { OnDeleteProductErrorAction, OnGetProductAction, OnGetProductErrorAction, OnGetProductSuccessAction, OnUpdateProductErrorAction, OnUpdateProductSuccessAction, ProductActions, ProductActionType } from "./product.action";

@Injectable({
    providedIn:'root'
})

export class ProductEffects{

    constructor(private productService:ProductService, private effectActions : Actions,private route:Router){}

    onGetProductEffects : Observable<Action> = createEffect(
        ()=>this.effectActions.pipe(
            ofType(ProductActionType.ON_GETProduct_ACTION),
            mergeMap((action:Actions)=>{
                return this.productService.getProducts().pipe(
                    map((response)=>{ 
                        return new OnGetProductSuccessAction(response)}),
                    catchError((err)=>of(new OnGetProductErrorAction(err)))
                )
            })
        )
    )

    onSetProductEffects : Observable<Action> = createEffect(
        ()=>this.effectActions.pipe(
            ofType(ProductActionType.ON_SETProduct_ACTION),
            mergeMap((action:ProductActions)=>{
                return this.productService.addProduct(action.payload).pipe(
                    map((response)=>{ 
                        
                        return new OnGetProductAction(response)}),
                    catchError((err)=>of(new OnGetProductErrorAction(err)))
                )
            })
        )
    )

    onUpdateProductEffects : Observable<Action> = createEffect(
        ()=>this.effectActions.pipe(
            ofType(ProductActionType.ON_UPDATEProduct_ACTION),
            mergeMap((action:ProductActions)=>{
                console.log(action.payload);
                
                return this.productService.updateProduct(action.payload).pipe(
                    
                    map((response)=>{ 
                        return new OnGetProductAction({})}),
                    catchError((err)=>of(new OnUpdateProductErrorAction(err)))
                )
            })
        )
    )

    onDelteProductEffects : Observable<Action> = createEffect(
        ()=>this.effectActions.pipe(
            ofType(ProductActionType.ON_DELETEProduct_ACTION),
            mergeMap((action:ProductActions)=>{
                return this.productService.deleteProduct(action.payload).pipe(
                    map((response)=>{ 
                        return new OnGetProductAction({})}),
                    catchError((err)=>of(new OnDeleteProductErrorAction(err)))
                )
            })
        )
    )
}