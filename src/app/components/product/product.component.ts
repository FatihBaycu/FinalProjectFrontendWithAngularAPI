import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // product:any={productId:1,productName:"Bardak",categoryId:1,unitPrice:5,unitInStock:10};
  // product2:any={productId:2,productName:"Laptop",categoryId:1,unitPrice:5};
  // product3:any={productId:3,productName:"Mouse",categoryId:1,unitPrice:5};
  // product4:any={productId:4,productName:"Camera",categoryId:1,unitPrice:5};
  // product5:any={productId:4,productName:"Notebook",categoryId:1,unitPrice:5};
  //products=[this.product,this.product2,this.product3,this.product4,this.product5]
  ////////////////////// lcoal çalışma mantığı bu şekldeydi./////////////////////////////////


    products:Product[]=[];
    dataLoaded=false;
  
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    

    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategoryId(params["categoryId"]);
      }
      else{this.getProducts();}
    });


  }
  getProducts(){
      console.log("Api request başladı.");
      this.productService.getProducts().subscribe((response)=>{
        this.products=response.data
        this.dataLoaded=true;
        console.log("Api request bitt.");
      });
      console.log("Metot bitti.");
  }

  getProductsByCategoryId(categoryId:number){
    console.log("Api request başladı.");
    this.productService.getProductsByCategoryId(categoryId).subscribe((response)=>{
      this.products=response.data
      this.dataLoaded=true;
      console.log("Api request bitt.");
    });
    console.log("Metot bitti.");
}

}
