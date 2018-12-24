import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../category';
import { AdminpanelService } from '../service/adminpanel.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoryService:CategoryService,private adminPanelService:AdminpanelService) { }

  categories:Category[];
  category:Category={};
  categoryid= new FormControl('0');
  categoryname = new FormControl('');
  @ViewChild('closeModalBtn') closeModalBtn: ElementRef;
  onError: boolean = false;
  serverResponse:string;
  bindModal(cat){
    this.categoryid.setValue(cat.categoryId);
    this.categoryname.setValue(cat.categoryName);
  }
  newCategory(cat){
    this.categoryid.setValue('0');
    this.categoryname.setValue('');
  }
  setCategories(){
    this.categoryService.getCategory().subscribe(res=>this.categories=res);
  }
  addCategory(){
    this.category.categoryId=this.categoryid.value;
    this.category.categoryName=this.categoryname.value;
    this.adminPanelService.SaveOrUpdateCategory(this.category).subscribe(res=>{},
      err=>{
        this.onError=true;
        this.serverResponse=err.message;
      this.closeModalBtn.nativeElement.click();
    },
    ()=>{
      this.closeModalBtn.nativeElement.click();
      this.setCategories();
    });
  }
  deleteCategory(categoryid){
    this.adminPanelService.deleteCategory(categoryid).subscribe(res=>{},
      err=>{
        this.onError=true;
        this.serverResponse=err.message;
      this.closeModalBtn.nativeElement.click();
      },()=>{
      this.setCategories();
    });
  }
  ngOnInit() {
    this.setCategories();
  }

}
