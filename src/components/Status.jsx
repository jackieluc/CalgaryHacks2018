import React from "react";



export default function Status(){


    return(
        <div classname="col-sm-6 col-xs-12">
            <div classname="info-box bg-aqua">
                <span classname="info-box-icon">
                    <i classname="fa fa-bookmark-o"></i>
                </span>
                <div classname="info-box-content">
                    <span classname="info-box-text">Bookmarks</span>
                    <span classname="info-box-number">41,410</span>
                    <div classname="progress">
                        <div classname="progress-bar" style="width: 70%"></div>
                    </div>
                    <span classname="progress-description">
                        70% Increase in 30 Days
                    </span>
                </div>
            </div>
        </div>
    );
}