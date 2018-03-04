import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { colors } from '../../common/colors'

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.sass']
})
export class NotesListComponent implements OnInit {

  colors: any

  notesRef: AngularFireList<any>;
  notes: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.notesRef = this.db.list('/notes')
    this.notes = this.notesRef.snapshotChanges(['child_added', 'child_removed']).map(changes => {
      return changes.map(c => ({
        key: c.payload.key,
        ...c.payload.val()
      }))
    })

    this.colors = colors
  }

  createNote(){
    this.notesRef.push({
      title: 'Title here',
      description: 'Description here',
      color: 'tomato'
    })
  }

  updateTitle(note, title){
    this.notesRef.update(note.key, {title: title})
  }

  updateDescription(note, description){
    this.notesRef.update(note.key, {description: description})
  }

  changeColor(note, color){
    note.color = color
    this.notesRef.update(note.key, {color: color})
  }

  deleteNote(note){
    this.notesRef.remove(note.key)
  }

}
