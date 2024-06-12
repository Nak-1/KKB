import React from "react";
import img from "../assets/pic_company.png"

const Annai = () => {
  return (
    <body>
      <div id="wrap">
        <div id="mainContent">
          <section>
            <div id="titleImg">
              <div class="inner">
                <h1>
                  <span>事業拠点</span>
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
                    <li>事業拠点</li>
                  </ul>
                </ul>
              </div>
            </div>
            <div class="contentInnerS sectionSpace" id="corp01">
              <div class="boxStyle01">
                <p class="ttl">
                  <span>本社</span>
                </p>
                <div class="img office">
                  <img src={img} alt="" />
                </div>
                <div class="txt">
                  <p>
                    〒360-0161 埼玉県熊谷市万吉2643-1
                    <br />
                    TEL.048-536-1564
                    <br />
                    FAX.048-536-3019
                    <br />
                    営業時間：8:30～17:45
                    <br />
                    定休日：日・祝日（土曜 不定休）
                  </p>
                  <div class="btnStyle01 fl">
                    <a
                      href="https://www.kkb-tire.co.jp/wp/wp-content/uploads/2024_honsha.pdf"
                      target="_blank"
                    >
                      営業日カレンダーを見る
                    </a>
                  </div>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.5266180178496!2d139.37108531527105!3d36.12938898009223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f29e7992ec3b9%3A0x509da5e10b5384b5!2zS09LVUJVIFNIT0tBSSBDTy4sTFRELiDvvIjmoKrvvInlm73liIbllYbkvJo!5e0!3m2!1sja!2sjp!4v1512530100237"
                width="100%"
                height="300"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen
              ></iframe>
              <div class="btnStyle01 fr">
                <a
                  href="https://www.google.com/maps/d/viewer?ll=36.12901905118116%2C139.37341466137696&z=17&mid=1o08kQedu3M_BwLF0WkCCNjVTpCw"
                  target="_blank"
                >
                  地図アプリで見る
                </a>
              </div>
            </div>
            <div class="contentInnerS sectionSpace" id="corp02">
              <div class="boxStyle01">
                <p class="ttl">
                  <span>支店</span>
                </p>
                <p class="subttl">
                  <span>-東京支店</span>
                </p>
                <div class="img office">
                  <img src={img} alt="" />
                </div>
                <div class="txt">
                  <p>
                    〒105-0004
                    <br />
                    東京都港区新橋3丁目7-4 赤レンガ通りビル６F
                    <br />
                    TEL. 03-5532-1313
                    <br />
                    FAX. 03-3500-5234
                    <br />
                    営業時間：9:00～18:00
                    <br />
                    定休日：土日・祝日
                  </p>
                  <div class="btnStyle01 fl">
                    <a
                      href="https://www.google.com/maps/d/viewer?ll=35.66556%2C139.75502000000006&z=17&mid=1o08kQedu3M_BwLF0WkCCNjVTpCw"
                      target="_blank"
                    >
                      地図アプリで見る
                    </a>
                  </div>
                </div>
              </div>
              <div class="boxStyle01">
                <p class="subttl">
                  <span>-東北支店</span>
                </p>
                <div class="img office">
                  <img src={img} alt="" />
                  <div class="txt">
                    <p>
                      〒989-1606
                      <br />
                      宮城県柴田郡柴田町大字船岡字大森1-17
                      <br />
                      TEL. 0224-55-3939
                      <br />
                      FAX. 0224-86-4817
                      <br />
                      営業時間：8:00～17:15
                      <br />
                      定休日：日・祝日（土曜日 不定休）
                    </p>
                    <div class="btnStyle01 tal mb10">
                      <a
                        href="https://www.google.com/maps/d/viewer?ll=38.04258599999999%2C140.76163700000006&z=17&mid=1o08kQedu3M_BwLF0WkCCNjVTpCw"
                        target="_blank"
                      >
                        地図アプリで見る
                      </a>
                    </div>
                    <div class="btnStyle01 tal">
                      <a
                        href="https://www.kkb-tire.co.jp/wp/wp-content/uploads/2024_touhoku.pdf"
                        target="_blank"
                      >
                        営業日カレンダーを見る
                      </a>
                    </div>
                  </div>
                </div>
                <div class="boxStyle01">
                  <p class="subttl">
                    <span>-岩手出張所</span>
                  </p>
                  <div class="img office">
                    <img src={img} alt="" />
                  </div>
                  <div class="txt">
                    <p>
                      〒028-7111
                      <br />
                      岩手県八幡平市大更第35地割63番39
                      <br />
                      TEL. 0195-68-7720
                      <br />
                      FAX. 0195-68-7721
                      <br />
                      営業時間：8:00～17:15
                      <br />
                      定休日：日・祝日（土曜日 不定休）
                    </p>
                    <div class="btnStyle01 fl">
                      <a
                        href="https://www.google.co.jp/maps/place/%E3%80%92028-7111+%E5%B2%A9%E6%89%8B%E7%9C%8C%E5%85%AB%E5%B9%A1%E5%B9%B3%E5%B8%82%E5%A4%A7%E6%9B%B4%E7%AC%AC%EF%BC%93%EF%BC%95%E5%9C%B0%E5%89%B2%EF%BC%96%EF%BC%93/@39.9256156,141.0937745,17z/data=!3m1!4b1!4m5!3m4!1s0x5f85143e95b0f2d7:0x9170f6e7c48ce9be!8m2!3d39.9256115!4d141.0959632"
                        target="_blank"
                      >
                        地図アプリで見る
                      </a>
                    </div>
                  </div>
                </div>
                <div class="boxStyle01">
                  <p class="subttl">
                    <span>-北海道支店</span>
                  </p>
                  <div class="img office">
                    <img src={img} alt="" />
                  </div>
                  <div class="txt">
                    <p>
                      〒066-0077
                      <br />
                      北海道千歳市上長都1034番地9
                      <br />
                      TEL. 0123-40-0001
                      <br />
                      FAX. 0123-40-0011
                      <br />
                      営業時間：8:00～17:15
                      <br />
                      定休日：日・祝日（土曜日 不定休）
                    </p>
                    <div class="btnStyle01 tal mb10">
                      <a
                        href="https://www.google.com/maps/d/viewer?ll=42.853790000000004%2C141.613523&z=17&mid=1o08kQedu3M_BwLF0WkCCNjVTpCw"
                        target="_blank"
                      >
                        地図アプリで見る
                      </a>
                    </div>
                    <div class="btnStyle01 tal">
                      <a
                        href="https://www.kkb-tire.co.jp/wp/wp-content/uploads/2024_hokkaido.pdf"
                        target="_blank"
                      >
                        営業日カレンダーを見る
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="contentInnerS sectionSpace" id="corp03">
                <p class="titleStyle03">
                  <span>タイヤサポートセンター</span>
                </p>
                <p class="titleStyle04">
                  <span>三芳営業所</span>
                </p>
                <div class="boxStyle01">
                  <div class="img office">
                    <img src={img} alt="" />
                  </div>
                  <div class="txt">
                    <p>
                      埼玉県三芳町（関越道所沢I.Cより車で15分）
                      <br />
                      営業時間：9:00～18:00
                      <br />
                      定休日：日・祝日（土曜日 不定休）
                    </p>
                  </div>
                </div>
                <p class="titleStyle04">
                  <span>岩槻営業所</span>
                </p>
                <div class="boxStyle01">
                  <div class="img office">
                    <img src={img} alt="" />
                  </div>
                  <div class="txt">
                    <p>
                      埼玉県さいたま市（東北道岩槻I.Cより車で2分）
                      <br />
                      営業時間：9:00～18:00
                      <br />
                      定休日：日・祝日（土曜日 不定休）
                    </p>
                  </div>
                </div>
                <p class="titleStyle04">
                  <span>千代田営業所</span>
                </p>
                <div class="boxStyle01">
                  <div class="img office">
                    <img src={img} alt="" />
                  </div>
                  <div class="txt">
                    <p>
                      群馬県邑楽郡千代田町（東北道館林インターより車で30分）
                      <br />
                      営業時間：9:00～18:00
                      <br />
                      定休日：日・祝日（土曜日 不定休）
                    </p>
                  </div>
                </div>
              </div>
              <p class="titleStyle04">
                <span>春日部営業所</span>
              </p>
              <div class="boxStyle01">
                <div class="img office">
                  <img
                    src="https://www.kkb-tire.co.jp/wp/wp-content/uploads/085783f3f6311269a7f374fe6211aa10.jpg"
                    alt=""
                  />
                </div>
                <div class="txt">
                  <p>
                    埼玉県春日部市（東京外環自動車道草加インターより車で約30分）
                    <br />
                    営業時間：9:00～18:00
                    <br />
                    定休日：日・祝日（土曜日 不定休）
                  </p>
                </div>
              </div>

              <div class="boxStyle01">
                <div class="img office"></div>
                <div class="txt"></div>
              </div>
            </div>
            <div class="contentInnerS sectionSpace" id="corp04">
              <div class="boxStyle01">
                <p class="ttl">
                  <span>工場</span>
                </p>
                <p class="subttl">
                  <span>-本社工場</span>
                </p>
                <div class="img office">
                  <img src={img} alt="" />
                </div>
                <div class="txt">
                  <p>
                    〒360-0161
                    <br />
                    埼玉県熊谷市万吉2643-1
                  </p>
                  <div class="btnStyle01 fl">
                    <a
                      href="https://goo.gl/maps/qiQAYiXUGgprR86A6"
                      target="_blank"
                    >
                      地図アプリで見る
                    </a>
                  </div>
                </div>
              </div>
              <div class="boxStyle01">
                <p class="subttl">
                  <span>-第二工場</span>
                </p>
                <div class="img office">
                  <img src={img} alt="" />
                </div>
                <div class="txt">
                  <p>
                    〒360-0161
                    <br />
                    埼玉県熊谷市万吉3714-4
                  </p>
                  <div class="btnStyle01 fl">
                    <a
                      href="https://goo.gl/maps/ofF3oMUF5C4RbWKT9"
                      target="_blank"
                    >
                      地図アプリで見る
                    </a>
                  </div>
                </div>
              </div>
              <div class="boxStyle01">
                <p class="subttl">
                  <span>-東北工場</span>
                </p>
                <div class="img office">
                  <img src={img} alt="" />
                </div>
                <div class="txt">
                  <p>
                    〒989-1606
                    <br />
                    宮城県柴田郡柴田町大字船岡字山田1番35
                  </p>
                  <div class="btnStyle01 fl">
                    <a
                      href="https://goo.gl/maps/L3zm2KyjNzGMHKyc6"
                      target="_blank"
                    >
                      地図アプリで見る
                    </a>
                  </div>
                </div>
              </div>
              <div class="boxStyle01">
                <p class="subttl">
                  <span>-北海道工場</span>
                </p>
                <div class="img office">
                  <img src={img} alt="" />
                </div>
                <div class="txt">
                  <p>
                    〒066-0077
                    <br />
                    北海道千歳市長都1034番地9
                  </p>
                  <div class="btnStyle01 fl">
                    <a
                      href="https://goo.gl/maps/EDmFmaeDS5dWgZFH9"
                      target="_blank"
                    >
                      地図アプリで見る
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInnerS sectionSpace" id="corp05">
              <p class="titleStyle03">
                <span>小売店</span>
              </p>
              <p class="titleStyle04">
                <span>タイヤショップマーク熊谷店</span>
              </p>
              <div class="boxStyle01">
                <div class="img office">
                  <img src={img} alt="" />
                </div>
                <div class="txt">
                  <p>
                    〒360-0853
                    <br />
                    埼玉県熊谷市大字玉井7-7
                    <br />
                    TEL.048-526-5687
                    <br />
                    FAX. 048-525-2389
                    <br />
                    営業時間
                    <br />
                    平日：午前10時00分～午後7時00分
                    <br />
                    日祝祭日：午前10時00分～午後6時00分
                    <br />
                    ※11月・12月の日祝祭日については午後7時00分まで営業します。
                    <br />
                    定休日：水曜日
                  </p>
                  <div class="btnStyle01 fl">
                    <a
                      href="https://www.google.co.jp/maps/place/%E3%80%92360-0853+%E5%9F%BC%E7%8E%89%E7%9C%8C%E7%86%8A%E8%B0%B7%E5%B8%82%E7%8E%89%E4%BA%95%EF%BC%97%E2%88%92%EF%BC%97/@36.166689,139.3536568,17z/data=!3m1!4b1!4m5!3m4!1s0x601ed7e577437703:0xbc589dc85f3853c5!8m2!3d36.1666847!4d139.3558455"
                      target="_blank"
                    >
                      地図アプリで見る
                    </a>
                  </div>
                  　　　　　　　　　　　　　　
                  <div class="btnStyle01 fl">
                    <a href="http://www.ts-marque.jp/" target="_blank">
                      ホームページリンク
                    </a>
                  </div>
                  　
                </div>
                　　{" "}
              </div>
              <p class="titleStyle04">
                <span>オートショップマーク鶴ヶ島店</span>
              </p>
              <div class="boxStyle01">
                <div class="img office">
                  <img src={img} alt="" />
                </div>
                <div class="txt">
                  <p>
                    〒350-2218
                    <br />
                    埼玉県鶴ヶ島市柳戸町7-6
                    <br />
                    TEL. 049-272-5656
                    <br />
                    FAX. 049-272-5513
                    <br />
                    営業時間
                    <br />
                    平日：午前10時00分～午後7時00分
                    <br />
                    日祝祭日：午前10時00分～午後6時00分
                    <br />
                    ※11月・12月の日祝祭日については午後7時00分まで営業します。
                    <br />
                    定休日：水曜日
                  </p>
                  <div class="btnStyle01 fl">
                    <a
                      href="https://www.google.co.jp/maps/place/%E3%80%92350-2218+%E5%9F%BC%E7%8E%89%E7%9C%8C%E9%B6%B4%E3%83%B6%E5%B3%B6%E5%B8%82%E6%9F%B3%E6%88%B8%E7%94%BA%EF%BC%97%E2%88%92%EF%BC%96/@35.9236132,139.3923501,17z/data=!3m1!4b1!4m5!3m4!1s0x6018d7bcc028669f:0x337028e5706ff4d3!8m2!3d35.9236089!4d139.3945388"
                      target="_blank"
                    >
                      地図アプリで見る
                    </a>
                  </div>
                </div>
              </div>
              <p class="titleStyle04">
                <span>トラックタイヤセンター・マーク</span>
              </p>
              <div class="boxStyle01">
                <div class="img office">
                  <img src={img} alt="" />
                </div>
                <div class="txt">
                  <p>
                    〒360-0161
                    <br />
                    埼玉県熊谷市万吉2593-3
                    <br />
                    TEL. 048-577-7665
                    <br />
                    FAX. 048-598-4485
                    <br />
                    営業時間：8:00～18:00
                    <br />
                    定休日：日・祝日
                  </p>
                  <div class="btnStyle01 fl">
                    <a
                      href="https://www.google.com/maps/d/viewer?ll=36.128445%2C139.37567&#038;z=17&#038;mid=1o08kQedu3M_BwLF0WkCCNjVTpCw"
                      target="_blank"
                    >
                      地図アプリで見る
                    </a>
                  </div>
                </div>
              </div>
              <p class="titleStyle04">
                <span>マーク千歳</span>
              </p>
              <div class="boxStyle01">
                <div class="img office">
                  <img
                    src="https://www.kkb-tire.co.jp/wp/wp-content/uploads/kokubu_IMG_4087_Original_.jpg"
                    alt=""
                  />
                </div>
                <div class="txt">
                  <p>
                    〒066-0077
                    <br />
                    北海道千歳市上長都1034番地9 株式会社国分商会 北海道支店内
                    <br />
                    TEL. 0123-25-6002
                    <br />
                    FAX. 0123-25-6021
                    <br />
                    営業時間：8:00～18:00
                    <br />
                    定休日：日
                  </p>
                  <div class="btnStyle01 fl">
                    <a
                      href="https://goo.gl/maps/EDmFmaeDS5dWgZFH9"
                      target="_blank"
                    >
                      地図アプリで見る
                    </a>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div class="contentInnerS sectionSpace" id="corp06">
              <p class="titleStyle03">
                <span>グループ会社</span>
              </p>
              <p class="titleStyle04">
                <span>株式会社KKB</span>
              </p>
              <div class="boxStyle01">
                <div class="img office">
                  <img src={img} alt="" />
                </div>
                <div class="txt">
                  <p>
                    〒360-0161
                    <br />
                    埼玉県熊谷市万吉2710
                    <br />
                    TEL. 048-579-5600
                    <br />
                    FAX. 048-579-5602
                    <br />
                    営業時間：8:30～17:45
                    <br />
                    定休日：日・祝日（土曜不定休）
                  </p>
                  <div class="btnStyle01 fl">
                    <a
                      href="https://www.google.com/maps/d/viewer?ll=36.129194000000034%2C139.37143700000001&#038;z=17&#038;mid=1o08kQedu3M_BwLF0WkCCNjVTpCw"
                      target="_blank"
                    >
                      地図アプリで見る
                    </a>
                  </div>
                </div>
              </div>
              <p class="titleStyle04">
                <span>
                  農地所有適格法人
                  <br />
                  &nbsp;株式会社国分グリーンファーム
                </span>
              </p>
              <div class="boxStyle01">
                <div class="img office">
                  <img src={img} alt="" />
                </div>
                <div class="txt">
                  <p>
                    〒360-0161
                    <br />
                    埼玉県熊谷市万吉2710
                    <br />
                    TEL. 048-536-7777
                    <br />
                    FAX. 048-536-8778
                    <br />
                    営業時間：9:00～17:00
                    <br />
                    定休日：土日祝日
                  </p>
                  <div class="btnStyle01 fl">
                    <a
                      href="https://www.google.com/maps/d/viewer?ll=36.129194000000034%2C139.37143700000001&#038;z=17&#038;mid=1o08kQedu3M_BwLF0WkCCNjVTpCw"
                      target="_blank"
                    >
                      地図アプリで見る
                    </a>
                  </div>
                  <div class="btnStyle01 fl">
                    <a href="https://www.kkb-green.com/" target="_blank">
                      ホームページリンク
                    </a>
                  </div>
                </div>
              </div>

              <p class="titleStyle04">
                <span>株式会社グローバル・マンパワー</span>
              </p>
              <div class="boxStyle01">
                <div class="img office">
                  <img src={img} alt="" />
                </div>
                <div class="txt">
                  <p>
                    〒360-0161
                    <br />
                    埼玉県熊谷市万吉2710
                    <br />
                    TEL. 048-539-2200
                    <br />
                    FAX. 048-539-2201
                    <br />
                    営業時間：8:30～17:45
                    <br />
                    定休日：日・祝日（土曜不定休）
                  </p>
                  <div class="btnStyle01 fl">
                    <a
                      href="https://www.google.com/maps/d/viewer?ll=36.129194000000034%2C139.37143700000001&#038;z=17&#038;mid=1o08kQedu3M_BwLF0WkCCNjVTpCw"
                      target="_blank"
                    >
                      地図アプリで見る
                    </a>
                  </div>
                  <div class="btnStyle01 fl">
                    <a
                      href="https://www.globalmanpower.co.jp/index.html"
                      target="_blank"
                    >
                      ホームページリンク
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </body>
  );
};
export default Annai;
