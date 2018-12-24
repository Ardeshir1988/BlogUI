import { Component, OnInit, ComponentFactoryResolver, ViewChild, Input, OnDestroy, ComponentRef, SimpleChanges } from '@angular/core';
import { AdminpanelService } from '../service/adminpanel.service';
import { Statistic } from '../statistic';
import { PanelDirective } from '../directive/panel.directive';

import { PosttableComponent } from '../posttable/posttable.component';
import { PosteditorComponent } from '../posteditor/posteditor.component';
import { CommunicateService } from '../service/communicate.service';
import { CategoriesComponent } from '../categories/categories.component';
import { TagsComponent } from '../tags/tags.component';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit,OnDestroy {

  statistic:Statistic;
  postideditor:string='';

  @ViewChild(PanelDirective) paneldirective:PanelDirective;
  componentRef: ComponentRef<any>;

  constructor(private panelservice:AdminpanelService,
    private componentFactoryResolver:ComponentFactoryResolver,
    private communicateService:CommunicateService) {
      this.communicateService.sentMessage$.subscribe(res=>{
        this.changeComponent(res);
      });
     }
  
  setStatistic(){
    this.panelservice.getStatistic().subscribe(statistic=>this.statistic=statistic);
  }

  ngOnInit() {
    this.setStatistic();
    this.loadComponent(PosttableComponent);
  }

  ngOnDestroy() {
    this.componentRef.destroy();

  }

  loadComponent(component) {

      
    this.paneldirective.viewContainerRef.clear();

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    let viewContainerRef = this.paneldirective.viewContainerRef;

    this.componentRef= viewContainerRef.createComponent(componentFactory);
    

  }

  changeComponent(any)
  {
    console.log('ssssssssssssssssssss'+any);
    switch(any) { 
      case 'PosteditorComponent': { 
         this.loadComponent(PosteditorComponent);
         break; 
      } 
      case 'PosttableComponent': { 
          this.loadComponent(PosttableComponent);
         break; 
      } 
      case 'CategoryComponent': { 
        console.log(any);
        this.loadComponent(CategoriesComponent);
       break; 
    } 
    case 'TagComponent': { 
      this.loadComponent(TagsComponent);
     break; 
  } 
      default: { 
         //statements; 
         break; 
      } 
   } 

  }


}