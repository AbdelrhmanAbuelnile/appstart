import mountain from '../../assets/mountain.jpg'

function HomeHero(){
    return(
        <section id='home' className='h-screen flex flex-col justify-between items-center pt-40 pb-16 px-4'>

            <div className='flex flex-col justify-center items-center gap-4 text-center'>
                <h1 className='text-third text-3xl font-semibold'>we turn your visionary app concepts into life</h1>
                <p className='text-secondry text-2xl font-medium'>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Incidunt nam pariatur
                     eos dolor! Dignissimos, labore!
                </p>
                <a
                    href="#sevices"
                    className='
                        bg-primary py-2 px-4 rounded-md
                        text-2xl text-fourth mt-4 shadow-lg
                        hover:scale-105 hover:bg-secondry 
                        duration-300
                    '
                >
                    Learn More
                </a>
            </div>

            <div>
                <img src={mountain} alt="" />
            </div>

        </section>
    )
}

export default HomeHero