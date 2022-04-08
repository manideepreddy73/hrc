import React,{useState} from 'react'
import Add_form from './Add_form';
import { Paper,Table, makeStyles, TableBody, TableCell } from '@material-ui/core';
import useTable from "../../components/useTable"
import * as invoiceService from "../../services/invoiceService";
import TableRow from '@mui/material/TableRow';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(2),
    padding: theme.spacing(3),
  }
}));

export default function Add_cust() {

  const classes = useStyles();
  const { records, setRecords } = useState(invoiceService.getAllBill())

  const {
    TlbContainer
  } = useTable();

  return (
    <>
      <Paper className={classes.pageContent}>
        {/* <Add_form/> */}
        <TlbContainer>
          {/* <TableBody>
            {
                records.map(item =>
            (
            <TableRow key={item.id}>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.email}</TableCell>
            </TableRow>
            ))
            }
          </TableBody> */}
        </TlbContainer>
      </Paper>
    </>
  )
}
