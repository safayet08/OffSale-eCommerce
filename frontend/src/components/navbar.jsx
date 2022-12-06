import React from "react";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const NavBar = () => {
    const state = [];
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
                    {" "}
                    OffSale E-commerce
                </NavLink>
                <button
                    className="navbar-toggler mx-2"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <Form className="d-flex">
                                <DropdownButton
                                    as={ButtonGroup}
                                    key="down"
                                    id="dropdown-button-drop-down"
                                    className="mx-2"
                                    drop="down"
                                    variant="secondary"
                                    title="ALL"
                                >
                                    <Dropdown.Item eventKey="1">
                                        Smartphone
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="2">
                                        Another hardcoded Category
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="3">
                                        Other hardcoded Category
                                    </Dropdown.Item>
                                </DropdownButton>
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-1"
                                    aria-label="Search"
                                />
                                <Button variant="outline-secondary">
                                    <i
                                        class="fa fa-search"
                                        aria-hidden="true"
                                    ></i>
                                </Button>
                            </Form>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-dark m-2">
                            <i className="fa fa-sign-in mr-1"></i> Login
                        </NavLink>
                        <NavLink to="/register" className="btn btn-dark m-2">
                            <i className="fa fa-user-plus mr-1"></i> Register
                        </NavLink>
                        <NavLink to="/cart" className="btn btn-dark m-2">
                            <i className="fa fa-shopping-cart mr-1"></i> Cart (
                            {state.length}){" "}
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
