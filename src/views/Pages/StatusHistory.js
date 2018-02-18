import React, {Component} from 'react';
import HistoryChart from '../../components/HistoryChart';

class StatusHistory extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <HistoryChart />
      </div>
    );
  }
}

export default StatusHistory;
