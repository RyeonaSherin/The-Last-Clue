import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-case2',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './case2.html',
  styleUrl: './case2.css'
})
export class Case2 {

  currentClue = 0;
  answer = '';
  message = '';
  solved = false;

  clues = [
    {
      title: 'THE SECURITY CAMERA',
      text: 'The hallway camera recorded someone entering the archive room at exactly 9:18 PM. The person remained inside for approximately 6 minutes.'
    },
    {
      title: 'THE ARCHIVE DOOR',
      text: 'The electronic door log shows the archive room was opened at 9:18 PM and locked again at 9:24 PM.'
    },
    {
      title: 'MAYA REED',
      text: 'Maya claims: "I was in the cafeteria from 9:10 PM until 9:30 PM. I never went near the archive room."'
    },
    {
      title: 'LIAM CROSS',
      text: 'Liam says: "I entered the archive room around 9:20 PM and left a few minutes later." His statement matches the door log.'
    },
    {
      title: 'THE SILENT WITNESS',
      text: 'A nearby desk lamp was switched on at 9:19 PM. Its automatic activity log shows that only the archive-room terminal could trigger it.'
    }
  ];

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
      userAnswer === 'maya' ||
      userAnswer === 'maya reed'
    ) {
      this.message = '✓ Correct! Maya Reed is lying.';
      this.solved = true;
    } else {
      this.message =
        '✕ That answer does not match the evidence. Examine the clues again.';
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