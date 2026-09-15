# 🕵️ The Last Clue

## 🔎 An Interactive Detective Mystery Web Application

**The Last Clue** is an interactive detective investigation web application built with Angular. Users take the role of a detective, access classified case files, examine clues, investigate suspects, and solve mysterious cases.

The application combines Angular concepts with an engaging mystery-game experience.

---

## ✨ Features

- 🔐 Detective Login & Access Validation
- 🕵️ Interactive Detective Dashboard
- 📝 Investigator Profile using Reactive Forms
- 🔄 Two-Way Data Binding using `ngModel`
- 🧭 Angular Routing
- 🔎 Three Interactive Mystery Cases
- 🧩 Progressive Clue Investigation
- 👥 Suspect Investigation
- 🎯 Answer Validation
- ⏱️ Investigation Time Estimation
- ⏳ Live Case Investigation Timer
- 🔒 Password-Protected Final Case
- ✅ Case Solved / Failed States
- 📱 Responsive User Interface
- 🎨 Premium Dark Detective-Themed UI

---

## 📂 Cases

### 🔎 Case #001 – The Vanishing Hour

A mysterious clock stops at a specific time inside a study.

The detective must examine multiple clues and reconstruct the timeline to determine the exact time the clock stopped.

**Difficulty:** Easy  
**Estimated Time:** 5–8 minutes

---

### 🕵️ Case #002 – The Silent Witness

A security incident involves conflicting statements from multiple people.

By comparing security camera records, door logs, and witness statements, the detective must identify who is lying.

**Difficulty:** Medium  
**Estimated Time:** 8–12 minutes

---

### 🔐 Case #003 – The Midnight Murder

The final investigation involves a murder inside a mansion.

Four suspects provide different alibis. The detective must analyze the timeline, security records, and evidence to identify the killer.

**Difficulty:** Hard  
**Estimated Time:** 12–18 minutes

---

## 🛠️ Technologies Used

- **Angular**
- **TypeScript**
- **HTML5**
- **CSS3**
- **Angular Forms**
- **Angular Reactive Forms**
- **Angular Router**

---

## 🧠 Angular Concepts Implemented

This project demonstrates several important Angular concepts:

### Two-Way Data Binding

Used with `[(ngModel)]` for handling user input and dynamically updating the interface.

### Reactive Forms

Used for creating and validating the investigator profile form.

### Component-Based Architecture

Different application sections are organized into separate Angular components.

### Angular Routing

Used to navigate between:

- Login
- Dashboard
- Case #001
- Case #002
- Case #003

### Conditional Rendering

Used to dynamically display:

- Login errors
- Case clues
- Investigation results
- Locked/unlocked case content
- Solved/unsolved states

### Event Binding

Used for actions such as:

- Login
- Revealing clues
- Submitting answers
- Unlocking cases
- Resetting investigations

---

## 📁 Project Structure

```text
The-Last-Clue/
│
├── src/
│   └── app/
│       │
│       ├── login/
│       │   ├── login.ts
│       │   ├── login.html
│       │   └── login.css
│       │
│       ├── dashboard/
│       │   ├── dashboard.ts
│       │   ├── dashboard.html
│       │   └── dashboard.css
│       │
│       ├── case/
│       │   ├── case.ts
│       │   ├── case.html
│       │   └── case.css
│       │
│       ├── case2/
│       │   ├── case2.ts
│       │   ├── case2.html
│       │   └── case2.css
│       │
│       ├── case3/
│       │   ├── case3.ts
│       │   ├── case3.html
│       │   └── case3.css
│       │
│       ├── app.ts
│       ├── app.html
│       ├── app.css
│       └── app.routes.ts
│
├── public/
├── package.json
├── angular.json
└── README.md
