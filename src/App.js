import React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { AssetList, showAsset } from '././AssetSPA/Assets';
import { DeviceList, showDevice } from '././DevicesSPA/Devices';

import UserIcon from '@material-ui/icons/People';
import Dashboard from './Dashboard';

import authProvider from './authProvider';

import { func } from 'prop-types';

import MaintenanceHistoryIcon from '@material-ui/icons/Build';
import LocationIcon from '@material-ui/icons/LocationOn';
import AssetIcon from '@material-ui/icons/CastConnected';
import AnalytcisIcon from '@material-ui/icons/PieChart';
import AlertConfigIcon from '@material-ui/icons/AddCircleOutline';
import AlertDashboard from '@material-ui/icons/ErrorOutline';
import HistoryAlertIcon from '@material-ui/icons/Error';
import DeviceIcon from '@material-ui/icons/Router';
import AlertIcon from '@material-ui/icons/Warning';
import NotFound from './NotFound';
import Login from './CustomLoginPage';
import dataProvider from './dataProvider';
import CustomLoginPage from './CustomLoginPage';
import CustomLayout from './CustomLayout'
import './index.css';


  class App extends React.Component {

    render(){
      console.log(this.props)
      return(

        <Admin 
        title="Fleet-Admin"
        catchAll={NotFound}
       // dashboard={Dashboard}
        authProvider={authProvider}
        dataProvider={dataProvider}
        loginPage={Login}
        appLayout={CustomLayout}
      >
  
        <Resource
          name="getAssetList"
          options={{ label: 'Assets' }}
          list={AssetList}
          show={showAsset}
          icon={AssetIcon}          
        />
        
        <Resource
          name="getDeviceList"
          options={{ label: 'Devices' }}
          list={DeviceList}
          show={showDevice}
          icon={DeviceIcon}
        />
  
  
        <Resource name="getAssetListForReference" />
        <Resource name="getListOfDataPoints" />
        <Resource name="getAssetAlerts" />
        <Resource name="getAssetMaintenance" />
        <Resource name="getListOfAttributes" />
        <Resource name="getAssetCurrentData" />
  
      </Admin>
  

      )
    }

  }

export default App;

