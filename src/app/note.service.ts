import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes = [
    {
      id: 1,
      title: "note1title",
      content: "note1content"
    },
    {
      id: 2,
      title: "note2title",
      content: "note2content"
    }
  ];

  createNote(note) {
    this.notes.push(note);
  }

  getNotes() {
    return this.notes;
  }

  deleteNotes() {
    this.notes = [];
    return this.notes;
  }

  constructor() { }

}
