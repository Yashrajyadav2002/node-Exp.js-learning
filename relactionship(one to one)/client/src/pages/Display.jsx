
import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const Display = () => {
    const [mydata, setMydata] = useState([]);
     const [show, setShow] = useState(false);
     const [authid, setAuthid] = useState("");
     const [bookname, setBookname] = useState("");
     const [price, setPrice] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (id) =>{
     setAuthid(id)
    setShow(true)};
    const loadData = async () => {
        let api = `${import.meta.env.VITE_BACKEND_URL}/students/display`;
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(() => {
        loadData();
    }, [])

   
const submitBook=async(e)=>{
    e.preventDefault();
     let api = `${import.meta.env.VITE_BACKEND_URL}/students/booksave`;
     
     const response  = await axios.post(api, {authid, bookname, price});
     console.log(response);

}

    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td> {key.authorname} </td>
                    <td> {key.email} </td>
                    <td> 
                        {
                         key.booksid.map((key1)=>{
                             return(
                                <>
                                   <p>Title : {key1.bookname}, Price : {key1.price} </p>
                                </>
                             )
                         })

                        }
                        
                        
                          </td>
                    <td> 
                        <button onClick={()=>{handleShow(key._id)}}>Add More Book</button>
                         </td>
                </tr>
            </>
        )
    })
    
    return (
        <>
            <h1> Display Record</h1>
            <hr/>
            <table border="1" width="600" align="center">
                <tr>
                    <th> Author Name</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                </tr>
             {ans}
            </table>


            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Book name</Form.Label>
        <Form.Control type="text" value={bookname} onChange={(e)=>{setBookname(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Book price</Form.Label>
        <Form.Control type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitBook} >
        Submit
      </Button>
    </Form>


        </Modal.Body>
      </Modal>
        </>


    )
}
export default Display;