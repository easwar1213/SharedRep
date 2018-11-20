import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Refresh from '@material-ui/icons/Refresh';
import Divider from '@material-ui/core/Divider';
import AlertIcon from '@material-ui/icons/ErrorOutline';
import AckIcon from '@material-ui/icons/ThumbUp';
import StatusTrendChart from './StatusTrendChart'
import { fetchEnd, fetchStart, required, Button, GET_LIST } from 'react-admin';
import dataProvider from '../dataProvider'
import Loader from '../Loader'
import Panel from '../components/Panel';
import RandomAnimatedLine from './RandomAnimatedLine';
import SimpleLineChart from './SimpleLineChart';

const styles = theme => ({
    card: {
        minWidth: 700,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: grey[500],
    },
});

class StatusTrendContainer extends React.Component {
    state = { expanded: false ,
        isRendering:true,
        Data: []
   };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    componentWillMount(){
        this.loadData();
        
        }
        handleRefresh =() =>{
          this.loadData()
        }
        loadData = () => {
            fetchStart();
            this.setState({ isRendering: true })
            //(GET_ONE, 'AlertPriorityTrend', { id: "AlertPriorityTrend" })
            dataProvider(GET_LIST, 'DeviceStatusTrend', {
              pagination: { page: 1, perPage: 5 },
              sort: { field: 'title', order: 'DESC' },
              filter: {
                id: "DeviceStatusTrend",
                dateRange: 1, //or 7 or 30 days,
              },
            })
              .then((response) => {
                this.setState({ Data: response.data });
                console.log("DeviceStatusTrend")
                 console.log(this.state.Data)
                this.setState({ isRendering: false })
              })
              .catch(error => {
                console.log(error)
                this.setState({ isRendering: false })
              })
              .finally(() => {
        
                fetchEnd();
                this.setState({ isRendering: false })
              });
          }

    render() {
        const { classes, avatarAlphabet, headerHeading, pierChartHeading, dataTableSource } = this.props;

        return (
            // <Card classes={classes.card} raised>
            //     <CardHeader
            //         avatar={
            //             <Avatar classes={classes.avatar} >
            //                 S
            //             </Avatar>
            //         }
            //         action={
            //             <IconButton>
            //                 <Refresh />
            //             </IconButton>
            //         }

            //         title="Device Status Trend"
            //         subheader={"Count of Assets with different Status"}
            //     />
            //     <Divider />
            //     <StatusTrendChart />
            // </Card>
            <Panel xs={12} md={12} lg={8} title="Device Status Trend" subhead="Count of Assets with different Status">
                    {this.state.isRendering === true && (<Loader/>)}
                    {this.state.isRendering ===false &&(<SimpleLineChart data ={this.state.Data} />)}
            </Panel>
        );
    }
}

StatusTrendContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatusTrendContainer);