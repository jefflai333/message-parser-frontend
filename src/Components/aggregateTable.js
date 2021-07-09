import React from 'react';
import APIClient from '../apiClient'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class aggregateTable extends React.Component {
  
    componentDidMount() {
      this.apiClient = new APIClient();
      this.apiClient.getCount().then((data) =>
        this.setState({...this.state, count: data})
      );
    }

    render() {
      return (
        // <TableContainer component={Paper}>
        //   <Table aria-label="simple table">
        //     <TableHead>
        //       <TableRow>
        //         <TableCell>Person You Are Talking To</TableCell>
        //         <TableCell align="right">Total Number of Messages</TableCell>
        //         <TableCell align="right">Number of Messages Sent</TableCell>
        //         <TableCell align="right">Number of Messages Received</TableCell>
        //       </TableRow>
        //     </TableHead>
        //     <TableBody>
        //       {rows.map((row) => (
        //         <TableRow key={row.name}>
        //           <TableCell component="th" scope="row">
        //             {row.name}
        //           </TableCell>
        //           <TableCell align="right">{row.calories}</TableCell>
        //           <TableCell align="right">{row.fat}</TableCell>
        //           <TableCell align="right">{row.carbs}</TableCell>
        //         </TableRow>
        //       ))}
        //     </TableBody>
        //   </Table>
        // </TableContainer>
        null
      );
    }
}
export default aggregateTable;