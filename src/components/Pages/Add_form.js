import React from 'react'
import { Grid } from "@material-ui/core"
import { useForm, Form } from '../useForm';
import Input from '../controls/Input';
import Controls from '../controls/Controls';
import * as invoiceService from "../../services/invoiceService";

const FValues = {
  id: 0,
  businessCode: '',
  documentId: "",
  invoiceCurrency: "",
  baselineCreateDate: new Date(),

  customerNumber: "",
  postingDate: new Date(),
  documentType: "",
  custPaymentTerms: "",

  clearDate: new Date(),
  documentCreateDate: new Date(),
  postingId: "",
  invoiceId: "",

  businessYear: "",
  dueDate: new Date(),
  totalOpenAmount: "",
}



export default function Add_form(props) {

  const {
    values,
    setValues,
    handleInputChange,
    cancelForm,
  } = useForm(FValues);

  const handeleSubmit=e=>{
    invoiceService.insertBill(values)
    cancelForm()
  }
  return (
    <Form onSubmit={handeleSubmit}>
      <Grid container>
        <Grid item xs={15}>
          <Input
            name="businessCode"
            label="Business Code"
            value={values.businessCode}
            onChange={handleInputChange}
          />
          <Input
            name="documentId"
            label="Document id"
            value={values.documentId}
            onChange={handleInputChange}
          />
          <Input
            name="invoiceCurrency"
            label="Invoice Currency"
            value={values.invoiceCurrency}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            name="baselineCreateDate"
            label="Baseline Create Date"
            value={values.baselineCreateDate}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={15}>
          <Input
            label="Customer Number"
            name="customerNumber"
            value={values.customerNumber}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            name="postingDate"
            label="Posting Date"
            value={values.postingDate}
            onChange={handleInputChange}
          />
          <Input
            label="Document Type"
            name="documentType"
            value={values.documentType}
            onChange={handleInputChange}
          />
          <Input
            label="Customer Payment Terms"
            name="custPaymentTerms"
            value={values.custPaymentTerms}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={15}>
          <Controls.DatePicker
            name="clearDate"
            label="Clear Date"
            value={values.clearDate}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            name="documentCreateDate"
            label="Document Create Date"
            value={values.documentCreateDate}
            onChange={handleInputChange}
          />
          <Input
            label="Posting Id"
            name="postingId"
            value={values.postingId}
            onChange={handleInputChange}
          />
          <Input
            label="Invoice Id"
            name="invoiceId"
            value={values.invoiceId}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            label="Business Year"
            name="businessYear"
            value={values.businessYear}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            name="dueDate"
            label="Due Date"
            value={values.dueDate}
            onChange={handleInputChange}
          />
          <Input
            label="Total open amount"
            name="totalOpenAmount"
            value={values.totalOpenAmount}
            onChange={handleInputChange}
          />
             <Controls.Button
             text="ADD"
             type="add"
             />
             <Controls.Button
             text="CANCEL"
             color="white"
             onclick={cancelForm}
             />
        </Grid>
      </Grid>
    </Form>
  )
}
