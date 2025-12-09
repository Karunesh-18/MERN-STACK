const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-3 text-stone-950">Buy</h4>
            <ul className="space-y-2 text-sm text-stone-950">
              <li><a href="#" className="hover:underline text-stone-950">Registration</a></li>
              <li><a href="#" className="hover:underline text-stone-950">eBay Money Back Guarantee</a></li>
              <li><a href="#" className="hover:underline text-stone-950">Bidding & buying help</a></li>
              <li><a href="#" className="hover:underline text-stone-950">Stores</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-stone-950">Sell</h4>
            <ul className="space-y-2 text-sm text-stone-950">
              <li><a href="#" className="hover:underline text-stone-950">Start selling</a></li>
              <li><a href="#" className="hover:underline text-stone-950">Learn to sell</a></li>
              <li><a href="#" className="hover:underline text-stone-950">Affiliates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-stone-950">About eBay</h4>
            <ul className="space-y-2 text-sm text-stone-950">
              <li><a href="#" className="hover:underline text-stone-950">Company info</a></li>
              <li><a href="#" className="hover:underline text-stone-950">News</a></li>
              <li><a href="#" className="hover:underline text-stone-950">Investors</a></li>
              <li><a href="#" className="hover:underline text-stone-950">Careers</a></li>
              <li><a href="#" className="hover:underline text-stone-950">Government relations</a></li>
              <li><a href="#" className="hover:underline text-stone-950">Policies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-stone-950">Help & Contact</h4>
            <ul className="space-y-2 text-sm text-stone-950">
              <li><a href="#" className="hover:underline text-stone-950">Seller Information Center</a></li>
              <li><a href="#" className="hover:underline text-stone-950">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-stone-950">Community</h4>
            <ul className="space-y-2 text-sm text-stone-950">
              <li><a href="#" className="hover:underline text-stone-950">Announcements</a></li>
              <li><a href="#" className="hover:underline text-stone-950">Discussion boards</a></li>
              <li><a href="#" className="hover:underline text-stone-950">eBay Giving Works</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-6">
          <div className="flex flex-wrap items-center justify-between text-xs text-stone-950">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span>Copyright © eBay Inc. All Rights Reserved.</span>
              <a href="#" className="hover:underline text-stone-950">Accessibility</a>
              <a href="#" className="hover:underline text-stone-950">User Agreement</a>
              <a href="#" className="hover:underline text-stone-950">Privacy</a>
              <a href="#" className="hover:underline text-stone-950">Payments Terms of Use</a>
              <a href="#" className="hover:underline text-stone-950">Cookies</a>
              <a href="#" className="hover:underline text-stone-950">CA Privacy Notice</a>
              <a href="#" className="hover:underline text-stone-950">Your Privacy Choices</a>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" className="text-stone-950 hover:text-gray-900">
                <i className="fa-brands fa-facebook text-lg"></i>
              </a>
              <a href="#" className="text-stone-950 hover:text-gray-900">
                <i className="fa-brands fa-twitter text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
