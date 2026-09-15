import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-case3',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './case3.html',
  styleUrl: './case3.css'
})
export class Case3 {

  locked = true;

  accessCode = '';
  accessMessage = '';

  currentClue = 0;

  answer = '';
  message = '';

  solved = false;

  clues = [

    {
      title: 'THE CRIME SCENE',
      text: 'At 11:42 PM, Dr. Adrian Vale was found unresponsive inside his private study. The room was locked from the inside, but the investigation revealed that the door had been opened shortly before the incident.'
    },

    {
      title: 'THE BROKEN WATCH',
      text: 'A damaged wristwatch belonging to Dr. Vale was discovered near the desk. Its last recorded time was 11:31 PM. Investigators believe this marks the approximate time the incident occurred.'
    },

    {
      title: 'THE PHONE RECORD',
      text: 'Dr. Vale received a phone call at 11:27 PM. The call lasted exactly two minutes. The caller was identified as Victor Hale.'
    },

    {
      title: 'THE FOUR SUSPECTS',
      text: 'Victor Hale claims he left the mansion at 11:20 PM. Sarah Quinn says she was in the kitchen from 11:00 PM until midnight. Ethan Cole claims he was in the library. Maya Reed says she arrived at 11:35 PM.'
    },

    {
      title: 'THE SECURITY LOG',
      text: 'The mansion security system recorded Victor Hale entering the study corridor at 11:29 PM. His access card was used again at 11:34 PM.'
    },

    {
      title: 'THE FINAL CONTRADICTION',
      text: 'Victor claimed he had already left the mansion before 11:20 PM. However, the security system places his access card inside the study corridor between 11:29 PM and 11:34 PM — only minutes before the estimated time of the incident.'
    }

  ];


  unlockCase() {

    if (this.accessCode.trim().toLowerCase() === 'shadow') {

      this.locked = false;
      this.accessMessage = '';

    } else {

      this.accessMessage =
        'ACCESS DENIED. The case file remains locked.';
    }
  }


  revealNextClue() {

    if (this.currentClue < this.clues.length - 1) {

      this.currentClue++;

    }
  }


  checkAnswer() {

    const userAnswer = this.answer
      .trim()
      .toLowerCase();

    if (
      userAnswer === 'victor' ||
      userAnswer === 'victor hale'
    ) {

      this.message =
        '✓ Correct. Victor Hale is the killer.';

      this.solved = true;

    } else {

      this.message =
        '✕ The evidence does not support that answer. Reconstruct the timeline again.';

      this.solved = false;

    }
  }


  resetCase() {

    this.currentClue = 0;

    this.answer = '';

    this.message = '';

    this.solved = false;

  }

}