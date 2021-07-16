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

function BingoCard() {

    // state
    const [show, setShow] = useState(0);
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    const [answer5, setAnswer5] = useState("");
    const [answer6, setAnswer6] = useState("");
    const [answer7, setAnswer7] = useState("");
    const [answer8, setAnswer8] = useState("");
    const [answer9, setAnswer9] = useState("");
    const [answer10, setAnswer10] = useState("");
    const [answer11, setAnswer11] = useState("");
    const [answer12, setAnswer12] = useState("");
    const [answer13, setAnswer13] = useState("");
    const [answer14, setAnswer14] = useState("");
    const [answer15, setAnswer15] = useState("");
    const [answer16, setAnswer16] = useState("");
    const [answer17, setAnswer17] = useState("");
    const [answer18, setAnswer18] = useState("");
    const [answer19, setAnswer19] = useState("");
    const [answer20, setAnswer20] = useState("");
    const [answer21, setAnswer21] = useState("");
    const [answer22, setAnswer22] = useState("");
    const [answer23, setAnswer23] = useState("");
    const [answer24, setAnswer24] = useState("");
    const [answer25, setAnswer25] = useState("");

    const answer = (num) => {
        let id = `answer${num}`;
        let val = document.getElementById(id);
        console.log(val);
        return val;
    }

    // utility functions
    const handleClose = (num) => setShow(num);
    const handleShow = (num) => setShow(num);

    const handleClick = (num) => {
        console.log(num);
        handleShow(num);
    }

    const handleChange = (event, num) => {

        let answer = event.target.value;

        switch(num) {
            case 1:
              setAnswer1(answer);
              break;
            case 2:
                setAnswer2(answer);
              break;
              case 3:
                setAnswer3(answer);
              break;
              case 4:
                setAnswer4(answer);
              break;
              case 5:
                setAnswer5(answer);
              break;
              case 6:
                setAnswer6(answer);
              break;
              case 7:
                setAnswer7(answer);
              break;
              case 8:
                setAnswer8(answer);
              break;
              case 9:
                setAnswer9(answer);
              break;
              case 10:
                setAnswer10(answer);
              break;
              case 11:
                setAnswer11(answer);
              break;
              case 12:
                setAnswer12(answer);
              break;
              case 13:
                setAnswer13(answer);
              break;
              case 14:
                setAnswer14(answer);
              break;
              case 15:
                setAnswer15(answer);
              break;
              case 16:
                setAnswer16(answer);
              break;
              case 17:
                setAnswer17(answer);
              break;
              case 18:
                setAnswer18(answer);
              break;
              case 19:
                setAnswer19(answer);
              break;
              case 20:
                setAnswer20(answer);
              break;
              case 21:
                setAnswer21(answer);
              break;
              case 22:
                setAnswer22(answer);
              break;
              case 23:
                setAnswer23(answer);
              break;
              case 24:
                setAnswer24(answer);
              break;
              case 25:
                setAnswer25(answer);
              break;
            default:
              // code block
          }

        let card = document.getElementById(num);
        card.style.borderColor = "#A7BBC7";
    }

    const handleSave = (num) => {

        let card = document.getElementById(num);
            card.style.color = "#A7BBC7";
            card.style.backgroundColor = "#E1E5EA";
            setShow(0);
    }
    
    const modalArray = modals.map((modal) => (

        <Modal show={show === modal.id} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modal.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {modal.content}
            <br /><br />
            <Form>
            <Form.Group>
            <Form.Label>Answer:</Form.Label>
            <Form.Control id={"answer" + modal.id} type="text" value={eval("answer" + modal.id)} onChange={(e) => handleChange(e, modal.id)} />
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave(modal.id)}>
            Submit Answer
          </Button>
        </Modal.Footer>
      </Modal>
        ));

    return(
        <Container className="bingo-card">
        {/** title **/ }
        <br />
        <p style={{ "fontFamily": 'Corben', "font-size": "30px", "font-weight": "700" }}>bingo.</p>

        {modalArray}

      {/** grid **/ }

        <Row className="card-row">
            <Col className="card-col">
                <Card id="1" onClick={() => handleClick(1)}>
                    1
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="2" onClick={() => handleClick(2)}>
                    2
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="3" onClick={() => handleClick(3)}>
                    3
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="4" onClick={() => handleClick(4)}>
                    4
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="5" onClick={() => handleClick(5)}>
                    5
                </Card>
            </Col>
        </Row>
        <Row className="card-row">
            <Col className="card-col">
                <Card id="6" onClick={() => handleClick(6)}>
                    6
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="7" onClick={() => handleClick(7)}>
                    7
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="8" onClick={() => handleClick(8)}>
                    8
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="9" onClick={() => handleClick(9)}>
                    9
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="10" onClick={() => handleClick(10)}>
                    10
                </Card>
            </Col>
        </Row>
        <Row className="card-row">
            <Col className="card-col">
                <Card id="11" onClick={() => handleClick(11)}>
                    11
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="12" onClick={() => handleClick(12)}>
                    12
                </Card>
            </Col>
            <Col className="card-col">
                <Card className="free-space">
                    FREE
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="14" onClick={() => handleClick(14)}>
                    14
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="15" onClick={() => handleClick(15)}>
                    15
                </Card>
            </Col>
        </Row>
        <Row className="card-row">
            <Col className="card-col">
                <Card id="16" onClick={() => handleClick(16)}>
                    16
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="17" onClick={() => handleClick(17)}>
                    17
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="18" onClick={() => handleClick(18)}>
                    18
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="19" onClick={() => handleClick(19)}>
                    19
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="20" onClick={() => handleClick(20)}>
                    20
                </Card>
            </Col>
        </Row>
        <Row className="card-row">
            <Col className="card-col">
                <Card id="21" onClick={() => handleClick(21)}>
                    21
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="22" onClick={() => handleClick(22)}>
                    22
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="23" onClick={() => handleClick(23)}>
                    23
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="24" onClick={() => handleClick(24)}>
                    24
                </Card>
            </Col>
            <Col className="card-col">
                <Card id="25" onClick={() => handleClick(25)}>
                    25
                </Card>
            </Col>
        </Row>
</Container>
    )
}

export default BingoCard;