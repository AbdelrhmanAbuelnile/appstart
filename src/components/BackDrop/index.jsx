function BackDrop({ children, toggleModal }) {
  return (
    <div
      onClick={toggleModal}
      className="fixed inset-0 z-50 bg-[#00000097] flex justify-center items-center"
    >
      {children}
    </div>
  );
}

export default BackDrop;
