import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function Menu() {

  const [isOpen, setIsOpen] = useState(false)
  function toggleMenu(){
    setIsOpen(!isOpen)
  }
  return (
    <>

      {isOpen? 
        <CloseIcon className='text-third' fontSize='large' onClick={toggleMenu} />
         :
        <MenuIcon className='text-third' fontSize='large' onClick={toggleMenu} />
      }
      
      { isOpen
          &&
        <ul
          className="flex flex-col justify-center items-center gap-6
            bg-secondry rounded-lg shadow-lg shadow-slate-500 w-60
            pt-2 absolute top-[90px] right-4
            text-xl font-medium text-fourth"
          >
          <li className="border-b border-fourth w-full pl-2 hover:pl-5 pt-4">
            <a href="#">Home</a>
          </li>
          <li className="border-b border-fourth w-full pl-2 hover:pl-5 duration-300">
            <a href="#">About Us</a>
          </li>
          <li className="border-b border-fourth w-full pl-2 hover:pl-5 duration-300">
            <a href="#">Services</a>
          </li>
          <li className="border-b border-fourth w-full pl-2 hover:pl-5 duration-300">
            <a href="#">Portfolio</a>
          </li>
          <li className="border-b border-fourth w-full pl-2 hover:pl-5 duration-300 pb-2">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      }
    </>
  );
}

export default Menu;
