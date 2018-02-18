import React,{Component} from "react";
import {Row,Col} from "reactstrap";
import logo from "../../../../public/img/logo.png"
import air from "../../../../public/img/about/Air.jpg"
import humidity from "../../../../public/img/about/Humidity.jpg"
import motion from "../../../../public/img/about/Motion.jpg"
import temp from "../../../../public/img/about/Temp.jpg"

class About extends Component{
    render(){
        
        return(
            <div style={{paddingRight: "20px", paddingLeft: "20px"}}>
                <Row>
                    <Col xs="12">
                        <h1 style={{textAlign:"center", paddingBottom: "30px"}}>About Us <hr></hr> </h1>
                    </Col>
                </Row> 
                <Row style={{paddingBottom: "30px"}}>
                    <Col xs="12" sm="4">
                        <img src={logo} style={{display: "block", marginLeft: "auto", marginRight: "auto", paddingLeft:"2%", width: "50%", maxWidth: 140, paddingTop:"5%"}} alt="Logo" />
                    </Col>
                    <Col xs="12" sm="8">
                        <h2 style={{textAlign:"center", paddingBottom: "20px"}}>Purpose</h2>
                        <p>
                            Our homes are one of the most valuable financial assets in our lives. They hold uncountable precious memories and we work hard to make our homes our own.
                            <br></br><br></br>
                            With a growth in consumer travel and popularization of home rental applications such as AirBnB, homeowners are frequently out of the house and stuck having to hire a physical house sitters or leave their house unattended.
                            This can create risks such as fires, burglary, flooding and gas leaks. Unmonitored tenants can misuse properties, and potentially damage your property value. For these problems, we built housesitter.tech.
                        </p>
                    </Col>
                </Row>
        
                <h2>Dashboard</h2>
                <h3>Real time status</h3>
                <Row>
                    <Col xs="12" sm="6" md="3">
                        <img src={temp} alt="Temprature" style={{width : "100%", paddingBottom: "20px" }}/>
                    </Col>
                    <Col xs="12" sm="6" md="3">
                        <img src={air} alt="Air Quality" style={{width : "100%", paddingBottom: "20px" }}/>
                    </Col>
                    <Col xs="12" sm="6" md="3">
                        <img src={motion} alt="Motion" style={{width : "100%", paddingBottom: "20px" }}/>
                    </Col>
                    <Col xs="12" sm="6" md="3">
                        <img src={humidity} alt="Humidity" style={{width : "100%", paddingBottom: "20px" }}/>
                    </Col>
                </Row>            
            </div>
        );
    }
}

export default About;
