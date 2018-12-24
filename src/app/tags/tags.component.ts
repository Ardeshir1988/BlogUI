import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TagService } from '../service/tag.service';
import { Tag } from '../tag';
import { AdminpanelService } from '../service/adminpanel.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  taglist : Tag[];
  tag:Tag= {};
  tagid= new FormControl('0');
  tagname = new FormControl('');
  modal;
  @ViewChild('closeModalBtn') closeModalBtn: ElementRef;

  constructor(private tagService : TagService,
    private adminPanelService:AdminpanelService) { }
  setTags():void{
    this.tagService.getTags().subscribe(tags => this.taglist=tags);
  }
  newTag()
  {
    this.tagid.setValue('0');
    this.tagname.setValue('');
  }
  bindModal(tag:Tag){
    this.tagid.setValue(tag.tagId);
    this.tagname.setValue(tag.tagName);
  }
  addTag()
  {
    this.tag.tagId=this.tagid.value;
    this.tag.tagName=this.tagname.value;
    this.adminPanelService.SaveOrUpdateTag(this.tag).subscribe(res=>{},err=>{},()=>{
      this.closeModalBtn.nativeElement.click();
      this.setTags();
    });
  }
  deleteTag(tagid){
    this.adminPanelService.deleteTag(tagid).subscribe(res=>status=res.status,err=>{},()=>{
    const index: number = this.taglist.indexOf(  this.taglist.find(x=>x.tagId==tagid));
    console.log(index);
    if (index !== -1) {
        this.taglist.splice(index, 1);
    }    
  });
  }
  ngOnInit() {
  this.setTags();
  }
}
