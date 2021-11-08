import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listEmployeedetails } from "../../../graphql/queries";
// import UploadEmployees from './UploadEmployees'
import EmployeeTable from "./EmployeeTable";

function Employees(props) {
  const [inidata] = "";
  const [empdata, setEmpdata] = useState([]);

  useEffect(() => {
    getAllEmpDataToState();
  }, [inidata]);

  const getAllEmpDataToState = async () => {
    const result = await API.graphql(graphqlOperation(listEmployeedetails));
    console.log("inside before build 1", result);
    // let imageArray = await buildImageArray(result.data.listPictures.items);
    // setImages(imageArray);
    //setEmpdata(result)
    let empArray = await buildEmpArray(result.data.listEmployeedetails.items);
    setEmpdata(empArray);
    console.log("insideeee employeee", empdata);
  };

  const buildEmpArray = async (listEmployeedetails) => {
    return await getEmpFileList(listEmployeedetails);
  };
  const getEmpFileList = async (imageList) => {
    return Promise.all(
      imageList.map(async (i) => {
        return getOneFormatedEmp(i);
      })
    );
  };

  const getOneFormatedEmp = async (emp) => {
    console.log("getOneFormatedImage", emp);
    return {
      //src: await Storage.get(image.file.key),
      id: emp.UserId,
      tag: emp.tag,
      employeeName: emp.UserName,
      department: emp.department,
      designation: emp.designation,
      payGrade: emp.paygrade,
      activity: emp.lastActivity,
      joiningDate: emp.joiningDate,
      UserEmail: emp.UserEmail,
    };
  };

  console.log("empdatazzzzz", empdata);
  return (
    <div>
      <EmployeeTable emptable={empdata} />
    </div>
  );
}
export default Employees;
