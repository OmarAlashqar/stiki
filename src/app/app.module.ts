import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { HeaderComponent } from './components/header/header.component';

import { ContenteditableDirective } from 'ng-contenteditable';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    HeaderComponent,
    ContenteditableDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'stiki'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
