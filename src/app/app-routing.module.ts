import { NgModule } from '@angular/core';
import { Routes, RouterModule ,CanActivate} from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {PostdetailComponent} from './postdetail/postdetail.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthGuardService as AuthGuard } from './service/auth-guard.service';
import { ImageComponent } from './image/image.component';
import { PosteditorComponent } from './posteditor/posteditor.component';


const routes: Routes = [
  {path: 'posts',component:PostsComponent, pathMatch : 'full'},
  {path: '',   redirectTo: '/posts', pathMatch: 'full' },
  {path: 'posts/:id/:postCategory/:postTitleUrl',component:PostdetailComponent, pathMatch : 'full'},
  {path: 'login',component:LoginComponent, pathMatch : 'full'},
  {path: 'panel',component:AdminPanelComponent, pathMatch : 'full',   canActivate: [AuthGuard] },
  {path:'img',component:ImageComponent,pathMatch:'full'},
  {path: 'panel/posteditor/:postid',component:PosteditorComponent, pathMatch : 'full',canActivate: [AuthGuard] },
  {path: '**',component:NotfoundpageComponent,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }