const Footer = () => {
    return (
      <footer className=" text-white py-4">
        <div className="container mx-auto text-center flex justify-between px-9 mobile-block">
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-grayblack  hover:text-blue-400"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-grayblack  hover:text-blue-600"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-grayblack  hover:text-pink-500"
            >
              Instagram
            </a>
          </div>
  
          {/* Footer Text */}
          <p className="text-sm  text-grayblack ">
            © 2025 All rights reserved. Zia khan.
          </p>
        </div>
      </footer>
    );
};
  
  export default Footer;
  