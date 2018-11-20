
import React, { PureComponent } from 'react';
import { ComposedChart, LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush } from 'recharts';
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

class StatusTrendChart extends PureComponent {
    render() {
        let data =this.props.data;
        console.log("line");
        console.log(data);
        return (
            <div>
            <LineChart width={750} height={298} data={data}
                margin={{ top: 20, right: 20, left: 30, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis  />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Unavailable" stroke="#D81B60" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Available" stroke="#81C784" />
                <Brush />
            </LineChart>
        </div>
        );
    }
}

export default (StatusTrendChart);
