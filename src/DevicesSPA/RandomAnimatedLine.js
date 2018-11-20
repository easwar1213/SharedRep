import React, {PureComponent} from 'react';
import {Line} from 'react-chartjs-2';
import Panel from '../components/Panel';

const data1 = [
  { name: '17-Oct', Unavailable: 14, Available: 9},
  { name: '18-Oct', Unavailable: 31,Available: 11 },
  { name: '19-Oct', Unavailable: 14, Available: 4 },
  { name: '20-Oct', Unavailable: 3,Available: 13 },
  { name: '21-Oct', Unavailable: 11, Available: 24  },
  { name: '22-Oct', Unavailable: 16, Available: 22 },
  { name: '23-Oct', Unavailable: 9, Available: 12  },
  { name: '24-Oct', Unavailable: 1, Available: 2  },

];

const initialState = {
  labels: data1.name,
  datasets: [
    {
      label: 'Available',
      fill: false,
      lineTension: 0.3,
      backgroundColor: '#4ce1b6',
      borderColor: '#4ce1b6',
      borderWidth: 2,
      pointBackgroundColor: '#4ce1b6',
      pointHoverRadius: 3,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: data1.Available
    },
    {
      label: 'Unavailable',
      fill: false,
      lineTension: 0.3,
      backgroundColor: '#ff4861',
      borderColor: '#ff4861',
      borderWidth: 2,
      pointBackgroundColor: '#ff4861',
      pointHoverRadius: 3,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: data1.Unavailable
    }
  ]
};

// const initialState = {
//   labels: ['17-Oct', '18-Oct', '19-Oct', '20-Oct', '21-Oct', '22-Oct', '23-Oct','24-Oct'],
//   datasets: [
//     {
//       label: 'Available',
//       fill: false,
//       lineTension: 0.3,
//       backgroundColor: '#4ce1b6',
//       borderColor: '#4ce1b6',
//       borderWidth: 2,
//       pointBackgroundColor: '#4ce1b6',
//       pointHoverRadius: 3,
//       pointHoverBorderWidth: 1,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [9, 11, 4, 13, 24, 22, 12,2]
//     },
//     {
//       label: 'Unavailable',
//       fill: false,
//       lineTension: 0.3,
//       backgroundColor: '#ff4861',
//       borderColor: '#ff4861',
//       borderWidth: 2,
//       pointBackgroundColor: '#ff4861',
//       pointHoverRadius: 3,
//       pointHoverBorderWidth: 1,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [14, 31, 14, 3, 11, 16, 9,1]
//     }
//   ]
// };

const options = {
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'rgb(204, 204, 204)',
          borderDash: [3, 3]
        },
        ticks: {
          fontColor: 'rgb(204, 204, 204)'
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          color: 'rgb(204, 204, 204)',
          borderDash: [3, 3]
        },
        ticks: {
          fontColor: 'rgb(204, 204, 204)'
        }
      }
    ]
  }
};

class RandomAnimatedLine extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: initialState
    };
  }
  
  // componentDidMount() {
  //   const _this = this;
    
  //   setInterval(function () {
  //     const oldDataSet = _this.state.data.datasets[0];
  //     const newData = [];
      
  //     for (let x = 0; x < _this.state.data.labels.length; x++) {
  //       newData.push(Math.floor(Math.random() * 100));
  //     }
      
  //     const newDataSet = {
  //       ...oldDataSet
  //     };
      
  //     newDataSet.data = newData;
      
  //     const oldDataSet2 = _this.state.data.datasets[1];
  //     const newData2 = [];
      
  //     for (let x = 0; x < _this.state.data.labels.length; x++) {
  //       newData2.push(Math.floor(Math.random() * 100));
  //     }
      
  //     const newDataSet2 = {
  //       ...oldDataSet2
  //     };
      
  //     newDataSet2.data = newData2;
      
  //     const newState = {
  //       ...initialState,
  //       data: {
  //         datasets: [newDataSet, newDataSet2],
  //         labels: _this.state.data.labels
  //       }
  //     };
      
  //     _this.setState(newState);
  //   }, 4000);
  // }
  
  render() {
    const {t} = this.props;
    //let data =this.props.data;

    return (      
      <Panel xs={12} md={12} lg={6} title="Device Status Trend">
            <Line data={this.state.data} options={options}/>
      </Panel>
    //   <div>
    //   <Line data={this.state.data} options={options}/>
    // </div>
    )
  }
}

export default (RandomAnimatedLine);
