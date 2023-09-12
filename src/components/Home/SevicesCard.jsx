import web from '../../assets/web.png'
import graphic from '../../assets/graphic.png'
import uiux from '../../assets/uiux.png'
import data from '../../assets/data.png'
import backend from '../../assets/backend.png'
import mobile from '../../assets/mobile.png'
import marketing from '../../assets/marketing.png'
import video from '../../assets/video.png'

function SevicesCard(){

    const service = [
        {
            name: "Lorem, ipsum.",
            icon: mobile,
            describtion: "mobile app developmen icon",
        },
        {
            name: "Lorem, ipsum.",
            icon: uiux,
            describtion: "UI UX icon",
        },
        {
            name: "Lorem, ipsum.",
            icon: web,
            describtion: "front-end development icon",
        },
        {
            name: "Lorem, ipsum.",
            icon: backend,
            describtion: "back-end development icon",
        },
        {
            name: "Lorem, ipsum.",
            icon: data,
            describtion: "data analysis icon",
        },
        {
            name: "Lorem, ipsum.",
            icon: graphic,
            describtion: "graphic design icon",
        },
        {
            name: "Lorem, ipsum.",
            icon: video,
            describtion: "video editing icon",
        },
        {
            name: "Lorem, ipsum.",
            icon: marketing,
            describtion: "social media and digital mergeting icon",
        },
    ]
    const services = service.map(el => (
        <div
            key={el.icon}
            className='
                bg-primary rounded-lg shadow-xl shadow-slate-400 p-10
                flex flex-col justify-center items-center hover:bg-secondry duration-150
            '
        >
            <img src={el.icon} alt={el.describtion} className='w-56'/>
            <h1 className='text-xl font-medium text-third mt-8'>{el.name}</h1>
        </div>
    ))
    return(
        <>
            {services}
        </>
    )
}
export default SevicesCard