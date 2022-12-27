import React from "react";

export default function DashboardCard(props){

    console.log("hello");

    return(
        <div className="cards">

            {props.cards.map(card => (
                <div className="card">

                    <div className="card-header">
                        <img src={process.env.PUBLIC_URL + card.imageLink} alt="" />
                        <p>{card.handle}</p>
                    </div>

                    <div className="card-followers">
                        <h1>{card.followers}</h1>
                        <p>Followers</p>
                    </div>

                    <div className="card-follower-updates">
                        <p>{card.followersUpdate} Today</p>
                    </div>
                    
                </div>
            ))}
            
        </div>
    )
}