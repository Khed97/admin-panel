import {apiDelete, apiGet, apiPost, apiPostImage, apiPut} from './API';

export default {
    "BLOG_MS":{
        BASE_PATH:process.env.NEXT_PUBLIC_BASE_PATH,
        APIS:{
            // GET API
            GET_BLOG_CAMPAING: async (data)=> {
                return await apiGet(`/blogcampaign${data}`,"BLOG_MS")
            },
            GET_BLOG_CAMPAING_COUNT: async (data)=> {
                return await apiGet(`/blogcampaign/${data}`,"BLOG_MS")
            },
            GET_BLOG_CAMPAING_BLOGID: async (data)=> {
                return await apiGet(`/blog/${data}`,"BLOG_MS")
            },
            GET_BLOG_CAMPAING_CAMPAIGNBLOGSID: async (data)=> {
                return await apiGet(`/blogcampaign/getblogcardsincampaign${data}`,"BLOG_MS")
            },
            GET_BLOG_BLOGCAMPAING: async (data)=>{ return await apiGet("/blogcampaign/","BLOG_MS")},
            GET_BLOG_CAMPAING_BLOGDESIGN: async (data)=> {return await apiGet("/blogdesign","BLOG_MS")},
            GET_BLOG_CAMPAING_BLOG: async (data)=> {
                return await apiGet("/blog/","BLOG_MS")
            },
            GET_BLOG_COMMENTBYID: async (data)=> {
                return await apiGet(`/comment/getcomments/${data}`,"BLOG_MS")
            },
            GET_BLOG_REPLY_COMMENTBYID: async (data)=> {
                return await apiGet(`/comment/getreply/${data}`,"BLOG_MS")
            },
            GET_LIKES_BY_COMMENT_ID: async (data)=> {
                return await apiGet(`/comment/like/${data}`,"BLOG_MS")
            },
            GET_PRODUCT_BY_CAMPAIGN_ID: async (data)=> {
                return await apiGet(`/productShowcase/product/${data}`,"BLOG_MS")
            },
            GET_BLOG_COMPANYCONTACT: async (data)=> {
                return await apiGet(`/blogownercontact/${data}`,"BLOG_MS")
            },
            GET_BLOG_BY_CAMPAIGN_ID: async (data)=> {
                return await apiGet(`/blog/blogcampaign/${data}`,"BLOG_MS")
            },
            GET_BLOGS_BY_USER_ID: async (data)=> {
                return await apiGet(`/blog/USER/${data}`,"BLOG_MS")
            },
            GET_SUBSCRIBERS: async (data)=> {
                return await apiGet(`/subscribers/subscriber/${data}`,"BLOG_MS")
            },
            GET_BLOGOWNER_CONTACT_DETAILS:async (data)=> {
                console.log("data---",data);
                return await apiGet(`/blogownercontact/${data}`,"BLOG_MS")
            },
            // POST API
            UPLOAD_BLOG_IMAGE: async (data)=> await apiPost("/image/unsplash",data,"BLOG_MS"),
            CREATE_BLOG_CAMPAIGN: async (data)=> await apiPost("/blogcampaign",data,"BLOG_MS"),
            CREATE_BLOG_CAMPAIGN_BLOG: async (data)=> await apiPost("/blog",data,"BLOG_MS"),
            CREATE_BLOG_COMMENT: async (data)=> await apiPost("/comment",data,"BLOG_MS"),
            POST_BLOG_COMMENT_REPLY: async (data)=> await apiPost("/comment/reply",data,"BLOG_MS"),
            ADD_PRODUCT: async (data)=> await apiPost("/productShowcase",data,"BLOG_MS"),
            CREATE_BLOG_COMPANYCONTACT: async (data)=> await apiPost("/blogownercontact",data,"BLOG_MS"),
            CREATE_USER_MESSAGE: async (data)=> await apiPost("/userquery",data,"BLOG_MS"),
            SUBSCRIBE: async (data)=> await apiPost("/subscribers",data,"BLOG_MS"),
            SEND_MAIL: async (data) => await apiPost("/sendMail",data,"BLOG_MS"),
            // PUT API
            UPDATE_BLOG_CAMPAING: async (data)=> await apiPut("/blogcampaign",data,"BLOG_MS"),
            UPDATE_BLOG_CAMPAING_BLOG: async (data)=> await apiPut("/blog",data,"BLOG_MS"),
            UPDATE_BLOG_COMMENT: async (data)=> await apiPut("/comment",data,"BLOG_MS"),
            UPDATE_BLOG_COMPANYCONTACT: async (data)=> await apiPut("/blogownercontact/",data,"BLOG_MS"),
           
            //DELETE APIS
            DELETE_BLOG_COMMENT:async (id)=> await apiDelete(`/comment/${id}`,"BLOG_MS"),
            UNSUBSCRIBE_BLOG:async (id)=> await apiDelete(`/subscribers/${id}`,"BLOG_MS")
        }
    },
    "USER_MS":{
        USERS_PATH:process.env.NEXT_PUBLIC_USERS_AUTH_API_URL,
        APIS:{
            // GET API
            GET_BLOG_CAMPAING: async (data)=> {return await apiGet("/","USER_MS")},
            GET_USER_PROFILE: async (data)=> {return await apiGet(`/profile${data}`,"USER_MS")},
            GET_USER_PROFILE_IMAGE: async (data)=> {return await apiGet(`/image/${data}`,"USER_MS")},
            
            // POST API
            LOGIN: async (data)=> await apiPost("/userauth/send-otp",data,"USER_MS"),
            VERIFY: async (data)=> await apiPost("/userauth/verify",data,"USER_MS"),
            CREATE_USER_PROFILE: async (data)=> await apiPost("/profile",data,"USER_MS"),
            UPLOAD_USER_PROFILE_IMAGE: async (data)=> await apiPostImage("/image/",data,"USER_MS"),
            // PUT API
            UPDATE_USER_PROFILE: async (data)=> await apiPut("/profile",data,"USER_MS"),
        }
    },
    "ORGANIZATION_PROFILE":{
        ORGANIZATION_PATH:process.env.NEXT_PUBLIC_ORGANIZATION_PROFILE_API_URL,
        APIS:{
            // GET API
            GET_ORGANIZATION_PROFILE: async (data)=> {return await apiGet(`/profile/${data}`,"ORGANIZATION_PROFILE")},
            GET_ORGANIZATION_PROFILE_LOGO: async (data)=> {return await apiGet(`/image/${data}`,"ORGANIZATION_PROFILE")},

            // POST API
            CREATE_ORGANIZATION_PROFILE: async (data)=> await apiPost("/profile/",data,"ORGANIZATION_PROFILE"),
            CREATE_ORGANIZATION_PROFILE_IMAGE: async (data)=> await apiPostImage("/image/",data,"ORGANIZATION_PROFILE"),
            
            // PUT API
            UPDATE_ORGANIZATION_PROFILE: async (data)=> await apiPut("/profile/",data,"ORGANIZATION_PROFILE"),
        },
    }
}