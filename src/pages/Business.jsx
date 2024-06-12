import React from "react";
import img2 from "../assets/homeimgs/bk_img12.png";
import img3 from "../assets/homeimgs/bk_img13.png";
import img4 from "../assets/homeimgs/bk_img14.png";
import img5 from "../assets/homeimgs/bk_img15.png";

const Business = () => {
  return (
    <body id="business">
      <div id="wrap">
        <div id="mainContent">
          <section>
            <div id="titleImg">
              <div class="inner">
                <h1>
                  <span>事業紹介</span>
                </h1>
              </div>
            </div>
            <div class="br/eadCramb">
              <div class="contentInner">
                <ul>
                  <ul>
                    <li>
                      <a href="https://www.kkb-tire.co.jp/">TOPページ</a>
                    </li>
                    <li>事業紹介</li>
                  </ul>
                </ul>
              </div>
            </div>
            <div class="lead contentInnerS">
              <p>
                1976年、使用済みタイヤのリサイクルから出発した国分商会。
                <br />
                現在ではタイヤリサイクルはもちろんのこと、
                <br />
                タイヤを基軸とした幅広い事業を日本で・世界で展開しております。
              </p>
            </div>
            <div class="contentInner sectionSpace">
              <div class="boxStyle03 mb20">
                <div class="txt">
                  <p class="ttl">タイヤ回収業務</p>
                  <p class="txt01">
                    カーディーラーやタイヤメーカー各社、量販店やタクシー・レンタカー・輸送会社・・・車に関するあらゆる業界からあらゆる種類のタイヤを回収。
                  </p>
                  <div class="btnStyle01 fl">
                    <a href="/business/collect/">詳しく見る</a>
                  </div>
                </div>
                <div
                  class="img"
                  style={{ backgroundImage: `url(${img2})` }}
                ></div>
              </div>
              <div class="boxStyle03 mb20">
                <div
                  class="img"
                  style={{ backgroundImage: `url(${img3})` }}
                ></div>
                <div class="txt">
                  <p class="ttl">タイヤリサイクル</p>
                  <p class="txt01">
                    回収された使用済みタイヤは厳しい検品基準により選別され、余すところなくリサイクルされます。
                  </p>
                  <div class="btnStyle01 fl">
                    <a href="/business/recycle/">詳しく見る</a>
                  </div>
                </div>
              </div>
              <div class="boxStyle03 mb20">
                <div class="txt">
                  <p class="ttl">リトレッド用台タイヤ</p>
                  <p class="txt01">
                    全ての使用済みタイヤを適正に処分できる国分商会ならではのシステムで、お客様の使用済みタイヤの処理を一元化いたします。リトレッドタイヤ（再生タイヤ）の土台となる「台タイヤ」を取り扱っています。
                  </p>
                  <div class="btnStyle01 fl">
                    <a href="/business/casingtire/">詳しく見る</a>
                  </div>
                </div>
                <div
                  class="img"
                  style={{ backgroundImage: `url(${img4})` }}
                ></div>
              </div>
              <div class="boxStyle03 mb20">
                <div
                  class="img"
                  style={{ backgroundImage: `url(${img5})` }}
                ></div>
                <div class="txt">
                  <p class="ttl">貿易事業</p>
                  <p class="txt01">
                    取引国数は50か国を超え、アジア・欧米のみならずアフリカ・中南米と全世界へ広がっています。
                    <br />
                    厳しい検品基準をクリアした高品質なリサイクルタイヤ製品は、世界を駆け巡ります。
                    <br />
                    また、非タイヤ製品開発にも果敢に取り組んでいます。
                  </p>
                  <div class="btnStyle01 fl">
                    <a href="/business/boueki/">詳しく見る</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInner sectionSpace">
              <ul class="listStyle01">
                <li class="clickBox">
                  <div class="img">
                    <img alt="" src={img2} />
                  </div>
                  <div class="txt">
                    <h2>
                      法人向けタイヤサポート
                      <br />
                      メンテナンス事業
                    </h2>
                    <p>
                      法人様で保管にお困りのタイヤや、店頭でお客様から保管を依頼された店舗様のタイヤを迅速適切に管理・メンテナンスいたします。
                    </p>
                    <div class="btn">
                      <a href="/business/tire/">詳細へ</a>
                    </div>
                  </div>
                </li>
                <li class="clickBox">
                  <div class="img">
                    <img alt="" src={img2} />
                  </div>
                  <div class="txt">
                    <h2>
                      ショップ事業
                      <br />
                      （小売店「マーク」）
                    </h2>
                    <p>
                      KKBグループならではのネットワークとノウハウを生かし、タイヤ販売からタイヤ交換・メンテナンス・出張サービスまで、地域に密着したサービスを展開しています。
                    </p>
                    <div class="btn">
                      <a href="/business/marque/">詳細へ</a>
                    </div>
                  </div>
                </li>
                <li class="clickBox">
                  <div class="img">
                    <img alt="" src={img2} />
                  </div>
                  <div class="txt">
                    <h2>緑化事業</h2>
                    <p>
                      人びとが笑顔でいられる快適な未来に向けて、ヒートアイランド現象に対応する緑化推進や環境づくりを提案します。
                    </p>
                    <div class="btn">
                      <a href="/business/green/">詳細へ</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </body>
  );
};
export default Business;
