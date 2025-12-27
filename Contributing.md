# Contributing to FEM-CARE 💙

Thank you for your interest in contributing to **FEM-CARE AI**!  
This project is part of **Geekhaven OpenCode** and follows a beginner-friendly, structured contribution workflow.

FEM-CARE focuses on women’s health, PCOS severity prediction, symptom tracking, trend analysis, personalized wellness tips, and an empathetic mental-health chatbot.

## NOTE: This is a female only repository. Only PRs from female contributors will be accepted.

---

##  Contribution Workflow

1.  **Browse** the open issues.
2.  **Read** the issue description carefully.
3.  **Comment** `"I would like to work on this"` to express interest.
4.  **Wait** for assignment by maintainers before starting work.
5.  **Fork** the repository to your GitHub account.
6.  **Create** a new branch for your feature or fix.
7.  **Make changes** locally and test them.
8.  **Open a Pull Request** to the `main` branch of the original repo.

---

##  Mandatory Beginner Task

### 0. Add your name to `CONTRIBUTORS`
Add the following details to the `<ENROLLMENT_NUMBER>.md` file:
* Your Name
* GitHub Profile Link
* Contribution Role (Frontend / Backend / ML / Docs / Design)

*This ensures proper attribution for your work!*

---

##  Local Development Setup

Follow the steps below to set up **FEM-CARE** on your local machine.

###  Prerequisites
Ensure the following tools are installed:

* **Git**: [Download](https://git-scm.com/downloads) (`git --version`)
* **Node.js (v18+)**: [Download](https://nodejs.org) (`node --version`)
* **Python (v3.9+)**: Required for ML components (`python --version`)

###  1. Fork & Clone
```bash
# Fork the repo on GitHub first, then clone your fork
git clone [https://github.com/](https://github.com/)<your-username>/Fem-care.git
cd Fem-care
```
###  2. Backend Setup
```bash
cd backend
npm install

# Setup Environment Variables
cp .env.example .env
# Fill in Database URL, JWT secret, and API keys in .env

# Start Server
npm run dev
# Backend runs on: http://localhost:5000
```
### 3. Frontend Setup
```bash
# Open a new terminal
cd frontend
npm install
npm run dev
# Frontend runs on: http://localhost:3000
```
### 4. Machine Learning Setup
```bash
cd ml-service
pip install -r requirements.txt

# Train the model (generates model.pkl)
python train_model.py
```
--
## Branching Commits
#### Branching naming convention
Use clear and consistent names
* **`feature/login-ui`**
* **`ml/train-random-forest`**
* **`fix/auth-token-error`**
* **`docs/update-readme`**

#### Create branch: `git checkout -b feature/your-branch-name`

#### Commit Message Guidelines
* **`feat: add login and signup UI`**
* **`fix: validate symptom input fields`**
* **`ml: add confidence score to predictions`**
--

## Pull request Rules
* **One PR per issue** Keep changes focused.
* **No Main Pushes**: Never push directly to the main branch.
* **Visuals**: Add screenshots or recordings for UI changes.
* **Link Issues**: Mention the issue number (e.g., Closes #12) in the PR description.
* **Clean Code**: Ensure no console logs or sensitive .env data are committed.
--

## Definition of done
* An issue is complete when the feature works as described, code is clean, no console errors exist, and the PR is reviewed and merged.
--

## Community Guidelines
* **Be Respectful**: Treat all contributors with kindness.
* **Inclusive**: We welcome everyone.
* **Feedback**: Keep it constructive and helpful.




