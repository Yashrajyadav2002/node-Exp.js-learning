import axios from "axios";
const Home=()=>{
   
    const handleSubmit1=async()=>{
         
              let api = `${import.meta.env.VITE_BACKEND_URL}/home`;
            const response = await axios.get(api);
           console.log(response);
    }



     const handleSubmit2=async()=>{
        try {
              let api = `${import.meta.env.VITE_BACKEND_URL}/about`;
            const response = await axios.get(api);
            console.log(response);
        } catch (error) {
             console.log(error);
        }
           
    }

     const handleSubmit3=async()=>{
        try {
            
             let api = `${import.meta.env.VITE_BACKEND_URL}/service`;
            const response = await axios.get(api);
            console.log(response.data);
        } catch (error) {
             alert(error.response.data);
        }
           
    }
    return(
        <>
         <h1> Welcom To Home Page</h1>
        </>
    )
}
export default Home;