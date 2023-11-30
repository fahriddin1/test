import React from 'react'
import "../css/style.css"

const Uniti_page_1 = () => {
    return (
        <React.Fragment>
            <div className="container">
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

                        <a className='btn' href="Uniti_page_1">
                            o'tish
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Uniti_page_1
