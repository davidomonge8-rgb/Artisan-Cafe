import '../componentStyles/Hero.css';
import AnimatedContent from '../ReactBits/AnimatedContent.jsx'
const Hero = () => {
    return(
        <div className='Hero'>
            
            <AnimatedContent
            distance={140}
            direction="horizontal"
            reverse={true}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={.4}
            >
            <div className="hero-text">
                <h1>Summer <i style={{ color: 'rgb(152, 109, 62)' }}>Aisne</i> 2024</h1>
                <p>A curated selection of seasonal delights, meticulously crafted to celebrate the vibrant flavors of high summer in our Parisian-inspired atelier.</p>
            </div>
            </AnimatedContent>
            


        </div>
    )
}

export default Hero;