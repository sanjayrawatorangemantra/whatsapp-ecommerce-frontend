import React from "react";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import "../../containers/MainDash.scss";

function Dashboard(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loginData = useSelector((state) => state.loginPage);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);

    if (loginData.loginPage != undefined || loginData.loginPage != null) {
        localStorage.setItem('userData', JSON.stringify(loginData.loginPage));
    }

    return (
        <>
            <div className="content-wrapper">
                <Header title="Dashboard" />
                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="mt-2 pl-3 pr-2 dashboard_page">
                            <div class="row">
                                <div class="col-xl-3 col-sm-6 col-12 mt-2">
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="media-body text-left">
                                                        <h3 class="primary">278</h3>
                                                        <span>Product All List</span>
                                                    </div>
                                                    <div class="align-self-center">
                                                        <i class="fa fa-book text-primary font-large-2 float-right"></i>
                                                    </div>
                                                </div>
                                                <div class="progress mt-1 mb-0" style={{height: "7px"}} >
                                                    <div class="progress-bar bg-primary" role="progressbar" style={{width: "80%"}}  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12 mt-2">
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="media-body text-left">
                                                        <h3 class="warning">156</h3>
                                                        <span>Store Count</span>
                                                    </div>
                                                    <div class="align-self-center">
                                                        <i class="fa fa-shopping-cart text-warning font-large-2 float-right"></i>
                                                    </div>
                                                </div>
                                                <div class="progress mt-1 mb-0" style={{height: "7px"}} >
                                                    <div class="progress-bar bg-warning" role="progressbar" style={{width: "35%"}}  aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-sm-6 col-12 mt-2">
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="media-body text-left">
                                                        <h3 class="success">64.89 %</h3>
                                                        <span>Uploaded Images</span>
                                                    </div>
                                                    <div class="align-self-center">
                                                        <i class="fa fa-trophy success font-large-2 float-right"></i>
                                                    </div>
                                                </div>
                                                <div class="progress mt-1 mb-0" style={{height: "7px"}} >
                                                    <div class="progress-bar bg-success" role="progressbar" style={{width: "60%"}}  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12 mt-2">
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="media-body text-left">
                                                        <h3 class="danger">423</h3>
                                                        <span>Storeowner</span>
                                                    </div>
                                                    <div class="align-self-center">
                                                        <i class="fa fa-user-plus text-danger font-large-2 float-right"></i>
                                                    </div>
                                                </div>
                                                <div class="progress mt-1 mb-0" style={{height: "7px"}}>
                                                    <div class="progress-bar bg-danger" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default withTranslation()(Dashboard);
