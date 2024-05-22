const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-purple-500 font-bold text-xl">Workcation</div>
        <div>
          <a href="#home" className="text-gray-600 hover:text-purple-500 mx-2">Home</a>
          <a href="#about" className="text-gray-600 hover:text-purple-500 mx-2">About</a>
          <a href="#services" className="text-gray-600 hover:text-purple-500 mx-2">Services</a>
          <a href="#contact" className="text-gray-600 hover:text-purple-500 mx-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;