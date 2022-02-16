
import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from '@coreui/react'
import routes from ".././../../utils/routes"
import { AppHeader, AppSidebar } from 'src/components';
import { useHistory } from 'react-router-dom';
import AuthenticationEditPage from '../blogAuthenticationEdit/AuthenticationEditPage';
import DefaultLayout from 'src/layout/DefaultLayout';
function NewPage() {
  const [blogs, setBlog] = useState([]);
  const history = useHistory();
  async function getBlogCampaignCountByOwnerId() {
  const waitingObj = {
    status: "waiting"
  }
  try {
    const response = await routes.BLOG_MS.APIS.GET_BLOG_WAITING(waitingObj)
    console.log("response data", response)
    setBlog(response)
  } catch (error) {
    console.log("errors", error);
  }}

useEffect(() => {

  getBlogCampaignCountByOwnerId();

}, []);


const cardsArray = blogs.map(blog => (

  <CRow key={blog._id} className="d-grid gap-2 d-md-flex justify-content-md-end">

    {/* <AuthenticationEditPage></AuthenticationEditPage> */}
    <CCol >
      <CCard className="mb-3" style={{ maxWidth: '700px' }} >
        <CRow className="g-0" >
          <CCol md={4}>
            <CCardImage src={(blog.contents[0][2] == undefined) ? "The para is undefineed" : (blog.contents[0][2].value.location)} />
          </CCol>
          <CCol md={8}>
            <CCardBody>
              <CCardTitle>{blog.title}</CCardTitle>
              <CCardText>
                {

                  (blog.contents[0][1] == undefined) ? "The para is undefineed" : ((blog.contents[0][1].value.length > 100) ? ((blog.contents[0][1].value.slice(0, 100) + "....")) : (blog.contents[0][1].value))
                }

              </CCardText>
              <CRow>
                <CCol md="auto">
                  <CCardText>
                    <small className="text-medium-emphasis">{"created at " + blog.createdAt}</small>

                  </CCardText>
                </CCol>
                <CCol>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">

                    <CButton color="secondary" size="sm" onClick={() => { history.push({ pathname: "/Authenticationeditpage", }) }}
                    >Authentication</CButton>

                  </div>
                </CCol>
              </CRow>
            </CCardBody>
          </CCol>
        </CRow>
      </CCard>
    </CCol>
  </CRow>


));

  return (
    <div >


     
    {[cardsArray]}
  </div>

  )
}

export default NewPage