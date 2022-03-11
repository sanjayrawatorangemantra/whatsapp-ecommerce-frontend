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

export default function UploadHolidayMaster(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [upload, setUpload] = React.useState("");
    const [image, setImage] = React.useState("");
    const [storeno, setStore] = React.useState("");
    const uploadProduct = useSelector((state) => state.uploadholidaymaster);
    const storelist = useSelector((state) => state.dealeractivityPoint.dealeractivityPoint);

    const [images, setImages] = React.useState([]);
    const [imageUrl, setImageURL] = React.useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrl = [];
        images.forEach(image => newImageUrl.push(URL.createObjectURL(image)));
        setImageURL(newImageUrl);

    }, [images])

    const onImageChange = (e) => {
        setImages([...e.target.files]);
    }

    const removeImage = index => {
        const list = [...images];
        list.splice(index, 1);
        setImages(list);
    }

    console.log("images", images);

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const uploadXl = (event) => {
        setUpload(event.target.files[0]);
        // console.log("event type", event.target.files[0]);
    };

    const uploadImage = (event) => {
        setImage(event.target.files[0]);
    }


    const handleSubmit = () => {
        dispatch(eventActions.uploadHolidayMaster(images, storeno, upload));
        setOpen(false);
    };

    useEffect(() => {
        dispatch(eventActions.getDealerActivityPoint());
    }, []);

    useEffect(() => {
        if (uploadProduct && !uploadProduct.loading &&
            (uploadProduct.uploadholidaymaster)) {
            dispatch(eventActions.getDivision(userName.data && userName.data[0]._id));
            toast.success(' Successfully uploaded xls and menu image', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [uploadProduct]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.uploadHolidayMaster());
            dispatch(eventActions.getDivision());
        }
    }, [])





    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen} title="Upload Product Group">
                <i class="fa fa-upload button-upload" aria-hidden="true"></i>  {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Upload Product List
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div class="form-group">
                                <label for="upload">Upload File:</label><br />
                                <input type="file" onChange={uploadXl} />
                            </div>
                            {userName.data && userName.data[0].role === "admin" ?
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
                                </div> : ""
                            }

                            {/* <div class="form-group file-area">
                                <label for="images"> Upload Images </label>
                                <input type="file" name="images" id="images" onChange={uploadImage} required="required" multiple="multiple" />
                                <div class="file-dummy">
                                    <div class="success">Great, your files are selected. Keep on.</div>
                                    <div class="default">Please select image</div>
                                </div>
                            </div> */}

                            <div class="form-group file-area">
                                <label for="images"> Upload Images </label>
                                <input type="file" multiple accept="image/*" onChange={onImageChange} required="required" />
                                <div class="file-dummy">
                                    <div class="success">Great, your files are selected. Keep on.</div>
                                    <div class="default">Please select image</div>
                                </div>
                            </div>
                            <div className='imageList'>
                                {imageUrl.map((imageSrc, i) =>
                                    <>
                                        <div className='singleImage'>
                                            <img style={{ width: "100px", marginRight: "10px" }} src={imageSrc} />
                                            <i className='fa fa-times cross-icon' onClick={() => removeImage(i)}></i>
                                        </div>
                                    </>

                                )}

                            </div>



                        </form>

                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit} color="primary">
                        Upload
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
