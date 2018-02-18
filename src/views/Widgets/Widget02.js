import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardBody, CardFooter,Col,Row} from 'reactstrap';
import classNames from 'classnames';
import {mapToCssModules} from 'reactstrap/lib/utils';
import carbonMonoxide from "../../../public/img/icons/carbonMonoxide.svg"
import handWaving from "../../../public/img/icons/handWaving.svg"
import humidity from "../../../public/img/icons/humidity.svg"
const propTypes = {
  header: PropTypes.string,
  mainText: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  footer: PropTypes.bool,
  link: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

const defaultProps = {
  header: '$1,999.50',
  mainText: 'Income',
  icon: "fa fa-cogs",
  color: 'primary',
  variant: "0",
  link: "#"
};

class Widget02 extends Component {
  render() {
    const {className, cssModule, header, mainText, icon, color, footer, link, children,value, variant, ...attributes} = this.props;

    // demo purposes only
    const padding = (variant === '0' ? {card: "", icon: "p-3", lead: "mt-2"} : ( variant === "1" ? {
      card: "p-0", icon: "p-4", lead: "pt-3" } : {card: "p-0", icon: "p-4 px-5", lead: "pt-3"}));

    const card = {style: "clearfix", color: color, icon: icon, classes: ""};
    card.classes = mapToCssModules(classNames(className, card.style, padding.card), cssModule);

    const lead = {style: "h5 mb-0", color: color, classes: ""};
    lead.classes = classNames(lead.style, 'text-' + card.color, padding.lead);

    const blockIcon = function (icon) {
      
      if(icon === "carbonMonoxide.svg"){
        const classes =  classNames('bg-' + card.color, padding.icon, "font-5xl mr-0 float-right");
        return(<img src={carbonMonoxide} alt="Carbon Monoxide"  className={ classes } style = {{width:"80px", height:"80px", textAlign:"center"}}/>);
      }else if(icon === "handWaving"){
        const classes =  classNames('bg-' + card.color, padding.icon, "font-5xl mr-0 float-right");
        return(<img src={handWaving} alt="Carbon Monoxide"  className={ classes } style = {{width:"80px", height:"80px", textAlign:"center"}}/>);
      }else if(icon === "humidity"){
        const classes =  classNames('bg-' + card.color, padding.icon, "font-5xl mr-0 float-right");
        return(<img src={humidity} alt="Carbon Monoxide"  className={ classes } style = {{width:"80px", height:"80px", textAlign:"center"}}/>);
      }else{
        const classes = classNames(icon, 'bg-' + card.color, padding.icon, "font-5xl mr-0 float-right");
        return (<i className={ classes } style = {{width:"80px",height:"80px",textAlign:"center"}}></i>);
      } 
    };

    const cardFooter = function () {
      if (footer) {
        return (
          <CardFooter className="px-3 py-2">
            <a className="font-weight-bold font-xs btn-block text-muted" href={link}>View More
              <i className="fa fa-angle-right float-right font-lg"></i></a>
          </CardFooter>
        );
      }
    };


    const paddingLeft = {
      padding: "0 0 0 1rem",
    }
    return (
      <Card>
        <CardBody className={ card.classes } {...attributes} style={paddingLeft}>
          <Row>
            <Col xs ="6" style={{padding: "0.5rem 1.5rem"}}>
                <div className={ lead.classes }> { header } </div>
                <div className="text-muted text-uppercase font-weight-bold font-xs">{ mainText }</div>
            </Col>
            <Col xs ="3">
              { blockIcon(card.icon) }
            </Col>
            <Col xs ="3" style={{padding: "1rem 0.5rem", fontSize:"2em"}}>
              {value.toString().replace(/^[a-z]/, letter => letter.toUpperCase() )}{ header === "Humidity"? <span style={{fontSize : "1rem"}}>%</span>: null}{ header === "Temperature"? <span style={{fontSize : "1rem"}}>°C</span>: null}
            </Col>
          </Row>
        </CardBody>
        { cardFooter() }
      </Card>
    )
  }
}

Widget02.propTypes = propTypes;
Widget02.defaultProps = defaultProps;

export default Widget02;