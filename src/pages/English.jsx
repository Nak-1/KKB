import React, { useEffect, useState } from "react";
import { useEnglish } from "../context/EnglishContext";
import img1 from "../assets/eng/image copy 3.png";
import img2 from "../assets/eng/image copy 4.png";
import img3 from "../assets/eng/image copy 5.png";

import "../css/jquery.css";
import "../css/common.css";
import "../css/top.css";
import "../css/slick.css";

const images = [`${img1}`, `${img2}`, `${img3}`];
const BackgroundSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(images.length - 1);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPrevImageIndex(currentImageIndex);
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          opacity: `${fade ? 1 : 0}`,
        }}
      ></div>
      <div
        style={{
          backgroundImage: `url(${images[prevImageIndex]})`,
          opacity: `${fade ? 0 : 1}`,
        }}
      ></div>
    </div>
  );
};

const English = () => {
  const { setIsEnglishPage } = useEnglish();

  useEffect(() => {
    setIsEnglishPage(true);
    return () => setIsEnglishPage(false);
  }, [setIsEnglishPage]);
  return (
    <body id="topPage">
      <div id="wrap">
        <div id="mvBlock">
          <BackgroundSlider />
        </div>
        <div id="mainContent">
          <div class="msgBlock">
            <h2>
              <span>Messages</span> from{" "}
              <span>
                satisfied customers <br class="sp" />
                about KKB's used wholesale tires
              </span>
            </h2>
            <ul>
              <li>
                <div class="txt" style={{ height: "344px" }}>
                  <h3>Great support</h3>
                  <p>
                    "A big thank you to the KKB staff for their big support. You
                    have been extremely flexible and made the impossible
                    possible for us."
                  </p>
                  <span>
                    Company in Madagascar
                    <br />
                    Customer for 1 year
                  </span>
                </div>
                <div class="img" style={{ height: "344px" }}></div>
              </li>
              <li>
                <div class="txt" style={{ height: "344px" }}>
                  <h3>Nothing but praise</h3>
                  <p>
                    "I enjoy working with KKB because the system works so well
                    for us. When problems arise, you always help us work things
                    out."
                  </p>
                  <span>
                    Company in Africa (French speaking countries)
                    <br />
                    Customer for over 10 years
                  </span>
                </div>
                <div class="img" style={{ height: "344px" }}></div>
              </li>
            </ul>
            <div class="more">
              <a href="/eng/case/" class="btnType01">
                <span>More details</span>
              </a>
            </div>
          </div>
          <div class="cstmrBlock">
            <h2>Customers</h2>
            <ul>
              <li style={{ height: "89px" }}>
                <p>Bridgestone Corporation</p>
              </li>
              <li style={{ height: "89px" }}>
                <p>
                  Bridgestone Off-The-Road Tire Sales &amp;
                  <br />
                  Service Co., Ltd.
                </p>
              </li>
              <li style={{ height: "89px" }}>
                <p>Bridgestone Tire Japan Co., Ltd.</p>
              </li>
              <li style={{ height: "89px" }}>
                <p>Bridgestone Retail Japan Co., Ltd.</p>
              </li>
              <li style={{ height: "89px" }}>
                <p>Bridgestone BRM Co., Ltd.</p>
              </li>
              <li style={{ height: "89px" }}>
                <p>The Yokohama Rubber Co., Ltd.</p>
              </li>
              <li style={{ height: "89px" }}>
                <p>Yokohama Tire Japan Co., Ltd.</p>
              </li>
              <li style={{ height: "89px" }}>
                <p>TOYO TIRE &amp; RUBBER Co., Ltd.</p>
              </li>
              <li style={{ height: "89px" }}>
                <p>TOYO TIRE JAPAN Co., Ltd.</p>
              </li>
              <li style={{ height: "89px" }}>
                <p>DUNLOP TYRE CYUOU Co., Ltd.</p>
              </li>
              <li style={{ height: "89px" }}>
                <p>DUNLOP TYRE KANTO Co., Ltd.</p>
              </li>
              <li style={{ height: "89px" }}>
                <p>SAITAMA TOYOTA MOTOR SALES Co., Ltd.</p>
              </li>
              <li style={{ height: "89px" }}>
                <p>TOYOTA Rent-A-Lease SAITAMA Co., Ltd.</p>
              </li>
            </ul>
            <p>
              Plus more than 3000 companies around the world source their used
              wholesale tires, tire casings, and scrap tire materials from KKB.
              <br />
              (car dealers, tire manufacturers, tire dealers, auto parts
              suppliers, etc.)
            </p>
          </div>
          <div class="prdctBlock products">
            <div class="txt">
              <h2>
                Used wholesale tires, tire casings &amp; scrap tire materials
              </h2>
              <p>
                With four decades of experience, KKB has become a leader in the
                recycling and export of Japanese used tires and scrap tire
                materials to over 40 countries around the world. We offer used
                passenger car and truck tires, OTR tires, tire casings for
                retread, recycled rubber and more. Whatever your used tire or
                scrap tire material needs, trust KKB to reliably deliver.
              </p>
              <div class="more">
                <a href="/eng/products/" class="btnType01">
                  <span>More details</span>
                </a>
              </div>
            </div>
          </div>
          <div class="prdctBlock recycle">
            <div class="txt">
              <h2>Tire Collection &amp; Recycling</h2>
              <p>
                We collect all types of tires from all industries related to
                cars such like car dealers, tire manufacturers, mass
                merchandisers, taxi, car rental, transport companies...
                <br />
                Those collected used tires are sorted into strictly inspected
                standards that are to reuse, to be tire casings for retreaded
                tires, then the most of others are crushed and be tire derived
                fuels (TDF) that is used as alternative fuels at every large
                factory like paper manufacturers, cement company etc. We recycle
                tires thoroughly.
              </p>
              <div class="more">
                <a href="/eng/recycle/" class="btnType01">
                  <span>More details</span>
                </a>
              </div>
            </div>
          </div>
          <div class="prdctBlock otherservices">
            <div class="txt">
              <h2>Other Services</h2>
              <p>
                Our business started from tire recycling. Today, we are
                developing not only recycling but expanded into tire related
                business like tire maintenance &amp; keeping, rubber materials,
                artificial grass &amp; greening business widely.
              </p>
              <div class="more">
                <a href="/eng/otherservices/" class="btnType01">
                  <span>More details</span>
                </a>
              </div>
            </div>
          </div>
          <div class="reasonBlock">
            <h2>The world chooses KKB for 3 reasons</h2>
            <div class="txt">
              <span>High quality</span> + <span>Huge inventory</span> +{" "}
              <span>Total support</span>
            </div>
            <div class="more">
              <a href="/eng/solution/" class="btnType01">
                <span>More details</span>
              </a>
            </div>
          </div>
        </div>
        <div id="pageTop" class="scroll"></div>
      </div>
    </body>
  );
};

export default English;