function MenuModal({ children, toggleModal }) {
  return (
    <div
      onClick={toggleModal}
      className="absolute top-0 right-0 z-20 w-screen h-screen flex justify-end items-start bg-[#dd00001a] pt-6 pr-4"
    >
      {children}
    </div>
  );
}

export default MenuModal;
