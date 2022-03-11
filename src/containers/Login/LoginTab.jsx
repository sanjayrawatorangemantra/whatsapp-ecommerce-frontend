import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { withTranslation, useTranslation } from "react-i18next";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Login from "./Login";
import SignUp from "./SignUp";
import Grid from '@material-ui/core/Grid';

// import "./Tabs.scss";



function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div p={3}>
                    <Typography>{children}</Typography>
                </div>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));



const LoginTabing = (props) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid className="LoginContainer">
        <div className="login-wrap">
        <div className="new_tabs">
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Login" {...a11yProps(0)} />
                        <Tab label="SignUp" {...a11yProps(1)} />
                       

                    </Tabs>
                </AppBar>
                <div className="tabpanel_box table_design retaiter-table">
                    <TabPanel value={value} index={0}>
                       <Login/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                       <SignUp/>

                    </TabPanel>
                </div>
            </div>
        </div>
        </div>
        </Grid>
    )
}

export default LoginTabing