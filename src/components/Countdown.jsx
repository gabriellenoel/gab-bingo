import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import modals from './modals.json';

function Countdown() {

    // state
    const [distance, setDistance] = useState(0);
    const [hours, setHours] = useState(0);
    const [mins, setMins] = useState(0);
    const [secs, setSecs] = useState(0);

    // counting down to:
    var countDownDate = new Date("July 16 2021 07:45:00").getTime();

    // update the countdown every second
    var x = setInterval(function() {

        // Get today's date and time, subtract from countdown date
        var now = new Date().getTime();
        var difference = countDownDate - now;
        setDistance(difference);
      
        // Time calculations for days, hours, minutes and seconds
        // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element
        // document.getElementById("hours").innerText = `${hours}h`;
        // document.getElementById("mins").innerText = `${mins}m`;
        // document.getElementById("secs").innerText = `${secs}s`;

                // If the count down is finished, write some text
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("countdown-row").innerHTML = "<Card id='done'> Time's Up!</Card>";
                  }

        return {
            hours,
            mins,
            secs
        }
      }, 1000);

    return(
        <Container className="countdown-container">
        <Row className="countdown-row">
            <Col className="card-col">
                <Card id="hours">
                    {x.hours}
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="mins">
                    {x.mins}
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="secs">
                    {x.secs}
                </Card>
            </Col>
        </Row>
</Container>
    )
}

export default Countdown;