import axios from "axios";
import { useState } from "react";

const Home = ()=>{
    const [image,setImage]= useState("");

    const handleImage=(e)=>{
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
        console.log(image);
    }

    const handleUpload = async()=>{
        let api = "http://localhost:8000/upload";

        const fromdata = new FromData();
        fromdata.append("myfile",image);
        const responce = await axios.post(api,fromdata);
        console.log(responce.data);
    }

    return(
        <>
        <h1>Welcome To Multiple File Uploading</h1>
        </>
    )
}

export default Home;