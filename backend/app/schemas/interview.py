from pydantic import BaseModel
from typing import List


class InterviewCreateRequest(BaseModel):
    role: str
    experience_level: str
    tech_stack: List[str]
    interview_type: str
    duration_minutes: int


class InterviewCreateResponse(BaseModel):
    session_id: str
    status: str
    questions: List[str]