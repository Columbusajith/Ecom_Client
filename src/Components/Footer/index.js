import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { TbDiscount2 } from "react-icons/tb";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import newsLetterImg from "../../assets/images/newsletter.png";
import Button from "@mui/material/Button";
import { IoMailOutline } from "react-icons/io5";
import Banners from "../banners/index";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/api";

const Footer = () => {
  const [bannerList, setBannerList] = useState([]);

  return (
    <>
      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                $20 discount for your first order
              </p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">
                Join our email subscription now to get updates on
                <br /> promotions and coupons.
              </p>

              <form className="mt-4">
                <IoMailOutline />
                <input type="text" placeholder="Your Email Address" />
                <Button>Subscribe</Button>
              </form>
            </div>

            <div className="col-md-6">
              <img src={newsLetterImg} />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="topInfo row">
            <div className="col d-flex align-items-center">
              <span>
                <LuShirt />
              </span>
              <span className="ml-2">Everyday fresh products</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <TbTruckDelivery />
              </span>
              <span className="ml-2">Free delivery for order over $70</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <TbDiscount2 />
              </span>
              <span className="ml-2">Daily Mega Discounts</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <CiBadgeDollar />
              </span>
              <span className="ml-2">Best price on the market</span>
            </div>
          </div>

          <div className="row mt-5 linksWrap">
            <div className="col">
              <h5>Women's Wear</h5>
              <ul>
                <li>
                  <Link to="#">Sarees</Link>
                </li>
                <li>
                  <Link to="#">Nighties</Link>
                </li>
                <li>
                  <Link to="#">Lrghana</Link>
                </li>
                <li>
                  <Link to="#">Jeans Pants</Link>
                </li>
                <li>
                  <Link to="#">Trousers</Link>
                </li>
                <li>
                  <Link to="#">Party wear</Link>
                </li>
                <li>
                  <Link to="#">Party Trays</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h5>Foot wears</h5>
              <ul>
                <li>
                  <Link to="#">Sneakers</Link>
                </li>
                <li>
                  <Link to="#">Shoe Accessories</Link>
                </li>
                <li>
                  <Link to="#">Sandals</Link>
                </li>
                <li>
                  <Link to="#">Running shoe</Link>
                </li>
                <li>
                  <Link to="#">Casual shoe</Link>
                </li>
                <li>
                  <Link to="#">Party shoes</Link>
                </li>
                <li>
                  <Link to="#">branded shoes</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h5>Womens Clothing</h5>
              <ul>
                <li>
                  <Link to="#">Classic</Link>
                </li>
                <li>
                  <Link to="#">Folkloric</Link>
                </li>
                <li>
                  <Link to="#">Business</Link>
                </li>
                <li>
                  <Link to="#">Casual</Link>
                </li>
                <li>
                  <Link to="#">Elegant</Link>
                </li>
                <li>
                  <Link to="#">Formal </Link>
                </li>
                <li>
                  <Link to="#">Party</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h5>Popular Styles</h5>
              <ul>
                <li>
                  <Link to="#">Culotte dress</Link>
                </li>
                <li>
                  <Link to="#">Babydoll dress</Link>
                </li>
                <li>
                  <Link to="#"> Wrap around dress</Link>
                </li>
                <li>
                  <Link to="#">Bubble dress</Link>
                </li>
                <li>
                  <Link to="#">Polo dress</Link>
                </li>
                <li>
                  <Link to="#">Tutu dress</Link>
                </li>
                <li>
                  <Link to="#">Shirtdress</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h5>Womens Categoty </h5>
              <ul>
                <li>
                  <Link to="#">Sundress</Link>
                </li>
                <li>
                  <Link to="#">  Sack dress
                  </Link>
                </li>
                <li>
                  <Link to="#">Tunic dress</Link>
                </li>
                <li>
                  <Link to="#">Sheath dress</Link>
                </li>
                <li>
                  <Link to="#">Shift dress</Link>
                </li>
                <li>
                  <Link to="#">Trumpet dress</Link>
                </li>
                <li>
                  <Link to="#"> Smoked/layered dress</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright mt-3 pt-3 pb-3 d-flex">
            <p className="mb-0">© Copyright 2025. All rights reserved</p>
            <ul className="list list-inline ml-auto mb-0 socials">
              <li className="list-inline-item">
                <Link to="#">
                  <FaFacebookF />
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="#">
                  <FaTwitter />
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="#">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
