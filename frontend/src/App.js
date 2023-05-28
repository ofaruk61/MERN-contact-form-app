import { Link, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Messages from "./pages/Messages";
import Home from "./pages/Home";
import Header from "./components/Header";
import Alert from 'react-bootstrap/Alert';
import Container from "react-bootstrap/esm/Container";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const notFoundMessage = <Alert key={"danger"} variant={"danger"}>
  <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
  <Alert.Link to="/" as={Link}>Go to Home Page</Alert.Link>
</Alert>

function App() {
  return (
    <div>
      <Header />
      <ToastContainer />
      <Container className="mt-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={notFoundMessage} />
      </Routes>
      </Container>
    </div>
  );
}

export default App;

