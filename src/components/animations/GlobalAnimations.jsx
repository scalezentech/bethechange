import {useLocation} from "react-router-dom"
import {useGSAP} from '@gsap/react'
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger,useGSAP)

export default function GlobalAnimations () {
    const {pathname} = useLocation()

    useGSAP(()=>{
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

        if(reduceMotion){
            ScrollTrigger.refresh()
            return
        }

        const pageIntro = gsap.utils.toArray("[data-gsap-intro]");

        if(pageIntro.length){
            gsap.from(pageIntro,{
                autoAlpha : 0,
                y : 18,
                duration : 0.65,
                stagger : 0.08,
                ease : "power2.out",
                clearProps : "opacity,visibility,transform",
            })
        }

        gsap.utils.toArray("[data-gsap-reveal]").forEach((element)=>{
            gsap.from(element,{
                autoAlpha : 0,
                y : 28,
                duration :  0.7,
                ease : "power2.out",
                clearProps : "opacity,visibility,transform",
                scrollTrigger : {
                    trigger : element,
                    start : "top 80%",
                    once : true,
                }
            })
        })

        gsap.utils.toArray("[data-gsap-stagger]").forEach((container) => {
            const  children = container.querySelectorAll("[data-gsap-item]")

            if(!children.length) return;

            gsap.from(children,{
                autoAlpha : 0,
                y : 22,
                duration : 0.55,
                stagger : 0.1,
                ease : "power2.out",
                clearProps : "opacity,visibility,transform",
                scrollTrigger : {
                    trigger :  container,
                    start : "top 85%",
                    once : true,
                }
            })
        })

        ScrollTrigger.refresh()
    },{dependencies:[pathname],revertOnUpdate: true})

    return null;
}