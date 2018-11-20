import React from 'react';
import { Tab, TabbedShowLayout, ShowView, ShowController, BooleanField, ReferenceArrayField, NumberInput, FormDataConsumer, BooleanInput, Labeled, EmailField, ReferenceArrayInput, SelectArrayInput, ArrayInput, SimpleFormIterator, RichTextInput, DateInput, ArrayField, ShowButton, Show, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, SimpleShowLayout } from 'react-admin';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
// import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done';
import BlockIcon from '@material-ui/icons/Block';
import Chip from '@material-ui/core/Chip';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import StatusStatisticsContainer from './StatusStatisticsContainer';
import StatusTrendContainer from './StatusTrendContainer';
import StatusTrendChart from './StatusTrendChart';
import DynamiclyRefreshedDoughnut from './DynamiclyRefreshedDoughnut';
import RandomAnimatedLine from './RandomAnimatedLine';
import ShowDeviceTab from './ShowDeviceTab';
import { Col, Container, Row, Badge } from 'reactstrap';
import Panel from '../components/Panel';
import { Card, CardBody } from 'reactstrap';
import Collapse from '../components/Collapse';
import Table from '../components/table/Table';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

const gridStyle = {
    width: '60%',

};


export const DeviceList = (props) => (
    <Container id="deviceContainer">
        <Row>
            <Col md={12}>
                <h3 className='page-title'>Device</h3>
            </Col>
        </Row>
        <Row>
            <br />
        </Row>
        <Row>
            <StatusStatisticsContainer />
            <StatusTrendContainer />
        </Row>
        <Row>
            <Panel xs={12} md={12} lg={12} title="Device Status Details">
                <List title="Devices" {...props} perPage={5} sort={{ field: 'telematicsSerialNumber', order: 'DESC' }} >
                    <DeviceGrid />
                </List>
            </Panel>
        </Row>
    </Container>
);


const DeviceGrid = ({ ids, data, basePath }) => (
    <div style={{ gridStyle }}>

        <Table responsive style={{ tableLayout: 'auto' }}  >
            <TableHead>
                <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>Serial#</TableCell>
                    <TableCell>Device</TableCell>
                    <TableCell> Asset</TableCell>
                    <TableCell>Last Comm.</TableCell>
                    <TableCell>Show</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {ids.map(id => {
                    return (
                        <TableRow
                            key={id}>

                            {(data[id]).avaiabilityStatus == 1 && (
                                <TableCell><Badge color='success'>Available</Badge></TableCell>
                            )}

                            {(data[id]).avaiabilityStatus == 0 && (
                                <TableCell><Badge color='danger'>Unavailable</Badge></TableCell>
                            )}
                            <TableCell>{(data[id]).telematicsSerialNumber}</TableCell>
                            <TableCell>{(data[id]).model}</TableCell>
                            <TableCell>{(data[id]).assetName}</TableCell>

                            {(data[id]).lastCommunicated === 'unvailable' && (
                                <TableCell>{"unavaiable"}</TableCell>
                            )}

                            {(data[id]).lastCommunicated != 'unvailable' && (
                                <TableCell>{new Date().toISOString()}</TableCell>
                            )}

                            <TableCell>
                                <ShowButton
                                    resource="getDeviceList" basePath={basePath} record={(data[id])}
                                />
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </div>

)

DeviceGrid.defaultProps = {
    data: {},
    ids: [],
};


const DeviceTitle = ({ record }) => {
    return <span>Device / {record ? `${record.telematicsSerialNumber}` : ''}</span>;
};

const DeviceDetailedView = ({ record }) => {
    return (
        // <Panel xs={12} md={12} lg={12} title={"Device : " + record.model+" - "+record.telematicsSerialNumber}> 
        <Card>
            <CardBody>
                <h5 class="bold-text heading-txt">{"Device : " + record.model+" - "+record.telematicsSerialNumber}</h5>
                <div class="card">
                    <div class="card-body">
                        <Col md={6} lg={6} xs={12} className="table-class-new">
                            <h5>Device Details</h5>
                            <Table responsive className='table-bordered'>
                                <thead className="table-heading">
                                    <tr width="100%">
                                        <th width="50%">Field Name</th>
                                        <th width="50%">Values</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Telematics Serial Number</strong></td>
                                        <td><strong>{record ? `${record.telematicsSerialNumber}` : ''}</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Device Model</strong></td>
                                        <td><strong>{record ? `${record.model}` : ''}</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Activation Date</strong></td>
                                        <td><strong>{record ? `${record.activatedDate}` : ''}</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Last Communication</strong></td>
                                        <td><strong>{record ? `${record.lastCommunicated}` : ''}</strong></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col md={6} lg={6} xs={12} className="table-class-new">
                            <h5>Asset Details</h5>
                            <Table responsive className='table-bordered'>
                                <thead className="table-heading">
                                    <tr width="100%">
                                        <th width="50%">Field Name</th>
                                        <th width="50%">Values</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Name</strong></td>
                                        <td><strong>{record ? `${record.assetName}` : ''}</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Device Model</strong></td>
                                        <td><strong>{record ? `${record.model}` : ''}</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Make</strong></td>
                                        <td><strong>{record ? `${record.Make}` : ''}</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Model Year</strong></td>
                                        <td><strong>{record ? `${record.modelYear}` : ''}</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Compressor Controller</strong></td>
                                        <td><strong>{record ? `${record.compressorController}` : ''}</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Compressor Type</strong></td>
                                        <td><strong>{record ? `${record.compressorType}` : ''}</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Distributor Name</strong></td>
                                        <td><strong>{record ? `${record.distributorName}` : ''}</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Motor HP</strong></td>
                                        <td><strong>{record ? `${record.motorHP}` : ''}</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Nominal Package FlowRating</strong></td>
                                        <td><strong>{record ? `${record.nominalPackageFlowRating}` : ''}</strong></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </div>
                </div>
            </CardBody>
        </Card>
        //</Panel>
    );
};

export const showDevice = (props) => (
    <Show title="Devices" {...props}  >
        <DeviceDetailedView />
    </Show>
);