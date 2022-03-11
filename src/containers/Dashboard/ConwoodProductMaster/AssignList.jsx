import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import { useHistory, useLocation } from "react-router-dom";
import "../Dashboard.scss";
import "./ProductList.scss";
import Loader from "../../../components/Loader/Loader";
import { Link } from "react-router-dom";

function AssignList(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    let history = useHistory();
    const location = useLocation();
    const { storeno } = location.state;
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);
    const AssignedList = useSelector((state) => state.soldtomanagment);

    useEffect(() => {
        dispatch(eventActions.soldToManagmentList(storeno));
    }, [storeno]);

    let rows = [];

    rows = AssignedList.soldtomanagment ? AssignedList.soldtomanagment : [];


    return (
        <>
            <div className="content-wrapper">
                <Header title="Product Assigned List" />
                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section mt-4">
                            <div className="fixTableHead">
                                <table class="table table-bordered guideline_table">
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Product Name</th>
                                            <th>Weight</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {AssignedList && AssignedList.loading ? <Loader /> :
                                            rows && rows
                                                .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                                : rows && rows
                                                    .slice()
                                                    .reverse().map((unitItem) => {
                                                        return (
                                                            <tr>
                                                                <td>{unitItem.code}</td>
                                                                <td>{unitItem.name}</td>
                                                                <td>{unitItem.weight}</td>
                                                                <td>{unitItem.price}</td>
                                                            </tr>
                                                        );
                                                    })

                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="button_popup float-left mt-2">
                                <Link className="add-button bg-dark" to="/StoreList">Back</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(AssignList);
