import React from 'react';
import {Link} from "react-router-dom";
import {Button, Col, Form, Row} from "react-bootstrap";
import '../Css/login.css';
import Header from "./Header";

function Register() {
    return (
        <div>
        <Header />
            <section className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Register </h2>
                        <ol>
                            <li><Link className="change" to="/">Home</Link></li>
                            <li><Link className="change" to="/Register">Register</Link></li>
                        </ol>
                    </div>

                </div>

            </section>
            <section  className="Login">
                <Row>
                    <Col md={7}>
                        <h3>Welcome to Register page</h3>
                        <p>Adipiscing lacinia pede proin vulputate habitasse donec adipiscing. Cubilia Interdum hac turpis et dignissim vehicula porta nostra dictum nostra semper. Dictumst congue dictum. Nam massa id, netus interdum amet Metus turpis scelerisque aptent sapien penatibus potenti.</p>
                        <ul>
                            <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAoElEQVRIie2TQQqDMBBF3yUa7BHrLYuIlNSNKXgcXWhLGjMYTFo385aPZD4zmYCiKMoWA/TAPeKfQPOrUAdMwEPwtnToBRjW4iNQCf6qoaeEdiwbZwLfCh6+F8Z5Z3z/Eu5+sJECvg8LFAkFeTQxX/xNU7pwiWd2Ow1J6Xyv04qD5Iz3cOiblPHeBJ+NHx4WrwVfDMPypSzb7xTziqL8nxlorW8EhFnaVwAAAABJRU5ErkJggg==" alt="btn password" />Change your passwords periodically</li>
                            <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAoElEQVRIie2TQQqDMBBF3yUa7BHrLYuIlNSNKXgcXWhLGjMYTFo385aPZD4zmYCiKMoWA/TAPeKfQPOrUAdMwEPwtnToBRjW4iNQCf6qoaeEdiwbZwLfCh6+F8Z5Z3z/Eu5+sJECvg8LFAkFeTQxX/xNU7pwiWd2Ow1J6Xyv04qD5Iz3cOiblPHeBJ+NHx4WrwVfDMPypSzb7xTziqL8nxlorW8EhFnaVwAAAABJRU5ErkJggg==" alt="btn password" />Avoid re-using password for multiple site</li>
                            <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAoElEQVRIie2TQQqDMBBF3yUa7BHrLYuIlNSNKXgcXWhLGjMYTFo385aPZD4zmYCiKMoWA/TAPeKfQPOrUAdMwEPwtnToBRjW4iNQCf6qoaeEdiwbZwLfCh6+F8Z5Z3z/Eu5+sJECvg8LFAkFeTQxX/xNU7pwiWd2Ow1J6Xyv04qD5Iz3cOiblPHeBJ+NHx4WrwVfDMPypSzb7xTziqL8nxlorW8EhFnaVwAAAABJRU5ErkJggg==" alt="btn password" />Use complex characters including uppercase and number</li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <Link to="/Login" className=" text-secondary">Login</Link>
                        <Link to="/Register" className="down-active text-secondary">Register</Link>
                        <Form className="form-box">
                            <div className="form-group" >
                                <Row>
                                    <Col md={12}>
                                        <label>Email</label>
                                        <input type="email" placeholder="Enter email" className="form-control"/>
                                    </Col>
                                </Row>
                            </div>

                            <div className="form-group" >
                                <Row>
                                    <Col md={12}>
                                        <label>Password</label>
                                        <input type="password" placeholder="Password" className="form-control" />
                                    </Col>
                                </Row>
                            </div>
                            <div className="form-group" >
                                <Row>
                                    <Col md={12}>
                                        <label>Re-Enter Password</label>
                                        <input type="password" placeholder="Password" className="form-control" />
                                    </Col>
                                </Row>
                            </div>

                            <Row>
                                <Col md={6}>
                                    <div className="form-check" >
                                        <input type="checkbox" className="form-check-input"  />
                                        <label>Accept Terms and Condition</label>
                                    </div>
                                </Col>
                            </Row>
                            <div className="form-group">
                                <Row>
                                    <Col md={4}>
                                        <Button type="submit" className="btn btn-primary" >
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </section>
        </div>
    );
}

export default Register;