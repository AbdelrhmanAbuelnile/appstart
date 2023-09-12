import manga from '../../assets/betybetk.png'
import moza from '../../assets/moza.png'
// import { motion } from "framer-motion"

function PotrfolioContainer(){

    return(
        <div className="flex flex-col justify-center items-center">
           
            <div
                className="flex flex-col md:flex-row justify-center items-center gap-10 pt-40 pb-16 px-4 lg:mb-32 lg:px-20"
            >
                <div className="flex flex-col items-start justify-center gap-10">
                    <h1 className='text-third text-3xl font-semibold'>BetyBetk</h1>
                    <p className='text-secondry text-2xl font-medium md:text-center lg:text-left max-w-[650px]'>
                        A user-friendly real estate app for seamless property buying,
                         selling, and management,<br/> revolutionizing the industry.
                    </p>
                </div>
                <div>
                    <img src={manga} alt="betybetk wireframe" className='max-w-[750px] w-full'/>
                </div>
            </div>

            <div
                className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 pb-16 px-4 lg:mb-32 lg:px-20"
            >
                <div>
                    <img src={moza} alt="betybetk wireframe" className='max-w-[750px] w-full'/>
                </div>

                <div className="flex flex-col items-start justify-center gap-10">
                    <h1 className='text-third text-3xl font-semibold'>TechnoMedia</h1>
                    <p className='text-secondry text-2xl font-medium md:text-center lg:text-left max-w-[650px]'>
                        Your go-to news app, delivering the latest in tech and media with speed and precision
                    </p>
                </div>
            </div>

        </div>
    )
}

export default PotrfolioContainer