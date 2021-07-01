import React, { useContext, useEffect, useRef, useState } from "react";
import bemCssModules from "bem-css-modules";
import gsap from 'gsap'

import { default as HomeStyles } from "./Home.module.scss";

const style = bemCssModules(HomeStyles);
import bg from "../../assets/Home.jpg";
import { StoreContext } from "../../store/StoreProvider";


const Home = () => {
  const { isMobile } = useContext(StoreContext);
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSecounds, setTimerSecounds] = useState('00')
    const [offset, setOffset] =useState()

    let wrapper = useRef(null)
    let time = useRef(null)

    const handleScroll = () => setOffset(window.pageYOffset)

    window.addEventListener('scroll', handleScroll)

    let intervar = useRef()
    
    const startTimer = () =>{
        const countdownDate = new Date('October 1 2021 16:00').getTime()

        intervar = setInterval(()=>{
            const now = new Date().getTime()
            const distance = countdownDate - now

            const days = Math.floor(distance / (1000*60*60*24))
            let hours = Math.floor((distance % (1000*60*60*24) / (1000*60*60)))
            let minutes = Math.floor((distance % (1000*60*60) / (1000*60)))
            let secounds = Math.floor((distance % (1000*60) / (1000)))
            
  
              if(secounds.toString().length<2){
                secounds= "0"+secounds
              }
              if(hours.toString().length<2){
                hours= "0"+hours
              }
              if(minutes.toString().length<2){
                minutes= "0"+minutes
              }
            

            if(distance<0){
                clearInterval(intervar.current)
            }else{
                
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSecounds(secounds)
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(intervar.current)
        }
    })
    useEffect(() => {
      gsap.set([wrapper, time], {autoAlpha:0})
      const tl = gsap.timeline({defaults:{ease:'power3.inOut'}})

      tl.fromTo(wrapper, {x:'-=300'}, {duration:1, x:'+=300', autoAlpha:1})
      tl.fromTo(time, {scaleY:0}, {duration:0.5, scaleY:1, autoAlpha:1})
    },[])
 
    

    const mystyle = isMobile?  {
      backgroundImage: `url(${bg})`,
    } :{
      backgroundImage: `url(${bg})`,
      backgroundPositionY: offset*0.7 +"px"
    }  ;
    
  return (
    <section id="home" style={mystyle} className={style("")}>
      <div  className={style("timer")}>
        <div className={style("wrapper")}>
            <div ref={el =>{wrapper=el}}  className={style("title")}>
          <h2 id='title'>Ślub Hani i Miłosza</h2>
          <p id='title2'>Odliczanie do najważniejszego dnia w naszym życiu!</p>
        </div>
        <div  ref={el =>{time=el}}  className={style("countdown")}>
          <section>
            <p>{timerDays}</p>
            <p>
              <small>Dni</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <p>
              <small>Godziny</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <p>
              <small>Minuty</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSecounds}</p>
            <p>
              <small>Sekundy</small>
            </p>
          </section>
        </div>
        </div>
      
      </div>
    </section>
  );
};

export default Home;
