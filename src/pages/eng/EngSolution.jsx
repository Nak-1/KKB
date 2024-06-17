import React, { useEffect } from "react";
import { useEnglish } from "../../context/EnglishContext";

import "../../css/sub.css";
import "../../css/common.css";
import "../../css/jquery.css";
import "../../css/remodal.css";
import "../../css/remodal-default.css";

import img1 from "../../assets/homeimgs/bk_img11.png";
import img2 from "../../assets/homeimgs/bk_img12.png";
import img3 from "../../assets/homeimgs/bk_img13.png";

const EngSolution = () => {
  const { setIsEnglishPage } = useEnglish();

  useEffect(() => {
    setIsEnglishPage(true);
    return () => setIsEnglishPage(false);
  }, [setIsEnglishPage]);
  return (
    <body id="reason">
      <div id="wrap">
        <div id="mainContent">
          <article>
            <div id="kvBlock">
              <div class="ttlWrap">
                <h1>Why KKB?</h1>
              </div>
            </div>
            <div class="one_columnWrap">
              <div class="mainBlock">
                <div class="contBoxinner">
                  <h2>High quality used tires from KKB in Japan</h2>
                  <div class="imgBlock imgLeft">
                    <div class="imgBox">
                      <img
                        src={img1}
                        alt=""
                        style={{ width: "420px", height: "420px" }}
                      />
                    </div>
                    <div class="txtBox">
                      <p>
                        It is widely known that the quality of used tires in
                        Japan is highly reputed in the world for the high
                        quality due to existence of well developed paved roads
                        and strict speed limit enforced by authority. The
                        circumstance has soft impact on tires and tires in Japan
                        keep good condition even in a long run.
                        <br />
                        We, KKB, care about quality of tires we supply as we
                        know importance of supplying stability and quality with
                        our tires. To materialize offering our customers the
                        stability and high quality used tires, we, KKB, inspect
                        tires 3 times before exporting them. The first
                        inspection is made when we collect tires on the spot.
                        Second inspection is conducted at our own yards for
                        stocking. Then, Third time inspection is made when prior
                        to tire loading into export containers.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="contBoxinner">
                  <h2>Huge inventory of used Japanese brand tires</h2>
                  <div class="imgBlock imgLeft">
                    <div class="imgBox">
                      <img
                        src={img2}
                        alt=""
                        style={{ width: "420px", height: "420px" }}
                      />
                    </div>
                    <div class="txtBox">
                      <p>
                        We hold a huge inventory of used tires, having in total
                        4 stock yards in Japan The biggest yard is located in
                        kumagaya Saitama, where head quarter is located. Then,
                        second yard is located in Hokkaido, third one located in
                        Miyagi and then fourth yard located in Iwate.
                        <br />
                        We also have cooperative yards, 10 yards, throughout
                        Japan.
                        <br />
                        By holding great number of stocks, we can meet various
                        demand for tires and fulfill needs of our customers.
                        <br />
                        Needless to say, our tires are of well-known Japanese
                        brand tires such as Bridgestone, YOKOHAMA, DUNLOP and
                        TOYO.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="contBoxinner">
                  <h2>Total support</h2>
                  <div class="imgBlock imgLeft">
                    <div class="imgBox">
                      <img
                        src={img3}
                        alt=""
                        style={{ width: "420px", height: "420px" }}
                      />
                    </div>
                    <div class="txtBox">
                      <h3>Quality assurance </h3>
                      <p class="mb30">
                        Because we are fully committed to quality, we thoroughly
                        inspect tires, 3 times up to exporting, ensuring the
                        quality and its stability. However, in case of any
                        quality issues arisen, we will make a through
                        investigation and identify the cause, hence eliminate
                        possibility of recurrence.
                      </p>

                      <h3>Customers visiting overseas</h3>
                      <p class="mb30">
                        We welcome visitors from overseas as we recognize export
                        of our used tires is one of major strengths of our
                        company. Please feel free that we have trilingual and
                        bilingual staffs at our head quarter for the following
                        languages.: English, Chinese, Portuguese and Spanish. We
                        feel certain that we will make your visit pleasant and
                        fruitful.
                      </p>

                      <h3>Long lasting Business Relationship</h3>
                      <p>
                        We consider our customers as our business partners, and
                        it is our policy to support the partner in anyway we can
                        and establish a long-term relationship. Indeed, some of
                        our customers have been with us for over 40 years,
                        visiting us quite often, feeling like our family
                        members. Nowadays, second generation of our customers
                        visit us, and we feel grateful having such
                        opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div id="pageTop" class="scroll"></div>
        <div id="breadcrumb">
          <ol>
            <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
              <a itemprop="url" href="/eng/">
                <span itemprop="title">Home</span>
              </a>
            </li>
            <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
              <a itemprop="url" href="https://www.kkb-tire.co.jp/eng/">
                <span itemprop="title">
                  Used Wholesale Tires - Tire Casings - Scrap Tire Materials -
                  KKB
                </span>
              </a>
            </li>
            <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
              <span itemprop="title">Solution</span>
            </li>
          </ol>
        </div>
      </div>
    </body>
  );
};

export default EngSolution;
