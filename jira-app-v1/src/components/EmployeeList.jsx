import { useState } from "react"

// function handleEmployee() {
//     const [empData, setEmpData] = useState({
//         empId: "",
//         empName: ""
//     });
//     const changeHandler = (e) => {
//         // console.log({...empData});
//         setEmpData({...empData, [e.target.name]: e.target.value});
//     }
//     return (
//         <div>
//             <input 
//                 type="text"
//                 placeholder="Enter Emp ID"
//                 value={empData.empId}
//                 name="empId"
//                 onChange={changeHandler}
//             />

//             <input 
//                 type="text"
//                 placeholder="Enter Emp Name"
//                 value={empData.empName}
//                 name="empName"
//                 onChange={changeHandler}
//             />
//             <button onClick={addEmp}>Add New Employee</button>
//         </div>
//     )
// }


const EmployeeList = ({employees, addEmp, deleteEmp}) => {
    const [newEmp, setNewEmp] = useState("");

    const handleNewEmp = () => {
        console.log("Adding new Emp : ",newEmp);
        if(newEmp.trim()) {
            addEmp(newEmp.trim());
            setNewEmp("");
        }
        console.log(employees);
    }

    return(
        <div className="emp-wrapper">
            <div className="emp-list">
                <h2>Employee List</h2>
                <ul>
                    {employees.map((emp, index) => (
                        <li key={index}>
                            {emp}
                            <button>Delete Emp</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="emp-input">
                <input 
                    type="text"
                    placeholder="Enter Emp Name"
                    value={newEmp}
                    onChange={(e) => setNewEmp(e.target.value)}
                />
                <button onClick={handleNewEmp}>Add Employee</button>
            </div>
        </div>
    )
}

export default EmployeeList;