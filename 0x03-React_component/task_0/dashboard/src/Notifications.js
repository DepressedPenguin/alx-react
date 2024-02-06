import React from "react";
import './Notifications.css'
import { getLatestNotification } from "./utils";
import closeIcon from "./close-icon.png";

export default function Notifications(){
    // LOGS THE BTN HAS CLICKED
    function handl_btn_click(){
        console.log("Close button has been clicked");
    }
    return(
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            {/* UNORDER LIST */}
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
            <button onClick={handl_btn_click} style={{
                 position:"absolute",
                 top:0,
                 right:0,
                 margin:'15px'
                  }} aria-label="close">
            <img src={closeIcon} alt="close" />
            </button>
        </div>
    );
}
