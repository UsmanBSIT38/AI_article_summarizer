import React from "react";

import { logo } from "../assets";
import { useAuth0 } from "@auth0/auth0-react";

const Hero = () => {
  const { loginWithRedirect, isAuthenticated, logout,  } = useAuth0();
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
       
      



      
       { isAuthenticated ? (
         <button
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        className='black_btn'>
    Log Out
  </button>
         ) : (
        <button
         onClick={() => loginWithRedirect()}
         className='black_btn'>
          Log In
         </button> )}

        
        
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/UsmanBSIT38/Hackerone-profile", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
