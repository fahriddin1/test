import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import "../css/style.css"
import { NavLink } from 'react-router-dom'

const Uniti_page_1 = () => {
    const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  });
    return (
         <React.Fragment>
            {load ? (
         <div class="loader">
         <div class="box box0">
           <div></div>
         </div>
         <div class="box box1">
           <div></div>
         </div>
         <div class="box box2">
           <div></div>
         </div>
         <div class="box box3">
           <div></div>
         </div>
         <div class="box box4">
           <div></div>
         </div>
         <div class="box box5">
           <div></div>
         </div>
         <div class="box box6">
           <div></div>
         </div>
         <div class="box box7">
           <div></div>
         </div>
         <div class="ground">
           <div></div>
         </div>
       </div>
      ) : (
<form class="form">
    <p class="title">Register </p>
    <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>Firstname</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" class="input"/>
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" class="input"/>
        <span>Password</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" class="input"/>
        <span>Confirm password</span>
    </label>
    {/* <a className='submit' href="Uniti_page_1">
     Submit
    </a> */}
    <NavLink to={"/submit"} className='submit'  href="Uniti_page_1">submit</NavLink>
    <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
      )}
            {/* <div className="container">
                <div className="uniti__box">
                    <h2 className='registration'>
                        Royhat <span className='registration__span__1'>d</span><span className='registration__span__2'>an o'tish</span>
                    </h2>
                    <div className="inp">
                          <input type="text" name="" id="" placeholder='ismingizni kiriting' />
                        <input type="text" name="" id="" placeholder='familyangizni kiriting' />
                        <div className="tel">
                            <label htmlFor="">+998</label>
                            <input type="tel" name="" id="" /> 
                        </div>

                         <a className='btn' href="/Uniti_page_1">
                            o'tish
                        </a>  
                    </div>
                </div>
            </div>   */}
        </React.Fragment> 
    )
}

export default Uniti_page_1
