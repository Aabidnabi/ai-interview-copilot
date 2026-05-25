def generate_mock_questions(
    role: str,
    experience_level: str,
    tech_stack: list[str],
    interview_type: str,
):
    questions = []

    if interview_type == "Technical":
        questions = [
            f"Explain your experience with {tech_stack[0] if tech_stack else 'your primary technology'}.",
            f"How would you design a scalable system for a {role} role?",
            "Describe a challenging technical problem you solved."
        ]

    elif interview_type == "Behavioral":
        questions = [
            "Tell me about a difficult team conflict.",
            "Describe a failure and what you learned.",
            "How do you handle deadlines under pressure?"
        ]

    elif interview_type == "System Design":
        questions = [
            "Design a URL shortener.",
            "Design a scalable chat application.",
            "How would you architect a notification system?"
        ]

    return questions