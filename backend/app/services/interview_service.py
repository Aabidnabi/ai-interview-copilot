import uuid
from app.services.question_generator import generate_mock_questions


def create_interview_session(payload):
    session_id = str(uuid.uuid4())

    questions = generate_mock_questions(
        role=payload.role,
        experience_level=payload.experience_level,
        tech_stack=payload.tech_stack,
        interview_type=payload.interview_type,
    )

    return {
        "session_id": session_id,
        "status": "created",
        "questions": questions,
    }