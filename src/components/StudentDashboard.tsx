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
      setMessage("You are too tired to study right now.");
      return;
    }

    setStudent((current) => ({
      ...current,
      energy: current.energy - 10,
      academics: Math.min(current.academics + 5, 100),
    }));

    setMessage("You locked in! Academics +5, Energy -10.");
  };

  return (
    <main>
      <h1>Student Life Simulator</h1>

      <h2>{student.name}</h2>

      <p>
        Age: {student.age} - {student.gender}
      </p>

      <p>Country: {student.country}</p>
      <p>Background: {student.background}</p>

      <p>
        Money: {student.currencySymbol}
        {student.money.toLocaleString()}
      </p>

      <p>Energy: {student.energy}</p>
      <p>Academics: {student.academics}</p>
      <p>Social: {student.social}</p>

      <h3>What do you want to do?</h3>

      <button onClick={study}>Study</button>
      <button>Eat</button>
      <button>Rest</button>
      <button>Explore</button>

      {message && <p>{message}</p>}
    </main>
  );
}

export default StudentDashboard;
