import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { OnSetProductAction } from 'src/app/state/product.action';
import { ProductState, ProductStateEnum } from 'src/app/state/product.reducer';
declare var window: any;
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 submitted : boolean = false
 submittedRes : boolean = false
 formModal: any;
 Product : Product ={}
  readonly ProductStateEnum = ProductStateEnum
  public productState$ :Observable<ProductState> | null = null
  constructor(private fb: FormBuilder, private store : Store<any> ) { }

  textForm = this.fb.group({
    text: ["", Validators.required]
  })

  reponseForm = this.fb.group({
    text: ["", Validators.required],
    genre: ["", Validators.required],
  })

  ngOnInit(): void {
    this.productState$ = this.store.pipe(
      map((state)=> state.ProductState)
    )
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }

  addQuestion(){
    this.submitted =true
    if(this.textForm.invalid)
    return;
    this.textForm.reset()
    console.log(this.Product)
    this.submitted= false
    return;
  }

  openFormModal() {
    this.formModal.show();
  }
  saveSomeThing() {
    // confirm or save something
    console.log(this.reponseForm.value)
    this.submittedRes = true
    // if(!this.Product.question || this.reponseForm.invalid)
    //   return;
    //   this.res.push({reponse:this.reponseForm.controls.text.value,genre:this.reponseForm.controls.genre.value}  )
    // console.log(this.res);
    
    // this.Product.reponses = this.res

    // console.log(this.Product);
    

    this.reponseForm.reset()
    this.formModal.hide();

    this.submittedRes = false
  }
 

  validerProduct(){
    this.store.dispatch(new OnSetProductAction(this.Product))
    this.Product = {}
    //this.res = []
  }

  deleteItem(index: any){
     //this.res.splice(index)
  }

  deleteQuestion(){
    this.Product = {}
  }

}
