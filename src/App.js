import {useEffect, useState} from "react";
import axios from "axios";
function App() {

  const apikey="441d4fe5d801b7604fc5ba1705885ed8";
  const[data,setData]=useState([])
  const [inputcity,setInputCity]=useState('')

  

  const getweatherdetails=(cityName)=>{
    if(!cityName)return;
   const apiurl ="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apikey;
       axios.get(apiurl).then((res)=>{
       //console.log("response",res)
         setData(res.data)
        
    }).catch((err)=>{
        console.log("error",err)
    }) 
  }

    const handlechangeinputcity=(e)=>{
     // console.log(e.target.value)
         setInputCity(e.target.value)
    }

    const handlesearch=()=>{
      getweatherdetails(inputcity)
    }

  useEffect(()=>{
      getweatherdetails()
    
  },[])

  return (
    <>
      <div className="col-md-12"id="ww">
        <h2 id="oo">Weather Application</h2>
        <div className="col-md-4">
        <input type="text" className="form-control" value={inputcity} onChange={handlechangeinputcity}/>
        <button type="submit"  className="form-control btn btn-success mt-2" 
          onClick={handlesearch}>search</button>
        </div>
      </div>

     
      <div className="container" >
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem;" }} id="tt">
              <img src="/img1.jpg" className="card-img-top" alt="ll" id="tt" />
              <div className="card-body">
              <h4 className="text-center">{data?.name}</h4>
               <p className="text-center">{((data?.main?.temp)-273.15).toFixed(2)}</p> 
               <p className="text-center">{((data?.main?.feels_like))}</p> 
               <p className="text-center">{((data?.main?.humidity))}</p>        
               <p className="text-center">{((data?.main?.temp_max))}</p> 
              </div>
            </div>
          </div>
          <div classNameName="col-md-4"></div>
        </div>

      </div>
    </>


  );
}

export default App;