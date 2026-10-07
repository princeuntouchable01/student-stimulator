import { useState } from "react";
import { generateStudent } from "./game/generators/student";
import NewLife from "./components/NewLife";
import StudentDashboard from "./components/StudentDashboard";
import type { Student } from "./game/types/student";

function App() {
  const [student, setStudent] = useState<Student | null>(null);

  const handleNewLife = () => {
    const newStudent = generateStudent();
    setStudent(newStudent);
  };

  if (!student) {
    return <NewLife onStart={handleNewLife} />;
  }

  return <StudentDashboard student={student} />;
}

export default App;
