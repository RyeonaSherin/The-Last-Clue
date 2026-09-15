import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-case',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './case.html',
  styleUrl: './case.css'
})
export class Case implements OnInit, OnDestroy {

  currentClue = 0;
  answer = '';
  message = '';
  solved = false;

  // ================= CASE ESTIMATOR =================

  difficulty = 'EASY';
  estimatedTime = '5–8 min';

  elapsedSeconds = 0;
  timer: any;

  // ================= CLUES =================

  clues = [
    {
      title: 'THE STUDY CLOCK',
      text: 'A photograph taken from the hallway shows the study clock displaying 10:30 PM. Investigators discovered that the photograph was taken exactly 7 minutes before the clock stopped.'
    },
    {
      title: 'THE BROKEN GLASS',
      text: 'A broken glass was discovered near the study door. The forensic report estimates that it was broken within one minute of the clock stopping.'
    },
    {
      title: 'ALEX MORGAN',
      text: 'Alex says: "I passed the study at around 10:20 PM. The clock was still running."'
    },
    {
      title: 'EMMA CARTER',
      text: 'Emma claims she heard the grandfather clock chime ten times. This places her near the kitchen around 10:00 PM.'
    },
    {
      title: 'DANIEL ROSS',
      text: 'Daniel claims he left at exactly 9:55 PM. The front-door sensor recorded his exit at 9:56 PM.'
    }
  ];

  // ================= START TIMER =================

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {

      if (!this.solved) {
        this.elapsedSeconds++;
      }

    }, 1000);
  }

  // ================= FORMAT TIME =================

  get formattedTime(): string {

    const minutes = Math.floor(this.elapsedSeconds / 60);

    const seconds = this.elapsedSeconds % 60;

    return `${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  pad(value: number): string {
    return value.toString().padStart(2, '0');
  }

  // ================= CLUE =================

  revealNextClue() {

    if (this.currentClue < this.clues.length - 1) {
      this.currentClue++;
    }

  }

  // ================= ANSWER =================

  checkAnswer() {

    const userAnswer = this.answer
      .trim()
      .toLowerCase()
      .replace(/\s/g, '');

    if (userAnswer === '10:37pm' || userAnswer === '10:37') {

      this.message =
        '✓ Correct! The clock stopped at 10:37 PM.';

      this.solved = true;

      this.stopTimer();

    } else {

      this.message =
        '✕ That answer does not match the evidence. Examine the clues again.';

      this.solved = false;

    }

  }

  // ================= STOP TIMER =================

  stopTimer() {

    if (this.timer) {
      clearInterval(this.timer);
    }

  }

  // ================= RESET CASE =================

  resetCase() {

    this.stopTimer();

    this.currentClue = 0;
    this.answer = '';
    this.message = '';
    this.solved = false;
    this.elapsedSeconds = 0;

    this.startTimer();

  }

  // ================= CLEANUP =================

  ngOnDestroy() {

    this.stopTimer();

  }

}