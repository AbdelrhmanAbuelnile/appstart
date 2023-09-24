import BackDrop from "../BackDrop";
import CloseIcon from '@mui/icons-material/Close';

function Modal({ toggleModal, text }) {
  return (
    <BackDrop toggleModal={toggleModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="
            bg-fourth w-8/12 h-fit py-11 lg:pt-11 lg:pb-5 lg:w-1/4 
            flex justify-center items-start px-4 flex-col
            rounded-lg shadow-md shadow-slate-400
            relative
            
        "
      >
        <div className="flex flex-col justify-center items-start gap-10 mb-10">
          {text.map((el) => (
            <p 
                key={el.name}
                className="text-2xl text-primary font-semibold"
            >
                {el.name}
            </p>
          ))}
        </div>
        {/* <span 
            className="
                align-self text-2xl text-white font-semibold
                hover:text-primary duration-150
                px-4 py-2 rounded-2xl bg-secondry 
                shadow-md shadow-slate-400
            " 
        >
            Get Started
        </span> */}
        <CloseIcon
            onClick={toggleModal} 
            fontSize='large'
            className='
                text-secondry
                absolute top-1 right-3 cursor-pointer
                hover:text-red-500 duration-500
            '
        />

        <span 
            className="
                text-xl text-white font-semibold
                bg-secondry px-4 py-2 rounded-3xl
                absolute -top-6 -left-12
            "
        >
            WE DO
        </span>

      </div>
    </BackDrop>
  );
}

export default Modal;
