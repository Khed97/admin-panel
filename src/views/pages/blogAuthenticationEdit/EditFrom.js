import React, { useState, useEffect } from 'react'
import { useForm, useFieldArray, Controller } from "react-hook-form";
import routes from 'src/utils/routes';
import Page404 from '../page404/Page404';
function EditFrom({ preloadedValues }) {

    const approverId = localStorage.getItem('userId');
    const approverName = localStorage.getItem('username')
    const [status, setStatus] = useState(true);
    const [disabled, setDisabled] = useState(true);
    const [submited,setSubmited]=useState("");
    const { register, handleSubmit, formState, control, reset, trigger, setError, } = useForm({
        defaultValues: preloadedValues
    });


    console.log("length", Object.keys(preloadedValues.contents[0]).length)
    useEffect(() => {


        const noContent = Object.keys(preloadedValues.contents[0]).length;
        for (let i = 0; i < noContent; i++) {
            append({});
        }




    }, [null])



    const { fields, append } = useFieldArray({
        control,
        name: "test"
    });
    async function updateAndApprove(data) {


        try {
            const response = await routes.BLOG_MS.APIS.UPDATE_BLOG_AND_APPROVE(data)
            console.log("response data", response)

            if(response){

                setSubmited("APPROVED")
            }

        } catch (error) {
            console.log("errors", error);
            if(error){

                setSubmited("ERROR")
            }
            
        }
    }
    async function updateAndReject(data) {


        try {
            const response = await routes.BLOG_MS.APIS.UPDATE_BLOG_AND_REJECT(data)
            console.log("response data", response)
            if(response){

                setSubmited("REJECTED")
            }

        } catch (error) {
            console.log("errors", error);
            if(error){

                setSubmited("ERROR")
            }
        }
    }
    const onSubmit = (data) => {
        if (status === false) {
            console.log("approved", data)

            data.id = preloadedValues._id
            data.blogAuthentication.approverId = approverId;
            data.blogAuthentication.approverName = approverName;
            updateAndApprove(data);
        } else {
            console.log("rejected")
            data.id = preloadedValues._id
            data.blogAuthentication.approverId = approverId;
            data.blogAuthentication.approverName = approverName;
            updateAndReject(data);
        }
    };
    function handleEdit() {
        setDisabled(!disabled);
    }

    const inputform = (
        <div><form onSubmit={handleSubmit(onSubmit)} className="row g-3 needs-validation"  >
            <fieldset disabled={disabled}>
                <legend>Blog Autharisation From</legend>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Title</label>
                    <input  {...register('title', { required: true })} type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input" disabled={formState.isSubmitting} />
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Creater User Name</label>
                    <input {...register('username', { required: true })} type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input" disabled />
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">created on</label>
                    <input {...register('createdOn', { required: true })} type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input" disabled />
                </div>
                <div className="mb-3">
                    <label for="validationServer01" htmlFor="disabledTextInput" className="form-label">CampaignId</label>
                    <input {...register('campaignId')} className="form-control is-valid" type="text" id="disabledTextInput" className="form-control" placeholder="CampaignId not present" disabled />
                </div>


                {fields.map((item, index) => (
                    <li key={item.id} className="list-unstyled">


                        {(preloadedValues.contents[0][index] === undefined) ? (<div></div>) : preloadedValues.contents[0][index].type === "image" ? (<div></div>) : (<div className="mb-3" >
                            <label {...register(`contents[0][${index}].type`, { required: true })} htmlFor="disabledTextInput" className="form-label">{(preloadedValues.contents[0][index].type)}</label>
                            <input {...register(`contents[0][${index}].value`, { required: true })} name={`contents[0][${index}].value`} type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input" disabled={formState.isSubmitting} />
                        </div>)}


                    </li>
                ))}





            </fieldset> <button className="btn btn-dark" onClick={handleEdit}>Edit</button>
            <button type="submit"
                className="btn btn-success"
                name='aprove'
                onClick={() => { setStatus(false) }} >
                edit and approve</button>


            <button type="submit"
                className="btn btn-danger"
                name='rejectb'
                value="reject"
                onClick={() => { setStatus(true) }}>
                edit and reject</button>

            <div className="mb-3">
                <label htmlFor="validationCustom02" className="form-label">Description</label>
                <input {...register('blogAuthentication.authenticationDescription')}
                    className="form-control"
                    type="text" id="disabledTextInput"
                    placeholder="Disabled input"
                    //disabled={!status}
                    required={status} />
                <div class="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
        </form>

            {/* {formState.isSubmitted && (
            <div className="success">Form submitted successfully</div>
          )} */}

        </div>);
    return (

        (submited==="")?
        inputform:submited==="APPROVED"?
        (<div>Blog approved successfully</div>):submited==="REJECTED"?
        (<div>Blog rejected successfully</div>):(<div>Error submitting form</div>)
        


    )
}

export default EditFrom