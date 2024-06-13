import React, { useEffect } from "react";
import { useEnglish } from "../../context/EnglishContext";
import "../../css/sub.css";

const EngCase = () => {
  const { setIsEnglishPage } = useEnglish();

  useEffect(() => {
    setIsEnglishPage(true);
    return () => setIsEnglishPage(false);
  }, [setIsEnglishPage]);
  return (
    <body id="case">
      <div id="wrap">
        <div id="mainContent">
          <article>
            <div id="kvBlock">
              <div class="ttlWrap">
                <h1>Testimonials</h1>
              </div>
            </div>
            <div class="one_columnWrap">
              <div class="mainBlock">
                <div class="contBoxinner">
                  <p class="lead">
                    Why trust KKB with your recycled tire needs? Read what our
                    satisfied customers have to say about KKB’s expertise,
                    reliable delivery and international service support.
                  </p>
                </div>
                <div class="contBoxinner reviewBox">
                  <h2>Years of solid service in the recycled tires industry</h2>
                  <div class="cmntWrap">
                    <div class="txtBox">
                      <p>
                        The staff members at KKB are very kind and supportive.
                        <br />
                        I&#8217;ve really appreciated your assistance all these
                        years.
                      </p>
                      <span>
                        Company in Senegal
                        <br class="sp" /> ― Customer for over 10 years
                      </span>
                    </div>
                  </div>
                </div>
                <div class="contBoxinner reviewBox">
                  <h2>Smooth and reliable</h2>
                  <div class="cmntWrap">
                    <div class="txtBox">
                      <p>
                        Everything has worked out well. <br />I have no
                        complaints at all. Thanks!
                      </p>
                      <span>
                        Company in Malaysia
                        <br class="sp" /> ― Customer for 9 years
                      </span>
                    </div>
                  </div>
                </div>
                <div class="contBoxinner reviewBox">
                  <h2>Nothing but praise</h2>
                  <div class="cmntWrap">
                    <div class="txtBox">
                      <p>
                        I enjoy working with KKB because the system works so
                        well for us. When problems arise, you always help us
                        work things out. <br />I have nothing but positive
                        things to say.
                      </p>
                      <span>
                        Company in Africa (French speaking countries)
                        <br /> ― Customer for over 10 years
                      </span>
                    </div>
                  </div>
                </div>
                <div class="contBoxinner reviewBox">
                  <h2>Great support</h2>
                  <div class="cmntWrap">
                    <div class="txtBox">
                      <p>
                        First of all, we would like to say a big thank you to
                        the KKB staff for their big support. You have been
                        extremely flexible and made the impossible possible for
                        us. Once again thank you!! As soon as we finish selling
                        our latest order, we will be purchasing more tires
                        again.
                      </p>
                      <span>
                        Company in Madagascar
                        <br class="sp" /> ― Customer for 1 year
                      </span>
                    </div>
                  </div>
                </div>
                <div class="contBoxinner reviewBox">
                  <h2>Excellent service</h2>
                  <div class="cmntWrap">
                    <div class="txtBox">
                      <p>Your service was just what we were looking for!</p>
                      <span>
                        Company in Ukraine
                        <br class="sp" /> ― Customer for 1 year
                      </span>
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
              <span itemprop="title">Testimonials</span>
            </li>
          </ol>
        </div>
      </div>
    </body>
  );
};

export default EngCase;
