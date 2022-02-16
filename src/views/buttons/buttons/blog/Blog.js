import React from 'react'
import { CButton, CCard, CCardBody, CCardTitle,CCardText,CCardHeader, CCol, CRow } from '@coreui/react'
import {Link} from "react-router-dom";
import mapsImg from "./maps.png"
import rejectedImg from "./rejected.png"
import stopwatchImg from "./stopwatch.png"
import "./Blog.css"
const Blog = () => {
  return (
    <CRow>
      <CCol sm={3}>
        <CCard  className="waiting">
          <CCardBody>
            <CCardTitle>All waiting Blogs</CCardTitle>
            <CCardText>
            {/* <SyncOutlined spin /> */}
            {/* With supporting text below as a natural lead-in to additional content. */}
            <img className='check' src={stopwatchImg} />
            </CCardText>
            <Link to={{ pathname: "/buttons/WaitingBlog" }} >
              <CButton href="">Waiting</CButton>
            </Link>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm={3}>
        <CCard className="Approved">
          <CCardBody>
            <CCardTitle>All Approved Blogs</CCardTitle>
            <CCardText>
              {/* With supporting text below as a natural lead-in to additional content. */}
              {/* <CheckOutlined className='check' /> */}
              <img className='check'  src={mapsImg} />
            </CCardText>
            <Link to={{ pathname: "/buttons/Approved" }}>
              <CButton href="">Approved</CButton>
            </Link>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm={3}>
        <CCard className="Rejected">
          <CCardBody>
            <CCardTitle>All  Rejected Blogs</CCardTitle>
            <CCardText>
              {/* With supporting text below as a natural lead-in to additional content. */}
           <img className='check' src={rejectedImg} />
            </CCardText>
            <Link to={{ pathname: "/buttons/rejected" }}>
              <CButton href="#" className='rej_btn' >Rejected</CButton>
            </Link>
          </CCardBody>
        </CCard>
      </CCol>



    </CRow>
    








  )
}

export default Blog