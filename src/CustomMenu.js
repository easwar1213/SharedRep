import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import SettingsIcon from '@material-ui/icons/Settings';
import LabelIcon from '@material-ui/icons/Label';
import {
    translate,
    DashboardMenuItem,
    MenuItemLink,
    Responsive,
} from 'react-admin';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import LocationIcon from '@material-ui/icons/LocationOn';
import AssetIcon from '@material-ui/icons/CastConnected';
import DeviceIcon from '@material-ui/icons/Router';
import AnalytcisIcon from '@material-ui/icons/PieChart';
import AlertDashboard from '@material-ui/icons/ErrorOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MaintenanceIcon from '@material-ui/icons/Build';
import InfoIcon from '@material-ui/icons/Info';
import HelpIcon from '@material-ui/icons/HelpOutline';
import PartsIcon from '@material-ui/icons/SettingsInputComponent';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const items = [
    
    { name: 'getAssetList', label: 'Assets', icon: <AssetIcon /> },
    { name: 'getDeviceList', label: 'Devices', icon: <DeviceIcon /> },
];

const styles = theme => ({
    root: {
        width: '92%',
        height: '100%',
        maxWidth: 250,
        //  backgroundColor: theme.palette.background.paper,
        // backgroundColor: 'grey',
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
    item: {
        paddingLeft: theme.spacing.unit * 1,
    },
    item2: {
        paddingLeft: theme.spacing.unit * 0.3,
    },
    item3: {
        paddingLeft: theme.spacing.unit * 3,
    },
});
class Menu extends React.Component {

    state = {
        open: false,
        openAlert: false,
        openParts: false
    };

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };
    handleClickAlert = () => {
        this.setState(state => ({ openAlert: !state.openAlert }));
    };
    handleClickParts = () => {
        this.setState(state => ({ openParts: !state.openParts }));
    }

    changeRoute = () => {
        let path = "http://www.industrility.com/"
       // window.location = path
        window.open(path, '_blank')
    }
    render() {

        const { classes, onMenuClick, translate, logout } = this.props
        return (
            <div>
                <Paper className={classes.root} elevation={11}>
                    <div className={classes.root} >
                        {/* <DashboardMenuItem onClick={onMenuClick} /> */}
                        {items.map(item => (
                            <MenuItemLink
                                className={classes.item}
                                key={item.name}
                                to={`/${item.name}`}
                                primaryText={item.label}
                                leftIcon={item.icon}
                                onClick={onMenuClick}
                            />
                        ))}
                    </div>

                    

                    {/* <Divider /> */}
                    {/* <div className={classes.root}>
                        <List>
                            <ListItem className={classes.item} button >
                                <ListItemIcon>
                                    <HelpIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.item2}
                                  disableTypography 
                                  primary={<Typography variant="subheading" color="textSecondary" >Help</Typography>}
                                 />
                            </ListItem>
                        </List>
                    </div>*/}
                    <div className={classes.root}>
                        <List>
                            <ListItem className={classes.item} button onClick ={this.changeRoute} >
                                <ListItemIcon className={classes.item2} >

                                    <InfoIcon className={classes.item2}/>
                                </ListItemIcon>
                                <ListItemText className={classes.item2}
                                 disableTypography 
                                 primary={<Typography variant="subheading" color="textSecondary" >Industrility</Typography>}
                                 />
                            </ListItem>
                        </List>
                    </div> 




                </Paper>
            </div>
        )
    }
}


// const Menu = ({ onMenuClick, translate, logout }) => (

// );

const enhance = compose(
    withRouter,
    connect(
        state => ({
            theme: state.theme,
            locale: state.i18n.locale,
        }),
        {}
    ),
    translate,
    withStyles(styles)
);

export default enhance(Menu);
