import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { colors } from '../common/colors'

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.sass']
})
export class NotesListComponent implements OnInit {

  colors: any

  notesRef: AngularFireList<any>;
  notes: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.notesRef = db.list('/notes')
    this.notes = this.notesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key,
        ...c.payload.val()
      }))
    })

    this.colors = colors

    // this.db.list('/notes').remove()
  }

  ngOnInit() {
    this.notes.forEach(item => {
      console.log(item)
    })
  }

  createNote(){
    this.db.list('/notes').push({
      title: 'Title here',
      description: 'Description here',
      color: 'tomato'
    })
  }

  changeColor(note, color){
    note.color = color
  }

  deleteNote(note){
    this.db.list('notes').remove(note.key)
  }

}
