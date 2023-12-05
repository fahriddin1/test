import React, { useState, useEffect } from 'react'
import "../css/style1.css"

const Uniti_page_4 = () => {
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
            <div className="container containers">
                <div className="tests">
                    <div className="test__name">
                        <h2>diqat<samp className='red'>t</samp> <span className='blue'>savol<span className='red'>!</span></span> (4)</h2>
                    </div>
                    <div className="tests_1">
                        <div className="test_1">
                            <input type="radio" name="go" id="" />
                            <span>(A)</span>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, enim.</p>
                        </div>
                        <div className="test_1">
                            <input type="radio" name="go" id="" />
                            <span>(D)</span>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, enim.</p>
                        </div>
                    </div>
                    <div className="tests_1">
                        <div className="test_1">
                            <input type="radio" name="go" id="" />
                            <span>(B)</span>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, enim.</p>
                        </div>
                        <div className="test_1">
                            <input type="radio" name="go" id="" />
                            <span>(C)</span>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, enim.</p>
                        </div>
                    </div>
                    <div className="botoom__btn">
                        <a className='botton' href="/Uniti_page_2">orqaga</a>
                        <a className='botton btm' href="/Uniti_page_5">kegingisi</a>
                    </div>
                </div>
            </div>
         )}
        </React.Fragment>
    )
}

export default Uniti_page_4
