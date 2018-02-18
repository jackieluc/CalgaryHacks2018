import React,{Component} from "react";
import {Row,Col} from "reactstrap";
import temprature from "../../../../public/img/about/temprature.png"
import airQuality from "../../../../public/img/about/airQuality.png"
import motion from "../../../../public/img/about/motion.png"
import humidity from "../../../../public/img/about/humidity.png"


class About extends Component{


    render(){
        
        return(
            <div> 
                <h1>About</h1>

                <h2>Purpose:</h2>
                <p>
                    Homes are the greatest investment many make, but many do not take precautions to keep them safe. 
                    Thus over 24 hours we have built an IOT device that can protect your property. With sensors such 
                    as temperature, humidity, air quality and motion you can keep track of your home. Furthermore, 
                    we have created a dashboard website to view the status of your home. Thus, you can keep tabs on 
                    your house when you are away, or renting on Airbnb. Lastly the server keeps track of the history 
                    of the sensors, which can be used to diagnose problems occurring the house such as a water leak, 
                    or a faulty thermostat.
                </p>

                <h2>Dashboard</h2>
                <h3>Real time status</h3>
                <Row>
                    <Col xs="12" s="6" md="3">
                        <img src={temprature} alt="Temprature" style={{height : "100px" }}/>
                    </Col>
                    <Col xs="12" s="6" md="3">
                        <img src={airQuality} alt="Air Quality" style={{height : "100px" }}/>
                    </Col>
                    <Col xs="12" s="6" md="3">
                        <img src={motion} alt="Motion" style={{height : "100px" }}/>
                        <p>Detect activity</p>
                    </Col>
                    <Col xs="12" s="6" md="3">
                        <img src={humidity} alt="Humidity" style={{height : "100px" }}/>
                    </Col>
                </Row>            
            </div>
        );
    }
}


