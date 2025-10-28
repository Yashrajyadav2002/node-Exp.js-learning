import React from "react";

const Home = () => {

    let handlebtn1 = async()=>{
      try{
        let api = ``;
        let responce = await axios.get(api);
        console.log(responce.data);
      } catch(error){
        console.log(error);
      }
    }

  return (
    <div>
      <div>
        <button onclick={handlebtn1}>btn1</button>
        <button onclick={handlebtn2}>btn2</button>
        <button onclick={handlebtn3}>btn3</button>
      </div>

      <h1> i am home page in react js . how are you guys</h1>
      
      
    </div>
  );
};
 



export default Home;
