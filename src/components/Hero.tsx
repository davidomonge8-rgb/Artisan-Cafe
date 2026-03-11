import '../componentStyles/Hero.css';
import add from '../assets/plus-small.png'

const Hero = () => {
    return(
        <div className='hero'>
            
            <div className="hero-text">
                <h1>Summer <i style={{ color: 'rgb(152, 109, 62)' }}>Aisne</i> 2024</h1>
                <p>A curated selection of seasonal delights, meticulously crafted to celebrate the vibrant flavors of high summer in our Parisian-inspired atelier.</p>
            </div>
            
            <div className="New-entry">
                <button><img src={add} alt="New Entry" /> CREATE NEW ENTRY</button>
            </div>


        </div>
    )
}

export default Hero;