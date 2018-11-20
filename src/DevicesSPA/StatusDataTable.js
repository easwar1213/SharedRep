import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    maxWidth: 300,
  },
});

let id = 0;
function createData(name, count, fat, carbs, protein) {
  id += 1;
  return { id, name, count, fat, carbs, protein };
}

const rows = [
  
  createData('Unavaiable', 1),
  createData('Avaiable', 2),
  

];

function ValidityDataTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell numeric>Asset Count</TableCell>
     
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                 <TableCell numeric>{row.count}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

ValidityDataTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ValidityDataTable);