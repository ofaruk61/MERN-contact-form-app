import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { toast } from 'react-toastify';

function Messages() {
  const [messages, setMessages] = useState(null)

  //component Did Mount
  useEffect(() => {
    axios.get('http://localhost:5000/message')
      .then(res => {
        console.log(res.data.result)
        setMessages(res.data.result)
        toast.success(res.data.message);
      }
      )
      .catch(err => {
        console.log(err)
        toast.error(err.message);
      })

      return () => {
        console.log('Component will unmount')
        };
    
  }, [])
  
  return (
    <>
      <Helmet>
        <title>Message Page</title>
      </Helmet>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {
            messages && messages.map((message, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{message.fullname}</td>
                  <td>{message.email}</td>
                  <td>{message.subject}</td>
                  <td>{message.message}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </>
  );
}

export default Messages;