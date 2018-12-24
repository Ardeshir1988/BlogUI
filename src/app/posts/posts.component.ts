import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../post';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[];
  constructor(private postService : PostService,private router: Router,private route:ActivatedRoute) { }

  setPosts(){
    this.postService.getPosts().subscribe(posts=>this.posts=posts);
  }
  findAllPostsByTagName(tagName:string)
  {
    this.postService.getPostsByTagName(tagName).subscribe(posts=>this.posts=posts);
  }
  searchByKeyword(keyword:string)
  {
    this.postService.searchPostByKeword(keyword).subscribe(posts=>this.posts=posts);
  }
  gotoPostDetail(post)
  {
    this.router.navigateByUrl('/posts/'+post.postId+'/'+post.postCategory.categoryName.split(' ').join('-')+'/'+post.postTitleUrl.split(' ').join('-'));
  }
  ngOnInit() {
   // this.setPosts();
    this.route.queryParams.subscribe(params => { 
    if(params['tagname']!=null)
    {
    this.findAllPostsByTagName(params['tagname']);
    }else if(params['keyword']!=null){
        this.searchByKeyword(params['keyword']);
    }
  else
  {
     this.setPosts();
  }
  })
  

  }

}