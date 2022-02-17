import React ,{useState,useEffect} from 'react'
import routes from "../../../utils/routes"
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
import { DocsCallout, DocsExample } from 'src/components'
import "./AllCampaign.css"
import { Link } from "react-router-dom"
import ReactImg from 'src/assets/images/react.jpg'





const Cards = () => {
  const [campaign, setBlogCampaign] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ totalCount,setTotalCount ] = useState(0);

  useEffect ( () => {
    paginate();
  },[])
  // const submitData = () => {
  // }
  // const paginate =async () =>{
  //   // const ownerId = localStorage.getItem('userId');
  //       try {
  //           setLoading(false);
  //             const response = await fetch('http://65.2.88.54:3001/api/v1/blogcampaign');
  //           setBlogCampaign(response);
  //           console.log("response",response);

  //       } catch (error) {
  //           setLoading(false);
  //           console.log("errors" + error);
  //       }
  //   }

  const paginate =async () =>{

        try {
            setLoading(false);

            const response = await routes.BLOG_MS.APIS.GET_BLOG_CAMPAING(`/`)
            setBlogCampaign(response);
            console.log("response from campaignn",response);
            // console.log("response",response.campaignName);
            // console.log("name",campaign);
            } catch (error) {
            setLoading(false);
            console.log("errors" + error);
        }
}
// console.log("data",campaign[0].campaignName);
// {campaign.map((index,elem) => {
//   return ( 
//   <h1 key={index}>{elem[0].campaignName}</h1>
// )
// })}
// {
//   campaign.length > 0 && campaign.map((curElem) => {
//     console.log(".......",curElem.campaignName);  
//     return (
//           <Link 
//           href={{ 
//               pathname:'/home/campaign/[campaignId]',
//               query:{ campaignId:curElem._id }
//               }}
//           key={curElem._id} >
//               <tr >
//                   <td >{curElem.campaignName}</td>
//                   {/* <td> {curElem.userId}</td>
//                   <td> {curElem.campaignOwnerId}</td> */}
//               </tr>
//           </Link>
//   )
//   }) 
// }


  return (
    <CRow>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong> All Blog Campaigns</strong>
          </CCardHeader>
          <CCardBody>
            <Link to="/buttons">
              <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>

                {/* <CCol xs> */}
                {/* <CRow> */}
                { campaign.map((curElem,index) => {


                  return (
                    <CCard key={index}>
                      <CCardImage orientation="top" src={ReactImg} />
                      <CCardBody>

                        <CCardTitle className="title" > {curElem.campaignName} </CCardTitle>

                        <span> {curElem.Date}</span>
                        <br />
                        {/* <CCardText>
                        {card.subtitle}
                      </CCardText> */}
                      </CCardBody>
                      {/* <CCardFooter>
                      <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                    </CCardFooter> */}
                    </CCard>

                  )
                })}
              </CRow>
            </Link>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}




export default Cards
