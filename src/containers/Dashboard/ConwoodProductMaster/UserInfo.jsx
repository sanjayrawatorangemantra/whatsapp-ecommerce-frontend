import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import { useHistory } from "react-router-dom";
import "../Dashboard.scss";
import "./ProductList.scss";
import { ToastContainer, toast } from 'react-toastify';
import Loader from "../../../components/Loader/Loader";

function UserInfo(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    let history = useHistory();
    const [storeno, setStore] = React.useState("");
    const [userList, setUserList] = React.useState("");
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);
    const userlist = useSelector((state) => state.retaileruserid);




    useEffect(() => {
        dispatch(eventActions.RetailerUserId());
    }, []);
   
    let rows = [];

    rows = userlist.retaileruserid ? userlist.retaileruserid : [];

    console.log("myUserlist",rows);


    return (
        <>
            <div className="content-wrapper">
                <Header title="User Information" />
                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                    <div className="col-12 mt-2 view_section mt-4">
                            <div className="fixTableHead">
                                <table class="table table-bordered guideline_table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Role</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userlist && userlist.loading ? <Loader /> :
                                            rows && rows
                                                .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                                : rows && rows
                                                    .slice()
                                                    .reverse().map((unitItem) => {
                                                        return (
                                                            <tr>
                                                                <td>{unitItem.name}</td>
                                                                <td>{unitItem.email}</td>
                                                                <td>{unitItem.password}</td>
                                                                <td>{unitItem.role}</td>
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
            </div>
        </>
    );
}

export default withTranslation()(UserInfo);
