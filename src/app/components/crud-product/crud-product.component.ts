import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { OnDeleteProductAction, OnGetProductAction, OnSetProductAction, OnUpdateProductAction } from 'src/app/state/product.action';
import { ProductState, ProductStateEnum } from 'src/app/state/product.reducer';
declare var window: any;

@Component({
  selector: 'app-crud-product',
  templateUrl: './crud-product.component.html',
  styleUrls: ['./crud-product.component.css']
})
export class CrudProductComponent implements OnInit {
  readonly ProductStateEnum = ProductStateEnum
  public productState$ :Observable<ProductState> | null = null
  formModal: any;
  submitted : boolean = false
  action : string = ""
  ID : number = 0
  filterString: string ='';
  constructor(private router:Router,private fb:FormBuilder, private store : Store<any> ) { }

  productForm = this.fb.group({
    name: ["", Validators.required],
    category: ["", Validators.required],
    quantity: ["", Validators.required],
    price: ["", Validators.required],

  })

  // searchForm = this.fb.group({
  //   name: ["", Validators.required]

  // })

  ngOnInit(): void {
    this.store.dispatch(new OnGetProductAction({}))
    this.productState$ = this.store.pipe(
      map((state)=> state.productState)
    )
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }

  add(){
      this.router.navigate(['add-product'])
  }

  delete(product:any){
    this.store.dispatch(new OnDeleteProductAction(product))
  }

  openFormModal(product:any) {
    this.action = "Modifier produit"
     this.ID = product.ID
     this.productForm.controls.name.setValue(product.name)
     this.productForm.controls.category.setValue(product.category)
     this.productForm.controls.quantity.setValue(product.quantity)
     this.productForm.controls.price.setValue(product.price)
    this.formModal.show();
  }

  openAddProduct(){
    this.action = "Nouveau produit"
    
    this.productForm.controls.name.setValue("")
     this.productForm.controls.category.setValue("")
     this.productForm.controls.quantity.setValue("")
     this.productForm.controls.price.setValue("")
    this.formModal.show();
  }

  validate(){
    this.submitted = true
    if(this.productForm.invalid){
      return;
    }
    if(this.action === "Nouveau produit"){
     this.store.dispatch(new OnSetProductAction(this.productForm.value))
      
    }
    else{
      let product :Product = this.productForm.value
      product.ID = this.ID
      this.store.dispatch(new OnUpdateProductAction(product))
      
    }
  }

  search(e:any,data:Product[]){
   data.filter((x => x.Name === e.target.value || x.Category === e.target.value))
    
  }


}
