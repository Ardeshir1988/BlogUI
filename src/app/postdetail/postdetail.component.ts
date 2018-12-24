import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostdetailService } from '../service/postdetail.service';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '../tag';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {
  postId: string;
  postdetail: Post;
  constructor(private postDetailService : PostdetailService,private route: ActivatedRoute) {}
  setPostDetails(postid:string){
    this.postDetailService.getPostDetail(postid).subscribe( postdetail => this.postdetail=postdetail);
  }
  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.setPostDetails(this.postId);
  }
}