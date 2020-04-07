import React, { Component, useState, useEffect, useRef } from 'react';
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card';
import loadash from 'lodash';
import pcsdimage from '../PCSD.png'
import './pcsd.css'

const Pcsdcomponent = () => {



    const [initialState, changeState] = useState({ ProjectName: '', CustomerName: '', EmersonNumber: '', OtherReason: '', DocLibrary: '', Core: '', Demo: '', Doc: '' })
    const isInitialMount = useRef(true);

    const debounceEventHandler = (...args) => {

        const debounced = loadash.debounce(...args)
        return function (e) {
            e.persist()
            return debounced(e)
        }
    }



    useEffect(() => {

        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {

            if (initialState.OtherReason != null || initialState.OtherReason != "") {
                document.getElementById("txtProject").required = false;
                document.getElementById("txtCustomer").required = false;
                document.getElementById("txtNumber").required = false;
            }
        }

    }, [initialState.OtherReason])
    useEffect(() => {

        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            // var inputElement = document.getElementById("txtProject")
            // inputElement.oninvalid = function (event) {
            //     event.target.setCustomValidity('It has invalid Characters');
            // }

            if (initialState.ProjectName.trim().length != 0 && initialState.CustomerName.trim().length != 0 && initialState.CustomerName.trim().length != 0) {
                document.getElementById("OtherReason").required = false;
            }
        }

    }, [initialState.ProjectName, initialState.CustomerName, initialState.EmersonNumber])
    return (
        <>
            <div class="modal fade " id="myModal" style={{ width: "950px", height: "1050px" }} role="dialog">
                <div class="modal-dialog modal-xl" >


                    <div class="modal-content">
                        <div class="modal-header">

                            <h6 class="modal-title"> <b><u>Policy Statement - PMO Configuration Standard for DeltaV (PCSD)</u></b></h6>
                        </div>
                        <div class="modal-body">
                            <img src={pcsdimage} alt="" width="750px" height="700"></img><br></br>
                            <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                        </div>
                        <div class="modal-footer">

                        </div>
                    </div>

                </div>
            </div>
            <div className="maincontainer card">
                <Accordion defaultActiveKey="0">

                    <Card.Header >
                        <Accordion.Toggle as={Button} variant="link" eventKey="0"  >
                            <span className="subheader">PCSD Library Download Requistion</span>
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <form id="myform">

                                <div id="InitalComponent">
                                    <table className="card-body">
                                        <tbody>
                                            <tr>
                                                <td style={{ width: "45%" }}>
                                                    Project  <span className="spanRed" style={{ color: "red" }}><b>*</b> required </span>  &nbsp; </td>
                                                <td><input type="text" minLength={3} title="Special Chracters Other Than &,- Are Not Allowerd" required id="txtProject" onChange={debounceEventHandler(e => { changeState({ ...initialState, ProjectName: e.target.value }) }, 300)}></input>

                                                </td>
                                                <td style={{ width: "30%" }}>

                                                </td>
                                                <td>
                                                    <b><u><a href="https://emerson.sharepoint.com/sites/autosolpss/PCSD/SitePages/HelpPage.aspx" target="_blank" title="This will open Help page in new tab">Help</a></u></b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Customer  <span className="spanRed" style={{ color: "red" }}><b>* </b> required </span>  &nbsp; </td>
                                                <td><input type="text" minLength={3} required id="txtCustomer" minLength={3} title="Special Chracters Other Than &,- Are Not Allowerd" onChange={debounceEventHandler(e => changeState({ ...initialState, CustomerName: e.target.value }), 1000)}></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Emerson Project Number <span className="spanRed" style={{ color: "red" }}><b>* </b> required </span>   &nbsp; </td>
                                                <td>
                                                    <input type="text" id="txtNumber" minLength={3} minLength={3} title="Special Chracters Other Than &,- Are Not Allowerd" onChange={debounceEventHandler(e => changeState({ ...initialState, EmersonNumber: e.target.value }), 1000)} required></input>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <b> <u>OR</u></b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Specify the reason for downloading PCSD Library <span className="spanRed" style={{ color: "red" }}><b>*</b>  required </span>   &nbsp; </td>
                                                <td>
                                                    <textarea rows={4} cols={50} id="OtherReason" minLength={3} pattern="[a-zA-Z0-9.\-&]" title="Special Chracters Other Than &,- Are Not Allowerd" required onChange={debounceEventHandler(e => changeState({ ...initialState, OtherReason: e.target.value }), 1000)}></textarea>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>

                                </div>

                                <div id="MainContainerDisplayDiv">

                                    <table className="card-body">
                                        <tbody>
                                            <tr>
                                                <td style={{ width: "48%" }}>Please select PCSD library version to download:</td>
                                                <td><select id="ddlDocumentLibrary" required onChange={e => changeState({ ...initialState, DocLibrary: e.target.value })}>

                                                    <option value="PCSD14A">PCSD-14a</option>
                                                    <option value="PCSDV01">PCSD-V01</option>
                                                </select></td>
                                            </tr>
                                            <tr>
                                                <td>Please select Component /Entity for which you need access: </td>

                                                <td style={{ width: "20%" }}>
                                                    <input type="checkbox" id="Core" onChange={e => changeState({ ...initialState, Core: e.target.checked })} ></input> &nbsp;
                                                        Core Library (PAS & SIS)
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>

                                                <td>
                                                    <input type="checkbox" id="Demo" onChange={e => changeState({ ...initialState, Demo: e.target.checked })}></input> &nbsp;
                                                     Demo  (PAS & SIS)
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>

                                                <td style={{ width: "75%" }}>
                                                    <input type="checkbox" id="Documents" onChange={e => changeState({ ...initialState, Dpc: e.target.checked })}></input> &nbsp;
                                                    Documents (for e.g PCSD Books Online /Test Documentation etc.)
                                               </td>

                                            </tr>

                                            <tr>
                                                <a data-toggle="modal" data-target="#myModal" data-keyboard="false" data-backdrop="static" href="#"> <b><u>PCSD Policy Statement</u></b></a>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <input type="Submit" value="Submit Request" width={100} className="btn btn-primary" style={{ width: "100px" }}></input>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Accordion>
            </div >
        </>

    )
}
export default Pcsdcomponent