import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/user/login/login.component';
import { RegisterComponent } from './component/user/register/register.component';
import { ProfileComponent } from './component/user/profile/profile.component';
import { WebsitelistComponent } from './component/website/websitelist/websitelist.component';
import { WebsiteNewComponent } from './component/website/website-new/website-new.component';
import { WebsiteEditComponent } from './component/website/website-edit/website-edit.component';
import { PageListComponent } from './component/page/page-list/page-list.component';
import { PageNewComponent } from './component/page/page-new/page-new.component';
import { PageEditComponent } from './component/page/page-edit/page-edit.component';
import { WidgetListComponent } from './component/widget/widget-list/widget-list.component';
import { WidgetChooserComponent } from './component/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './component/widget/widget-edit/widget-edit.component';
import { WidgetImageComponent } from './component/widget/widget-edit/widget-image/widget-image.component';
import { WidetYoutubeComponent } from './component/widget/widget-edit/widet-youtube/widet-youtube.component';
import { WidgetHeadingComponent } from './component/widget/widget-heading/widget-heading.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    WebsitelistComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    PageListComponent,
    PageNewComponent,
    PageEditComponent,
    WidgetListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetImageComponent,
    WidetYoutubeComponent,
    WidgetHeadingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
