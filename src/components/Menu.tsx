import '../componentStyles/Menu.css'
import matcha from '../assets/matcha.jpg'
import pizza from '../assets/pizza.jpg'
import eggOnToast from '../assets/eggOnToast.jpg'

const Menu = () =>{
    return(
        <div className='menu'>
            <div className="menu-items">

                <div className="matcha">
                    <img src={matcha} alt="matcha" />
                    <div className="description">
                        <h2>Matcha:</h2>
                        <p>$1.6</p>
                    </div>
                </div>

                <div className="matcha">
                    <img src={pizza} alt="matcha" />
                    <div className="description">
                        <h2>Pizza:</h2>
                        <p>$4</p>
                    </div>
                </div>

                <div className="matcha">
                    <img src={eggOnToast} alt="matcha" />
                    <div className="description">
                        <h2>Egg On Toast:</h2>
                        <p>$3</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Menu