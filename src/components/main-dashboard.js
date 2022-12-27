import React from "react";
import DashboardCard from "./dashboard-card";

export default function Dashboard(){


    const dashboardData = {
        totalFollowers: "23,004",
    }

    const cardsData = [
        {
            platform: "facebook",
            followers: 1987,
            followersUpdate: 12,
            imageLink: "/images/icon-facebook.svg",
            handle: "@nathanf"
        },
        {
            platform: "twitter",
            followers: 1044,
            followersUpdate: 99,
            imageLink: "/images/icon-twitter.svg",
            handle: "@nathanf"
        },
        {
            platform: "instagram",
            followers: "11k",
            followersUpdate: 1099,
            imageLink: "/images/icon-instagram.svg",
            handle: "@realnathanf"
        },
        {
            platform: "youtube",
            followers: 8239,
            followersUpdate: -144,
            imageLink: "/images/icon-youtube.svg",
            handle: "Nathan F."
        }
    ]


    return(
        <div className="mainDashboard">

            <div className="header">
                <div className="left">
                    <h1 className="headerTitle">Social Media Dashboard</h1>
                    <p>Total Followers: {dashboardData.totalFollowers}</p>
                </div>
                <div className="line"></div>
                <div className="right">
                    <p>Dark Mode</p>
                    <div className="toggle">
                        <div className="toggle-ball"></div>
                    </div>
                </div>
            </div>

            <DashboardCard cards={cardsData}/>
            
        </div>
    )
}