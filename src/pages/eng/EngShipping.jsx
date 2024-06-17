import React, { useEffect } from "react";
import { useEnglish } from "../../context/EnglishContext";

import "../../css/sub.css";
import "../../css/common.css"
import "../../css/jquery.css"
import "../../css/remodal.css"
import "../../css/remodal-default.css"


const EngShipping = () => {
  const { setIsEnglishPage } = useEnglish();

  useEffect(() => {
    setIsEnglishPage(true);
    return () => setIsEnglishPage(false);
  }, [setIsEnglishPage]);

  return (
    <body id="shipping">
      <div id="wrap">
        <div id="mainContent">
          <article>
            <div class="ttlWrap">
              <h1>Shipping Information</h1>
            </div>
            <div class="one_columnWrap">
              <div class="mainBlock">
                <div class="contBoxinner">
                  <h2>Export tires from Japan &#8211; Tire loading examples</h2>
                  <p class="mb30">
                    Truck and Bus (TB) tires <br />1 x 40 FCL, Single loading
                  </p>
                  <div class="imgBlock imgRight">
                    <div class="txtBox">
                      <ol class="numberList">
                        <li>
                          <table class="tblType02">
                            <thead>
                              <tr>
                                <th>SIZE</th>
                                <th>QTY</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>11R22.5 14/16PR </td>
                                <td>285 ~ 293</td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td>TOTAL: 1 x 40 FCL</td>
                                <td>285 ~ 293</td>
                              </tr>
                            </tfoot>
                          </table>
                        </li>
                        <li>
                          <table class="tblType02">
                            <thead>
                              <tr>
                                <th>SIZE</th>
                                <th>QTY</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>11R22.5 14/16PR </td>
                                <td>150</td>
                              </tr>
                              <tr>
                                <td>275/80R22.5</td>
                                <td>135</td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td>TOTAL: 1 x 40 FCL</td>
                                <td>285</td>
                              </tr>
                            </tfoot>
                          </table>
                        </li>
                        <li>
                          <table class="tblType02">
                            <thead>
                              <tr>
                                <th>SIZE</th>
                                <th>QTY</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>245/70R19.5</td>
                                <td>195</td>
                              </tr>
                              <tr>
                                <td>385/65R22.5</td>
                                <td>96</td>
                              </tr>
                              <tr>
                                <td>12R22.5 16PR</td>
                                <td>47</td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td>TOTAL: 1 x 40 FCL</td>
                                <td>291</td>
                              </tr>
                            </tfoot>
                          </table>
                        </li>
                        <li>
                          <table class="tblType02">
                            <thead>
                              <tr>
                                <th>SIZE</th>
                                <th>QTY</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>295/80R22.5</td>
                                <td>269</td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td>TOTAL: 1 x 40 FCL</td>
                                <td>269</td>
                              </tr>
                            </tfoot>
                          </table>
                        </li>
                      </ol>
                    </div>
                    <div class="imgBox">
                      <img
                        src="/eng/common/img/shipping/img01.jpg"
                        width="420"
                        alt="TB loading example"
                      />
                      <span class="cap">TB loading example</span>
                    </div>
                  </div>

                  <p class="mb30">
                    TB and Light Truck (LT) tires
                    <br />1 x 40 FCL, Single loading
                  </p>
                  <div class="imgBlock imgRight">
                    <div class="txtBox">
                      <table class="tblType02">
                        <thead>
                          <tr>
                            <th>SIZE</th>
                            <th>QTY</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>315/80R22.5</td>
                            <td>65</td>
                          </tr>
                          <tr>
                            <td>275/70R22.5</td>
                            <td>150</td>
                          </tr>
                          <tr>
                            <td>385/65R22.5</td>
                            <td>16</td>
                          </tr>
                          <tr>
                            <td>750R16 12/14PR</td>
                            <td>45</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td>TOTAL: 1 x 40 FCL</td>
                            <td>276</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <div class="imgBox">
                      <img
                        src="/eng/common/img/shipping/img02.jpg"
                        width="420"
                        alt="LT loading example"
                      />
                      <span class="cap">LT loading example</span>
                    </div>
                  </div>

                  <p class="mb30">
                    TB and Off The Road (OTR) tires <br />1 x 40 FCL, Single
                    loading
                  </p>
                  <div class="imgBlock imgRight">
                    <div class="txtBox">
                      <table class="tblType02">
                        <thead>
                          <tr>
                            <th>SIZE</th>
                            <th>QTY</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1600-25 　28～40PR</td>
                            <td>40</td>
                          </tr>
                          <tr>
                            <td>11R22.5　14/16PR</td>
                            <td>100</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td>TOTAL: 1 x 40 FCL</td>
                            <td>140</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <div class="imgBox">
                      <img
                        src="/eng/common/img/shipping/img03.jpg"
                        width="420"
                        alt="OTR loading example"
                      />
                      <span class="cap">OTR loading example</span>
                    </div>
                  </div>

                  <p class="mb30">
                    Passenger Car (PC) tires <br />1 x 40 FCL, Single loading
                  </p>
                  <div class="imgBlock imgRight">
                    <div class="txtBox">
                      <table class="tblType02">
                        <thead>
                          <tr>
                            <th>SIZE</th>
                            <th>QTY</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>145R12</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td>165/80R13</td>
                            <td>10</td>
                          </tr>
                          <tr>
                            <td>155/65R13</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td>165/R13</td>
                            <td>30</td>
                          </tr>
                          <tr>
                            <td>165/R14</td>
                            <td>30</td>
                          </tr>
                          <tr>
                            <td>165/70R14</td>
                            <td>30</td>
                          </tr>
                          <tr>
                            <td>175/65/R14</td>
                            <td>150</td>
                          </tr>
                          <tr>
                            <td>175/70/R14</td>
                            <td>10</td>
                          </tr>
                          <tr>
                            <td>185/65/R14</td>
                            <td>10</td>
                          </tr>
                          <tr>
                            <td>185/70/R14</td>
                            <td>30</td>
                          </tr>
                          <tr>
                            <td>195/65 R15 </td>
                            <td>300</td>
                          </tr>
                          <tr>
                            <td>195/80/R15</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td>205/55/R16</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td>205/65R16</td>
                            <td>200</td>
                          </tr>
                          <tr>
                            <td>215/65R16</td>
                            <td>150</td>
                          </tr>
                          <tr>
                            <td>215/45R17</td>
                            <td>20</td>
                          </tr>
                          <tr>
                            <td>225/55R17</td>
                            <td>20</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td>TOTAL: 1 x 40 FCL</td>
                            <td>1,190</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <div class="imgBox">
                      <img
                        src="/eng/common/img/shipping/img04.jpg"
                        width="420"
                        alt="PC loading example"
                      />
                      <span class="cap">PC loading example</span>
                    </div>
                  </div>

                  <div class="imgBlock imgRight">
                    <div class="txtBox">
                      <table class="tblType02">
                        <thead>
                          <tr>
                            <th>SIZE</th>
                            <th>QTY</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>12R22.5</td>
                            <td>132</td>
                          </tr>
                          <tr>
                            <td>11R22.5</td>
                            <td>48</td>
                          </tr>
                          <tr>
                            <td>295/80R22.5</td>
                            <td>13</td>
                          </tr>
                          <tr>
                            <td>315/80R22.5</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>385/65R22.5</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>145/80R13</td>
                            <td>355</td>
                          </tr>
                          <tr>
                            <td>155/65R13</td>
                            <td>374</td>
                          </tr>
                          <tr>
                            <td>155/70R13</td>
                            <td>142</td>
                          </tr>
                          <tr>
                            <td>155/80R13(155R13)</td>
                            <td>57</td>
                          </tr>
                          <tr>
                            <td>165/65R13</td>
                            <td>82</td>
                          </tr>
                          <tr>
                            <td>165/80R13(165R13)</td>
                            <td>20</td>
                          </tr>
                          <tr>
                            <td>165/70R14</td>
                            <td>4</td>
                          </tr>
                          <tr>
                            <td>175/65R14</td>
                            <td>5</td>
                          </tr>
                          <tr>
                            <td>185/80R14(185R14)</td>
                            <td>5</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td>TOTAL: 1 x 40 FCL</td>
                            <td>1,245</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <div class="imgBox">
                      <img
                        src="/eng/common/img/shipping/img05.jpg"
                        width="420"
                        alt="PC loading example"
                      />
                    </div>
                  </div>
                  <p>
                    The above are examples only. Please confirm for other
                    sizes/combinations and quantities. <br />
                    Doubling acceptable with additional charge.
                  </p>
                  <p>NOTE: Doubling is available with additional charge.</p>
                </div>
                <div class="contBoxinner">
                  <h2>
                    Sailing time between Japanese ports and popular arrival
                    ports.
                  </h2>
                  <table class="tblType01 pc">
                    <thead>
                      <tr>
                        <th>Hong Kong</th>
                        <th>Port Kelang</th>
                        <th>Auckland</th>
                        <th>Sharjah</th>
                        <th>Durban</th>
                        <th>Tema</th>
                        <th>Rotterdam</th>
                        <th>Los Angeles</th>
                        <th>Iquique</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>7-10 days</td>
                        <td>15 days</td>
                        <td>40 days</td>
                        <td>45 days</td>
                        <td>30 days</td>
                        <td>50 days</td>
                        <td>35 days</td>
                        <td>12 days</td>
                        <td>30 days</td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="tblType01 tb noRWD">
                    <tbody>
                      <tr>
                        <th>Hong Kong</th>
                        <td>7-10 days</td>
                      </tr>
                      <tr>
                        <th>Port Kelang</th>
                        <td>15 days</td>
                      </tr>
                      <tr>
                        <th>Auckland</th>
                        <td>40 days</td>
                      </tr>
                      <tr>
                        <th>Sharjah</th>
                        <td>45 days</td>
                      </tr>
                      <tr>
                        <th>Durban</th>
                        <td>30 days</td>
                      </tr>
                      <tr>
                        <th>Tema</th>
                        <td>50 days</td>
                      </tr>
                      <tr>
                        <th>Rotterdam</th>
                        <td>35 days</td>
                      </tr>
                      <tr>
                        <th>Los Angeles</th>
                        <td>12 days</td>
                      </tr>
                      <tr>
                        <th>Iquique</th>
                        <td>30 days</td>
                      </tr>
                    </tbody>
                  </table>
                  <p class="note">
                    Shipping fees vary. Please contact us for details.
                  </p>
                </div>

                <div class="contBoxinner">
                  <a href="/eng/contact/" class="contactBtn">
                    <span>Contact Us</span>
                  </a>
                </div>

                <div class="contBoxinner">
                  <h2>
                    Flow of order and delivery when exporting tires from Japan
                  </h2>
                  <ol class="numberList">
                    <li>Please send us your inquiry or quotation request.</li>
                    <li>
                      We will contact you in return to ask more details about
                      your inquiry.
                    </li>
                    <li>We will send you a Proforma Invoice (PI).</li>
                    <li>
                      You confirm, sign and return us the PI if acceptable.
                    </li>
                    <li>You make your payment in accordance with the PI.</li>
                    <li>We arrange your order for shipment.</li>
                    <li>
                      After completion of tire loading into containers, we will
                      send you copies of the shipping documents (a copy of the
                      Bill of Lading, an invoice, etc.).
                    </li>
                    <li>
                      If you haven’t made 100% of your payment, we will not
                      release B/L and will release the B/L upon our receipt of
                      remaining amount in full.
                    </li>
                    <li>
                      In case you require B/L surrendered, we will surrender the
                      B/L upon our receipt of all remaining amount in full.
                    </li>
                  </ol>
                </div>
                <div class="contBoxinner">
                  <p>Thank you for showing interest in our company.</p>
                  <h2>How to send a quotation request</h2>
                  <p>
                    If you would like to receive a quotation from us, please
                    inform us of the following items through &#8220;Contact
                    Us&#8221; form:
                  </p>
                  <p class="box">
                    Tire sizes you need in detail:
                    <br />
                    Grade of used tires/(30%/50%/70% etc):
                    <br />
                    Quantity:
                    <br />
                    Port of discharge:
                    <br />
                    Incoterms:
                    <br />
                    Payment currency:
                    <br />
                    Your target purchasing price:
                    <br />
                    Single or multiple orders:
                    <br />
                    Comments (if any):
                  </p>
                  <p>Please contact us any time!</p>
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
              <span itemprop="title">Shipping Information</span>
            </li>
          </ol>
        </div>
      </div>
    </body>
  );
};

export default EngShipping