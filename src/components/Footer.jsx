import { useState, useEffect } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from "../assets/Appstart-logo.png"
import '../footer.css'


function Footer(){

    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  
    // Update currentYear whenever currentDate changes
    useEffect(() => {
      setCurrentYear(currentDate.getFullYear());
    }, [currentDate]);

    const LinkedIn = "https://www.linkedin.com/company/appstart1/mycompany/";

    return(
        <footer className="flex flex-col justify-center items-center bg-primary text-white lg:px-10 px-2 pt-10 pb-2 w-full gap-8">

            <div className='flex flex-col md:flex-row md:flex-wrap justify-between lg:items-start items-start gap-10 lg:gap-32 pt-10'>

                <div className='flex flex-col justify-center items-start w-[350px] lg:mr-48'>
                    
                    <a href="#"><img src={logo} alt="app start logo" className="w-40 mb-5"/></a>
                    
                    <p className='text-base'>
                        Software House Specialized In Mobile<br/> Application Development And Web Technologies
                    </p>

                    <div className="flex flex-row justify-between items-center max-w-[100px] w-full mt-5">

                        <a href={LinkedIn} target='_blank' className='hover:text-secondry duration-300'>
                            <LinkedInIcon fontSize='large'/>
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
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
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

                <div className='flex flex-col justify-center items-start gap-4 mt-6'>
                    <h1 className='text-lg font-semibold'>CONTACT</h1>
                    <ul className='flex flex-col justify-center items-start gap-4'>

                        <li className='flex flex-row justify-start items-center text-sm gap-2'>
                            <MailOutlineIcon fontSize='large' className='hover:text-secondry duration-300'/>
                            <p>appstartt1@gmail.com</p>
                        </li>

                        <li className='flex flex-row justify-start items-center text-sm gap-2 mr-2'>
                            <LocationOnIcon fontSize='large' className='hover:text-secondry duration-300'/>
                            <p>Aswan</p>
                        </li>

                        <li className='flex flex-row justify-start items-center text-sm gap-2'>
                            <PhoneIcon />
                            <p>0123456789</p>
                        </li>

                    </ul>
                </div>
            
            </div>

            <p className="md:text-sm text-sm font-medium">Copyright © { currentYear } | <a href={LinkedIn} className="hover:text-fourth" target='_blank'>AppStart</a> </p>

        </footer>
    )
}

export default Footer;