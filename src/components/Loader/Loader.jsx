import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import "./Loader.scss";
import LoaderImage from "../../assets/img/loading.gif";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="loading">
        <img src = {LoaderImage}/>
      {/* <CircularProgress color="secondary" /> */}
      </div> 
    </div>
  );
}