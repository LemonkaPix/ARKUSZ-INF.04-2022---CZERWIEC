import { useState } from 'react';

const CourseRegistrationComponent = () => {
  const courses = ["Programowanie w C#", "Angular dla początkujących", "Kurs Django"]
  const [fullName, setFullName] = useState("");
  const [pickNumber, setpickNumber] = useState("");

  const handleClickRegister = () => {
    console.log(fullName);
    let courseID = 0;
    courseID = pickNumber - 1;
    if (courses[courseID] != undefined)
      console.log(courses[pickNumber - 1]);
    else
      console.log("Nieprawidłowy numer kursu");
  }
  return (
    <div>
      <h2>Liczba kursów: {courses.length}</h2>
      <ol>
        {courses.map((courses, index) => (
          <li key={index}>{courses}</li>
        ))}
      </ol>
      {/* <form> */}
      <div>
        <label>Imię i nazwisko:</label><br />
        <input type='text' onChange={(e) => setFullName(e.target.value)}></input><br />
      </div>
      <div>
        <label>Numer kursu:</label><br />
        <input type='number' onChange={(e) => setpickNumber(e.target.value)}></input><br />
      </div>
      <button onClick={handleClickRegister}>Zapisz do kursu</button>
      {/* </form> */}
    </div>

  );
}

export {CourseRegistrationComponent};
