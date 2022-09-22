import React from 'react';
import {Formik} from 'formik';
import swal from 'sweetalert2';

const product = () => {
//asynchronus fn=return promise
    const userSubmit = async (formdata) => {
        console.log(formdata);
       const response = await fetch('http://localhost:4000/user/add',{
        method:'POST',
        body:JSON.stringify(formdata),
        headers:{
            'Content-Type':'application/json'
        }
      })
      if(response.status===200){
        console.log('user data added!');
        swal.fire({
            icon:'success',
            title:'Well done',
            text: 'Registered Successfully'
        })

      }
      console.log('request sent');
    }

    

    return (
        <div className='container'>
            <div className="card">
                <div className="card-body">
                    <h3 className="text-center">Order Here</h3>
                    <Formik
                        initialValues={{productname: '', quantity: '', size: '', paymentmethod: 0}}
                        onSubmit={userSubmit}
                    >
                        {({values, handleSubmit, handleChange}) => (
                            <form onSubmit={handleSubmit}>
                            <label className='mt-5'>Productname</label>
                            <input className='form-control' id="productname" onChange={handleChange} value={values.username} />

                            <label className='mt-3'>Quantity</label>
                            <input className='form-control' id="quantity" onChange={handleChange} value={values.email} />

                            <label className='mt-3'>Size</label>
                            <input className='form-control' id="size" onChange={handleChange} value={values.password} />

                            <label className='mt-3'>Paymentmethod</label>
                            <input className='form-control' id="paymentmethod" onChange={handleChange} value={values.age} />

                            <button type="submit" className='btn btn-primary mt-5'>Submit</button>

                        </form>
                        )}
                    </Formik>

                </div>
            </div>
        </div>
    )

}

export default product