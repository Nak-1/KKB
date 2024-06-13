import React, { useEffect } from "react";
import { useEnglish } from "../../context/EnglishContext";
import "../../css/sub.css";

const EngProducts = () => {
  const { setIsEnglishPage } = useEnglish();

  useEffect(() => {
    setIsEnglishPage(true);
    return () => setIsEnglishPage(false);
  }, [setIsEnglishPage]);
  return (
    <body id="products">
      <div id="wrap">
        <div id="mainContent">
          <article>
            <div id="kvBlock">
              <div class="ttlWrap">
                <h1>Products</h1>
              </div>
            </div>
            <div class="one_columnWrap">
              <div class="mainBlock">
                <div class="contBoxinner">
                  <h2>Japanese used tires &#038; scrap tire materials</h2>
                  <p class="lead">
                    KKB has been a leader in Japan&#8217;s tire recycling
                    industry for over four decades and boasts the largest share
                    of the tire recycling market in Japan. We export used tires,
                    tire casings for retread and scrap tire materials to over 40
                    countries worldwide.
                  </p>
                </div>
                <div class="contBoxinner">
                  <ul class="productstopList clearfix">
                    <li>
                      <a href="/eng/products/oldtire/">
                        <h3>Used Tires –Huge inventory with variations</h3>
                        <img
                          src="/eng/common/img/products/topImg01.jpg"
                          alt="Used tires"
                        />
                        <p>
                          Located in Japan, we enjoy supplying top brand tires
                          of the world. Bridgestone, YOKOHAMA, TOYO and DUNLOP
                          are the brands of used tires we supply. With a huge
                          inventory, we have all types of tires, passenger car
                          tires, light truck tires, heavy truck tires, bus tires
                          and OTR(Off The Road). In other words, we have all
                          type of tires you need.
                        </p>
                        <div class="btnType01">
                          <span>More details</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/eng/products/casingtire/">
                        <h3>Tire casings for retread</h3>
                        <img
                          src="/eng/common/img/products/topImg02.jpg"
                          alt="Tire casings for retread"
                        />
                        <p>
                          Tire casings are one of our major products and we have
                          customers (tire retreading factories) in the world. We
                          regularly ship out between 70-80 containers to the
                          world, and our tire casings are highly recognized for
                          stable quality and supply.
                        </p>
                        <div class="btnType01">
                          <span>More details</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/eng/products/materials/">
                        <h3>Rubber materials</h3>
                        <img
                          src="/eng/common/img/products/topImg03.jpg"
                          alt="Rubber materials"
                        />
                        <p>
                          We produce rubber materials mainly shredded tires as
                          tire chips at our own 3 factories. Due to increased
                          demand for tire chips for TDF, open our doors for
                          importing rubber products from overseas for the
                          following rubber products: Tire chips(1”-6” size),
                          Unvulcanizedrubber compound, Butyl Bladder and Tube
                          scrap, and Buffing dust.
                        </p>
                        <div class="btnType01">
                          <span>More details</span>
                        </div>
                      </a>
                    </li>
                  </ul>
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
              <span itemprop="title">Products</span>
            </li>
          </ol>
        </div>
      </div>
    </body>
  );
};

export default EngProducts;
