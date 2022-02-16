import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { CalendarOutlined } from '@ant-design/icons';
import { CButton, CCard, CCardBody, CCardTitle,CCardText,CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell } from '@coreui/icons'
import { DocsCallout, DocsExample } from 'src/components'
import routes from "../../../utils/routes"
import "./AllBlog.css"
import { Route, useParams } from "react-router-dom"

const AllBlog = () => {

  const [campaign, setBlogCampaign] = useState([]);
  const [blogParas, setBlogParas] = useState([])
  const [blogImagePreview, setBlogImagePreview] = useState([])


  





  const dateFormat = function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [year, month, day].join('/');
  }
  const getAllBlog = async () => {
    try {
      const response = await routes.BLOG_MS.APIS.GET_BLOG_CAMPAING_BLOG()
      setBlogCampaign(response);
      // console.log("alll blogs",response);
      // console.log("responssse", response);
      // console.log("name",campaign);
    } catch (error) {
      console.log("errors" + error);
    }
  }
  useEffect(() => {
    getAllBlog();
  }, [])

  return (
    <>
    {/* <Link to={{ pathname: "notifications/alerts" }}>
    <CButton href="">Back</CButton>
    </Link> */}
   
    






















    <CRow>



      {campaign.map((blogData) => {
        // console.log("id is ", blogData.blogAuthentication);
        return (
          <div key={blogData._id}

            // className={`${blogList} ${blogListLight}`}
            className="blogList blogListLight"
            // className="blogLisidlogListLight"
          >
            <div className="imagediv">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSis4sfs5DaIYQo96ktIAgGceyQjEJAqB4XQ&usqp=CAU" className="blogImageLaptop" alt="blogData.title" />
            </div>
            <div className="headertitleContainer">
              <h3
                // className={`${blogDate} ${blogTitleLight}`}
                className="blogDate blogTitleLight"
              >
                <span className="calendoricon">< CalendarOutlined /></span>{dateFormat(blogData.createdAt)}
              </h3>
              <h1
                className="blogTitle"
              >
                {(blogData.title && blogData.title.length > 30) ? blogData.title.slice(0, 30) : blogData.title} ...
              </h1>
              <p className="blogParagraph" >
                {blogParas.length > 0 ? blogParas[0].value.slice(0, 90) : "its dsk bolteits dsk bolteits dsk bolteits dsk bolteits dsk bolteits dsk bolteits dsk bolteits dsk bolteits dsk bolteits dsk"}...
              </p>
            </div>

            <Link
            to={{
                pathname: '/[blogViewerById]',
                query: { blogViewerById: blogData._id }
              }}>
            {/* <Route path="/page/:id"> */}

              <div className="buttondiv">
                <p className="button" >Read more</p>
              </div>
            {/* </Route> */}

            </Link>
          </div>
        )
      })}

      {/* {
        campaign.map((ele)=>
          <div key={ele._id}> 
          {ele.title}
          {ele._id}
          </div>
        )
      } */}
      {/* <GetStaticProps getAllBlog={getAllBlog} /> */}
      {/* <Card /> */}
     </CRow>
     </>
  )
}

export default AllBlog;
