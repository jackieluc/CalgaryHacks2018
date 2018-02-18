import React,{Component} from "react";
import {Row,Col} from "reactstrap";
import logo from "../../../../public/img/logo.png"
import air from "../../../../public/img/about/Air.jpg"
import humidity from "../../../../public/img/about/Humidity.jpg"
import motion from "../../../../public/img/about/Motion.jpg"
import temp from "../../../../public/img/about/Temp.jpg"
import graph from "../../../../public/img/about/temp_graph.png"

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
                <Row style={{paddingBottom:10}}>
                    <Col xs="12" sm="6">
                        <h2>Dashboard</h2>
                        <p style={{paddingBottom:20}}>
                            We have designed an easy to digest dashboard allowing for users to quickly understand the status of their home.
                            This dashboard is extremely modular allowing for rapid expansion given future sensor devlopments.
                            This data is updated live at a polling rate that is customizable, up to speeds of a couple seconds per update.
                            We tried to make the user experience clean and simple.
                        </p>

                        <h2>Alerts</h2>
                        <p>
                            Alongside our dashboard, we have used Twillio to allow for SMS notifications. We use various web hooks and polling systems to ensure
                            the users are notififed instantly when the data passes a set "Danger-Zone". This allows for more user customization and configuration of what each home's danger points are.
                        </p>
                    </Col>

                    <Col xs="12" sm="6">
                        <Row style={{paddingTop:20}}>
                            <Col xs="12" md="6">
                                <img src={temp} alt="Temprature" style={{width : "100%", paddingBottom: "20px" }}/>
                            </Col>
                            <Col xs="12" md="6">
                                <img src={air} alt="Air Quality" style={{width : "100%", paddingBottom: "20px" }}/>
                            </Col>
                            <Col xs="12" md="6">
                                <img src={motion} alt="Motion" style={{width : "100%", paddingBottom: "20px" }}/>
                            </Col>
                            <Col xs="12" md="6">
                                <img src={humidity} alt="Humidity" style={{width : "100%", paddingBottom: "20px" }}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>       
                <Row>
                    <Col xs="12">
                        <h2>
                            History
                        </h2>
                        <p>
                            We store entries up to a certain point on our MongoDB so our users can access their past analytics.
                            This allows them to compare their current condition to past conditions. We provide a few simple graphs to allow for visual comparisons.
                            Below you can see an example of our data over the course of 50 entries. This amount is configurable.                                          
                        </p>
                    </Col>
                        
                    <Col xs="12">
                        <img src={graph} alt="Graph" style={{maxWidth:"1500px", width:"100%", paddingBottom: "20px" }}/>
                    </Col>

                    <Col xs="12">
                        <h2>Link to presentation</h2>
                        <p>https://docs.google.com/presentation/d/1sZKT3lzK22bM52ph5lu6ipJ2u68ow6KTANVOMZ1ntkU/edit?usp=sharing</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default About;
