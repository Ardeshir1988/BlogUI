
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagsComponent } from './tags/tags.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { AuthService } from './interceptors/auth.service';
import { PosteditorComponent } from './posteditor/posteditor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TagInputModule } from 'ngx-chips';
import { ImageComponent } from './image/image.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { PosttableComponent } from './posttable/posttable.component';
import { PanelDirective } from './directive/panel.directive';
import { ResponsemodalComponent } from './responsemodal/responsemodal.component';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';

@NgModule({
  declarations: [
    AppComponent,
    TagsComponent,
    CategoriesComponent,
    PostsComponent,
    PostdetailComponent,
    LoginComponent,
    AdminPanelComponent,
    NotfoundpageComponent,
    PosteditorComponent,
    ImageComponent,
    PosttableComponent,
    PanelDirective,
    ResponsemodalComponent
  
  ],  entryComponents: [PosteditorComponent,PosttableComponent,TagsComponent,CategoriesComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TagInputModule,
    AngularEditorModule,
    NgxGistModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }