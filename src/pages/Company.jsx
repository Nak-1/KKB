import React from "react";
import img from "../assets/pic_company.png";

import "../css/style.css"
import "../css/jquery.css"

const Company = () => {
  return (
    <div>
      <div id="wrap">
        <div id="mainContent">
          <section>
            <div id="titleImg">
              <div class="inner">
                <h1>
                  <span>会社情報</span>
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
                    <li>会社情報</li>
                  </ul>
                </ul>
              </div>
            </div>
            <div id="greeting" class="contentInner sectionSpace">
              <h2 class="titleStyle01">ごあいさつ</h2>
              <div class="boxStyle01">
                <div class="img">
                  <img src={img} alt="" />
                </div>
                <div class="txt">
                  <p>
                    地球規模となってしまった今日の環境問題に対し、わたしたちは小さな改善をあきらめません。タイヤの適正処理、リサイクルを通じてこれまで以上に環境問題について真剣に考え、全社一丸となって向き合って参ります。弊社グループ全体の環境保全活動としては、環境に配慮したリサイクル製品の開発やサービスの研究を進めて行く中で、将来の食料確保に向けた農作物の生産、CO2吸収による二酸化炭素削減効果が期待できる天然芝栽培をグループ会社の農業法人（株）国分グリーンファームが手掛けており、未来へ繋ぐ次世代の生活環境を常に意識しながら明日への対話をしています。これからも循環型リサイクルモデルを提案し続け、先ずは地域で、そして社会で実践、貢献して参る所存です。
                  </p>
                  　<p class="tar">代表取締役　池田正信</p>
                </div>
              </div>
            </div>
            <div id="philosophy" class="contentInnerS sectionSpace">
              <h2 class="titleStyle01">企業理念</h2>
              <ul class="listStyle11">
                <li>
                  1.人間として、商人として、の「人づくり企業」で社会に貢献する
                </li>
                <li>2.地域の環境保全を通じて社会に貢献する</li>
                <li>3.顧客の満足を通じて社会に貢献する</li>
              </ul>
            </div>
            <div id="infomation" class="contentInnerS sectionSpace">
              <h2 class="titleStyle01">会社概要</h2>
              <div class="listStyle07">
                <dl>
                  <dt>会社名</dt>
                  <dd>株式会社 国分商会（Kokubu Shokai Co., Ltd.）</dd>
                </dl>
                <dl>
                  <dt>法人番号</dt>
                  <dd>9030001085533</dd>
                </dl>
                <dl>
                  <dt>適格請求書発行事業者登録番号</dt>
                  <dd>T9-0300-0108-5533</dd>
                </dl>
                <dl>
                  <dt>創業</dt>
                  <dd>昭和51年（1976年）10月</dd>
                </dl>
                <dl>
                  <dt>会社設立</dt>
                  <dd>昭和54年(1979年)12月1日</dd>
                </dl>
                <dl>
                  <dt>資本金</dt>
                  <dd>4,995万円</dd>
                </dl>
                <dl>
                  <dt>決算期</dt>
                  <dd>11月30日</dd>
                </dl>
                <dl>
                  <dt>代表者</dt>
                  <dd>代表取締役　池田　正信</dd>
                </dl>
                <dl>
                  <dt>本社所在地</dt>
                  <dd>〒360-0161　埼玉県熊谷市万吉2643番地1</dd>
                </dl>
                <dl>
                  <dt>事業内容</dt>
                  <dd>
                    ・産業廃棄物の収集運搬及び処分業
                    <br />
                    ・リサイクルゴム原料の製造販売
                    <br />
                    ・各種タイヤ及び車輌
                    <br />
                    ・車輌エンジン部品等の仕入れ販売並びに輸出入業務
                    <br />
                    ・古物品の輸出入及び販売
                  </dd>
                </dl>
                <dl>
                  <dt>従業員数</dt>
                  <dd>150名</dd>
                </dl>
                <dl>
                  <dt>取引銀行</dt>
                  <dd>
                    みずほ銀行、埼玉りそな銀行、熊谷商工信用組合、三菱UFJ銀行、三井住友銀行
                  </dd>
                </dl>
              </div>
            </div>
            <div class="boxStyle08 sectionSpace">
              <div class="contentInner">
                <h2 class="titleStyle01">組織図</h2>
                <p class="date">2022/12/01</p>
                <div class="figure center pc">
                  <img
                    src="https://www.kkb-tire.co.jp/wp/wp-content/uploads/7355cdf2b841e92b9fa6f273aca50ae1-1.png"
                    alt=""
                  />
                </div>
                <div class="figure center sp">
                  <div class="zoomBox">
                    <a
                      href="https://www.kkb-tire.co.jp/wp/wp-content/uploads/7355cdf2b841e92b9fa6f273aca50ae1-1.png"
                      class="lightbox"
                    >
                      <img
                        src="https://www.kkb-tire.co.jp/wp/wp-content/uploads/7355cdf2b841e92b9fa6f273aca50ae1-1.png"
                        alt=""
                      />
                      <p class="zoom">クリックして拡大する</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="history" class="contentInnerS sectionSpace">
              <h2 class="titleStyle01">沿革</h2>
              <div class="boxStyle02">
                <div class="listStyle02">
                  <dl>
                    <dt>令和5年9月</dt>
                    <dd>マーク千歳を北海道支店敷地内に開業</dd>
                  </dl>
                  <dl>
                    <dt>令和 3年6月</dt>
                    <dd>池田 正信　(株)国分商会 代表取締役に就任</dd>
                  </dl>
                  <dl>
                    <dt>平成30年</dt>
                    <dd>株式会社 グローバル・マンパワー 設立</dd>
                  </dl>
                  <dl>
                    <dt>平成29年</dt>
                    <dd>株式移転により、親会社となる株式会社KKB設立</dd>
                  </dl>
                  <dl>
                    <dt>平成27年5月</dt>
                    <dd>岩手県八幡平市に岩手出張所を開設</dd>
                  </dl>
                  <dl>
                    <dt>平成26年9月</dt>
                    <dd>北海道支店 敷地を拡充</dd>
                  </dl>
                  <dl>
                    <dt>平成26年</dt>
                    <dd>
                      北海道千歳市に北海道工場完成
                      <br />
                      トラックセンター「マーク」を熊谷市内に開設
                    </dd>
                  </dl>
                  <dl>
                    <dt>平成25年</dt>
                    <dd>
                      宮城県柴田町に東北工場完成
                      <br />
                      北海道千歳市に北海道支店開業
                    </dd>
                  </dl>
                  <dl>
                    <dt>平成24年10月</dt>
                    <dd>宮城県柴田町に東北支店開業</dd>
                  </dl>
                  <dl>
                    <dt>平成24年</dt>
                    <dd>
                      埼玉県産業廃棄物収集運搬業及び処分業優良産廃処理業者　認定
                    </dd>
                  </dl>
                  <dl>
                    <dt>平成21年</dt>
                    <dd>農業法人㈱国分グリーンファームを設立</dd>
                  </dl>
                  <dl>
                    <dt>平成20年</dt>
                    <dd>
                      資本金を4,995万円に増資
                      <br />
                      埼玉県産業廃棄物収集運搬業及び処分業優良性の判断に係る評価基準　適合
                    </dd>
                  </dl>
                  <dl>
                    <dt>平成19年</dt>
                    <dd>第二工場完成。稼働開始</dd>
                  </dl>
                  <dl>
                    <dt>平成17年</dt>
                    <dd>産業廃棄物処理施設設置許可取得</dd>
                  </dl>
                  <dl>
                    <dt>平成16年</dt>
                    <dd>
                      「ISO14001:1996」「JIS14001:1996」認証取得
                      <br />
                      「マーク」鶴ヶ島店 事業拡大に伴い圏央鶴ヶ島IC隣に移転
                    </dd>
                  </dl>
                  <dl>
                    <dt>平成14年</dt>
                    <dd>東京事務所を新橋に開設</dd>
                  </dl>
                  <dl>
                    <dt>平成13年</dt>
                    <dd>株式会社に改組</dd>
                  </dl>
                  <dl>
                    <dt>平成10年</dt>
                    <dd>
                      (株)タイヤリサイクル北海道　開設に伴い資本参加及び業務提携
                    </dd>
                  </dl>
                  <dl>
                    <dt>平成8年</dt>
                    <dd>資本金を3,200万円に増資</dd>
                  </dl>
                  <dl>
                    <dt>平成6年</dt>
                    <dd>古物許可証取得</dd>
                  </dl>
                  <dl>
                    <dt>平成4年</dt>
                    <dd>
                      タイヤショップ「マーク」熊谷店を業務拡大に伴い国道17号沿いに移転
                    </dd>
                  </dl>
                  <dl>
                    <dt>平成2年</dt>
                    <dd>資本金を2,000万円に増資</dd>
                  </dl>
                  <dl>
                    <dt>昭和63年</dt>
                    <dd>資本金を1,000万円に増資</dd>
                  </dl>
                  <dl>
                    <dt>昭和62年</dt>
                    <dd>タイヤショップ「マーク」熊谷店を本社内に開設</dd>
                  </dl>
                  <dl>
                    <dt>昭和61年</dt>
                    <dd>小売部門タイヤショップ「マーク」鶴ヶ島店をオープン</dd>
                  </dl>
                  <dl>
                    <dt>昭和59年</dt>
                    <dd>
                      本社営業部内に貿易課を設置。世界20数カ国に直接貿易業務を開始
                    </dd>
                  </dl>
                  <dl>
                    <dt>昭和56年</dt>
                    <dd>再生タイヤ原材料、及び中古タイヤの輸出業務を開始</dd>
                  </dl>
                  <dl>
                    <dt>昭和55年</dt>
                    <dd>
                      タイヤ切断工場を本社工場内に設置、併せて機械設備を拡充
                    </dd>
                  </dl>
                  <dl>
                    <dt>昭和54年</dt>
                    <dd>
                      セメント生産用燃料としての廃タイヤを、株式会社ブリヂストンと日本セメントの三社契約により、納入開始。有限会社に改組
                    </dd>
                  </dl>
                  <dl>
                    <dt>昭和51年</dt>
                    <dd>
                      創業者　國分　勇
                      使用済みタイヤの収集・運搬、中間処分を目的とした国分商会を開業
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Company;
