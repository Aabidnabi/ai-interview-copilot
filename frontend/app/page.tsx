"use client";

import { useState } from "react";
import { createInterviewSession } from "@/lib/api";

export default function Home() {
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("Mid");
  const [techStack, setTechStack] = useState("");
  const [interviewType, setInterviewType] = useState("Technical");
  const [duration, setDuration] = useState(30);
  const [sessionId, setSessionId] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCreateInterview() {
    setLoading(true);

    try {
      const result = await createInterviewSession({
        role,
        experience_level: experience,
        tech_stack: techStack
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
        interview_type: interviewType,
        duration_minutes: duration,
      });

      setSessionId(result.session_id);
    } catch {
      alert("Failed to create interview");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-xl flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center">
          AI Interview Copilot
        </h1>

        <input
          type="text"
          placeholder="Job Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-3 rounded"
        />

        <select
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="border p-3 rounded"
        >
          <option>Junior</option>
          <option>Mid</option>
          <option>Senior</option>
        </select>

        <input
          type="text"
          placeholder="Tech Stack (comma separated)"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
          className="border p-3 rounded"
        />

        <select
          value={interviewType}
          onChange={(e) => setInterviewType(e.target.value)}
          className="border p-3 rounded"
        >
          <option>Technical</option>
          <option>Behavioral</option>
          <option>System Design</option>
        </select>

        <select
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="border p-3 rounded"
        >
          <option value={15}>15 minutes</option>
          <option value={30}>30 minutes</option>
          <option value={45}>45 minutes</option>
          <option value={60}>60 minutes</option>
        </select>

        <button
          onClick={handleCreateInterview}
          disabled={loading}
          className="bg-black text-white rounded p-3"
        >
          {loading ? "Creating..." : "Create Interview Session"}
        </button>

        {sessionId && (
          <div className="border rounded p-4 break-all">
            Session Created: {sessionId}
          </div>
        )}
      </div>
    </main>
  );
}