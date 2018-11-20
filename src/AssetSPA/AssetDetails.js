import React, {PureComponent} from 'react';
import {Badge} from 'reactstrap';
import Panel from '../components/Panel';
import Table from '../components/table/Table';

class DeviceDetails extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Panel xs={12} md={12} lg={12} title="Device Status">
        <Table responsive className='table--bordered'>
          <thead>
          <tr>            
            <th>Telematics Serial#</th>
            <th>Make</th>
            <th>Asset Name</th>
            <th>Model</th>
            <th>Distributor Name</th>            
            <th>Asset Details</th>            
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1141233567</td>
            <td>Compressor</td>
            <td>LS 110</td>
            <td>Asset 3</td>
            <td>Distributor1</td>
            <td>Show</td>           
          </tr>
          <tr>
            <td>1212343457</td>
            <td>Compressor</td>
            <td>LS 90</td>
            <td>Asset 1</td>
            <td>Distributor2</td>
            <td>Show</td>                        
          </tr>
          <tr>
            <td>1212343458</td>
            <td>Compressor</td>
            <td>LS 110</td>
            <td>Asset 1</td>
            <td>Distributor2</td>
            <td>Show</td>                       
          </tr>
          <tr>
            <td>1212123434</td>
            <td>Compressor</td>
            <td>LS 110</td>
            <td>Asset 2</td>
            <td>Distributor 3</td>
            <td>Show</td>                           
          </tr>
          <tr>
            <td>1121234345</td>
            <td>Compressor</td>
            <td>LS 110</td>
            <td>Asset 2</td>
            <td>Distributor 3</td>
            <td>Show</td>                          
          </tr>
          <tr>
            <td>1231212343</td>
            <td>Compressor</td>
            <td>LS 110</td>
            <td>Asset 3</td>
            <td>Distributor1</td>
            <td>Show</td>                      
          </tr>
          </tbody>
        </Table>
      </Panel>
    )
  }
}

export default (DeviceDetails);
