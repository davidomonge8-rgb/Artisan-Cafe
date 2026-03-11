import '../componentStyles/Menu.css'
import matcha from '../assets/matcha.jpg'
import pizza from '../assets/pizza.jpg'
import eggOnToast from '../assets/eggOnToast.jpg'

const Menu = () =>{
    return(
        <div className='menu'>
            <div className="menu-items">

                <div className="matcha">
                    <h1 className= "menu-image"></h1>
                    <div className="description">
                        <h2>Matcha</h2>
                        <p>$1.6</p>
                    </div>
                </div>

                <div className="matcha">
                    <h1 className= "menu-image"></h1>
                    <div className="description">
                        <h2>Matcha</h2>
                        <p>$1.6</p>
                    </div>
                </div>

                <div className="matcha">
                    <h1 className= "menu-image"></h1>
                    <div className="description">
                        <h2>Matcha</h2>
                        <p>$1.6</p>
                    </div>
                </div>

                

                


                
            </div>
        </div>
    )
}

export default Menu