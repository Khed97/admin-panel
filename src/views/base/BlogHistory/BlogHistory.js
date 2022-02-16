import React, { useState, useEffect } from 'react'
import classes from './BlogerHistory.module.css'
import Link from 'next/link'
import { EditOutlined, CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';
// import routes  from "../../../utils/routes";
import routes from "../../../utils/routes";
// import {LoadingHistoryComponent} from "../../../shared/emptyBlogs/EmptyBlog"
import { LoadingHistoryComponent } from "../../emptyBlogs/EmptyBlog"
import { Empty } from 'antd';
export default function BlogerHistory() {

    const [campaign, setBlogCampaign] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNo, setPageNo] = useState(1)
    const [totalCount, setTotalCount] = useState(0);
    const [isPageCount, setIsPageCount] = useState(false)

    const paginate = async (pageNo) => {
        const ownerId = localStorage.getItem('userId');
        if (pageNo) {
            try {
                setLoading(false);
                const response = await routes.BLOG_MS.APIS.GET_BLOG_CAMPAING(`/campaign/${ownerId}?page=${pageNo}`)
                setBlogCampaign(response);
            } catch (error) {
                setLoading(false);
                console.log("errors" + error);
            }
        }
    }

    async function getBlogCampaignCountByOwnerId() {
        const ownerId = localStorage.getItem('userId');
        try {
            const response = await routes.BLOG_MS.APIS.GET_BLOG_CAMPAING_COUNT(`campaign/count/${ownerId}`)
            setTotalCount(response)
        } catch (error) {
            console.log("errors", error);
        }
    }
    useEffect(() => {
        paginate(pageNo);
        getBlogCampaignCountByOwnerId()
    }, [pageNo, isPageCount]);

    const nextPage = (e) => {
        e.preventDefault()
        setPageNo(pageNo + 1);
        if (totalCount.blogCampaignCount <= (pageNo * 5) + 5) setIsPageCount(true)
    }
    const previousPage = (e) => {
        e.preventDefault()
        setIsPageCount(false)
        if (pageNo === 1) {
            window.alert("End of pages")
        } else {
            setPageNo(pageNo - 1);
        }
    }

    if (loading) {
        return (
            <div>
                <LoadingHistoryComponent />
            </div>
        )
    }

    return (
        <div className={classes.blogHistory} >
            <div className={classes.header}>
                <div className={`${classes.textcenter} ${classes.mb5} ${classes.leadhtext}`}>My CAMPAIGNS</div>
                <Link href="/home/CardsEdit">
                    <div className={classes.light}>
                        <div className={`${classes.circle} ${classes.long}`} id="edit">
                            <p className={classes.Edit}><EditOutlined className={classes.writeIcon} /></p>
                        </div>
                    </div>
                </Link>
            </div>
            {
                campaign.length > 0 &&
                <div className={`${classes.container}`}>
                    <div className={classes.tableContainer}>
                        <table className={classes.neumorphic}>
                            <thead>
                                <tr>
                                    <th className={classes.campaignName}>Campaign Name</th>
                                    {/* <th className={classes.contact}>Contact</th>
                                        <th>Country</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    campaign.length > 0 && campaign.map((curElem) => {
                                        return (
                                            <Link
                                                href={{
                                                    pathname: '/home/campaign/[campaignId]',
                                                    query: { campaignId: curElem._id }
                                                }}
                                                key={curElem._id} >
                                                <tr >
                                                    <td className={classes.campaignNameColoumn}>{curElem.campaignName}</td>
                                                    {/* <td> {curElem.userId}</td>
                                                    <td> {curElem.campaignOwnerId}</td> */}
                                                </tr>
                                            </Link>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            }

            {
                campaign.length === 0 && <Empty
                    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                    imageStyle={{
                        height: 60,
                    }} />
            }
            {
                campaign.length > 0 &&
                <div className={classes.action_continer}>
                    <div className={classes.actions} >
                        <button className={classes.actions_btn} onClick={(e) => previousPage(e)}><CaretLeftOutlined className={classes.next_previous_Page} /></button>
                        <h2 className={classes.actions_pageno}>{pageNo}</h2>
                        {!isPageCount && <button className={classes.actions_btn} onClick={(e) => nextPage(e)}><CaretRightOutlined className={classes.next_previous_Page} /></button>}
                    </div>
                </div>
            }
        </div>
    )
};
