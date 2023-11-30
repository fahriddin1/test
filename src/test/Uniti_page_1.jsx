import React from 'react'
import "../css/style1.css"

const Uniti_page_1 = () => {

  return (
    <React.Fragment>
      <div className="container containers">
        <div className="tests">
            <div className="test__name">
                <h2>diqat<samp className='red'>t</samp> <span className='blue'>savol<span className='red'>!</span></span> (1)</h2>
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
            <a className='botton botom' href="Uniti_page_2">kegingisi</a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Uniti_page_1
