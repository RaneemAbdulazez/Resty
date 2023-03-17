import React ,{useState} from 'react'
import axios from 'axios';
import Results from './Results';
import "./FormStyle.css"


// axios.defaults.baseURL ="";




function Form() {

  const [inputContent,setContent]=useState("")
  const [response,setResponse]=useState([])
  const [user,setUser]=useState("")




 function handelChange(e){
    // console.log(typeof(inputContent));
    const url = e.target.value
    setContent(url);
    console.log(inputContent);
  }
  

  const GetMethodFunc = (e) => {
    e.preventDefault();
    // console.log("************", inputContent  );
    axios
      .get(inputContent)
      .then((res) => {
        setResponse( JSON.stringify( res.data, null, 2));
        // console.log(response[0].id);

        
      })
      .catch((err) => console.log(err));
  };





  // console.log("-------------",inputContent);

 

 const PostMethodFunc=(e)=>{
  // console.log("-------------",inputContent);
  e.preventDefault();
  setUser(inputContent)
  axios.post(inputContent)
  .then(res => {
    setResponse( JSON.stringify( res.data, null, 2));

  })

 }

 const PutMethodFunc=(e)=>{
  // console.log("-------------",inputContent);
  e.preventDefault();

  axios.put(inputContent)
  .then(res => {
    setResponse( JSON.stringify( res.data, null, 2));

  })
 }

 const DeleteMethodFunc=(e)=>{

  e.preventDefault();

  axios.delete(inputContent)
  .then(res => {
    console.log(res);
    setResponse( JSON.stringify( res, null, 2));
  })


}
 
 
  return (
    <>
    <form className="form" >
      <label>URL</label>
      <input onChange={handelChange} type="text" >
      
      </input>


      <div className='button_container'>
      <button onClick={GetMethodFunc}>GET</button>
      <button onClick={PostMethodFunc}>POST</button>
      <button onClick={PutMethodFunc}>PUT</button>
      <button onClick={DeleteMethodFunc}>DELETE</button>

      
      </div>


    </form>

    

    <Results data={response}/>

    
    

  
    </>
  )
}

export default Form