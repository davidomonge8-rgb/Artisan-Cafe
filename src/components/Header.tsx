import '../componentStyles/Header.css'

import Magnet from '../ReactBits/Magnet.jsx'



const Header = () => {
    return(
        <div className = "Header">
                <div className="brandName">

                    <img src="searchicon.svg" alt="search" />

                    <Magnet padding={50} disabled={false} magnetStrength={10}>
                        
                        <h1><i>Artisan Cafe</i></h1>
                    </Magnet>

                </div>
        </div>
    )
}

export default Header