import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NoteService } from "../note.service";

@Component({
  selector: 'app-noteform',
  templateUrl: './noteform.component.html',
  styleUrls: ['./noteform.component.css']
})
export class NoteformComponent implements OnInit {
  notes;
  noteForm;

  constructor(
    private noteService: NoteService,
    private formBuilder: FormBuilder,) { 
      this.noteForm = this.formBuilder.group({
        title: '',
        content: ''
      });
    }

  ngOnInit(): void {
  }

  onSubmit(noteData) {
    this.noteService.createNote(noteData);
    console.log('Your note has been submitted', noteData);
  }

}
