import {useState,useEffect} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useScrollTriggerVisibility(targetRef) {
    const [isInView, setIsInView] = useState(false)

    useEffect(()=>{
        const element = targetRef.current;

        if(!element) return;

        const trigger = ScrollTrigger.create({
            trigger : element,
            start:"top bottom",
            end :"bottom top",

            onToggle: (self) => {
                setIsInView(self.isActive);
            },
        });

        setIsInView(trigger.isActive);

        return () => {
            trigger.kill()
        };

    },[targetRef])

    return isInView
}