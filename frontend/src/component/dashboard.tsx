// import React from "react";
// import {useNavigate} from 'react-router-dom';

// const Dash = () =>{
//     const navigate = useNavigate();
//     return(
//         <>
//             <h1>welcome to dashbaord</h1>
//             <button onClick={() => navigate("/home")}>Logout</button>
//         </>
//     )
// }
// export default Dash;

import React from 'react';
import { useState, useEffect } from "react";
import Select from "react-select";
import data from './data.json';
import {
  Button,
  Col,
  Row,
} from "react-bootstrap";
import { SideBar } from "./sidebar";
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Sel from '@material-ui/core/Select';
import Person from '@material-ui/icons/Person';
import MenuItem from '@material-ui/core/MenuItem';



const Styles = styled.div`
  .navbar { background-color: blue; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;



const Dashboard = () => {

  const navigate = useNavigate();
  const [country, setCountry] = useState<any[]>();
  const [state, setState] = useState<any[]>();
  const [stateList, setStateList] = useState<any[]>([]);
  const [city, setCity] = useState<any[]>();
  const [cityList, setCityList] = useState<any[]>([]);
  const [hospital, setHospital] = useState<any[]>();
  const [hospitalList, setHospitalList] = useState<any[]>([]);


  const [toogledSideBar, settoogledSideBar] = useState(false);


  //  handle change event of the country dropdown
  const handleCountryChange = (obj:any) => {
    setCountry(obj);
    setStateList(obj.states);
    setState([]);
  };

  const handleSideBarToggle = (val: boolean) => {
    settoogledSideBar(val);
  };
 
  // handle change event of the language dropdown
  const handleStateChange = (obj:any) => {
    setState(obj);
    setCityList(obj.city);
    setCity([]);
  };

  const handleCityChange = (obj:any) => {
    setCity(obj);
    setHospitalList(obj.hospital);
    setHospital([]);
  };

  const handleHospitalChange = (obj:any) => {
    setHospital(obj);
  };
 
  
return(
  <>
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Medicee</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      {/* <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form> */}
      <Navbar.Collapse id="basic-navbar-nav">
      
        <Nav className="ms-auto">
         
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Sel
             IconComponent = {Person}>
                <MenuItem >Appointment History</MenuItem>
              <MenuItem >Summary Report</MenuItem>
               <MenuItem >Settings</MenuItem>
               <MenuItem >Logout</MenuItem>
          </Sel>
        </Nav>
  
      </Navbar.Collapse>
    </Navbar>
  </Styles>
  <div className="App">
       <Row>
       <Col
          lg={toogledSideBar ? 1 : 2}
          md={toogledSideBar ? 2 : 3}
          className="d-none d-md-block pl-0"
        >
          <SideBar ontoggle={handleSideBarToggle} />
        </Col>
      <Col>
      <h3>SELECT YOUR HOSPITAL</h3>
      <div style={{ width: 400, marginBottom: 20 }} className="text-center">
      <Row>
      <Col>
        <b>Country</b>
        <Select
          placeholder="Select Country"
          value={country}
          options={data}
          onChange={handleCountryChange}
          getOptionLabel={option => option.region}
          getOptionValue={option => option.code}
        />
        <br />
        <b>State</b>
        <Select
          placeholder="Select State"
          value={state}
          options={stateList}
          onChange={handleStateChange}
           getOptionLabel={x => x.sname}
           getOptionValue={x => x.scode}
        />
      </Col>
      </Row>
      </div>
      <div style={{ width: 400, marginBottom: 20 }}>
          <b>City</b>
          <Select
          placeholder='Select City'
          value={city}
          options={cityList}
          onChange={handleCityChange}
           getOptionLabel={x => x.cname}
           getOptionValue={x => x.ccode}
          />
          <br/>
          <b>Hospital Name</b>
          <Select
          placeholder='Select Hospital Name'
          value={hospital}
          options={hospitalList}
          onChange={handleHospitalChange}
           getOptionLabel={x => x.hname}
           getOptionValue={x => x.hcode}
          />
      </div>
      <button onClick={() => navigate("/hospitalCard")}>Go to Hospiatal Details</button>
      {/* <span><b>Link:</b> {country && lang ? link : '-'}</span> */}
      </Col>
      </Row>
    </div>
  </>
)
}

export default Dashboard;