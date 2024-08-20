import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { ColorTilesComponent } from './color-tiles/color-tiles.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { HoverDirective } from './directives/hover.directive';
import { OverdueHighlightDirective } from './directives/overdue-highlight.directive';
import { StatusFilterPipe } from './pipes/status-filter.pipe';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    // UserProfileComponent,
    ColorTilesComponent,
    TasklistComponent,
    HoverDirective,
    OverdueHighlightDirective,
    StatusFilterPipe,
    TaskdetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
