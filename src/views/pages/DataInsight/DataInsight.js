import React from "react";

import { CardView } from "react-card-with-image";
import "react-card-with-image/dist/index.css";

const DataInsight = () => {
  const items = [
    {
      id: 1,
      header: "Employees Salary",
      // description: "dolor sit amet,",
      image:
        "https://sagemaker-mtp-hr.s3.us-east-2.amazonaws.com/jupyter-output/age.png",
    },
    {
      id: 3,
      header: "Job Involvement Current Employees",
      // description: "condimentum purus,",
      image:
        "https://sagemaker-mtp-hr.s3.us-east-2.amazonaws.com/jupyter-output/jobinvolvement_employed.png",
    },
    {
      id: 4,
      header: "Job Satisfaction Current Employees",
      // description: "vitae neque",
      image:
        "https://sagemaker-mtp-hr.s3.us-east-2.amazonaws.com/jupyter-output/jobsatisfaction_employed.png",
    },
    {
      id: 5,
      header: "Employees leaving By department",
      // description: "finibus id eros eu,",
      image:
        "https://sagemaker-mtp-hr.s3.us-east-2.amazonaws.com/jupyter-output/left_bydept.png",
    },
    // {
    //   id: 6,
    //   header: "Employees leaving By Gender",
    //   description: "finibus id eros eu,",
    //   image:
    //     "https://sagemaker-mtp-hr.s3.us-east-2.amazonaws.com/jupyter-output/left_gender.png",
    // },
    {
      id: 7,
      header: "Employees leaving By Job Role",
      // description: "finibus id eros eu,",
      image:
        "https://sagemaker-mtp-hr.s3.us-east-2.amazonaws.com/jupyter-output/left_jobrole.png",
    },
    {
      id: 8,
      header: "Breakdown for Lab Technicians",
      // description: "finibus id eros eu,",
      image:
        "https://sagemaker-mtp-hr.s3.us-east-2.amazonaws.com/jupyter-output/LT_brkdown.png",
    },
    {
      id: 9,
      header: "Breakdown for Research Assistants",
      // description: "finibus id eros eu,",
      image:
        "https://sagemaker-mtp-hr.s3.us-east-2.amazonaws.com/jupyter-output/RA_brkdown.png",
    },
    {
      id: 10,
      header: "Breakdown for Sales Executive",
      // description: "finibus id eros eu,",
      image:
        "https://sagemaker-mtp-hr.s3.us-east-2.amazonaws.com/jupyter-output/Sales_Exec_Breakdown.png",
    },
    {
      id: 11,
      header: "Breakdown for Sales Representative ",
      // description: "finibus id eros eu,",
      image:
        "https://sagemaker-mtp-hr.s3.us-east-2.amazonaws.com/jupyter-output/Sales_rep_breakdown.png",
    },
  ];
  return (
    <CardView
      items={items}
      activeColor="#000"
      imageHeight="650px"
      imageWidth="800px"
    />
  );
};

export default DataInsight;
