import React, {Component} from 'react';
import HistoryChart from '../components/HistoryChart';

class StatusHistory extends Component {
  constructor(props) {
    super(props);
    document.title = 'Status History';
  }
  
  render() {
    return (
      <div className='container-fluid'>
        <HistoryChart props={this.props} />
      </div>
    );
  }
}

export default StatusHistory;
