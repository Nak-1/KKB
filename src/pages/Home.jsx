import React, { useEffect, useState } from "react";
import img1 from "../assets/homeimgs/bk_img11.png";
import img2 from "../assets/homeimgs/bk_img12.png";
import img3 from "../assets/homeimgs/bk_img13.png";
import img4 from "../assets/homeimgs/bk_img14.png";
import img5 from "../assets/homeimgs/bk_img15.png";
import imgg1 from "../assets/homeimgs/img01.png";
import imgg2 from "../assets/homeimgs/img02.png";
import imgg3 from "../assets/homeimgs/img03.png";
import imgg4 from "../assets/homeimgs/img05.png";
import imgg5 from "../assets/homeimgs/img06.png";
import news_logo from "../assets/news_logo.png";
import bk_img03 from "../assets/bk_img03.png"

const images = [`${img1}`, `${img2}`, `${img3}`, `${img4}`, `${img5}`];
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
      }, 1000); // Match the CSS transition duration
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);


  return (
    <li>
      <div
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          opacity: `${fade ? 1 : 0}`,
        }}
      ></div>
      <div
        style={{
          backgroundImage: `url(${images[prevImageIndex]})`,
          opacity: `${fade ? 0 : 1}`
        }}
      ></div>
    </li>
  );
};
const Home = () => {
  return (
    <body id="topPage">
      <div id="wrap">
        <div id="mainContent">
          <section id="area01" class="fullHeight">
            <div class="inner">
              <h2>
                タイヤの未来を
                <br class="sp" />
                サポートする
                <br />
                GLOBAL　COMPANY
              </h2>
              <p>
                使用済みタイヤのリサイクルを主軸とし、
                <br />
                地球規模の環境保全とこれからの循環型社会を
                <br />
                その先に進めていく企業へ。
              </p>
            </div>
            <div class="scrollBtn">
              <a href="#area02" class="scrollNoNav">
                Scroll
              </a>
            </div>
            {/* <ul class="bkSlide">
              <li
                class="fullHeight"
                style={{ backgroundImage: `url(${img1})` }}
              ></li>
              <li
                class="fullHeight"
                style={{ backgroundImage: `url(${img2})` }}
              ></li>
              <li
                class="fullHeight"
                style={{ backgroundImage: `url(${img3})` }}
              ></li>
              <li
                class="fullHeight"
                style={{ backgroundImage: `url(${img4})` }}
              ></li>
              <li
                class="fullHeight"
                style={{ backgroundImage: `url(${img5})` }}
              ></li>
            </ul> */}
            <ul class="bkSlide">
              <BackgroundSlider />
            </ul>
          </section>
          <section id="area02" class="fullHeight">
            <div class="inner">
              <h2>
                使用済みタイヤを
                <br class="sp" />
                新たな資源に変える
              </h2>
              <p>
                限りある資源をより有効に、
                <br class="sp" />
                クリーンに活かし、未来へと継承する。
                <br />
                国際社会の一員として、
                <br class="sp" />
                いま日本に求められているもの。
                <br />
                それは、人々の暮らしを中心に、豊かに巡り続ける「循環型社会の構築」です。
                <br />
                私たち国分商会グループは、
                <br class="sp" />
                使用済みタイヤのリサイクルを主軸として、
                <br />
                人々の生活に役立つ新しい技術と
                <br class="sp" />
                商品開発に挑み続けます。
              </p>
            </div>
            <div class="scrollBtn">
              <a href="#area03" class="scroll">
                Scroll
              </a>
            </div>
          </section>
          <section id="area03">
            <ul>
              <li class="clickBox">
                <div class="img">
                  <img src={imgg1} alt="" />
                </div>
                <div class="txt">
                  <h2>
                    <a href="/business/recycle/">再資源化</a>
                  </h2>
                  <p>
                    3Rのリサイクルで、
                    <br />
                    循環型社会の構築に貢献
                  </p>
                </div>
              </li>
              <li class="clickBox">
                <div class="img">
                  <img src={imgg2} alt="" />
                </div>
                <div class="txt">
                  <h2>
                    <a href="/compliance/">健全化</a>
                  </h2>
                  <p>
                    コンプライナンスを徹底し、
                    <br />
                    より強い絆を築く
                  </p>
                </div>
              </li>
              <li class="clickBox">
                <div class="img">
                  <img src={imgg3} alt="" />
                </div>
                <div class="txt">
                  <h2>
                    <a href="/business/green/">快適化</a>
                  </h2>
                  <p>
                    安らぎとくつろぎを、
                    <br />
                    暮らしに取り戻す緑化推進
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section id="area04">
            <div class="contentInner">
              <ul class="listStyle01">
                <li class="clickBox">
                  <div class="img">
                    <img src={imgg4} alt="" />
                  </div>
                  <div class="txt">
                    <h2>お客様の声</h2>
                    <p>
                      創業1976年、世界から、日本から、お客様との絆を大切にします。
                    </p>
                    <div class="btn">
                      <a href="/customer/">詳細へ</a>
                    </div>
                  </div>
                </li>
                <li class="clickBox">
                  <div class="img">
                    <img src={imgg5} alt="" />
                  </div>
                  <div class="txt">
                    <h2>採用情報</h2>
                    <p>
                      私たちのチームと一員となるスタッフをお待ちしております。
                    </p>
                    <div class="btn">
                      <a href="/recruit/">詳細へ</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section id="movie_area">
            <div class="contentInner">
              <div class="tac">
                <h2>コーポレートムービー</h2>
                <iframe
                  width="100%"
                  height="auto"
                  src="https://www.youtube.com/embed/HAf-gNBPmH0?si=lvRbcjdSi_-3Wk2J"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </section>
          <section id="area05" class="imgScrollBox">
            <div class="img">
              <img src={bk_img03} alt="" />
            </div>
            <div class="contentInner">
              <h2>
                <span>私たちの強み</span>
              </h2>
              <div class="numBox">
                <dl class="num01">
                  <dt>車両台数</dt>
                  <dd class="num">
                    <span class="activeNum" data-number="67">
                      00
                    </span>
                  </dd>
                  <dd class="txt">台</dd>
                </dl>
                <dl class="num02">
                  <dt>処理能力</dt>
                  <dd class="num">
                    <span class="activeNum" data-number="774.08">
                      000.00
                    </span>
                  </dd>
                  <dd class="txt">トン/日</dd>
                </dl>
                <dl class="num03">
                  <dt>コンテナ出荷能力</dt>
                  <dd class="num">
                    <span class="activeNum" data-number="120">
                      000
                    </span>
                  </dd>
                  <dd class="txt">本/月以上</dd>
                </dl>
                <dl class="num04">
                  <dt>海外取引国数</dt>
                  <dd class="num">
                    <span class="activeNum" data-number="50">
                      00
                    </span>
                  </dd>
                  <dd class="txt">か国以上</dd>
                </dl>
                <dl class="num05">
                  <dt>国内取引先数</dt>
                  <dd class="num">
                    <span class="activeNum" data-number="3000">
                      0000
                    </span>
                  </dd>
                  <dd class="txt">社以上</dd>
                </dl>
              </div>
            </div>
          </section>
          <section id="area06">
            <div class="contentInner">
              <div class="newsBox">
                <h2>ニュースリリース</h2>
                <div class="inner">
                  <dl>
                    <dd class="img">
                      <img alt="" src={news_logo} />
                    </dd>
                    <dt>2024.04.15</dt>
                    <dd class="txt">
                      <a href="https://www.kkb-tire.co.jp/news/2024%e5%b9%b4-%e3%82%b4%e3%83%bc%e3%83%ab%e3%83%87%e3%83%b3%e3%82%a6%e3%82%a3%e3%83%bc%e3%82%af%e4%bc%91%e6%a5%ad%e3%81%ae%e3%81%8a%e7%9f%a5%e3%82%89%e3%81%9b/">
                        2024年 ゴールデンウィーク休業のお知らせ
                      </a>
                    </dd>
                  </dl>
                  <dl>
                    <dd class="img">
                      <img alt="" src={news_logo} />
                    </dd>
                    <dt>2023.12.01</dt>
                    <dd class="txt">
                      <a href="https://www.kkb-tire.co.jp/news/2023%e5%b9%b4-2024%e5%b9%b4-%e5%b9%b4%e6%9c%ab%e5%b9%b4%e5%a7%8b%e3%81%ae%e3%81%94%e6%a1%88%e5%86%85/">
                        2023年-2024年 年末年始のご案内
                      </a>
                    </dd>
                  </dl>
                  <dl>
                    <dd class="img">
                      <img alt="" src={news_logo} />
                    </dd>
                    <dt>2023.07.01</dt>
                    <dd class="txt">
                      <a href="https://www.kkb-tire.co.jp/news/2023%e5%b9%b4-%e5%a4%8f%e5%ad%a3%e4%bc%91%e6%a5%ad%e3%81%ae%e3%81%94%e6%a1%88%e5%86%85/">
                        2023年 夏季休業のご案内
                      </a>
                    </dd>
                  </dl>
                </div>
                <div class="btnStyle01">
                  <a href="/news/">一覧を見る</a>
                </div>
              </div>
              <div class="facebookBox">
                <h2>Facebookタイムライン</h2>
                <div
                  class="fb-page"
                  data-href="https://www.facebook.com/usedtyreKKBjapan/"
                  data-tabs="timeline"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote
                    cite="https://www.facebook.com/usedtyreKKBjapan/"
                    class="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/usedtyreKKBjapan/">
                      KKB 株式会社 国分商会
                    </a>
                  </blockquote>
                </div>
                <div id="fb-root"></div>
                <script>
                  {(function (d, s, id) {
                    var js,
                      fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src =
                      "https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.11";
                    fjs.parentNode.insertBefore(js, fjs);
                  })(document, "script", "facebook-jssdk")}
                </script>
              </div>
            </div>
          </section>
        </div>
      </div>
      <script
        type="text/javascript"
        src="https://www.kkb-tire.co.jp/wp/wp-includes/js/wp-embed.min.js?ver=4.9.1"
      ></script>
    </body>
  );
};

export default Home;
