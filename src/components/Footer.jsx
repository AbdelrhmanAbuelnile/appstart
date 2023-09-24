import { useState, useEffect } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from "../assets/Appstart-logo.png"
import '../footer.css'
// import  Facebook  from '@mui/icons-material';


function Footer(){

    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  
    // Update currentYear whenever currentDate changes
    useEffect(() => {
      setCurrentYear(currentDate.getFullYear());
    }, [currentDate]);

    const LinkedIn = "https://www.linkedin.com/company/appstart1/mycompany/";
    const Facbook = "https://www.facebook.com/appstartt1"
    return(
        <footer className="flex flex-col justify-center items-center bg-primary text-white lg:px-10 px-2 pt-10 pb-2 w-full gap-8">

            <div className='flex flex-col md:flex-row md:flex-wrap justify-between lg:items-start items-start gap-10 lg:gap-32 pt-10'>

                <div className='flex flex-col justify-center items-start w-[350px] lg:mr-48'>
                    
                    <a href="#"><img src={logo} alt="app start logo" className="w-40 mb-5"/></a>
                    
                    <p className='text-base'>
                        Software House Specialized In Mobile<br/> Application Development And Web Technologies
                    </p>

                    <div className="flex flex-row justify-between items-center max-w-[100px] w-full mt-5">

                        <a href={LinkedIn} target='_blank' className='hover:text-[#7f7f7f]'>
                            <LinkedInIcon fontSize='large'/>
                        </a>
                        <a href={Facbook} target='_blank' className='hover:text-[#7f7f7f]'>
                            <Facebook fontSize='large'/>
                        </a>

                    </div>
                </div>

                <div className='flex flex-col justify-center items-start gap-4 mt-6'>
                    <h1 className='text-lg font-semibold'>COMPANY</h1>
                    <ul className='flex flex-col justify-center items-start gap-4'>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#sevices">Services</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col justify-center items-start gap-4 mt-6'>
                    <h1 className='text-lg font-semibold'>SERVICES</h1>
                    <ul className='flex flex-col justify-center items-start gap-4'>
                        <li>
                            <p>Development</p>
                        </li>
                        <li>
                            <p>Marketing</p>
                        </li>

                        <li>
                            <p>Design</p>
                        </li>

                    </ul>
                </div>

                <div className='flex flex-col justify-center gap-4 mt-6'>
                    <h1 className='text-lg font-semibold'>CONTACT</h1>
                    <ul className='flex flex-col justify-center items-start gap-4'>

                        <a href="mailto:appstartt1@gmail.com"><li className='flex flex-row justify-start items-center text-sm gap-2'>
                            <MailOutlineIcon fontSize='large'/>
                            <p>appstartt1@gmail.com</p>
                        </li></a>

                        <li className='flex flex-row justify-start items-center text-sm gap-3 lg:w-24'>
                            <LocationOnIcon fontSize='large' className='hover:text-secondry duration-300'/>
                            <p>Aswan</p>
                        </li>

                        <li className='flex flex-row justify-start items-center text-sm gap-2'>
                            <PhoneIcon />
                            <p>+20 112 645 0524</p>
                        </li>

                    </ul>
                </div>
            
            </div>

            <p className="md:text-sm text-sm font-medium">Copyright © { currentYear } | <a href={LinkedIn} className="hover:text-third" target='_blank'>AppStart</a> </p>

        </footer>
    )
}

export default Footer;