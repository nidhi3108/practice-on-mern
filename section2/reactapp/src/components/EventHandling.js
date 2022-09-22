import React, { useState } from 'react'

const EventHandling = () => {

    let x=10;
    const [count, setCount] = useState(10);

    const handleClick=()=>{
       console.log('button was click');
       x++;
       console.log(x);
       alert('value of x is'+x);
    }
    //  const loadImage=(e)=>{
    //     const file
    //  }
  return (
    <div className='container'>
        <h1>EventHandling</h1>
        <hr />
        <h2>Click Event</h2>
        <button className='btn btn-primary' onClick={(e)=>{console.log(e);}}>Click Me</button>
        <button className='btn btn-primary' onClick={(e)=>{alert('You click that wrong')}}>Wrong</button>

        <button className='btn btn-danger' onClick={handleClick}>Passing Definend Function</button>
        <h1>
            {x}
        </h1>
        <button className='btn btn-danger' onClick={()=>{setCount(count+1)}}>iupdating state</button>
        <h1>
            {count}
        </h1>
        <h2 className='mt-5'>Change Event</h2>
        <div className="input-group">
            <input className='form-control' onChange={(e)=>{console.log(e.target.value)}} />
            <button  className='btn btn-primary'>Send</button>
        </div>
        <input className='form-control mt-5' type="file" onChange={(e)=>{console.log(e.target.file)}} />
    </div>
  )
}

export default EventHandling