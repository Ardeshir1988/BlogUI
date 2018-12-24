import { Component, OnInit} from '@angular/core';
import { TagService } from '../service/tag.service';
import { Tag } from '../tag';
import { CategoryService } from '../service/category.service';
import { Category } from '../category';
import { AdminpanelService } from '../service/adminpanel.service';
import { ServiceResponse } from '../serviceresponse';
import { FormControl } from '@angular/forms';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { PostdetailService } from '../service/postdetail.service';




@Component({
  selector: 'app-posteditor',
  templateUrl: './posteditor.component.html',
  styleUrls: ['./posteditor.component.css']
})
export class PosteditorComponent implements OnInit  {

  postIdUrl:string;
  tags : Tag[];
  selectedTag: Tag[] = [];
  selectedTags;
  categories:Category[];
  selectedCategory:Category;
  response:ServiceResponse;
  selectedImage:File;
  imagesrc:string;
  postid= new FormControl('0');
  posttitle = new FormControl('');
  postcontent=new FormControl('');
  posttitleurl =new FormControl('');
  post: Post= {};
  selectedValue;
  onSuccess: boolean = false;
  onError: boolean = false;
  serverResponse:string;
  constructor(private tagService : TagService,
    private categoryService :CategoryService,
    private adminpanelService:AdminpanelService,
    private postdetailservice:PostdetailService,
    private route: ActivatedRoute) {}

  setCategories(){
    this.categoryService.getCategory().subscribe(cats=>this.categories=cats);
  }
  setTags():void{
    this.tagService.getTags().subscribe(tags => this.tags=tags);
  }

onFileChanged(event: any) {
  this.selectedImage=event.target.files[0];
  this.adminpanelService.uploadImage(this.selectedImage).subscribe(res=>{
    this.response=res
    this.setImage(this.selectedImage.name);
    });
}
  setImage(imagename){
    this.imagesrc="http://ardeshirahouri.ir:8080/images/"+imagename;
    this.post.postImage=imagename;
  }

  onChangeCategory(category:any){
    this.selectedCategory=category;
  }
  addTag(tag: any) {
    this.selectedTag.push(<Tag>tag);
  }
  removeTag(tag:any){
    const index: number = this.selectedTag.indexOf(tag);
    if (index !== -1) {
        this.selectedTag.splice(index, 1);
    }   
  }

  onSubmit() {
    this.post.postId=this.postid.value;
    this.post.postTitle=this.posttitle.value;
    this.post.postTitleUrl=this.posttitleurl.value;
    this.post.tags=this.selectedTag;
    this.post.postCategory=this.selectedCategory;
    this.post.postContent=this.postcontent.value;
    this.adminpanelService.sendNewPost(this.post).subscribe(res=>{
      this.onSuccess=true;
      if(this.postid.value==='0')
      this.serverResponse=res.status+' --- postId is'+res.model.postId;
      else
      this.serverResponse='post edited';
      this.postid.setValue(res.model.postId);
      console.log(res)
    },error=>{
      this.onError=true;
      this.serverResponse=error.message;
    });
  }
  getPost(postid)
  {
   this.postdetailservice.getPostDetail(postid).subscribe(res =>
    {
    this.postid.setValue(res.postId);
    this.posttitle.setValue(res.postTitle);
    this.posttitleurl.setValue(res.postTitleUrl);
    this.postcontent.setValue(res.postContent);
    this.setImage(res.postImage);
    this.selectedValue=this.categories.find(x=>x.categoryId==res.postCategory.categoryId);
    this.selectedCategory=res.postCategory;
      res.tags.forEach(x=>{x.display=x.tagName;x.value=x.tagId});
     this.selectedTags= res.tags;
     this.selectedTag=res.tags;
   });
  
  }
  ngOnInit() {
  this.setTags();
  this.setCategories();
  this.postIdUrl = this.route.snapshot.paramMap.get('postid');
  if(this.postIdUrl!=null)
  this.getPost(this.postIdUrl);
  
  }

}