import React from "react";

export default function EmployeeTable() {
  return <div>EmployeeTable</div>;
}

// import React, { useState, useEffect } from 'react'
// import EmployeePerfo from './EmployeePerfo'
// import {
//   CAvatar,
//   CButton,
//   CButtonGroup,
//   CCard,
//   CCardBody,
//   CCardFooter,
//   CCardHeader,
//   CCol,
//   CProgress,
//   CRow,
//   CTable,
//   CTableBody,
//   CTableDataCell,
//   CTableHead,
//   CTableHeaderCell,
//   CTableRow,
// } from '@coreui/react'
// import PropTypes from 'prop-types'
// import { CChartLine } from '@coreui/react-chartjs'
// import { getStyle, hexToRgba } from '@coreui/utils'
// import CIcon from '@coreui/icons-react'
// function EmployeeTable(emptable) {
//   const [employeestabledata, setEmployeesTableData] = useState(emptable)
//   console.log('empdata in emptable', emptable)
//   const [abc, setAbc] = useState(['ash', 'lolly', 'vip'])
//   const [numberOfEmp, setNumberOfEmp] = useState([])
//   useEffect(() => {
//     setEmployeesTableData(emptable)
//     setNumberOfEmp(emptable.emptable.length)
//   }, [])
//   console.log('employeestabledata length', emptable.emptable.length)
//   console.log('employeestabledata length', numberOfEmp)

//   const displayPerfo = (obj) => {
//     console.log('obj', obj)

//     alert('employee Id is ', obj.employeeName)
//   }
//   return (
//     <div>
//       <div>
//         <CTable hover responsive align="middle" className="mb-0 border">
//           <CTableHead color="light">
//             <CTableRow>
//               <CTableHeaderCell className="text-center">
//                 <CIcon icon="cil-people" />
//               </CTableHeaderCell>
//               <CTableHeaderCell>EmployeeName</CTableHeaderCell>
//               <CTableHeaderCell>EmpId</CTableHeaderCell>
//               <CTableHeaderCell className="text-center">Department</CTableHeaderCell>
//               <CTableHeaderCell>Designation</CTableHeaderCell>
//               <CTableHeaderCell className="text-center">Pay Grade</CTableHeaderCell>
//               <CTableHeaderCell>Activity</CTableHeaderCell>
//             </CTableRow>
//           </CTableHead>
//           <CTableBody>
//             {/* {abc.map((user, index) => (
//               <div key={index}>
//                 <h3>{user}</h3>
//               </div>
//             ))} */}
//             {emptable.emptable.map((obj, index) => (
//               <>
//                 <CTableRow key={obj.id} onClick={() => displayPerfo(obj.id)}>
//                   <CTableDataCell className="text-center">
//                     <CAvatar size="md" src="/avatars/1.jpg" status="success" />
//                   </CTableDataCell>
//                   <CTableDataCell>
//                     <div>{obj.employeeName}</div>
//                     <div className="small text-medium-emphasis">
//                       <span>New</span> | Joined: Jan 1, 2015
//                     </div>
//                   </CTableDataCell>
//                   <CTableDataCell>
//                     <p>{obj.id}</p>
//                   </CTableDataCell>
//                   <CTableDataCell className="text-center">
//                     <CIcon size="xl" name="cif-us" title="us" id="us" />
//                     <p>{obj.department}</p>
//                   </CTableDataCell>
//                   <CTableDataCell>
//                     <div className="clearfix">
//                       <div>
//                         <p> {obj.designation}</p>
//                       </div>
//                     </div>
//                   </CTableDataCell>
//                   <CTableDataCell className="text-center">
//                     <CIcon size="xl" name="cib-cc-mastercard" />
//                     <p>{obj.payGrade}</p>
//                   </CTableDataCell>
//                   <CTableDataCell>
//                     <div className="small text-medium-emphasis">Last login</div>
//                     <strong>10 sec ago</strong>
//                   </CTableDataCell>
//                 </CTableRow>
//               </>
//             ))}
//           </CTableBody>
//         </CTable>
//       </div>
//     </div>
//   )
// }

// export default EmployeeTable
