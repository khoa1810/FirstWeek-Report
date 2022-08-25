import './App.css';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {TextField, Box} from '@mui/material';
import Slider from "react-slick";
import { styled } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1
};

function App() {
  return (
    <div>
        <Row>
          <Col lg={6}>
          {/* App Logo */}
          <img src="./logo.svg" className="App-logo" alt="logo"/>
          {/* Register Form */}
            <div className="Register-Container">
              <div className="Register-Form">
              <p className="Register-Text">REGISTER</p>   
              <Box sx={{ display: "flex", alignItems: "center", marginTop:"72px"}}>
                <img src="./email.svg" className="Icon-Form"/>
                <TextField id="Com-Name" label="Company Name" variant="standard" sx={{ input: { color: '#041967' } }}/>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", marginTop:"24px"}}>
                <img src="./address.svg" className="Icon-Form"/>
                <TextField id="Com-Address" label="Company Address" variant="standard" multiline inputProps={{ style: { color: "#041967" } }} rows={2} maxRows={5} />
              </Box>
              <p className="Owner-Text">Owner</p>
              <Box sx={{ display: "flex", alignItems: "center", marginTop:"9px"}}>
                <img src="./email.svg" className="Icon-Form"/>
                <TextField id="Email" label="Email" variant="standard" type="email" sx={{ input: { color: '#041967' } }} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", marginTop:"24px"}}>
                <img src="./email.svg" className="Icon-Form"/>
                <TextField id="First-Name" label="First Name" variant="standard" sx={{ input: { color: '#041967' } }} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", marginTop:"24px"}}>
                <img src="./person.svg" className="Icon-Form"/>
                <TextField id="Last-Name" label="Last Name" variant="standard" sx={{ input: { color: '#041967' } }} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", marginTop:"24px"}}>
                <img src="./phone.svg" className="Icon-Form"/>
                <TextField id="Phone-Number" label="Phone Number" variant="standard" sx={{ input: { color: "#041967" } }} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", marginTop:"24px"}}>
                <img src="./lock.svg" className="Icon-Form"/>
                <TextField id="Pass" label="Password" variant="standard" type="password" />
                <img src="./pass.svg" className="Icon-Form"/>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", marginTop:"24px"}}>
                <img src="./lock.svg" className="Icon-Form"/>
                <TextField id="Con-Pass" label="Confirm Password" variant="standard" type="password" />
                <img src="./pass.svg" className="Icon-Form"/>
              </Box>
              <Button className="button">REGISTER</Button>
              <p className="bottom-text">I have an account. <a href="#">Login Now</a></p>
              <img src="./mark.svg" className="cmark"/>
              </div>
            </div>
          </Col>
          <Col lg={6}>
          <div className="Image-container" > 
          {/* Right Image */}
          <Slider {...settings}>
          <div><img src="./schedule.png" className="image-1"/>
            <p className="title">Schedule & Optimize Delivery</p>
            <p className="des">Schedule all your deliveries in one platform.</p>
          </div>
          <div><img src="./proof.png" className="image-2"/>
            <p className="title">Proof of Delivery</p>
            <p className="des">Get the proof you need to meet compliance (signature, photo, and geotags).</p>
          </div>
          <div><img src="./tracking.png" className="image-3"/>
            <p className="title">Tracking</p>
            <p className="des">Track postal, on-demand, scheduled and/or in-house drivers all in one place.</p>
          </div>
          </Slider>
          </div>
          </Col>
        </Row>
    </div>
  );
}

export default App ;