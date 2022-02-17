import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import './form-control.css'
const FormControl = () => {

  const tableData = [
    {
      id: 1,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    },
    {
      id: 2,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    },
    {
      id: 3,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    },
    {
      id: 4,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    },
    {
      id: 5,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    },
    {
      id: 6,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    },
    {
      id: 7,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    },
    {
      id: 8,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    },
    {
      id: 9,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    },
    {
      id: 10,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    },
    {
      id: 11,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    }, {
      id: 12,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    }, {
      id: 13,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    },
    {
      id: 14,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    },
    {
      id: 15,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    },
    {
      id: 16,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    },
    {
      id: 17,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    },
    {
      id: 18,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    },{
      id: 19,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    },
    {
      id: 20,
      name: "Alfreds",
      email: "Alfreds@gmail.com"
    },
   


  ]


  return (
    <>
      <h4> All Blog writers Info</h4>
      <table>

        <tr>
          <th>Id</th>
          <th>Writer Name</th>
          <th>Email</th>
        </tr>
        {tableData.map((item) => {
          return (
            <>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            </>
          )
        })}
      </table>


      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/0x8Dap2EIVE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
    </>
)
}



















export default FormControl
