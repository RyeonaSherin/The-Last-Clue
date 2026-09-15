# 🕵️ The Last Clue

## 🔎 An Interactive Detective Mystery Web Application

**The Last Clue** is an interactive detective investigation web application built with **Angular**. Users take on the role of a detective, access classified case files, examine clues, investigate suspects, and solve mysterious cases.

The application combines essential Angular concepts with an engaging mystery-game experience, creating an interactive and immersive investigation environment.

---

## ✨ Features

* 🔐 Detective Login & Access Validation
* 🕵️ Interactive Detective Dashboard
* 📝 Investigator Profile using Reactive Forms
* 🔄 Two-Way Data Binding using `ngModel`
* 🧭 Angular Routing
* 🔎 Three Interactive Mystery Cases
* 🧩 Progressive Clue Investigation
* 👥 Suspect Investigation
* 🎯 Answer Validation
* ⏱️ Investigation Time Estimation
* ⏳ Live Case Investigation Timer
* 🔒 Password-Protected Final Case
* ✅ Case Solved / Failed States
* 📱 Responsive User Interface
* 🎨 Premium Dark Detective-Themed UI

---

# 📂 Mystery Cases

## 🔎 Case #001 — The Vanishing Hour

A mysterious clock stops at a specific time inside a study.

The detective must examine multiple clues and reconstruct the timeline to determine the exact time the clock stopped.

**Difficulty:** 🟢 Easy
**Estimated Investigation Time:** 5–8 minutes

---

## 🕵️ Case #002 — The Silent Witness

A security incident involves conflicting statements from multiple people.

By comparing security camera records, door logs, and witness statements, the detective must identify who is lying.

**Difficulty:** 🟡 Medium
**Estimated Investigation Time:** 8–12 minutes

---

## 🔐 Case #003 — The Midnight Murder

The final investigation takes place inside a mysterious mansion where a murder has occurred.

Four suspects provide different alibis. The detective must analyze the timeline, security records, and evidence to identify the killer.

**Difficulty:** 🔴 Hard
**Estimated Investigation Time:** 12–18 minutes

> ⚠️ Case #003 requires a special access code before the investigation can begin.

---

# 🛠️ Technologies Used

* **Angular**
* **TypeScript**
* **HTML5**
* **CSS3**
* **Angular Forms**
* **Angular Reactive Forms**
* **Angular Router**

---

# 🧠 Angular Concepts Implemented

### 🔄 Two-Way Data Binding

Implemented using `[(ngModel)]` to handle user input and dynamically update the application interface.

### 📝 Reactive Forms

Used to create and validate the investigator profile form.

### 🧩 Component-Based Architecture

Different sections of the application are organized into reusable and independent Angular components.

### 🧭 Angular Routing

Routing is used to navigate between different sections of the application:

* Login
* Dashboard
* Case #001
* Case #002
* Case #003

### 👁️ Conditional Rendering

Used to dynamically display:

* Login errors
* Investigation clues
* Investigation results
* Locked and unlocked case content
* Solved and failed states

### 🖱️ Event Binding

Used for interactive actions such as:

* Detective login
* Revealing clues
* Submitting answers
* Unlocking cases
* Resetting investigations

---

# 📁 Project Structure

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
```

---

# 🚀 Getting Started

Follow these steps to run **The Last Clue** locally.

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

## 2. Navigate to the Project

```bash
cd The-Last-Clue
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start the Development Server

```bash
ng serve
```

## 5. Open the Application

Open your browser and visit:

```text
http://localhost:4200
```

---

# 🔑 Demo Login Credentials

Use the following credentials to access the application.

| Field            | Value     |
| ---------------- | --------- |
| **Detective ID** | `Ryeona`  |
| **Access Code**  | `noir123` |

### 🔐 Case #003 Access Code

```text
shadow
```

> 💡 The Case #003 access code is required to unlock the final investigation.

---

# 🎯 Project Objective

The main objective of **The Last Clue** is to demonstrate how Angular can be used to build an interactive, component-based web application while applying important concepts such as:

* Component architecture
* Angular routing
* Reactive forms
* Two-way data binding
* Event binding
* Conditional rendering
* User input handling
* Form validation
* Interactive UI development

The project transforms these technical concepts into an engaging **detective investigation experience**.

---

# 🌟 Key Highlights

* 🕵️ Interactive detective investigation experience
* 🔎 Multiple mystery cases
* 🎚️ Different levels of difficulty
* 🧩 Evidence-based investigation
* 🔐 Progressive case unlocking
* 📝 Investigator profile creation
* ⏳ Real-time investigation timer
* 🎯 Dynamic answer validation
* 🔒 Password-protected final case
* 🧭 Angular routing
* 📱 Responsive interface
* 🎨 Premium dark detective-themed design

---

# 🔮 Future Enhancements

The project can be further expanded with:

* 🏆 Detective ranking system
* 📜 Case completion history
* 💾 Persistent investigation progress
* 🔎 Additional mystery cases
* 🎵 Sound effects and background music
* 🧪 Advanced evidence interactions
* 🥇 Detective leaderboards
* 🔐 Backend authentication
* 🗄️ Database integration
* 👤 Multiple detective profiles

---

# 👩‍💻 Developed By

### Ryeona Sherin R

**Project:** The Last Clue
**Technology:** Angular
**Domain:** Interactive Web Application / Mystery Investigation

---

# 📜 License

This project was created for **educational and project demonstration purposes**.

---
