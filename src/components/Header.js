import React from 'react';

const Header = () => {
  return (<div><header id="header1">
  <img alt='logo' width='100px' class='logo' src='https://yunusemrevurgun.com/logo.webp'></img>
  <h1 class='navbartitle'>Yunus Emre Vurgun's Personal Website</h1>
  <div id='thebtnsnvbr'><a class='navbarbutton' href='/'>Home</a>
  <a class='navbarbutton' href='/about/'>About</a>
  <a class='navbarbutton' href='/blog/index.php'>Blog</a>
   <a class='navbarbutton' href='/gallery/'>Gallery</a>
  <a class='navbarbutton' href='/more/'>More</a></div>
 </header> </div>
    
  );
};

export default Header;
