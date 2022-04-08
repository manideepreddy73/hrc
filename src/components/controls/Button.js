import React from 'react'
import { Button as MuiButton, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(3),
        width:"8%",
        border: "2px aqua solid",
        '&:hover': {
            backgroundColor: '#1ed4ecce',
            color: 'white',
        },
    },
    label: {
        textTransform: 'none',
    },
}))

export default function Button(props) {

    const { text, size, color, variant, onClick, ...other } = props
    const classes = useStyles();

    return (
        <MuiButton
            sx={useStyles}
            variant={variant || "outlined"}
            size={size || "large"}
            color={color || "white"}
            onClick={onClick}
            {...other}
            classes={{ root: classes.root, label: classes.label,}}>
            {text}
        </MuiButton>
    )
}