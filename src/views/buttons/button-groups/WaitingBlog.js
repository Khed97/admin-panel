import React from 'react'
import {
  CButton,
  CRow,
} from '@coreui/react'
import { useEffect, useState } from 'react'
import routes from 'src/utils/routes'
import { DocsCallout, DocsExample } from 'src/components'
import { Link } from "react-router-dom"
import reactRouterDom from 'react-router-dom'
import { CalendarOutlined } from '@ant-design/icons';
import "./WaitingBlog.css"
import { useHistory, Redirect } from 'react-router-dom';



// const ButtonGroups = () => {
  const WaitingBlog = () => {
  const [campaign, setBlogCampaign] = useState([]);
  const [blogParas, setBlogParas] = useState([])
  const [blogImagePreview, setBlogImagePreview] = useState([])
  const [blog, setBlog] = useState([]);
  const history = useHistory();
  console.log("history", history);

  // let navigate = useNavigate(); 

  const routeChange = () => {
    let path = `/waitingBlog`;
    history.push(path);
  }

  async function getBlogCampaignCountByOwnerId() {
    const waitingObj = {
      status: "waiting"
    }
    console.log("testing");
    try {
      const response = await routes.BLOG_MS.APIS.GET_BLOG_WAITING(waitingObj)
      // console.log("response data", response)
      setBlog(response)
    } catch (error) {
      console.log("errors", error)
    }
  }

  useEffect(() => {

    getBlogCampaignCountByOwnerId();

  }, []);

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

  // console.log("...data",blogs);


  console.log("buttons group");
  return (
    <>

      <Link to={{ pathname: "/buttons/Blog" }}>
        <CButton className='Back' href="">Back</CButton>
        {/* <CButton ><i class="cil-arrow-left"></i></CButton> */}
      </Link>
      {/* <CRow> */}

        {/* <Link  >
        <CButton type="submit" className="mb-3">
          rejected Blogs
        </CButton>
      </Link> */}
        {/* <div className="imagediv">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSis4sfs5DaIYQo96ktIAgGceyQjEJAqB4XQ&usqp=CAU" className="blogImageLaptop" alt="ROSEE" />
          </div>
          <div className="headertitleContainer">
            <h3
              className="blogDate blogTitleLight"
            >
              <span className="calendoricon">< CalendarOutlined /></span>
              14/02/2022
            </h3>
            <h1 className="blogTitle">
              BLOG TITLE
            </h1>
            <p className="blogParagraph" >
              Lorem Lorem Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem...
            </p>
          </div> */}

        {/* <Link
            to={{
              pathname: '/[blogViewerById]',
              // query: { blogViewerById: blogData._id }
            }}> */}
        {/* <Route path="/page/:id"> */}

        {/* <div className="buttondiv">
          <p className="button" onClick={() => { history.push({ pathname: "/WaitingBlog", }) }} >Waiting </p>
          <p className="button"  onClick={routeChange}>Waiting </p>
          <p className="button"  >Waiting </p>

        </div> */}
        {/* </Route> */}
        {/* <CButton color="secondary" size="sm" onClick={() => { history.push({ pathname: "/Authenticationeditpage",state: { id: blog._id } }) }}
                      >Authentication</CButton> */}
        {/* </Link> */}




        {/* <WaitingBlog /> */}


        {/* </CRow> */}

        {/* <Link  >
  <CButton type="submit" className="mb-3">
    rejected Blogs
  </CButton>
</Link> */}






        {/* <Link  >
  <CButton type="submit" className="mb-3">
    rejected Blogs
  </CButton>
</Link> */}



      {/* </CRow> */}

      <CRow>



        {blog.map((blogData) => {
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


      </CRow>
    </>


  )
}

export default WaitingBlog
