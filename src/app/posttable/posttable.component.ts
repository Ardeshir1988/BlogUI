import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../service/post.service';
import { CommunicateService } from '../service/communicate.service';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminpanelService } from '../service/adminpanel.service';
import { post } from 'selenium-webdriver/http';
import { stringify } from '@angular/core/src/util';


@Component({
  selector: 'app-posttable',
  templateUrl: './posttable.component.html',
  styleUrls: ['./posttable.component.css']
})
export class PosttableComponent implements OnInit {

  postlist:Post[];
  constructor(
    private adminPanelService:AdminpanelService,
    private communicateService:CommunicateService,
    private router: Router) { }

  setPostList(){
    this.adminPanelService.getAllPost().subscribe(posts=>this.postlist=posts);
  }
  editPost(postid)
  {
    // window.open( "panel/posteditor/"+postid );
    this.router.navigate(['/panel/posteditor/'+postid]);
  }
  deletePost(postid)
  {
    this.adminPanelService.deletePost(postid).subscribe(res=>status=res.status,err=>{},()=>{
    const index: number = this.postlist.indexOf(  this.postlist.find(x=>x.postId==postid));
    console.log(index);
    if (index !== -1) {
        this.postlist.splice(index, 1);
    }    
  });
}
  addPost(any)
  {
    this.communicateService.getMessage(any);
  }
  ngOnInit() {
    this.setPostList();
  }
  

}
