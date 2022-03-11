import React, { useEffect, useState } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import { useHistory } from "react-router-dom";
import "../Dashboard.scss";
import "./ProductList.scss";
import Loader from "../../../components/Loader/Loader";
import Slider from "./Slider";

function StoreList(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    let history = useHistory();
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);

    const storelist = useSelector((state) => state.dealeractivityPoint);




    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getDealerActivityPoint(userName.data && userName.data[0]._id));
    }, []);

    const AssignListHandler = (event, storeno) => {
        history.push("/AssignList", { storeno: storeno })
    }

    let rows = [];
    rows = storelist.dealeractivityPoint ? storelist.dealeractivityPoint : [];

    console.log("myList",rows);


    useEffect(() => {
        return () => {
            dispatch(eventActions.getDealerActivityPoint(userName.data && userName.data[0]._id));
        }
    }, [userName.data && userName.data[0]._id])


    return (
        <>
            <div className="content-wrapper">
                <Header title="Our Store" />
                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section mt-4">
                            <div className="row">

                                {storelist ? storelist.loading ? <Loader /> :
                                    rows && rows
                                        .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                        : rows && rows
                                            .slice().map((list, index) => {

                                                return (
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
                                                        <div class="card storelist">

                                                            <div className="card-bodyList">
                                                               <Slider imageList={list.menu_img}/>
                                                                {/* <img className="card-img-top" src={list.menu_img && list.menu_img ? list.menu_img : storeImage} /> */}
                                                                <div><span className="key">Address</span> <span className="value"> : {list.address}</span></div>
                                                                <div><span className="key">Street</span> <span className="value"> : {list.street}</span></div>
                                                                <div><span className="key">City</span> <span className="value"> : {list.city}</span></div>
                                                                <div><span className="key">State</span> <span className="value"> : {list.state}</span></div>
                                                                <div><span className="key">Pincode</span> <span className="value"> : {list.pincode}</span></div>
                                                                <div><span className="key">Laltitude</span> <span className="value"> : {list.lat}</span></div>
                                                                <div><span className="key">Lognitude</span> <span className="value"> : {list.long}</span></div>
                                                                <div><span className="key">Country</span> <span className="value"> : {list.country}</span></div>
                                                                <button className="mt-2" onClick={(event) => AssignListHandler(event, list.storeno)}>Assigned Products</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                    : null
                                }
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(StoreList);
