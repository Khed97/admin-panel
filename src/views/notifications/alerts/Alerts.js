import React from 'react'
import {
  CAlert,
  CAlertHeading,
  CAlertLink,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import { Link } from "react-router-dom"
import { CalendarOutlined } from '@ant-design/icons';
import "./Alert.css"
import AngularImg from 'src/assets/images/angular.jpg'

import ButtonGroups from 'src/views/buttons/button-groups/WaitingBlog';
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
  CheckOutlined
} from '@ant-design/icons';
// import mapsimg from "./maps.png"



const Alerts = () => {
  return (
    <>
    {/* <Link to={{ pathname: "notifications/alerts" }}>
    <CButton href="">Back</CButton>
    </Link> */}
    {/* <CRow>
      <CCol sm={3}>
        <CCard>
          <CCardBody>
            <CCardTitle>All waiting Blogs</CCardTitle>
            <CCardText>
            <img className='check' src={stopwatchImg} />
            </CCardText>
            <Link to={{ pathname: "/buttons/WaitingBlog" }} >
              <CButton href="">Waiting</CButton>
            </Link>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm={3}>
        <CCard>
          <CCardBody>
            <CCardTitle>All Approved Blogs</CCardTitle>
            <CCardText>
              <img className='check'  src={mapsImg} />
            </CCardText>
            <Link to={{ pathname: "/buttons/Approved" }}>
              <CButton href="">Approved</CButton>
            </Link>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm={3}>
        <CCard>
          <CCardBody>
            <CCardTitle>All  Rejected Blogs</CCardTitle>
            <CCardText>
           <img className='check' src={rejectedImg} />
            </CCardText>
            <Link to={{ pathname: "/buttons/rejected" }}>
              <CButton href="#">Rejected</CButton>
            </Link>
          </CCardBody>
        </CCard>
      </CCol>



    </CRow> */}
    </>
  )
}

export default Alerts
