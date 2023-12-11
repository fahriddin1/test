import React, { useState, useEffect } from 'react'
import "../css/style1.css"
import { data } from '../data'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'

const Uniti_page_8 = () => {

  let [index, setIndex] = useState(7)
  let [question, setQuestion] = useState(data[index]); 
  let [lock, setLock] =useState(false);

  let Option1 =  useRef(null);
  let Option2 =  useRef(null);
  let Option3 =  useRef(null);
  let Option4 =  useRef(null);

  let option_array = [Option1,Option2,Option3,Option4 ];

  const checkAns = (e,ans) => {
          if (lock === false) {
            if (question.ans===ans) {
              e.target.classList.add("correct");
              setLock(true);
          }
          else {
            e.target.classList.add("wrong");
            setLock(true);
            option_array[question.ans-1].current.classList.add("correct")
          }
          }
  }


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
                    <h2>{index+1}.{question.question}</h2>
                    </div>
                    <div className="tests_1">
                        <div className="test_1">
                            <p ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</p>
                        </div>
                        <div className="test_1">
                            <p ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</p>
                        </div>
                    </div>
                    <div className="tests_1">
                        <div className="test_1">
                            <p ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</p>
                        </div>
                        <div className="test_1">
                            <p ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</p>
                        </div>
                    </div>
                    
                    <ul>
                      <li>
                        <NavLink to={"/Uniti_page_9"} className='submit'  >submit</NavLink>
                      </li>
                  </ul>
                </div>
            </div>
         )}
        </React.Fragment>
    )
}

export default Uniti_page_8
