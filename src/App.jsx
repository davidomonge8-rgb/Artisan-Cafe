import './App.css'
import AnimatedContent from './ReactBits/AnimatedContent.jsx'

import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import MenuNav from './components/MenuNav.tsx'
import Menu from './components/Menu.tsx'


const App = () =>{
  return(
    <>
      <Header/>
      <hr /><br />

      <AnimatedContent
        distance={140}
        direction="horizontal"
        reverse={true}
        duration={1.5}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={.7}
      >
        <Hero/>
        <br />
        <MenuNav/>

        <br /><br />
        <Menu/>

      </AnimatedContent>

    </>
  )
}

export default App
