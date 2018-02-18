import React from "react";


export default function Status(){

    const infoBox = {
        "display": "block",
        minHeight: "90px",
        "background": "#fff",
        "width": "100%",
        boxShadow: "0 1px 1px rgba(0,0,0,0.1)",
        borderRadius: "2px",
        marginBottom: "15px",
    }

    const infoBoxIcon = {
        borderTopLeftRadius: "2px",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: "2px",
        "display": "block",
        "float": "left",
        "height": "90px",
        "width": "90px",
        textAlign: "center",
        fontSize: "45px",
        lineHeight: "90px",
        "background": "rgba(0,0,0,0.2)",
    }

    const infoBoxContent = {
        "padding": "5px 10px",
        marginLeft: "90px",
    }

    const infoBoxText = {
        "display": "block",
        fontSize: "14px",
        whiteSpace: "nowrap",
        "overflow": "hidden",
        textOverflow: "ellipsis",
    }
    return(
        <div className="col-sm-6 col-xs-12">
        <div style={infoBox}>
            <span style={infoBoxIcon}>
                <i className="faa fa-thumbs-up"></i>
            </span>
            <div style ={infoBoxContent}>
                <span className="info-box-text" style={infoBoxText}>Bookmarks</span>
                <span className="info-box-number" style={infoBox}>41,410</span>
                <div className="progress">
                    <div className="progress-bar" style={{width: "100%"}}></div>
                </div>
                <span className="progress-description">
                    70% Increase in 30 Days
                </span>
            </div>
        </div>
        </div>

    );
}

{/* <div className="col-sm-6 col-xs-12">
<div className="info-box bg-aqua">
    <span className="info-box-icon">
        <i className="fa fa-bookmark-o"></i>
    </span>
    <div className="info-box-content">
        <span className="info-box-text">Bookmarks</span>
        <span className="info-box-number">41,410</span>
        <div className="progress">
            <div className="progress-bar" style="width: 70%"></div>
        </div>
        <span className="progress-description">
            70% Increase in 30 Days
        </span>
    </div>
</div>
</div> */}