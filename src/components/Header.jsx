import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo1 from "../assets/logo.png";
import Logo2 from "../assets/logo_w.png";
import location1 from "../assets/icon_access.svg";
import locatoin2 from "../assets/iconmonstr-location-1.svg";

import "../css/style.css"
import "../css/jquery.css"

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const [menu, setMenu] = useState(false);
  const handle = () => {
    setMenu(!menu);
  };
  return (
    <div id="topPage">
      <div id="wrap">
        <header
          id="header"
          class="clearType"
          style={{
            backgroundColor: `${pathname === "/" ? "" : "white"}`,
          }}
        >
          <a href="/">
            <h1
              style={{
                width: "322px",
                height: "34px",
                backgroundImage: `url(${pathname === "/" ? Logo2 : Logo1})`,
              }}
            ></h1>
          </a>
          <nav id="gNavi">
            <ul>
              <li>
                <a
                  href="/company/"
                  style={{ color: `${pathname === "/" ? "white" : "black"}` }}
                >
                  会社情報
                </a>
                <ul class="accordion">
                  <li>
                    <a href="/company/">会社情報</a>
                  </li>
                  <li>
                    <a href="/company/#greeting">ごあいさつ</a>
                  </li>
                  <li>
                    <a href="/company/#philosophy">企業理念</a>
                  </li>
                  <li>
                    <a href="/company/#infomation">会社概要</a>
                  </li>
                  <li>
                    <a href="/company/#history">沿革</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="/annai/"
                  style={{ color: `${pathname === "/" ? "white" : "black"}` }}
                >
                  事業拠点
                </a>
                <ul class="accordion">
                  <li>
                    <a href="/annai/">事業拠点</a>
                  </li>
                  <li>
                    <a href="/annai/#corp01">本社</a>
                  </li>
                  <li>
                    <a href="/annai/#corp02">支店</a>
                  </li>
                  <li>
                    <a href="/annai/#corp03">タイヤサポートセンター</a>
                  </li>
                  <li>
                    <a href="/annai/#corp04">工場</a>
                  </li>
                  <li>
                    <a href="/annai/#corp05">小売店</a>
                  </li>
                  <li>
                    <a href="/annai/#corp06">グループ会社</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="/business/"
                  style={{ color: `${pathname === "/" ? "white" : "black"}` }}
                >
                  事業紹介
                </a>
                <ul class="accordion">
                  <li>
                    <a href="/business/">事業紹介</a>
                  </li>
                  <li>
                    <a href="/business/collect/">タイヤ回収業務</a>
                  </li>
                  <li>
                    <a href="/business/recycle/">タイヤリサイクル</a>
                  </li>
                  <li>
                    <a href="/business/casingtire/">リトレッド用台タイヤ</a>
                  </li>
                  <li>
                    <a href="/business/boueki/">貿易事業</a>
                  </li>
                  <li>
                    <a href="/business/tire/">
                      法人向けタイヤサポートメンテナンス事業
                    </a>
                  </li>
                  <li>
                    <a href="/business/marque/">
                      ショップ事業（小売店「マーク」）
                    </a>
                  </li>
                  <li>
                    <a href="/business/green/">緑化事業</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="/compliance/"
                  style={{ color: `${pathname === "/" ? "white" : "black"}` }}
                >
                  コンプライアンス
                </a>
                <ul class="accordion">
                  <li>
                    <a href="/compliance/">コンプライアンス</a>
                  </li>
                  <li>
                    <a href="/compliance/certification/">優良認定</a>
                  </li>
                  <li>
                    <a href="/compliance/iso/">ISO</a>
                  </li>
                  <li>
                    <a href="/compliance/policy/#compliance">
                      コンプライアンス
                    </a>
                  </li>
                  <li>
                    <a href="/compliance/policy/">個人情報保護方針</a>
                  </li>
                  <li>
                    <a href="/compliance/sdgs/">SDGs</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="/#area06"
                  class="scroll"
                  style={{ color: `${pathname === "/" ? "white" : "black"}` }}
                >
                  ニュースリリース
                </a>
              </li>
              <li>
                <a
                  href="/otoiawase/"
                  style={{ color: `${pathname === "/" ? "white" : "black"}` }}
                >
                  お問合せ
                </a>
              </li>
              <li>
                <a
                  href="/eng/"
                  style={{ color: `${pathname === "/" ? "white" : "black"}` }}
                >
                  English
                </a>
              </li>
            </ul>
            <div class="openClose" onClick={handle}>
              <span
                class="line"
                style={{
                  background: `url(${
                    pathname === "/" ? location1 : locatoin2
                  }) no-repeat center`,
                }}
              ></span>
              <span class="txt">
                <span class="sp">Menu</span>
                <span
                  class="pc"
                  style={{ color: `${pathname === "/" ? "white" : "black"}` }}
                >
                  アクセス
                </span>
              </span>
            </div>
            {/* {menu ? ( */}
              <div id="menu" class="fullHeight">
                <div class="inner">
                  <div class="closeBtn"></div>
                  <div class="sp">
                    <dl class="accordion">
                      <dt>会社情報</dt>
                      <dd>
                        <a href="/company/">会社情報</a>
                      </dd>
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
                    <dl class="accordion">
                      <dt>事業拠点</dt>
                      <dd>
                        <a href="/annai/">事業拠点</a>
                      </dd>
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
                    <dl class="accordion">
                      <dt>事業紹介</dt>
                      <dd>
                        <a href="/business/">事業紹介</a>
                      </dd>
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
                    <dl class="accordion">
                      <dt>コンプライアンス</dt>
                      <dd>
                        <a href="/compliance/">コンプライアンス</a>
                      </dd>
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
                    <ul>
                      <li>
                        <a href="#area06" class="scrollNoNav">
                          ニュースリリース
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="/otoiawase/">お問合せ</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="/eng/">English</a>
                      </li>
                    </ul>
                  </div>
                  <ul class="access">
                    <li>
                      <p class="ttl">本社</p>
                      <p>
                        〒360-0161
                        <br />
                        埼玉県熊谷市万吉2643-1
                      </p>
                      <p>
                        TEL.<span class="tel-link">048-536-1564</span>
                      </p>
                      <div class="btn" />
                      <a
                        href="https://www.google.com/maps/d/viewer?ll=36.12942200000002%2C139.373243&z=17&mid=1o08kQedu3M_BwLF0WkCCNjVTpCw"
                        target="_blank"
                        rel="noreferrer"
                      >
                        地図アプリで見る
                      </a>
                    </li>
                    <li>
                      <p class="ttl">東京支店</p>
                      <p>
                        〒105-0004
                        <br />
                        東京都港区新橋3丁目7-4 赤レンガ通りビル6F
                      </p>
                      <p>
                        TEL.<span class="tel-link">03-5532-1313</span>
                      </p>
                      <div class="btn" />
                      <a
                        href="https://www.google.com/maps/d/viewer?ll=35.66556000000002%2C139.75502000000006&z=17&mid=1o08kQedu3M_BwLF0WkCCNjVTpCw"
                        target="_blank"
                        rel="noreferrer"
                      >
                        地図アプリで見る
                      </a>
                    </li>
                    <li>
                      <p class="ttl">東北支店</p>
                      <p>
                        〒989-1606
                        <br />
                        宮城県柴田郡柴田町大字船岡字大森1-17
                      </p>
                      <p>
                        TEL.<span class="tel-link">0224-55-3939</span>
                      </p>
                      <div class="btn" />
                      <a
                        href="https://www.google.com/maps/d/viewer?ll=38.045328%2C140.76392800000008&z=17&mid=1o08kQedu3M_BwLF0WkCCNjVTpCw"
                        target="_blank"
                        rel="noreferrer"
                      >
                        地図アプリで見る
                      </a>
                    </li>
                    <li>
                      <p class="ttl">北海道支店</p>
                      <p>
                        〒066-0077
                        <br />
                        北海道千歳市上長都1034番地9
                      </p>
                      <p>
                        TEL.<span class="tel-link">0123-40-0001</span>
                      </p>
                      <div class="btn" />
                      <a
                        href="https://www.google.com/maps/d/viewer?ll=42.853789999999975%2C141.613523&z=17&mid=1o08kQedu3M_BwLF0WkCCNjVTpCw"
                        target="_blank"
                        rel="noreferrer"
                      >
                        地図アプリで見る
                      </a>
                    </li>
                    <li>
                      <p class="ttl">タイヤショップマーク熊谷店</p>
                      <p>
                        〒360-0853
                        <br />
                        埼玉県熊谷市大字玉井7-7
                      </p>
                      <p>
                        TEL.<span class="tel-link">048-526-5687</span>
                      </p>
                      <div class="btn" />
                      <a
                        href="https://www.google.co.jp/maps/place/%E3%80%92360-0853+%E5%9F%BC%E7%8E%89%E7%9C%8C%E7%86%8A%E8%B0%B7%E5%B8%82%E7%8E%89%E4%BA%95%EF%BC%97%E2%88%92%EF%BC%97/@36.1666847,139.3536568,17z/data=!3m1!4b1!4m5!3m4!1s0x601ed7e577437703:0xbc589dc85f3853c5!8m2!3d36.1666847!4d139.3558455?q=%E5%9F%BC%E7%8E%89%E7%9C%8C%E7%86%8A%E8%B0%B7%E5%B8%82%E5%A4%A7%E5%AD%97%E7%8E%89%E4%BA%957-7&um=1&ie=UTF-8&sa=X&ved=0ahUKEwj_zb-z6ODXAhWLoZQKHUmtBxYQ_AUICigB"
                        target="_blank"
                        rel="noreferrer"
                      >
                        地図アプリで見る
                      </a>
                    </li>
                    <li>
                      <p class="ttl">オートショップマーク鶴ヶ島店</p>
                      <p>
                        〒350-2218
                        <br />
                        埼玉県鶴ヶ島市柳戸町7-6
                      </p>
                      <p>
                        TEL.<span class="tel-link">049-272-5656</span>
                      </p>
                      <div class="btn" />
                      <a
                        href="https://www.google.co.jp/maps/place/%E3%80%92350-2218+%E5%9F%BC%E7%8E%89%E7%9C%8C%E9%B6%B4%E3%83%B6%E5%B3%B6%E5%B8%82%E6%9F%B3%E6%88%B8%E7%94%BA%EF%BC%97%E2%88%92%EF%BC%96/@35.9236132,139.3923501,17z/data=!3m1!4b1!4m5!3m4!1s0x6018d7bcc028669f:0x337028e5706ff4d3!8m2!3d35.9236089!4d139.3945388"
                        target="_blank"
                        rel="noreferrer"
                      >
                        地図アプリで見る
                      </a>
                    </li>
                    <li>
                      <p class="ttl">トラックタイヤセンター・マーク</p>
                      <p>
                        〒360-0161
                        <br />
                        埼玉県熊谷市万吉2593-3
                      </p>
                      <p>
                        TEL.<span class="tel-link">048-577-7665</span>
                      </p>
                      <div class="btn" />
                      <a
                        href="https://www.google.com/maps/d/viewer?ll=36.128445%2C139.3756699999999&z=17&mid=1o08kQedu3M_BwLF0WkCCNjVTpCw"
                        target="_blank"
                        rel="noreferrer"
                      >
                        地図アプリで見る
                      </a>
                    </li>
                    <li>
                      <div class="btn" />
                      <a href="/annai/">これ以外の拠点はこちら</a>
                    </li>
                  </ul>
                </div>
              </div>
            {/* ) : (
              ""
            )} */}
          </nav>
        </header>
      </div>
      <script
        type="text/javascript"
        src="https://www.kkb-tire.co.jp/wp/wp-includes/js/wp-embed.min.js?ver=4.9.1"
      ></script>
    </div>
  );
};
export default Header;
