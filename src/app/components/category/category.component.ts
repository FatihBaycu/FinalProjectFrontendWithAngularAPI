import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Category[]=[];

  currentCategory:Category;
  //currentCategory:Category;={categoryId:0, categoryName:""}
  //tsConfig.json dosyasında "strictPropertyInitialization": false, değeri false dediğigimiz için üstteki koda ihtiyacımız kaldımadı.


  dataLoaded=false;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }
    getCategories(){
      this.categoryService.getCategories().subscribe((response)=>{
        this.categories=response.data;
        this.dataLoaded=true;
        console.log("Çalışıyor.");
      })
    }
    setCurrentCategory(category:Category){
     this.currentCategory=category;
    }

    getCurrentCategoryClass(category:Category){
      if(category==this.currentCategory){
        return "list-group-item active";
      }
      else{return "list-group-item";}
    }
}
