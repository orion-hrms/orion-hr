import React from 'react'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

function Tickets() {
  return (
    <div>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Priority</CTableHeaderCell>
            <CTableHeaderCell scope="col">CreatedOn</CTableHeaderCell>
            <CTableHeaderCell scope="col">Department</CTableHeaderCell>
            <CTableHeaderCell scope="col">CreatedBy</CTableHeaderCell>
            <CTableHeaderCell scope="col">AssignedTo</CTableHeaderCell>
            <CTableHeaderCell scope="col">Subject</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">Default</CTableHeaderCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
          </CTableRow>
          <CTableRow color="primary">
            <CTableHeaderCell scope="row">Primary</CTableHeaderCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
          </CTableRow>
          <CTableRow color="secondary">
            <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
          </CTableRow>
          <CTableRow color="success">
            <CTableHeaderCell scope="row">Success</CTableHeaderCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
          </CTableRow>
          <CTableRow color="danger">
            <CTableHeaderCell scope="row">Danger</CTableHeaderCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
          </CTableRow>
          <CTableRow color="warning">
            <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
          </CTableRow>
          <CTableRow color="info">
            <CTableHeaderCell scope="row">Info</CTableHeaderCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
          </CTableRow>
          <CTableRow color="light">
            <CTableHeaderCell scope="row">Light</CTableHeaderCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
          </CTableRow>
          <CTableRow color="dark">
            <CTableHeaderCell scope="row">Dark</CTableHeaderCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell></CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </div>
  )
}

export default Tickets
