import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';






const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function AssignProduct(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [storeno, setStore] = React.useState("");
    const storelist = useSelector((state) => state.dealeractivityPoint.dealeractivityPoint);
    const productIdsList = useSelector((state) => state.soldtomanagmentitemid.soldtomanagmentitemid);
    const [disabled, setDisabled] = React.useState(true);
    const multiAssignProduct = useSelector((state) => state.adddivision);

    console.log("productIdsList",productIdsList);



    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(eventActions.getDealerActivityPoint(userName.data && userName.data[0]._id));
    }, []);


    const handleSubmit = () => {
        let data = {
            "ids": productIdsList,
            "storeno":storeno
          }
          console.log("myData",data);
         dispatch(eventActions.addDivision(data));
        setOpen(false);
    };

    useEffect(() => {
        if (multiAssignProduct && !multiAssignProduct.loading &&
            (multiAssignProduct.adddivision)) {
                dispatch(eventActions.getDivision(userName.data && userName.data[0]._id));
                toast.success('Product has been assigned', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            
        }
    }, [multiAssignProduct]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.addDivision())
            dispatch(eventActions.getDivision(userName.data && userName.data[0]._id));
        }
    }, [])




    return (
        <div className="guideline_popup pop_disabled">
            <Button variant="outlined" color="primary" onClick={handleClickOpen} disabled ={productIdsList === undefined || productIdsList.length === 0 ? disabled: ""}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Store List
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            <div class="form-group">
                                <label for="customer_group">Address</label>
                                <select name="" id="" onChange={event => setStore(event.target.value)}>
                                    <option value="">Select address</option>
                                    {storelist
                                        ? storelist.map((list) => {
                                            return (
                                                <option value={list.storeno}>{list.address}</option>
                                            );
                                        })
                                        : null
                                    }


                                </select>

                            </div>



                        </form>

                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit} color="primary">
                        Assign Product
                    </Button>
                </DialogActions>
            </Dialog>

            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}
