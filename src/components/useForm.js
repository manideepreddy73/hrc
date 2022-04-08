import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';

export function useForm(FValues) {


    const [values, setValues] = useState(FValues);

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const cancelForm =()=>{
        setValues(FValues);
    }

    return {
        values,
        setValues,
        handleInputChange,
        cancelForm,
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '20%',
            margin: theme.spacing(2),
            marginTop: theme.spacing(2),
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(4),
        },
    }
}));

export function Form(props) {
    const classes = useStyles();
    const {children,...other}=props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}

