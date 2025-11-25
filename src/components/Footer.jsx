import Logo from "../assets/Logo.png";
import xIcon from "../assets/x.png";
import linkDin from "../assets/link-din.png";
import faceBook from "../assets/face-book.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#181d23] p-10 inter-font text-white w-11/12 mx-auto pt-10 rounded-xl">
        <div className="footer sm:footer-horizontal">
          {/* Logo + Text */}
          <div className="max-w-xs">
            <div className="flex items-center justify-center gap-2">
              {/* Round Logo with Background Color */}
              <div className="w-14 h-14 bg-[#242b33] rounded-full flex items-center justify-center">
                <img className="w-15 h-15 rounded-full" src={Logo} alt="Logo" />
              </div>

              <span className="font-bold text-3xl">
                The{" "}
                <span className="bg-linear-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Book Heaven
                </span>
              </span>
            </div>

            <p className="font-normal text-[16px] text-[#a1a1aa] mt-3">
              This digital library app lets users explore, add, update, and
              delete books with ease. Built using Node.js, Express.js, MongoDB,
              and Firebase Authentication, it provides a secure and seamless
              experience where authenticated users can fully manage their own
              book collections.
            </p>
          </div>

          {/* Navigation Links */}
          <nav>
            <h6 className="footer-title text-white font-bold text-2xl opacity-100">
              Company
            </h6>
            <a className="link link-hover text-[#a1a1aa]">About Us</a>
            <a className="link link-hover text-[#a1a1aa]">Our Mission</a>
            <a className="link link-hover text-[#a1a1aa]">Contact Sales</a>
          </nav>

          <nav>
            <h6 className="footer-title text-white font-bold text-2xl opacity-100">
              Services
            </h6>
            <a className="link link-hover text-[#a1a1aa]">
              Products & Services
            </a>
            <a className="link link-hover text-[#a1a1aa]">Customer Stories</a>
            <a className="link link-hover text-[#a1a1aa]">Download Apps</a>
          </nav>

          <nav>
            <h6 className="footer-title text-white font-bold text-2xl opacity-100">
              Information
            </h6>
            <a className="link link-hover text-[#a1a1aa]">Privacy Policy</a>
            <a className="link link-hover text-[#a1a1aa]">Terms & Conditions</a>
            <a className="link link-hover text-[#a1a1aa]">Join Us</a>
          </nav>

          {/* Social Icons */}
          <nav>
            <h6 className="footer-title text-white font-bold text-2xl opacity-100">
              Social Links
            </h6>
            <div className="flex items-center justify-center gap-3">
              <img className="w-6 h-6 cursor-pointer" src={xIcon} alt="X" />
              <img
                className="w-6 h-6 cursor-pointer"
                src={linkDin}
                alt="LinkedIn"
              />
              <img
                className="w-6 h-6 cursor-pointer"
                src={faceBook}
                alt="Facebook"
              />
            </div>
          </nav>
        </div>

        <div className="text-center text-sm mt-10 text-white text-[16px] font-normal">
          Copyright © 2025 - All right reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
