import React,{useEffect}  from 'react'
import routes from  "../../../../utils/routes"
const Blogviewer = () => {


  useEffect(() => {
    getStaticPaths();
    getStaticProps();
  }

 ,[])

async function getStaticPaths() {
  console.log("this is working");
    let blogs = await routes.BLOG_MS.APIS.GET_BLOG_CAMPAING_BLOG() || [];
    console.log(":....",blogs);
    return {
        fallback:false,
        paths: blogs.map((blog) => ({
            params: { blogViewerById: blog._id.toString() },
          }))
    }
}


async function getStaticProps(context) {
  // const blogId = context.params.blogViewerById;
  const blogId= "61de7df1875b0668e2f5b86d";
  let blog = await routes.BLOG_MS.APIS.GET_BLOG_CAMPAING_BLOGID(`${blogId}`)
  console.log("blloggss",blog);
  return {
      props:{
          blog:blog
      },
      revalidate: 60
  }
}

  return (
    <div>BlogViewer11111</div>
  )
}

export default Blogviewer