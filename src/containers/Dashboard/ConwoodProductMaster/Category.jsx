import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import UploadHolidayMaster from "../../../components/ModalPopup/UploadHolidayMaster";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import { ToastContainer, toast } from 'react-toastify'
import Loader from "../../../components/Loader/Loader";
import "./ProductList.scss";
import AssignProduct from "../../../components/ModalPopup/AssignProduct";
import Checkbox from '@material-ui/core/Checkbox';


function Category(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');

    const divisionList = useSelector((state) => state.getdivision);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);
    const deletedivisionReducer = useSelector((state) => state.deletedivisionmaster);



    console.log("categoryDelete", categoryDelete);
    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    console.log("userName+++", userName);


    useEffect(() => {
        dispatch(eventActions.getDivision(userName.data && userName.data[0]._id));
    }, [userName.data && userName.data[0]._id]);


    const rows = divisionList.getdivision ? divisionList.getdivision : [];


    const handleDelete = (event, id) => {
        console.log("myIds", event);
        setOpen(true);
        let data = {
            "id": id
        }
        setCategoryDelete(data);

    }

    useEffect(() => {
        if (deletedivisionReducer && !deletedivisionReducer.loading &&
            (deletedivisionReducer.deletedivision)) {
            dispatch(eventActions.getDivision(userName.data && userName.data[0]._id));
            toast.success('product deleted sucessfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [deletedivisionReducer]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.deleteDivision());
            dispatch(eventActions.getDivision(userName.data && userName.data[0]._id));
        }
    }, [userName.data && userName.data[0]._id])



    const ProductToChange = (event) => {
        var table = document.getElementById("ProductTable");
        const productIds = [];
        console.log("productIds", productIds);
        var rows = table.getElementsByTagName('tr');

        for (var i = 0; i < rows.length; i++) {
            var cols = rows[i].getElementsByTagName('td');
            if (cols.length > 1) {
                if (cols[0].getElementsByTagName('input')[0].checked) {
                    productIds.push(cols[0].getElementsByTagName('input')[0].name);
                    console.log('check box value', cols[0].getElementsByTagName('input')[0].name);
                }
            }
        }

        dispatch(eventActions.SoldtoManagmentItemId(productIds));

    }


    return (
        <>
            <div className={"row ipad_css " + MyNewClass}>
                <div className="mainScroll">
                    <div className=" mt-2">
                        <div className="col-12 text-right">
                            <div className="button_popup add-button">
                                <AssignProduct title="Assign Product" />
                                <UploadHolidayMaster title="Upload Product List" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-2 view_section">
                        <div className="fixTableHead" id="ProductTable">
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr
                                    >
                                        {userName.data && userName.data[0].role === "admin" ?
                                            <th> Assign with Id</th>
                                            : ""
                                        }
                                               <th>Product Name</th>
                                                <th>Code</th>
                                                <th>Weight</th>
                                                <th>Price</th>
                                              
                                        

                                        {userName.data && userName.data[0].role === "storeowner" ?
                                            <th>Status</th> : ""

                                        }
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {divisionList && divisionList.loading ? <Loader /> :
                                        rows && rows
                                            .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                            : rows && rows
                                                .slice()
                                                .reverse().map((unitItem) => {

                                                    return (
                                                        <tr>


                                                            {userName.data && userName.data[0].role === "admin" ?
                                                                <td >
                                                                    <input

                                                                        type="checkbox"
                                                                        onChange={ProductToChange}
                                                                        name={unitItem.id}

                                                                    />
                                                                </td> : ""}
                                                                   <td>{unitItem.name}</td>
                                                                    <td>{unitItem.code}</td>
                                                                    <td>{unitItem.weight}</td>
                                                                    <td>{unitItem.price}</td>
                                                            

                                                            {userName.data && userName.data[0].role === "storeowner" ?
                                                                <td>{unitItem.status === true ? <span className="available"><i class="fa fa-check"></i> Available</span> : <span className="notavailable"><i class="fa fa-ban"></i> Not Available</span>}</td> : ""}
                                                            <td>
                                                                <div className="action">
                                                                    <span className="category_icon">
                                                                        <i className="fa fa-trash" onClick={(event) => handleDelete(event, unitItem.id)}></i>
                                                                    </span>

                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                })

                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
            {/* <AssignProductPopup actionCategory={actionCategory} popupopen={popupopen} setOpen={setPopupopen} /> */}

            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteDivision(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(Category);
