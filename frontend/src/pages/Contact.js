import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

function Contact() {
  const [fullname, setFullname] = useState()
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [message, setMessage] = useState()
  const [isAccepted, setIsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault() // prevent page refresh
    const data = { fullname, email, subject, message }
    axios.post('http://localhost:5000/message', data)
      .then(res => {
        console.log(res.data)
        setFullname('')
        setEmail('')
        setSubject('')
        setMessage('')
        toast.success(res.data.message);
      })
      .catch(err => {
        console.log(err)
        toast.error(err.message);
      })
  }

  return (
    <>
      <Helmet>
        <title>Contact Page</title>
      </Helmet>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name ..." value={fullname} onChange={(e) => setFullname(e.target.value)} required />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email ..." value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Subject</Form.Label>
          <Form.Control placeholder="Subject ..." value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Please typing your messages ..." value={message} onChange={(e) => setMessage(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Accept Term & Condition!" checked={isAccepted} onChange={(e)=>setIsAccepted(!isAccepted)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Contact;
