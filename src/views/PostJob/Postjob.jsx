import React,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '@material-ui/core';
const Postjob = () => {
    var [state,setState]=useState('')
    return (
        <div>
            <h2>Post Your Job</h2>
         <div style={{margin:'2rem 0'}}>
       
        
            <div style={{width:'100%'}}>
                <label htmlFor="" style={{width:'100%'}}>
                    JOB TITLE
                    <br />
                    <input type="text" style={{width:'100%',height:'3rem',outline:'none',border:'none',padding:'0.1rem 1rem',fontWeight:'bold',fontSize:'1.2rem',border:"1px solid #ccc"}} />
                </label>
            </div>
            <div  style={{height:'10rem',display:'block',margin:'2rem 0',width:'100%'}}>
                <label htmlFor="" style={{width:'100%'}}>
         JOB DESCRIPTION AND TASK
         <br />
            <ReactQuill value={state} onChange={(e)=>setState(e)} style={{height:'10rem'}}/>
                </label>
            </div>
            <br />
            <br />
            <div  style={{height:'10rem',display:'block',margin:'2rem 0',width:'100%'}}>
                <label htmlFor="" style={{width:'100%'}}>
                REQUIRED PROOF THE JOB IS COMPLETED
         <br />
            <ReactQuill value={state} onChange={(e)=>setState(e)} style={{height:'10rem'}}/>
                </label>
            </div>
            <br /><br />
            <div style={{marginTop:'2rem',display:'flex',justifyContent:'space-evenly', backgroundColor:'#fff',alignItems:'flex-end',minHeight:'3rem',border:'1px solid #ccc',flexWrap:'wrap'}}>
                <label htmlFor=""style={{margin:'0.5rem'}}>
                    <strong> Select Specific Region :
                    </strong>
                    <select name="jobregion" id="" style={{outline:'none',marginLeft:'1rem', height:'2rem',border:'none',padding:'0.1rem 1rem',backgroundColor:'#ccc',color:'#111'}}>
                        <option >International</option>
                        <option value="africa">Africa</option>
                        <option value="asia">Asia</option>
                        <option value="america">America</option>
                        <option value="europe">Europe</option>
                        <option value="africa">Bangladesh</option>
                    </select>
                </label>
                <label htmlFor="" style={{margin:'0.5rem'}}>
                    <strong>

                    Choose an thumbnail image :
                    </strong>
                    <input type="file" style={{outline:'none',marginLeft:'1rem', height:'2rem',border:'none',padding:'0.1rem 1rem',backgroundColor:'#ccc',color:'#111'}} />
                </label>
            </div>
            <div style={{margin:'3rem 0',float:'right',width:'100%'}}>
                <Button style={{backgroundColor:"#3597FB",color:'white'}} size="large" fullWidth variant="contained">CheckOut</Button>
            </div>
            </div>
        </div>
    )
}

export default Postjob
