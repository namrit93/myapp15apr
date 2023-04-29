import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { DirComponent } from './dir/dir.component';
import { HighlightDirective } from './highlight.directive';
import { PipeComponent } from './pipe/pipe.component';
import { ReversePipe } from './reverse.pipe';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    AboutComponent,
    DirComponent,
    HighlightDirective,
    PipeComponent,
    ReversePipe,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
