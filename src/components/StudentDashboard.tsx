import { useState } from "react";
import type { Student } from "../game/types/student";

type StudentDashboardProps = {
  student: Student;
};

function StudentDashboard({ student: initialStudent }: StudentDashboardProps) {
  const [student, setStudent] = useState(initialStudent);
  const [message, setMessage] = useState("");

  const study = () => {
    if (student.energy < 10) {
      setMessage("🥱 You're too tired to study right now.");
      return;
    }

    setStudent((current) => ({
      ...current,
      energy: current.energy - 10,
      academics: Math.min(current.academics + 5, 100),
    }));

    setMessage("📚 You locked in! Academics +5, Energy -10.");
  };

  return (
    <main>
      <h1>Student Life Simulator</h1>

      <h2>{student.name}</h2>

      <p>
        Age: {student.age} · {student.gender}
      </p>

      <p>🌍 Country: {student.country}</p>
