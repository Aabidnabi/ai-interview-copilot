from fastapi import APIRouter
from app.schemas.interview import (
    InterviewCreateRequest,
    InterviewCreateResponse
)
from app.services.interview_service import create_interview_session

router = APIRouter(prefix="/interviews", tags=["interviews"])

@router.post("", response_model=InterviewCreateResponse)
def create_interview(payload: InterviewCreateRequest):
    session_id = create_interview_session()

    return InterviewCreateResponse(
        session_id=session_id,
        status="created"
    )