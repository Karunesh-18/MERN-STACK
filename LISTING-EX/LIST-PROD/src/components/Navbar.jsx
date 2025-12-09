const Navbar = ({cart}) => {
    
  return (
    <>
      <nav className="navbar w-full h-20 bg-white border-2 border-gray-800 flex items-center justify-between px-6 pb-2 ">
        <div className="shrink-0">
          <a href="#" className="text-5xl font-bold">
            <span className="text-[#e53238]">e</span>
            <span className="text-[#0064d2]">b</span>
            <span className="text-[#f5af02]">a</span>
            <span className="text-[#86b817]">y</span>
          </a>
        </div>

        <div className="flex items-center gap-8 text-gray-800 font-medium text-lg">
          <a href="#products" className="hover:text-[#e53238] hover:underline hover:underline-offset-4 transition">
            Products
          </a>
          <a href="#orders" className="hover:text-[#0064d2] hover:underline hover:underline-offset-4 transition">
            Orders
          </a>
          <a href="#cart" className="hover:text-[#f5af02] hover:underline hover:underline-offset-4 transition">
            Cart ({cart})
          </a>
          <a href="#login" className="hover:text-[#86b817] hover:underline hover:underline-offset-4 transition">
            Log in
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
