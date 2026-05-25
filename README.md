# AI Interview Copilot

<p align="center">
  <strong>AI-powered mock interview platform built with FastAPI, Next.js, TypeScript, and Docker.</strong>
</p>

<p align="center">
  Full-stack AI interview preparation system for technical, behavioral, and system design interview practice.
</p>

---

## Overview

AI Interview Copilot is a full-stack AI interview preparation platform designed to simulate realistic interview experiences for software engineers and technical professionals.

The platform allows users to configure customized interview sessions based on their target role, experience level, technical stack, interview type, and session duration.

Currently, the application includes dynamic interview session creation and AI-style mock question generation with a scalable architecture prepared for real LLM integration.

---

## Features

### Current Features

- Full-stack web application
- FastAPI backend architecture
- Next.js frontend with TypeScript
- REST API communication
- Interview session creation
- Dynamic interview configuration form
- Mock AI question generation
- Swagger API documentation
- CORS-enabled frontend/backend integration
- Docker-ready development setup
- GitHub-ready production-style project structure

---

## Interview Configuration

Users can configure interview sessions with:

- **Target Role**
  - Backend Engineer
  - Frontend Engineer
  - Full Stack Engineer
  - Data Engineer
  - ML Engineer
  - Any custom role

- **Experience Level**
  - Junior
  - Mid
  - Senior

- **Tech Stack**
  - Python
  - FastAPI
  - React
  - Next.js
  - PostgreSQL
  - Docker
  - Custom technologies

- **Interview Type**
  - Technical
  - Behavioral
  - System Design

- **Duration**
  - 15 minutes
  - 30 minutes
  - 45 minutes
  - 60 minutes

---

## Example Workflow

```text
User fills interview form
        ↓
Frontend validates input
        ↓
POST /interviews
        ↓
FastAPI route receives request
        ↓
Pydantic schema validation
        ↓
Interview service processes request
        ↓
Question generator service creates questions
        ↓
Response returned to frontend
        ↓
Questions displayed to user
```

---

## Example API Request

### Create Interview Session

**Endpoint**

```http
POST /interviews
```

**Request Body**

```json
{
  "role": "Backend Engineer",
  "experience_level": "Senior",
  "tech_stack": ["Python", "FastAPI", "PostgreSQL"],
  "interview_type": "Technical",
  "duration_minutes": 45
}
```

**Response**

```json
{
  "session_id": "da01c898-c2aa-4dc8-8e4b-93d591a95a20",
  "status": "created",
  "questions": [
    "Explain your experience with Python.",
    "How would you design a scalable system for a Backend Engineer role?",
    "Describe a challenging technical problem you solved."
  ]
}
```

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- FastAPI
- Python
- Pydantic
- Uvicorn

### Tooling

- Docker Desktop
- Git
- GitHub
- VS Code

---

## Project Architecture

```text
ai-interview-copilot/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   │
│   │   ├── routes/
│   │   │   ├── health.py
│   │   │   └── interview.py
│   │   │
│   │   ├── services/
│   │   │   ├── interview_service.py
│   │   │   └── question_generator.py
│   │   │
│   │   ├── schemas/
│   │   │   └── interview.py
│   │   │
│   │   ├── models/
│   │   └── core/
│   │
│   └── venv/
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   └── page.tsx
│   │   │
│   │   └── lib/
│   │       └── api.ts
│
├── docs/
├── infra/
├── .gitignore
└── README.md
```

---

## Backend Endpoints

### Health Check

```http
GET /health
```

Response:

```json
{
  "status": "healthy"
}
```

---

### Root Endpoint

```http
GET /
```

Response:

```json
{
  "message": "AI Interview Copilot API running"
}
```

---

### Create Interview Session

```http
POST /interviews
```

Creates a new interview session and generates mock AI interview questions.

---

## Local Development Setup

## Prerequisites

Install:

- Python 3.12+
- Node.js 20+
- npm
- Git
- Docker Desktop
- VS Code

---

## Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install fastapi uvicorn python-dotenv
uvicorn app.main:app --reload
```

Backend runs at:

```text
http://localhost:8000
```

Swagger API docs:

```text
http://localhost:8000/docs
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:3000
```

---

## Development Roadmap

### Phase 1 — Foundation ✅

- Project setup
- FastAPI backend
- Next.js frontend
- API integration
- Interview session creation
- Mock AI question generation

---

### Phase 2 — Frontend UX

- Display generated interview questions
- Better form validation
- Loading states
- Improved UI/UX
- Session summary page

---

### Phase 3 — Real AI Integration

- OpenAI integration
- Claude integration
- Prompt engineering
- Dynamic interview question generation
- Context-aware questioning

---

### Phase 4 — Voice Interview System

- Microphone capture
- Speech-to-text
- AI interviewer voice
- Real-time conversation flow

---

### Phase 5 — Evaluation Engine

- AI answer scoring
- Communication assessment
- Technical accuracy scoring
- Confidence analysis
- Feedback reports

---

### Phase 6 — Persistence Layer

- PostgreSQL integration
- Session storage
- Interview history
- Transcript storage
- Analytics dashboard

---

### Phase 7 — Production Engineering

- Docker Compose
- CI/CD pipeline
- Cloud deployment
- Authentication
- User dashboard
- Monitoring/logging

---

## Why This Project Matters

This project demonstrates:

- Full-stack software engineering
- Backend API architecture
- Frontend/backend integration
- Scalable service-oriented design
- AI application architecture
- Type-safe API development
- Modern engineering workflows
- Production-style project organization

This is designed as a portfolio-grade engineering project.

---

## Author

**Aabid Nabi**

GitHub: https://github.com/Aabidnabi
