import React, { useState } from 'react'

function Dhoni() {
    const [thala,setThala] =useState("");
    const handleChange=(e)=>{
        document.getElementById("check").style.display="none"
        document.getElementById("check2").style.display="none"
        document.getElementById("uncheck").style.display="none"
        document.getElementById("the").style.display="none"
        setThala(e.target.value)
    }
    const handleSubmit=(e)=>{
        var check=document.getElementById("check")
        var check2=document.getElementById("check2")
        var val=thala.toLowerCase();
        e.preventDefault();
        var total=0;
        var mul=1;
        for(var i=0;i<thala.length;i++){
            total=total+parseInt(thala[i]);
            mul=mul*thala[i];
        }
        if(thala.length===7 || total==7 || mul===7 || val==="sa" || val==="re" || val==="ga" || val==="ma" || val==="pa" || val==="dha" || val==="ni" ||
            val==="violet" || val==="indigo" || val==="blue" || val==="green" || val==="yellow" || val==="orange" || val==="red" || val==="rainbow" ||
            val==="taj mahal" || val==="the great wall of china" || val==="great wall of china" || val==="petra" || val==="christ the redeemer" || val==="machu picchu" || val==="chichen itza" ||
            val==="roman colosseum"){
                check.style.display="block"
        }
        else if(val==="ocean" || val==="seas" || val==="continent" || val==="sargam"){
            check2.style.display="block"
        }
        else if(val==="thala" || val==="dhoni" || val==="msd" || val==="mahi" || val==="mahendra singh dhoni" || val==="m.s.d." || val==="m. s. d." || val==="m s d" ){
        document.getElementById("the").style.display="block"
        }
        else{
            document.getElementById("uncheck").style.display="block"

        }


    }
  return (
    <div className='w-full h-full absolute bg-zinc-900 top-0 left-0 flex flex-col gap-[5rem] justify-start pt-[5rem] items-center'>
    <h1 className='text-5xl font-semibold'>What's thala for a reason?</h1>
      <form onSubmit={handleSubmit} className='flex gap-10'>
            <input type="text" placeholder='type something' value={thala} onChange={handleChange} className='font-bold w-[20rem] h-[3rem] outline-none rounded-lg bg-zinc-500 text-white px-5' />
            <input type="submit" value="Check it?" className='bg-white w-[8rem] h-[2.5rem] text-lg rounded-full'/>
        </form>
    <p className='text-blue-400 text-3xl font-bold' style={{display:"none"}} id="check"><span className='text-yellow-300'>{thala.toUpperCase()}</span> is thala for a reason 🥳🥳</p>
    <p className='text-blue-400 text-3xl font-bold' style={{display:"none"}} id="check2"><span className='text-yellow-300'>{thala.toUpperCase()}</span> are thala for a reason 🥳🥳</p>
    <p className='text-blue-400 text-3xl font-bold' style={{display:"none"}} id="uncheck">Sorry😕😕, <span className='text-yellow-300'>{thala.toUpperCase()}</span> is not thala for any reason,try again!!</p>
    <p className='text-blue-400 text-3xl font-bold' style={{display:"none"}} id="the">Don't you know ?,  <span className='text-yellow-300'>{thala.toUpperCase()}</span> is the thala🔥🔥.</p>

    </div>
        
    
  )
}

export default Dhoni
