import React from "react";
import Logo from "../assets/logo_w.png";
import bnr_jsa from "../assets/bnr_jsa.png";
import bnr_musashi from "../assets/bnr_musashi.png";

import "../css/style.css"
import "../css/jquery.css"

const Footer = () => {
  return (
    <div id="topPage">
      <div id="wrap">
        <div id="footer">
          <div class="footer01">
            <div class="contentInner">
              <p class="logo">
                <img alt="" src={Logo} />
              </p>
              <p class="tel">
                TEL.<span class="tel-link">048-536-1564</span>
              </p>
              <p class="pagetop">
                <a href="#wrap" class="scroll">
                  PAGE TOP
                </a>
              </p>
            </div>
          </div>
          <div class="footer02">
            <div class="contentInner">
              <h2>SITE MAP</h2>
              <div class="inner">
                <dl>
                  <dt>
                    <a href="/company/">会社情報</a>
                  </dt>
                  <dd>
                    <a href="/company/#greeting">ごあいさつ</a>
                  </dd>
                  <dd>
                    <a href="/company/#philosophy">企業理念</a>
                  </dd>
                  <dd>
                    <a href="/company/#infomation">会社概要</a>
                  </dd>
                  <dd>
                    <a href="/company/#history">沿革</a>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <a href="/compliance/">コンプライアンス</a>
                  </dt>
                  <dd>
                    <a href="/compliance/certification/">優良認定</a>
                  </dd>
                  <dd>
                    <a href="/compliance/iso/">ISO</a>
                  </dd>
                  <dd>
                    <a href="/compliance/policy/#compliance">
                      コンプライアンス
                    </a>
                  </dd>
                  <dd>
                    <a href="/compliance/policy/">個人情報保護方針</a>
                  </dd>
                  <dd>
                    <a href="/compliance/sdgs/">SDGs</a>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <a href="/business/">事業紹介</a>
                  </dt>
                  <dd>
                    <a href="/business/collect/">タイヤ回収業務</a>
                  </dd>
                  <dd>
                    <a href="/business/recycle/">タイヤリサイクル</a>
                  </dd>
                  <dd>
                    <a href="/business/casingtire/">リトレッド用台タイヤ</a>
                  </dd>
                  <dd>
                    <a href="/business/boueki/">貿易事業</a>
                  </dd>
                  <dd>
                    <a href="/business/tire/">
                      法人向けタイヤサポートメンテナンス事業
                    </a>
                  </dd>
                  <dd>
                    <a href="/business/marque/">
                      ショップ事業（小売店「マーク」）
                    </a>
                  </dd>
                  <dd>
                    <a href="/business/green/">緑化事業</a>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <a href="/annai/">事業拠点</a>
                  </dt>
                  <dd>
                    <a href="/annai/#corp01">本社</a>
                  </dd>
                  <dd>
                    <a href="/annai/#corp02">支店</a>
                  </dd>
                  <dd>
                    <a href="/annai/#corp03">タイヤサポートセンター</a>
                  </dd>
                  <dd>
                    <a href="/annai/#corp04">工場</a>
                  </dd>
                  <dd>
                    <a href="/annai/#corp05">小売店</a>
                  </dd>
                  <dd>
                    <a href="/annai/#corp06">グループ会社</a>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <a href="/customer/">お客様の声</a>
                  </dt>
                </dl>
                <dl>
                  <dt>
                    <a href="/recruit/">採用情報</a>
                  </dt>
                </dl>
              </div>
            </div>
            <div class="bnr">
              <div class="contentInner">
                <ul>
                  <li>
                    <div class="logo">
                      <a href="https://musashibears.com/" target="_blank">
                        <img src={bnr_musashi} alt="" />
                      </a>
                      <span class="t11 white">
                        株式会社国分商会は
                        <br />
                        武蔵ヒートベアーズの
                        <br />
                        オフィシャルスポンサーです。
                      </span>
                    </div>
                  </li>
                  <li>
                    <a href="http://www.j-sra.jp/" target="_blank">
                      <img src={bnr_jsa} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="contentInner">
              <p class="compNum">法人番号　9030001085533</p>
            </div>
            <p class="copyright">
              ©Kokubu Shokai Co., Ltd. All rights reserved.
            </p>
          </div>
          <div class="footer02" href="wrap"></div>
        </div>
      </div>
      <script
        type="text/javascript"
        src="https://www.kkb-tire.co.jp/wp/wp-includes/js/wp-embed.min.js?ver=4.9.1"
      ></script>
    </div>
  );
};
export default Footer;
