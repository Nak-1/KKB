import React from "react";
import img3 from "../assets/homeimgs/bk_img13.png";
import img4 from "../assets/homeimgs/bk_img14.png";
import img5 from "../assets/homeimgs/bk_img15.png";

import "../css/style.css"
import "../css/jquery.css"

const Compliance = () => {
  return (
    <body>
      <div id="wrap">
        <div id="mainContent">
          <section>
            <div id="titleImg">
              <div class="inner">
                <h1>
                  <span>コンプライアンス</span>
                </h1>
              </div>
            </div>
            <div class="breadCramb">
              <div class="contentInner">
                <ul>
                  <ul>
                    <li>
                      <a href="https://www.kkb-tire.co.jp/">TOPページ</a>
                    </li>
                    <li>コンプライアンス</li>
                  </ul>
                </ul>
              </div>
            </div>
            <div class="lead contentInnerS">
              <p>
                コンプライアンスを徹底することは、私たちをパートナーとして選んでいただいたお客様の社会的信頼を守ることでもあります。国分商会のコンプライアンス・CSRへの取組みをご紹介します。
              </p>
            </div>
            <div class="contentInner sectionSpace">
              <ul class="listStyle01 compliance">
                <li class="clickBox">
                  <div class="img">
                    <img
                      src={img4}
                      alt=""
                    />
                  </div>
                  <div class="txt">
                    <h2>優良認定</h2>
                    <p>
                      東日本をカバーする産業廃棄物収集運搬及び処分許可証。通常よりも厳しい基準をクリアした企業だけに与えられる優良認定を多数の自治体より与えられています。
                    </p>
                    <div class="btn">
                      <a href="/compliance/certification/">詳細へ</a>
                    </div>
                  </div>
                </li>
                <li class="clickBox">
                  <div class="img">
                    <img
                      src={img3}
                      alt=""
                    />
                  </div>
                  <div class="txt">
                    <h2>ISO14001</h2>
                    <p>
                      地球にやさしい環境を目指し、全ての事業活動を通して環境保全に貢献するとともに、環境汚染の予防に全従業員で努めています。
                    </p>
                    <div class="btn">
                      <a href="/compliance/iso/">詳細へ</a>
                    </div>
                  </div>
                </li>
                <li class="clickBox">
                  <div class="img">
                    <img
                      src={img4}
                      alt=""
                    />
                  </div>
                  <div class="txt">
                    <h2>コンプライアンス・個人情報保護方針</h2>
                    <p>
                      経営者及び社員一人一人が社会人としての自覚と共に高い倫理観を持って行動するコンプライアンス精神の浸透に努め、信頼される企業を目指してまいります。
                    </p>
                    <div class="btn">
                      <a href="/compliance/policy/">詳細へ</a>
                    </div>
                  </div>
                </li>
                <li class="clickBox">
                  <div class="img">
                    <img
                      src={img5}
                      alt=""
                    />
                  </div>
                  <div class="txt">
                    <h2>SDGsの取り組み</h2>
                    <p>
                      当社は事業を通じ、より良い環境を次世代へ繋ぐ為、持続可能な開発目標（SDGs）の達成に貢献して参ります。
                    </p>
                    <div class="btn">
                      <a href="/compliance/sdgs/">詳細へ</a>
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
export default Compliance;