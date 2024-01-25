import { useState } from 'react'
import demo1 from './images/demo1.png'
import svg from "./components/logo.svg";
import wave from "./images/wave.svg";

function App() {

  const navLinks = [
    {
      label: "Accueil",
      icon: "i-mdi-home"
    },
    {
      label: "Commandes",
      icon: "i-mdi-wrench"
    },
    {
      label: "Support",
      icon: "i-mdi-chat-question"
    },
  ]

  return (
    <div className='bg-secondary font-rubik'>
      <nav className='h-16 flex justify-between items-center px-8 py-10'>
        {/* <Logo /> */}
        <img className='h-14' src={svg} alt="Your SVG" />

        <ul className='flex gap-4 font-medium text-md items-center '>
          {navLinks.map(link => (
            <li key={link.label}>
              <a className='flex justify-center items-center gap-2'>
                <div className={link.icon} />{link.label}
              </a>
            </li>
          ))}
          <li></li>
        </ul>
      </nav>
      <header className='flex justify-around items-center mt-48'>
        <div className='text-center flex flex-col gap-6'>
          <h1 className='text-primary font-black text-7xl'>VOICE.JS</h1>
          <p className=' font-medium text-xl'>Un robot complétement personnalisable, qui<br />
            vous permet de créer et de gérer de façon simple<br />
            et rapide des vocaux personnalise.</p>
        </div>
        <div>
          <img src={demo1} className='h-84' />
        </div>
      </header>
      <img src={wave} />

      <div className='bg-banner px-8 mx-32 my-16 flex items-center justify-center flex-col py-8 rounded-lg text-primary text-2xl gap-2'>
        <div className='text-center'>
          <h2>Satisfait ? Qu'attendez-vous ?</h2>
          <p className='font-bold'>Ajouter Voice.Js</p>
        </div>
        <a className='bg-primary text-white font-bold text-xl px-8 py-2 rounded-lg flex items-center justify-center gap-2'>
          <div className='i-mdi-link-variant' />
          INVITE MOI
        </a>

      </div>
    </div>
  )
}

export default App
