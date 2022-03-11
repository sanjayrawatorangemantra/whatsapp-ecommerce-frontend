import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import { useHistory } from "react-router-dom";
import "../Dashboard.scss";
import "./ProductList.scss";
import { ToastContainer, toast } from 'react-toastify';

function AssignStore(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    let history = useHistory();
    const [storeno, setStore] = React.useState("");
    const [userList, setUserList] = React.useState("");
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);
    const storelist = useSelector((state) => state.dealeractivityPoint.dealeractivityPoint);
    const userlist = useSelector((state) => state.retaileruserid.retaileruserid);
    const AssignedStore = useSelector((state) => state.addbusinesssegment);

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getDealerActivityPoint(userName.data && userName.data[0]._id));
    }, []);

    useEffect(() => {
        dispatch(eventActions.RetailerUserId());
    }, []);

    console.log("userlist", userlist)


    const assignStore = () => {
        let data = {
            "userid": userList,
            "storeno": storeno
        }
        dispatch(eventActions.addBusinessSegment(data));
    }


    useEffect(() => {
        if (AssignedStore && !AssignedStore.loading &&
            (AssignedStore.addbusinesssegment)) {
            toast.success('Store assigned sucessfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [AssignedStore]);

    useEffect(() => {
        return () => {
            dispatch(eventActions.addBusinessSegment())
        }
    }, [])


    return (
        <>
            <div className="content-wrapper">
                <Header title="Assign Store" />
                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="row view_section">
                            <div className="col-xl-4 col-lg-3 col-md-12 col-sm-12 col-xs-12"></div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-2 mt-4">
                                <form>
                                    <div class="form-group">
                                        <label for="customer_group">User List</label>
                                        <select name="" id="" onChange={event => setUserList(event.target.value)}>
                                            <option value="">Select user</option>
                                            {userlist
                                                ? userlist.map((list) => {
                                                    return (
                                                        <option value={list._id}>{list.name}</option>
                                                    );
                                                })
                                                : null
                                            }

                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="customer_group">Store</label>
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
                                <div className="row">
                                   
                                    <div className="col-12 text-center">
                                    <button className="mt-2 button-color" onClick={(event) => assignStore(event)}>Assign Store</button>
                                    </div>
                                   
                                </div>
                               

                            </div>
                            <div className="col-xl-4 col-lg-3 col-md-12 col-sm-12 col-xs-12"></div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(AssignStore);
