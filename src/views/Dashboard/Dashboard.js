import React, { Component } from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Table
} from 'reactstrap';
import Widget02 from '../Widgets/Widget02';

import house from "../../../public/img/houseIcons/House.svg"
import day from "../../../public/img/houseIcons/Day.svg"
import night from "../../../public/img/houseIcons/Night.svg"
import cold from "../../../public/img/houseIcons/Cold.svg"
import hot from "../../../public/img/houseIcons/Hot.svg"
import smoke from "../../../public/img/houseIcons/Smoke.svg"
import motion from "../../../public/img/houseIcons/Motion.svg"
import flood from "../../../public/img/houseIcons/Flood.svg"


const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';


// This is to align the SVG's correctly on the page
const houseIcon = {
  position:"absolute",
  top:"0",
  left:"15px",
  zIndex:"1",
  width: "80%",
};


// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40]
    }
  ],
};

const cardChartOpts1 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11]
    }
  ],
};

const cardChartOpts2 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40]
    }
  ],
};

const cardChartOpts3 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }],
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
    }
  ],
};

const cardChartOpts4 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false,
      barPercentage: 0.6,
    }],
    yAxes: [{
      display: false,
    }]
  }
}

// Social Box Chart
const socialBoxData = [
  {data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook'},
  {data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter'},
  {data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin'},
  {data: [35, 23, 56, 22, 97, 23, 64], label: 'google'}
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      }
    ]
  };
  return () => data;
};

const socialChartOpts = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients'
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients'
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews'
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic'
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR'
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate'
  }
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label
      }
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [{
      display: false,
    }],
    yAxes: [{
      display: false,
    }]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    }
  },
  legend: {
    display: false
  }
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.fetchStatuses = this.fetchStatuses.bind(this);

    document.title = 'Dashboard';

    this.state = {
      dropdownOpen: false,
      health: null,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  
  fetchStatuses() {
    fetch('http://52.53.149.194:8000/api/health?react')
    .then(res => res.json())
    .then(json => this.setState({ health: json }));
  }

  componentDidMount() {
    this.timer = setInterval(()=> this.fetchStatuses(), 5000);
  }

  render() {
    return (
      <div className="animated fadeIn" style={{overflow: 'hidden'}}>
        <Row>
          { this.state && this.state.health ? 
            !this.state.health.error ?
              <Col xs="12" sm="8">
                {this.state.health.motion ? 
                  <img src={motion} style={{position:"absolute", top:"0", left:"0px", zIndex:"-1", width: "80%" }}/>
                    : null }
                {(new Date().getHours()) > 8 && (new Date().getHours()) < 18 ?
                  <img src={day}  style= {houseIcon}/>
                  : <img src={night}  style={houseIcon}/> }
                {this.state.health.temperature && this.state.health.temperature.result < 15 ?
                  <img src={cold} style={houseIcon}/>
                  : null }
                {this.state.health.temperature && this.state.health.temperature.result > 27 ?
                  <img src={hot} style={houseIcon}/>
                  : null }
                {this.state.health.gas && this.state.health.gas.result < 5 ?
                  <img src={smoke} style={houseIcon}/>
                  : null }
                {this.state.health.humidity && this.state.health.humidity.result > 50 ?
                  <img src={flood} style={houseIcon}/>
                  : null }
                <img src={house} style={{width:"80%"}}/>
              </Col>
              : <div style={{ margin: '0 auto', paddingTop: '25%' }}>
                  <i className="fa fa-circle-o-notch fa-lg fa-spin"></i>
                  <small style={{ marginLeft: '10px' }}>Unable to retrieve summary... Retrying...</small>
                </div>
            : <div style={{ margin: '0 auto', paddingTop: '25%' }}>
                <i className="fa fa-circle-o-notch fa-lg fa-spin"></i>
                <small style={{ marginLeft: '10px' }}>Loading summary...</small>
              </div>
          }

          {this.state && this.state.health ? 
            !this.state.health.error ? 
              <Col xs="12" sm="4">
                <Row><Col xs="12">
                  {
                    (typeof(this.state.health.temperature) !== 'undefined' && (this.state.health.temperature.result > 40) || this.state.health.temperature && (this.state.health.temperature.result < -40)) ?
                    <Widget02 header="Temperature" mainText="Status: Danger" icon="fa fa-thermometer-full" color="danger" value={this.state.health.temperature.result.toFixed(0)} footer link="#/status-history/temperature" />
                    : <Widget02 header="Temperature" mainText="Status: Good" icon="fa fa-thermometer-full" color="primary" value={this.state.health.temperature.result.toFixed(0)} footer link="#/status-history/temperature" />
                  }
                </Col></Row>
                <Row><Col xs="12">
                  {
                    this.state.health.gas && this.state.health.gas.result < 5 ?
                    <Widget02 header="Air Quality" mainText="Status: Danger" icon="carbonMonoxide.svg" color="danger" value={this.state.health.gas.result.toFixed(2)} footer link="#/status-history/air-quality" />
                    : <Widget02 header="Air Quality" mainText="Status: Good" icon="carbonMonoxide.svg" color="primary" value={this.state.health.gas.result.toFixed(2)} footer link="#/status-history/air-quality" />
                  }
                </Col></Row>
                <Row><Col xs="12">
                  <Widget02 header="Motion" mainText="Status: Good" icon="handWaving" color="primary" value={this.state.health.motion.result} footer link="#/status-history/motion" />
                </Col></Row>
                <Row><Col sm="12">
                  {
                    this.state.health.humidity && this.state.health.humidity.result > 50?
                    <Widget02 header="Humidity" mainText="Status: Danger" icon="humidity" color="danger" value={this.state.health.humidity.result.toFixed(0)} footer link="#/status-history/humidity" />
                    : <Widget02 header="Humidity" mainText="Status: Good" icon="humidity" color="primary" value={this.state.health.humidity.result.toFixed(0)} footer link="#/status-history/humidity" />
                  }
                </Col></Row>
              </Col>
              :
              <div style={{ margin: '0 auto', paddingTop: '25%' }}>
                <i className="fa fa-circle-o-notch fa-lg fa-spin"></i>
                <small style={{ marginLeft: '10px' }}>Unable to retrieve stauses... Retrying...</small>
                { // try to re-fetch the statuses
                  this.fetchStatuses()
                }
              </div>
            : 
            <div style={{ margin: '0 auto', paddingTop: '25%' }}>
              <i className="fa fa-circle-o-notch fa-lg fa-spin"></i>
              <small style={{ marginLeft: '10px' }}>Loading statuses...</small>
            </div>
          }
        </Row>
        
        {/* <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card1' isOpen={this.state.card1}
                                  toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem disabled>Disabled action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <h4 className="mb-0">9.823</h4>
                <p>Members online</p>
              </CardBody>
              <div className="chart-wrapper px-3" style={{height:'70px'}}>
                <Line data={cardChartData1} options={cardChartOpts1} height={70}/>
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card2' isOpen={this.state.card2}
                            toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <h4 className="mb-0">9.823</h4>
                <p>Members online</p>
              </CardBody>
              <div className="chart-wrapper px-3" style={{height:'70px'}}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70}/>
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card3' isOpen={this.state.card3}
                            toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <h4 className="mb-0">9.823</h4>
                <p>Members online</p>
              </CardBody>
              <div className="chart-wrapper px-0" style={{height:'70px'}}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70}/>
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card4' isOpen={this.state.card4}
                                  toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <h4 className="mb-0">9.823</h4>
                <p>Members online</p>
              </CardBody>
              <div className="chart-wrapper px-3" style={{height:'70px'}}>
                <Bar data={cardChartData4} options={cardChartOpts4} height={70}/>
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="6" sm="6" lg="3">
            <div className="social-box facebook">
              <i className="fa fa-facebook"></i>
              <div className="chart-wrapper">
                <Line data={makeSocialBoxData(0)} options={socialChartOpts} height={90}/>
              </div>
              <ul>
                <li>
                  <strong>89k</strong>
                  <span>friends</span>
                </li>
                <li>
                  <strong>459</strong>
                  <span>feeds</span>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <div className="social-box twitter">
              <i className="fa fa-twitter"></i>
              <div className="chart-wrapper">
                <Line data={makeSocialBoxData(1)} options={socialChartOpts} height={90}/>
              </div>
              <ul>
                <li>
                  <strong>973k</strong>
                  <span>followers</span>
                </li>
                <li>
                  <strong>1.792</strong>
                  <span>tweets</span>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs="6" sm="6" lg="3">

            <div className="social-box linkedin">
              <i className="fa fa-linkedin"></i>
              <div className="chart-wrapper">
                <Line data={makeSocialBoxData(2)} options={socialChartOpts} height={90}/>
              </div>
              <ul>
                <li>
                  <strong>500+</strong>
                  <span>contacts</span>
                </li>
                <li>
                  <strong>292</strong>
                  <span>feeds</span>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <div className="social-box google-plus">
              <i className="fa fa-google-plus"></i>
              <div className="chart-wrapper">
                <Line data={makeSocialBoxData(3)} options={socialChartOpts} height={90}/>
              </div>
              <ul>
                <li>
                  <strong>894</strong>
                  <span>followers</span>
                </li>
                <li>
                  <strong>92</strong>
                  <span>circles</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row> */}
      </div>
    )
  }
}

export default Dashboard;
