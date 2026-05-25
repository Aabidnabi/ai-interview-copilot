export async function createInterviewSession(payload: {
  role: string;
  experience_level: string;
  tech_stack: string[];
  interview_type: string;
  duration_minutes: number;
}) {
  const response = await fetch("http://127.0.0.1:8000/interviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to create interview");
  }

  return response.json();
}
