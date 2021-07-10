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

class AggregateTable extends React.Component {
  state = {
    count: 0,
    title: "",
    received_messages: 0,
    sent_messages: 0,
  };

  componentDidMount() {
    this.apiClient = new APIClient();
    this.apiClient.getCount().then((data) =>
      this.setState({
        ...this.state,
        count: data["count"],
        title: data["title"],
        received_messages: data["received_messages"],
        sent_messages: data["sent_messages"]
      })
    );
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Person You Are Talking To</TableCell>
              <TableCell align="right">Total Number of Messages</TableCell>
              <TableCell align="right">Number of Messages Sent</TableCell>
              <TableCell align="right">Number of Messages Received</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {this.state.title}
              </TableCell>
              <TableCell align="right">{this.state.count}</TableCell>
              <TableCell align="right">{this.state.sent_messages}</TableCell>
              <TableCell align="right">{this.state.received_messages}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
export default AggregateTable;