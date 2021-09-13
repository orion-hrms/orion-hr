import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../../graphql/queries";

function Employees(props) {
  const [inidata] = "";
  const [empdata, setEmpdata] = useState([]);

  useEffect(() => {
    getAllEmpDataToState();
  }, [inidata]);

  const getAllEmpDataToState = async () => {
    const result = await API.graphql(graphqlOperation(listUsers));
    console.log("inside before build 1", result);
    // let imageArray = await buildImageArray(result.data.listPictures.items);
    // setImages(imageArray);
    //setEmpdata(result)
    // let empArray = await buildEmpArray(result.data.listUsers.items);
    // setEmpdata(empArray);
    console.log("insideeee employeee", result);
  };

  return (
    <div>
      <p>Hiiii</p>
      {/* <EmployeeTable emptable={empdata} /> */}
    </div>
  );
}
export default Employees;

// import React, { useState, useEffect } from 'react'
// import { API, graphqlOperation } from 'aws-amplify'
// import { listPictures } from '../../../graphql/queries'
// // import UploadEmployees from './UploadEmployees'
// import EmployeeTable from './EmployeeTable'

// function Employees(props) {
//   const [inidata] = ''
//   const [empdata, setEmpdata] = useState([])

//   useEffect(() => {
//     getAllEmpDataToState()
//   }, [inidata])

//   const getAllEmpDataToState = async () => {
//     const result = await API.graphql(graphqlOperation(listPictures))
//     console.log('inside before build 1', result)
//     // let imageArray = await buildImageArray(result.data.listPictures.items);
//     // setImages(imageArray);
//     //setEmpdata(result)
//     let empArray = await buildEmpArray(result.data.listPictures.items)
//     setEmpdata(empArray)
//     console.log('insideeee employeee', empdata)
//   }

//   const buildEmpArray = async (listPictures) => {
//     return await getEmpFileList(listPictures)
//   }
//   const getEmpFileList = async (imageList) => {
//     return Promise.all(
//       imageList.map(async (i) => {
//         return getOneFormatedEmp(i)
//       }),
//     )
//   }

//   const getOneFormatedEmp = async (emp) => {
//     console.log('getOneFormatedImage', emp)
//     return {
//       //src: await Storage.get(image.file.key),
//       id: emp.empId,
//       tag: emp.tag,
//       employeeName: emp.name,
//       department: emp.department,
//       designation: emp.designation,
//       payGrade: emp.paygrade,
//       activity: emp.lastActivity,
//       joiningDate: emp.joiningDate,
//     }
//   }

//   console.log('empdatazzzzz', empdata)
//   return (
//     <div>
//       <EmployeeTable emptable={empdata} />
//     </div>
//   )
// }
// export default Employees
