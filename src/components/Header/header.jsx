import * as React from 'react';
import './header.css';
import logo1 from '../../components/images/logo2.png'
import { withStyles } from '@material-ui/core';

const style={
    header_of_page:{
        backgroundColor: 'var(--color-hf)',
        display: 'flex' ,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 0rem',
    },
    text_pos:{
        position: 'relative',
        paddingTop: '7pt',
        paddingLeft: '100pt',
        color: 'white',
        fontSize:'.6cm',
        fontFamily: 'Calibri',
    },
}


const  Header=(props)=>{
    const{classes}=props;
    return(
        <div className={classes.header_of_page}>
            <div className='logo1_pos'>
                <img alt="abc_products" src={logo1}/>
                <h1 className={classes.text_pos}>Invoice List</h1>
            </div>
            <div className='logo2_pos'>
                <img alt="highradius" src='https://www.buurst.com/wp-content/uploads/2021/02/highradius-White-Transparent-1.png'/>
            </div>
        </div>
    )
}


export default withStyles(style)(Header);
 