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
      labels: [],
      header: '',
    };
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected
    });
  }

  getStepSize(header) {
    let max = 100;
    let ticks = 5;
    switch(header) {
      case 'temperature':
        max = 30;
        ticks = 5;
        break;
      case 'air-quality':
        max = 10;
        ticks = 5;
        break;
      case 'motion':
        max = 2;
        ticks = 1;
        break;
      case 'humidity':
        max = 100;
        ticks = 10;
        break;
    }
    return Math.ceil(max, ticks);
  }

  getMin(header) {
    let min = 0;
    switch(header) {
      case 'temperature':
        min = -20;
        break;
      case 'gas':
        min = 0;
        break;
      case 'motion':
        min = 0;
        break;
      case 'humidity':
        min = 0;
        break;
    }
    return min;
  }

  getMax(header) {
    let max = 100;
    switch(header) {
      case 'temperature':
        max = 30;
        break;
      case 'gas':
        max = 10;
        break;
      case 'motion':
        max = 1;
        break;
      case 'humidity':
        max = 100;
        break;
    }
    return max;
  }

  fetchStatusHistory(header) {
    // because everyone else is lazy
    if (header === 'air-quality') {
      header = 'gas';
    }

    fetch(`http://52.53.149.194:8000/api/get/${header}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ dataPoints: json });
        let arr = [];
        let labelsArr = [];
        const temp = this.state.dataPoints.values.sort((a, b) => a.time - b.time);
        console.log(temp);
        for (let obj of temp) {
          labelsArr.push(`${new Date(obj.time).getHours()}:${new Date(obj.time).getMinutes()}:${new Date(obj.time).getSeconds()}`);
          console.log(typeof obj);
          if (typeof obj.value === 'boolean') {
            arr.push(obj.value);
          }
          else {
            arr.push(obj.value.toFixed(2));
          }
        }
        this.setState({ dataPointsArray: arr, labels: labelsArr, header: header });
    });
  }

  componentDidMount() {
    this.timer = setInterval(()=> this.fetchStatusHistory(this.props.props.location.pathname.split('/')[2]), 3000);
  }

  render() {
    const acceptedStatuses = ['temperature', 'air-quality', 'motion', 'humidity'];
    const header = this.props.props.location.pathname.split('/')[2];
    const mainChart = {
      labels: this.state.labels,
      datasets: [
        {
          label: 'Status History',
          backgroundColor: convertHex(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: this.state.dataPointsArray,
        },
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
            stepSize: this.getStepSize(this.state.header),
            min: this.getMin(this.state.header),
            max: this.getMax(this.state.header),
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
                </Row>
                <div className="chart-wrapper" style={{height: 300 + 'px', marginTop: 40 + 'px'}}>
                { console.log(this.state.dataPointsArray)}
                  <Line data={mainChart} options={mainChartOpts} height={300}/>
                </div>
              </CardBody>
              {/* <CardFooter>
                <ul>
                  <li>
                    <div className="text-muted">Average Status</div>
                    <strong>
                      { this.getAverage(this.state.dataPointsArray) }
                    </strong>
                  </li>
                </ul>
              </CardFooter> */}
            </Card>
          </Col>
          </Row>
          : <div style={{ margin: '0 auto', paddingTop: '25%', paddingLeft: '50%', }}>
              <i className="fa fa-circle-o-notch fa-lg fa-spin"></i>
              <small style={{ marginLeft: '10px' }}>Loading statuses...</small>
            </div>
        : <div>Cannot find {this.props.props.location.pathname.split('/')[2]} history.</div>
    );
  }
}

export default HistoryChart;