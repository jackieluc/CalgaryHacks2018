import React,{Component} from "react";
import {Row,Col} from "reactstrap";
import logo from "../../../../public/img/logo.png"

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
                    <Col xs="12" s="6" md="3">
                        <img src="#" alt="Temprature" style={{height : "100px" }}/>
                    </Col>
                    <Col xs="12" s="6" md="3">
                        <img src="#" alt="Air Quality" style={{height : "100px" }}/>
                    </Col>
                    <Col xs="12" s="6" md="3">
                        <img src="#" alt="Motion" style={{height : "100px" }}/>
                        <p>Detect activity</p>
                    </Col>
                    <Col xs="12" s="6" md="3">
                        <img src="#" alt="Humidity" style={{height : "100px" }}/>
                    </Col>
                </Row>            
            </div>
        );
    }
}

export default About;
