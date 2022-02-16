import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import routes from 'src/utils/routes';
import Page404 from '../page404/Page404';
function EditFrom({ preloadedValues }) {

    const approverId = localStorage.getItem('userId');
    const approverName= localStorage.getItem('username')

    const [status, setStatus] = useState(true);
    const [disabled, setDisabled] = useState(true);
    const { register, handleSubmit } = useForm({
        defaultValues: preloadedValues

    });
    async function updateAndApprove(data) {

       
        try {
          const response = await routes.BLOG_MS.APIS.UPDATE_BLOG_AND_APPROVE(data)
          console.log("response data", response)
          
        } catch (error) {
          console.log("errors", error);
        }
      }
      async function updateAndReject(data) {

       
        try {
          const response = await routes.BLOG_MS.APIS.UPDATE_BLOG_AND_REJECT(data)
          console.log("response data", response)
          
        } catch (error) {
          console.log("errors", error);
        }
      }
    const onSubmit = (data) => {
         if(status===false){
             console.log("approved",data)
             data.id=preloadedValues._id
             data.blogAuthentication.approverId =approverId;
             data.blogAuthentication.approverName =approverName;
             updateAndApprove(data);
         }else{
             console.log("rejected")
             data.id=preloadedValues._id
             data.blogAuthentication.approverId =approverId;
             data.blogAuthentication.approverName =approverName;
             updateAndReject(data);
         }
    };
    function handleEdit() {
        setDisabled(!disabled);
    }
    return (
      
        <div><form onSubmit={handleSubmit(onSubmit)}>
            <fieldset disabled={disabled}>
                <legend>Blog Autharisation From</legend>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Title</label>
                    <input  {...register('title', { required: true })} type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Subtitle</label>
                    <input {...register('contents[0][0].value', { required: true })} type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input" />
                </div>
                <div className="md-form amber-textarea active-amber-textarea">
                    <label htmlFor="form19">Para trail</label>
                    <textarea {...register('contents[0][1].value', { required: true })} id="form19" className="md-textarea form-control" rows="3" ></textarea>

                </div>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Creater User Name</label>
                    <input {...register('username', { required: true })} type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input" disabled/>
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">created on</label>
                    <input {...register('createdOn', { required: true })} type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input" disabled/>
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">CampaignId</label>
                    <input {...register('campaignId', { required: true })} type="text" id="disabledTextInput" className="form-control" placeholder="CampaignId not present" disabled/>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Description</label>
                    <input {...register('blogAuthentication.authenticationDescription', { required: true })} type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input" />
                </div>


                <button   type="submit" className="btn btn-success"  name='aprove'  onClick={() => {setStatus(false) }} >edit and approve</button>
                <button type="submit" className="btn btn-danger" name='rejectb' value="reject" onClick={() => {setStatus(true) }}>edit and reject</button>


            </fieldset> <button className="btn btn-dark" onClick={handleEdit}>Edit</button>
        </form></div>
    )
}

export default EditFrom