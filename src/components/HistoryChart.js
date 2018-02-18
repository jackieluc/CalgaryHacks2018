import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {Row, Col, Card, CardTitle, CardBody, Button, ButtonToolbar, ButtonGroup, CardFooter, Progress} from 'reactstrap';

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';

// Main Chart

// convert Hex to RGBA
function convertHex(hex, opacity) {
  hex = hex.replace('#', '');
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  return result;
}

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

// for (var i = 0; i <= elements; i++) {
//   data1.push(random(50, 200));
//   data2.push(random(80, 100));
//   data3.push(65);
// }

class HistoryChart extends Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.fetchStatusHistory = this.fetchStatusHistory.bind(this);

    this.state = {
      radioSelected: 2,
      dataPoints: null,
      dataPointsArray: [],
      monthNames: [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
      ],
    };
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected
    });
  }

  fetchStatusHistory(header) {
    fetch(`http://52.53.149.194:8000/api/get/${header}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ dataPoints: json });
        let arr = [];
        for (let obj of this.state.dataPoints.values) {
          arr.push(obj.value.toFixed(2));
        }
        this.setState({ dataPointsArray: arr });
    });
  }

  componentDidMount() {
    this.fetchStatusHistory(this.props.props.location.pathname.split('/')[2]);
  }

  render() {
    const acceptedStatuses = ['temperature', 'air-quality', 'motion', 'humidity'];
    const header = this.props.props.location.pathname.split('/')[2];
    const mainChart = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: convertHex(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: this.state.dataPointsArray,
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'transparent',
          borderColor: brandSuccess,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: data2
        },
        {
          label: 'My Third dataset',
          backgroundColor: 'transparent',
          borderColor: brandDanger,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 1,
          borderDash: [8, 5],
          data: data3
        }
      ]
    }
    
    const mainChartOpts = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false,
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: false,
            maxTicksLimit: 10,
            stepSize: Math.ceil(30 / 8),
            min: -10,
            max: 30
          }
        }]
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        }
      }
    }

    return (
      acceptedStatuses.includes(header) ? 
        this.state && this.state.dataPoints ? 
          <Row className="justify-content-center">
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">{header.replace(/^[a-z]/, letter => letter.toUpperCase())} History</CardTitle>
                    <div className="small text-muted">{`${this.state.monthNames[new Date(this.state.dataPoints.values[0].time).getMonth()]} ${new Date(this.state.dataPoints.values[0].time).getFullYear()}`}</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{height: 300 + 'px', marginTop: 40 + 'px'}}>
                { console.log(this.state.dataPointsArray)}
                  <Line data={mainChart} options={mainChartOpts} height={300}/>
                </div>
              </CardBody>
              <CardFooter>
                <ul>
                  <li>
                    <div className="text-muted">Visits</div>
                    <strong>29.703 Users (40%)</strong>
                    <Progress className="progress-xs mt-2" color="success" value="40"/>
                  </li>
                  <li className="d-none d-md-table-cell">
                    <div className="text-muted">Unique</div>
                    <strong>24.093 Users (20%)</strong>
                    <Progress className="progress-xs mt-2" color="info" value="20"/>
                  </li>
                  <li>
                    <div className="text-muted">Pageviews</div>
                    <strong>78.706 Views (60%)</strong>
                    <Progress className="progress-xs mt-2" color="warning" value="60"/>
                  </li>
                  <li className="d-none d-md-table-cell">
                    <div className="text-muted">New Users</div>
                    <strong>22.123 Users (80%)</strong>
                    <Progress className="progress-xs mt-2" color="danger" value="80"/>
                  </li>
                  <li className="d-none d-md-table-cell">
                    <div className="text-muted">Bounce Rate</div>
                    <strong>Average 40.15%</strong>
                    <Progress className="progress-xs mt-2" color="primary" value="40"/>
                  </li>
                </ul>
              </CardFooter>
            </Card>
          </Col>
          </Row>
          : <div style={{ margin: '0 auto', paddingTop: '25%' }}>
              <i className="fa fa-circle-o-notch fa-lg fa-spin"></i>
              <small style={{ marginLeft: '10px' }}>Loading statuses...</small>
            </div>
        : <div>Cannot find {this.props.props.location.pathname.split('/')[2]} history.</div>
    );
  }
}

export default HistoryChart;