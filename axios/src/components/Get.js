import React, {useState} from 'react'
import axios from 'axios';
import useSound from 'use-sound';
import boopSfx from './N56BNFY-click (1).mp3';



function Get() {

  const someAudioFile = 'axios/src/components/N56BNFY-click (1).mp3';
  const [len, setlen] = useState([])
  const [border, setborder] = useState([])
  let [random,setrandom]=useState([]);
  const [play] = useSound(boopSfx);
  const getfact=()=>{
    axios.get("https://catfact.ninja/fact")
    
    .then((responce)=>{

      setborder('border-2 border-amber-200 m-4 p-none rounded-xl ')

      
      play()
      setrandom(responce.data.fact)
      
      console.log(random);
      setlen(responce.data.length)
      console.log(len);
    }) 
  }

  return (
    <div className='text-center mx-auto my-auto'>
    <div className='border-2 rounded-lg bg-amber-400 mx-auto my-20 w-96'>
    <button onClick={getfact} className=" my-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-2 px-4 border-b-4  border-black hover:border-blue-500 rounded">GET FACT</button> 
     
     <div className={border}>
     <div className='bg-neutral-900 text-lg text-white   rounded-xl '>
          <div>{random}</div>
          <div>{len}</div>
    </div>      
     </div>
    </div>
    </div>
  )
}

export default Get