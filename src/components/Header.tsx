import '../componentStyles/Header.css'

import AnimatedContent from '../ReactBits/AnimatedContent.jsx'



const Header = () => {
    return(
        <div className = "Header">
                <div>
                    <AnimatedContent
                    distance={140}
                    direction="horizontal"
                    reverse={false}
                    duration={1.5}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={.7}
                    >
                        <div className="brandName">
                            <h1><i>Artisan Cafe</i></h1>
                        </div>     
                    </AnimatedContent>
                                  
                </div>
        </div>
    )
}

export default Header