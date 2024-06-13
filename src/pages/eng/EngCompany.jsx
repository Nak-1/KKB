import React, { useEffect } from "react";
import { useEnglish } from "../../context/EnglishContext";
import "../../css/sub.css";

const EngCompany = () => {
  const { setIsEnglishPage } = useEnglish();

  useEffect(() => {
    setIsEnglishPage(true);
    return () => setIsEnglishPage(false);
  }, [setIsEnglishPage]);

  return (
    <body id="company">
      <div id="wrap">
        <div id="mainContent">
          <article>
            <div class="ttlWrap">
              <h1>About Us</h1>
            </div>
            <div class="one_columnWrap">
              <div class="mainBlock">
                <div class="contBoxinner">
                  <h2>Our mission</h2>
                  <p class="caption">
                    We contribute to society through these important values:
                    <br />
                    Human Resource Development.
                    <br />
                    Environmental Preservation.
                    <br />
                    Customer’s Satisfaction.
                  </p>
                </div>
                <div class="contBoxinner">
                  <h2>Company Profile</h2>
                  <table class="tblType01 profTable">
                    <tr>
                      <th>Company name</th>
                      <td>Kokubu Shokai Co., Ltd.</td>
                    </tr>
                    <tr>
                      <th>Founded</th>
                      <td>October 1976</td>
                    </tr>
                    <tr>
                      <th>Established</th>
                      <td>December 1979</td>
                    </tr>
                    <tr>
                      <th>Capital</th>
                      <td>49.95 million Japanese yen</td>
                    </tr>
                    <tr>
                      <th>President Director</th>
                      <td>Masanobu Ikeda</td>
                    </tr>
                    <tr>
                      <th>Lines of business</th>
                      <td>
                        1. Processing of industrial waste <br />
                        2. Manufacture and sales of recycled rubber materials{" "}
                        <br />
                        3. Purchase, sales and export/import of automobile tires{" "}
                        <br />
                        4. Export and sales of used products
                      </td>
                    </tr>
                    <tr>
                      <th>Main banks</th>
                      <td>
                        Mizuho Bank Co. Ltd. <br />
                        Saitama Resona Bank, Ltd. <br />
                        Mitsubishi UFJ Bank, Ltd.
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="contBoxinner">
                  <h2>Access</h2>
                  <p>
                    JR Kumagaya Station south exit: approx.10 minutes by taxi{" "}
                    <br />
                    Kan-etsu Expressway: approx.13km north of Higashi-Matsuyama
                    IC <br />
                    Tohoku Expressway: approx. 25km west of Hanyu IC
                  </p>
                  <div id="map" class="mt30">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.526622123631!2d139.3710856152711!3d36.129388880092236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f29e7992ec3b9%3A0x509da5e10b5384b5!2z77yI5qCq77yJ5Zu95YiG5ZWG5Lya!5e0!3m2!1sja!2sjp!4v1460361274526"
                      width="1100"
                      height="400"
                      frameborder="0"
                      style={{ border: 0 }}
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div class="contBoxinner">
                  <h2>Headquarters &amp; Branch</h2>
                  <table class="tblType01 profTable">
                    <tr>
                      <th>Headquarters</th>
                      <td>
                        <div class="inCol">
                          2643-1 Magechi, Kumagaya, Saitama 360-0161 Japan
                          <br />
                          TEL.<a href="tel:048-536-1564">048-536-1564</a>{" "}
                          FAX.048-536-3019
                        </div>
                        <div class="inCol inLink">
                          <a
                            href="https://www.google.co.jp/maps/place/%E3%80%92360-0161+%E5%9F%BC%E7%8E%89%E7%9C%8C%E7%86%8A%E8%B0%B7%E5%B8%82%E4%B8%87%E5%90%89%EF%BC%92%EF%BC%96%EF%BC%94%EF%BC%93%E2%88%92%EF%BC%91/@36.1292306,139.3715828,17z/data=!3m1!4b1!4m5!3m4!1s0x601f29e7992eee3d:0x229d3aff79c63951!8m2!3d36.1292306!4d139.3737715"
                            target="_blank"
                            class="btnType01"
                          >
                            <span>MAP</span>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>Tokyo</th>
                      <td>
                        <div class="inCol">
                          Aka-Renga Dori Bldg 6F, 3-7-4 Shimbashi, Minato-ku,
                          Tokyo 105-0004 Japan
                          <br />
                          TEL. <a href="tel:03-5532-1313">03-5532-1313</a> FAX.
                          03-3500-5234
                        </div>
                        <div class="inCol inLink">
                          <a
                            href="https://www.google.co.jp/maps/place/%E3%80%92105-0004+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E6%96%B0%E6%A9%8B%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%97%E2%88%92%EF%BC%94/@35.665641,139.7528433,17z/data=!3m1!4b1!4m5!3m4!1s0x60188bebaa631ea7:0x83ea342f47500ad6!8m2!3d35.6656367!4d139.755032"
                            target="_blank"
                            class="btnType01"
                          >
                            <span>MAP</span>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>Tohoku</th>
                      <td>
                        <div class="inCol">
                          1-17 Omori, Funaoka, Shibata-machi Shibata-gun, Miyagi
                          989-1606 Japan
                          <br />
                          TEL. <a href="tel:0224-55-3939">0224-55-3939</a> FAX.
                          0224-86-4817
                        </div>
                        <div class="inCol inLink">
                          <a
                            href="https://www.google.co.jp/maps/place/%E3%80%92989-1606+%E5%AE%AE%E5%9F%8E%E7%9C%8C%E6%9F%B4%E7%94%B0%E9%83%A1%E6%9F%B4%E7%94%B0%E7%94%BA%E8%88%B9%E5%B2%A1%E5%A4%A7%E6%A3%AE%EF%BC%91/@38.0458749,140.7631045,17z/data=!3m1!4b1!4m5!3m4!1s0x5f8a158191b2a86d:0xd2d769fa150dd8e9!8m2!3d38.0458749!4d140.7652932?q=1-17+Omori,+Funaoka,+Shibata-machi+Shibata-gun,+Miyagi+989-1606+Japan&#038;um=1&#038;ie=UTF-8&#038;sa=X&#038;ved=0ahUKEwiFi4-wuejXAhXMJ5QKHTzzC_MQ_AUICigB"
                            target="_blank"
                            class="btnType01"
                          >
                            <span>MAP</span>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>Iwate Branch Office</th>
                      <td>
                        <div class="inCol">
                          35-63-39, Obuke, Hachimantai, Iwate 028-7111
                          <br />
                          /TEL. <a href="tel:0195-68-7720">0195-68-7720</a> FAX.
                          0195-68-7721
                        </div>
                        <div class="inCol inLink">
                          <a
                            href="https://www.google.co.jp/maps/place/%E3%80%92028-7111+%E5%B2%A9%E6%89%8B%E7%9C%8C%E5%85%AB%E5%B9%A1%E5%B9%B3%E5%B8%82%E5%A4%A7%E6%9B%B4%E7%AC%AC%EF%BC%93%EF%BC%95%E5%9C%B0%E5%89%B2%EF%BC%96%EF%BC%93/@39.9256115,141.0937745,17z/data=!3m1!4b1!4m5!3m4!1s0x5f85143e95b0f2d7:0x9170f6e7c48ce9be!8m2!3d39.9256115!4d141.0959632?q=35-63-39,+Obuke,+Hachimantai,+Iwate+028-7111&#038;um=1&#038;ie=UTF-8&#038;sa=X&#038;ved=0ahUKEwjO7d3OuejXAhVEHZQKHdUqAzIQ_AUICigB"
                            target="_blank"
                            class="btnType01"
                          >
                            <span>MAP</span>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>Hokkaido</th>
                      <td>
                        <div class="inCol">
                          1034-9, Kami-Osatsu, Chitose, Hokkaido 066-0077 Japan
                          <br />
                          TEL. <a href="tel:0123-40-0001">0123-40-0001</a> FAX.
                          0123-40-0011
                        </div>
                        <div class="inCol inLink">
                          <a
                            href="https://www.google.co.jp/maps/place/%E3%80%92066-0077+%E5%8C%97%E6%B5%B7%E9%81%93%E5%8D%83%E6%AD%B3%E5%B8%82%E4%B8%8A%E9%95%B7%E9%83%BD%EF%BC%91%EF%BC%90%EF%BC%93%EF%BC%94%E2%88%92%EF%BC%99+%E5%9B%BD%E5%88%86%E5%95%86%E4%BC%9A%E5%8C%97%E6%B5%B7%E9%81%93%EF%BC%88%E6%94%AF%EF%BC%89/@42.853798,141.6113076,17z/data=!3m1!4b1!4m5!3m4!1s0x5f74d8826086aad9:0x600dc87076b1123e!8m2!3d42.8538018!4d141.6134533?q=1034-9,+Kami-Osatsu,+Chitose,+Hokkaido+066-0077+Japan&#038;um=1&#038;ie=UTF-8&#038;sa=X&#038;ved=0ahUKEwjM0JTxuejXAhVHmZQKHaPMB8cQ_AUICigB"
                            target="_blank"
                            class="btnType01"
                          >
                            <span>MAP</span>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="contBoxinner">
                  <h2>Retail Shop</h2>
                  <table class="tblType01 profTable">
                    <tr>
                      <th>Kumagaya Tire Shop MARQUE</th>
                      <td>
                        <div class="inCol">
                          7-7, Tamai, Kumagaya Saitama 360-0853 Japan
                          <br />
                          TEL.<a href="tel:048-526-5687">048-526-5687</a> FAX.
                          048-525-2389
                        </div>
                        <div class="inCol inLink">
                          <a
                            href="https://www.google.co.jp/maps/place/%E3%80%92360-0853+%E5%9F%BC%E7%8E%89%E7%9C%8C%E7%86%8A%E8%B0%B7%E5%B8%82%E7%8E%89%E4%BA%95%EF%BC%97%E2%88%92%EF%BC%97/@36.1666847,139.3536568,17z/data=!3m1!4b1!4m5!3m4!1s0x601ed7e577437703:0xbc589dc85f3853c5!8m2!3d36.1666847!4d139.3558455?q=7-7,+Tamai,+Kumagaya+Saitama&#038;um=1&#038;ie=UTF-8&#038;sa=X&#038;ved=0ahUKEwjunZPbuujXAhXKmpQKHV0tCTwQ_AUICigB"
                            target="_blank"
                            class="btnType01"
                          >
                            <span>MAP</span>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>Tsurugashima &#8211; Auto Shop MARQUE</th>
                      <td>
                        <div class="inCol">
                          7-6, Yanagido-cho, Tsurugashima, Saitama 350-2218
                          Japan
                          <br />
                          TEL. <a href="tel:049-272-5656">049-272-5656</a> FAX.
                          049-272-5513
                        </div>
                        <div class="inCol inLink">
                          <a
                            href="https://www.google.co.jp/maps/place/%E3%80%92350-2218+%E5%9F%BC%E7%8E%89%E7%9C%8C%E9%B6%B4%E3%83%B6%E5%B3%B6%E5%B8%82%E6%9F%B3%E6%88%B8%E7%94%BA%EF%BC%97%E2%88%92%EF%BC%96/@35.9236132,139.3923501,17z/data=!3m1!4b1!4m5!3m4!1s0x6018d7bcc028669f:0x337028e5706ff4d3!8m2!3d35.9236089!4d139.3945388"
                            target="_blank"
                            class="btnType01"
                          >
                            <span>MAP</span>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>Kumagaya &#8211; Truck Tire Center MARQUE</th>
                      <td>
                        <div class="inCol">
                          2593-3, Magechi, Kumagaya Saitama 360-0161 Japan
                          <br />
                          TEL. <a href="tel:048-577-7665">048-577-7665</a> FAX.
                          048-598-4485
                        </div>
                        <div class="inCol inLink">
                          <a
                            href="https://www.google.co.jp/maps/place/%E3%80%92360-0161+%E5%9F%BC%E7%8E%89%E7%9C%8C%E7%86%8A%E8%B0%B7%E5%B8%82%E4%B8%87%E5%90%89+%EF%BC%93%E5%8F%B7%E9%A4%A8/@36.1098499,139.3625082,17z/data=!3m1!4b1!4m5!3m4!1s0x601ed60022b409d5:0x192c0851263751c8!8m2!3d36.1098371!4d139.3647199"
                            target="_blank"
                            class="btnType01"
                          >
                            <span>MAP</span>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="contBoxinner">
                  <h2>Group Company</h2>
                  <table class="tblType01 profTable">
                    <tr>
                      <th>KKB Co.,Ltd.</th>
                      <td>
                        <div class="inCol">
                          2710 Magechi, Kumagaya, Saitama 360-0161 Japan
                          <br />
                          TEL. <a href="tel:048-579-5600">048-579-5600</a> FAX.
                          048-579-5602
                        </div>
                        <div class="inCol inLink">
                          <a
                            href="https://www.google.co.jp/maps/place/%E3%80%92360-0161+%E5%9F%BC%E7%8E%89%E7%9C%8C%E7%86%8A%E8%B0%B7%E5%B8%82%E4%B8%87%E5%90%89%EF%BC%92%EF%BC%97%EF%BC%91%EF%BC%90/@36.1292793,139.3692107,17z/data=!3m1!4b1!4m5!3m4!1s0x601f29e75ea7fa45:0x6f70badd13e2bb55!8m2!3d36.129275!4d139.3713994"
                            target="_blank"
                            class="btnType01"
                          >
                            <span>MAP</span>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>Kokubu Green Farm Co., Ltd.</th>
                      <td>
                        <div class="inCol">
                          2710 Magechi, Kumagaya, Saitama 360-0161 Japan
                          <br />
                          TEL. <a href="tel:048-536-7777">048-536-7777</a> FAX.
                          048-536-8778
                        </div>
                        <div class="inCol inLink">
                          <a
                            href="https://www.google.co.jp/maps/place/%E3%80%92360-0161+%E5%9F%BC%E7%8E%89%E7%9C%8C%E7%86%8A%E8%B0%B7%E5%B8%82%E4%B8%87%E5%90%89%EF%BC%92%EF%BC%97%EF%BC%91%EF%BC%90/@36.1292793,139.3692107,17z/data=!3m1!4b1!4m5!3m4!1s0x601f29e75ea7fa45:0x6f70badd13e2bb55!8m2!3d36.129275!4d139.3713994"
                            target="_blank"
                            class="btnType01"
                          >
                            <span>MAP</span>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="contBoxinner">
                  <h2>History</h2>
                  <ul class="listTxt01">
                    <li>
                      <span class="year">1976</span>
                      <span class="txt">
                        Founder Isamu Kokubu opened Kokubu Shokai and started
                        the collection and transportation of used tires, as well
                        as their intermediate processing.
                      </span>
                    </li>
                    <li>
                      <span class="year">1979</span>
                      <span class="txt">
                        Started delivery of waste tires as cement production
                        fuel to Nippon Cement under an agreement between Kokubu,
                        Bridgestone and Nippon Cement. Changed company to a
                        limited corporation.
                      </span>
                    </li>
                    <li>
                      <span class="year">1980</span>
                      <span class="txt">
                        Installed a tire cutting plant in the main factory and
                        improved machines and facilities.
                      </span>
                    </li>
                    <li>
                      <span class="year">1981</span>
                      <span class="txt">
                        Started exporting recycled tire materials and used
                        tires.
                      </span>
                    </li>
                    <li>
                      <span class="year">1984</span>
                      <span class="txt">
                        Created the trade section in the head office sales
                        division. Started direct trading with overseas customers
                        in more than 20 countries.
                      </span>
                    </li>
                    <li>
                      <span class="year">1986</span>
                      <span class="txt">
                        Opened Tsurugashima Marque Auto Shop.
                      </span>
                    </li>
                    <li>
                      <span class="year">1987</span>
                      <span class="txt">
                        Opened Kumagaya Marque Tire Shop at the headquarters
                        site.
                      </span>
                    </li>
                    <li>
                      <span class="year">1988</span>
                      <span class="txt">
                        Increased capital to 10 million yen.
                      </span>
                    </li>
                    <li>
                      <span class="year">1990</span>
                      <span class="txt">
                        Increased capital to 20 million yen.
                      </span>
                    </li>
                    <li>
                      <span class="year">1992</span>
                      <span class="txt">
                        Moved Kumagaya Marque Tire Shop to a location facing
                        Route 17.
                      </span>
                    </li>
                    <li>
                      <span class="year">1994</span>
                      <span class="txt">
                        Obtained a secondhand article dealer license.
                      </span>
                    </li>
                    <li>
                      <span class="year">1995</span>
                      <span class="txt">
                        Moved Tsurugashima Marque Auto Shop to the south exit of
                        Wakaba Station.
                      </span>
                    </li>
                    <li>
                      <span class="year">1996</span>
                      <span class="txt">
                        Became certified as a wide-area general waste recycling
                        agency. Increased capital to 32 million yen.
                      </span>
                    </li>
                    <li>
                      <span class="year">1998</span>
                      <span class="txt">
                        Invested capital in tire recycling Hokkaido Co., Ltd.
                        and formed a business partnership with them.
                      </span>
                    </li>
                    <li>
                      <span class="year">2001</span>
                      <span class="txt">
                        Organizational change made and became a stock
                        company(Co., Ltd.) from a limited company.
                        <br />
                        Mr. Kazuo Kokubu became the president.
                      </span>
                    </li>
                    <li>
                      <span class="year">2002</span>
                      <span class="txt">
                        Opened a Tokyo office in Shinbashi.
                      </span>
                    </li>
                    <li>
                      <span class="year">2004</span>
                      <span class="txt">
                        Acquired ISO 14001 certification (registration number
                        CR-E0266).{" "}
                      </span>
                    </li>
                    <li>
                      <span class="year">2005</span>
                      <span class="txt">
                        Obtained industrial waste disposal license.
                      </span>
                    </li>
                    <li>
                      <span class="year">2007</span>
                      <span class="txt">
                        Opened the 2nd factory and started operation.
                      </span>
                    </li>
                    <li>
                      <span class="year">2008</span>
                      <span class="txt">
                        Increased capital to 49.95 million yen. Received special
                        award from Saitama Prefecture for collection and
                        processing of industrial waste in Gyoda City, Saitama
                        Prefecture.
                      </span>
                    </li>
                    <li>
                      <span class="year">2009</span>
                      <span class="txt">KOKUBU GREEN FARM established.</span>
                    </li>
                    <li>
                      <span class="year">2012</span>
                      <span class="txt">
                        Certified as Excellent industrial waste disposal
                        contractor as well as industrial waste collection and
                        transportation from Saitama prefecture.
                      </span>
                    </li>
                    <li>
                      <span class="year">2012</span>
                      <span class="txt">
                        Tohoku Branch opens in Shibata Town, Miyagi prefecture
                      </span>
                    </li>
                    <li>
                      <span class="year">2013</span>
                      <span class="txt">
                        Hokkaido Branch opens in Chitose City, Hokkaido
                      </span>
                    </li>
                    <li>
                      <span class="year">2013</span>
                      <span class="txt">
                        Tohoku Factory opens in Shibata Town, Miyagi prefecture
                      </span>
                    </li>
                    <li>
                      <span class="year">2014</span>
                      <span class="txt">
                        Hokkaido Factory opens in Chitose City, Hokkaido
                      </span>
                    </li>
                    <li>
                      <span class="year">2014</span>
                      <span class="txt">
                        The site of the Hokkaido branch expanded
                      </span>
                    </li>
                    <li>
                      <span class="year">2015</span>
                      <span class="txt">
                        Iwate branch office opened in Hachimantai City, Iwate
                        prefecture
                      </span>
                    </li>
                    <li>
                      <span class="year">2017</span>
                      <span class="txt">
                        KKB Co., Ltd. established as a parent company through
                        stock transfer
                      </span>
                    </li>
                    <li>
                      <span class="year">2021</span>
                      <span class="txt">
                        Masanobu Ikeda took over as Representative Director
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="contBoxinner">
                  <h2>Organization Chart</h2>
                </div>

                <div class="orgChart">
                  <div class="inner">
                    <span>2022/12/01</span>
                    <img
                      src="https://www.kkb-tire.co.jp/wp/wp-content/uploads/chart_en-1.png"
                      alt="Organization Chart"
                    />
                  </div>
                </div>
                <div class="contBoxinner">
                  <h2>Trade Capacity</h2>
                </div>
                <div class="boxStyle06 left">
                  <div class="contentInnerS">
                    <div class="txt">
                      <p class="ttl">The number of countries exporting</p>
                      <p class="num">
                        50<span>countries and more</span>
                      </p>
                    </div>
                    <div class="img">
                      <img
                        src="/eng/common/img/company/icon_boueki06.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="boxStyle06 right">
                  <div class="contentInnerS">
                    <div class="txt">
                      <p class="ttl">The number of customers in overseas</p>
                      <p class="num">
                        140<span>companies</span>
                      </p>
                    </div>
                    <div class="img">
                      <img
                        src="/eng/common/img/company/icon_boueki04.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="boxStyle06 left">
                  <div class="contentInnerS">
                    <div class="img">
                      <img
                        src="/eng/common/img/company/icon_boueki05.png"
                        alt=""
                      />
                    </div>
                    <div class="txt">
                      <p class="ttl">
                        The number of containers monthly exporting
                      </p>
                      <p class="num">
                        120<span>x40FCL / Month</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="boxStyle07">
                  <div class="contBoxinner">
                    <div class="column">
                      <div class="">
                        <p class="ttl">
                          THE NUMBER OF CUSTOMERS BY REGIONS <br />
                          (2022.8)
                        </p>
                        <div class="img">
                          <img
                            src="https://www.kkb-tire.co.jp/wp/wp-content/uploads/graph_boueki03_en-1.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <p class="ttl">
                          KB CUSTOMERS
                          <br />
                          BY REGION (2018)
                        </p>
                        <div class="img">
                          <img
                            src="https://www.kkb-tire.co.jp/wp/wp-content/uploads/graph_boueki02_en.png"
                            alt=""
                          />
                        </div>
                      </div>
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
              <span itemprop="title">About Us</span>
            </li>
          </ol>
        </div>
      </div>
    </body>
  );
};
export default EngCompany;
