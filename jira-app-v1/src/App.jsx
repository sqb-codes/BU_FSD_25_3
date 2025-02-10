import './App.css'
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import { useState } from 'react';

function App() {
  const [employees, setEmployees] = useState(["John", "Max"]);
  const [tasks, setTasks] = useState([]);

  const addNewEmp = (name) => setEmployees([...employees, name]);
  const deleteEmp = (name) => {
    setEmployees(employees.filter((employee) => employee !== name));
  }

    return (
      <>
        <Header/>
        <EmployeeList
          employees={employees}
          addEmp={addNewEmp}
          deleteEmp={deleteEmp}
        />
      </>
    )
}

export default App
