import React from 'react'

function Employee() {

    const employee=[
        {'username':'Akash','Designation':'Tester'},
        {'username':'Amal','Designation':'Dev'},
        {'username':'Arun','Designation':'Dev'},
        {'username':'Ajay','Designation':'Tester'}
    ]
  return (
    <>
    <div>{
       
        employee.map(item=>(
            <div>
                Username: {item.username}
                <br/>
                Designation: {item.designation}
            </div>
        ))
    }
    </div>
    </>
  )
}

export default Employee
