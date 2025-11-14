import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Display = () => {
  const [mydata, setMydata] = useState([]);
  const [show, setShow] = useState(false);
  const [authid, setAuthid] = useState("");
  const [bookname, setBookname] = useState("");
  const [price, setPrice] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    setAuthid(id);
    setShow(true);
  };

  const loadData = async () => {
    let api = `${import.meta.env.VITE_BACKEND_URL}/students/display`;
    const response = await axios.get(api);
    setMydata(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const submitBook = async (e) => {
    e.preventDefault();
    let api = `${import.meta.env.VITE_BACKEND_URL}/students/booksave`;

    await axios.post(api, { authid, bookname, price });

    // Refresh the display
    loadData();

    // Close modal & reset fields
    setBookname("");
    setPrice("");
    setShow(false);
  };

  const ans = mydata.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.authorname}</td>
        <td>{item.email}</td>
        <td>
          {item.booksid.map((b, i) => (
            <p key={i}>
              Title: {b.bookname}, Price: {b.price}
            </p>
          ))}
        </td>
        <td>
          <button onClick={() => handleShow(item._id)}>Add More Book</button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h1>Display Record</h1>
      <hr />
      <table border="1" width="600" align="center">
        <thead>
          <tr>
            <th>Author Name</th>
            <th>Email</th>
            <th>Books</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitBook}>
            <Form.Group className="mb-3">
              <Form.Label>Enter Book name</Form.Label>
              <Form.Control
                type="text"
                value={bookname}
                onChange={(e) => setBookname(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Enter Book price</Form.Label>
              <Form.Control
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Display;
