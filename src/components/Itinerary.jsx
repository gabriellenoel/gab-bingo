import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Itinerary() {

    return(
        <Container className="itinerary-container">
        {/** title **/ }
        <br />
        <p style={{ "fontFamily": 'Corben', "font-size": "20px", "font-weight": "700" }}>bingo.</p>

      {/** grid **/ }

        <Row className="card-row">
            <Col className="card-col">
                <Card className="i-card">
                    7:00pm: Escape The Room<br />
                    <small>24 W 25th St floor 8, New York, NY, 10010</small>
                    <small><b>The Agency:</b> Vee, Thami, Chrystelle, Brittney, Gabby</small>
                    <small><b>The House:</b> Rio, Dani, Steph, Miranda, Liv</small>
                </Card>
            </Col>
        </Row>
        <Row className="card-row">
            <Col className="card-col">
                <Card className="i-card">
                    ~9:45pm - Show Palace<br />
                    <small>42-50 21st St, Long Island City, NY, 11101</small><br />
                    <small><b>Show Palace is a full nude strip club that doesn't serve alcohol.</b> If we get tired of the strip club (or want to drink), I reserved tickets to Jouvay Night Club.</small>
                </Card>
            </Col>
        </Row>
        <Row className="card-row">
            <Col className="card-col">
  
            </Col>
            </Row>
</Container>
    )
}

export default Itinerary;