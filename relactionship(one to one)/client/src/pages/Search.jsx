import { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
    const [mydata, setMydata] = useState([]);
   

     const loadData = async () => {
        let api = `${import.meta.env.VITE_BACKEND_URL}/students/display1`;
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(() => {
        loadData();
    }, [])
    
    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.bookname} </td>
                    <td>{key.price} </td>
                    <td>{} </td>
                    <td>{} </td>
                </tr>
            </>
        )
    })
    return (
        <>
            <h1> Display Data Book wise</h1>
            <hr />
            <table>
                <tr>
                    <th> Book name</th>
                    <th> Price</th>
                    <th> Author name</th>
                    <th> Email</th>
                </tr>
               {ans}
            </table>
        </>
    )
}
export default Search;