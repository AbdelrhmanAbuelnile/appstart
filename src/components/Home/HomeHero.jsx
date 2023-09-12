import mountain from '../../assets/mountain.jpg'

function HomeHero(){
    return(
        <section id='home' className='h-full flex flex-col lg:flex-row justify-between items-center pt-40 pb-16 px-4 lg:mb-32 lg:px-20'>

            <div className='flex flex-col justify-center items-center gap-4 lg:items-start lg:mx-5 w-11/12 md:w-9/12 lg:w-5/12'>
                <h1 className='text-third text-3xl font-semibold'>we turn your visionary app into life</h1>
                <p className='text-secondry text-2xl font-medium md:text-center lg:text-left'>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Incidunt nam pariatur
                     eos dolor! Dignissimos, labore!
                </p>
                <a
                    href="#sevices"
                    className='
                        bg-primary py-2 px-4 rounded-md
                        text-2xl text-fourth my-10 shadow-lg
                        hover:scale-105 hover:bg-secondry 
                        duration-300
                    '
                >
                    Learn More
                </a>
            </div>

            <div>
                <img src={mountain} alt="" className='max-w-[750px] w-full rounded-xl shadow-2xl'/>
            </div>

        </section>
    )
}

export default HomeHero