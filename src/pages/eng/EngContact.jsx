import React, { useEffect, useState } from "react";
import { useEnglish } from "../../context/EnglishContext";

import "../../css/sub.css";
import "../../css/common.css";
import "../../css/jquery.css";
import axios from "axios";

const EngContact = () => {
  const { setIsEnglishPage } = useEnglish();

  useEffect(() => {
    setIsEnglishPage(true);
    return () => setIsEnglishPage(false);
  }, [setIsEnglishPage]);

  const [formData, setFormData] = useState({
    companyname: "",
    companybusyo: "",
    name1: "",
    name2: "",
    furi1: "",
    furi2: "",
    email: "",
    tell: "",
    zip1: "",
    zip2: "",
    add: "",
    add2: "",
    etc: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending data:", formData);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/send-email/",
        formData
      );
      console.log("Response:", response.data);
      setStatus("Email sent successfully!");
      alert("Data successfully submitted!");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      setStatus("Error sending email.");
    }
  };
  return (
    <body id="contact">
      <div id="wrap">
        <div id="mainContent">
          <article>
            <div class="ttlWrap">
              <h1>Contact Us</h1>
            </div>
            <div class="one_columnWrap">
              <div class="mainBlock">
                <div class="contBoxinner">
                  <div class="formBox">
                    <h2>
                      Your source for Japan used tires &amp; scrap tire
                      materials
                    </h2>
                    <p class="lead" style={{ textAlign: "left" }}>
                      For more information on how we can reliably fulfill your
                      order for Japan used tires and tire scrap materials,
                      please fill in the contact form below. We are happy to
                      answer any questions you may have, and will respond to
                      your inquiry as soon as possible.
                    </p>
                    <p class="lead">
                      <span class="req">* Required</span>
                    </p>
                    <form
                      action="contact.php"
                      method="post"
                      enctype="multipart/form-data"
                      id="mail_form"
                      onSubmit={handleSubmit}
                    >
                      <input
                        type="hidden"
                        name="recaptchaToken"
                        id="recaptchaToken"
                      />
                      <div class="contentInnerS sectionSpace">
                        <div class="listStyle05">
                          <dl>
                            <dt>Company name</dt>
                            <dd>
                              <input
                                type="text"
                                name="companyname"
                                id="companyname"
                                size="20"
                                class="asktext3"
                                // value={companyName}
                                onChange={handleChange}
                                required
                              />
                            </dd>
                          </dl>
                          <dl>
                            <dt>Department name</dt>
                            <dd>
                              <input
                                type="text"
                                name="companybusyo"
                                id="companybusyo"
                                size="20"
                                class="asktext3"
                                // value={companybusyo}
                                onChange={handleChange}
                                required
                              />
                            </dd>
                          </dl>
                          <dl>
                            <dt>
                              Name<em class="required"></em>
                            </dt>
                            <dd>
                              <input
                                type="text"
                                name="name1"
                                id="name1"
                                size="20"
                                class="asktext2"
                                // value={name1}
                                onChange={handleChange}
                                required
                              />
                              <input
                                type="text"
                                name="name2"
                                id="name2"
                                size="20"
                                class="asktext2"
                                // value={name2}
                                onChange={handleChange}
                                required
                              />
                            </dd>
                          </dl>
                          <dl>
                            <dt>
                              Furigana<em class="required"></em>
                            </dt>
                            <dd>
                              <input
                                type="text"
                                name="furi1"
                                id="furi1"
                                class="asktext2"
                                // value={furi1}
                                onChange={handleChange}
                                required
                              />
                              <input
                                type="text"
                                name="furi2"
                                id="furi2"
                                class="asktext2"
                                // value={furi2}
                                onChange={handleChange}
                                required
                              />
                            </dd>
                          </dl>
                          <dl>
                            <dt>
                              E-mail<em class="required"></em>
                            </dt>
                            <dd>
                              <input
                                name="email"
                                type="email"
                                class="asktext3"
                                id="mailaddress"
                                // value={email}
                                onChange={handleChange}
                                required
                              />
                            </dd>
                          </dl>
                          <dl>
                            <dt>Phone-number</dt>
                            <dd>
                              <input
                                type="tel"
                                name="tell"
                                id="tel1"
                                class="asktext2"
                                placeholder="例：03-1234-5678"
                                // value={tell}
                                onChange={handleChange}
                                required
                              />
                              <span class="example"></span>
                            </dd>
                          </dl>
                          <dl>
                            <dt>Post code</dt>
                            <dd>
                              <input
                                name="zip1"
                                type="text"
                                class="asktext1"
                                id="zip1"
                                // value={zip1}
                                onChange={handleChange}
                                required
                              />
                              ------
                              <input
                                name="zip2"
                                type="text"
                                class="asktext1"
                                id="zip2"
                                // value={zip2}
                                onChange={handleChange}
                                required
                              />
                            </dd>
                          </dl>
                          <dl>
                            <dt>address</dt>
                            <dd>
                              <label class="select">
                                <select name="pref" id="pref" class="mb15">
                                  <option value="" selected="selected">
                                    prefectures
                                  </option>
                                  <option value="北海道">Hokkaido</option>
                                  <option value="青森県">Aomori</option>
                                  <option value="秋田県">Akida</option>
                                  <option value="岩手県">Iwate</option>

                                  <option value="山形県">山形県</option>
                                  <option value="宮城県">宮城県</option>
                                  <option value="福島県">福島県</option>
                                  <option value="栃木県">栃木県</option>
                                  <option value="山梨県">山梨県</option>
                                  <option value="群馬県">群馬県</option>
                                  <option value="茨城県">茨城県</option>
                                  <option value="千葉県">千葉県</option>
                                  <option value="埼玉県">埼玉県</option>

                                  <option value="東京都">東京都</option>
                                  <option value="神奈川県">神奈川県</option>
                                  <option value="静岡県">静岡県</option>
                                  <option value="長野県">長野県</option>
                                  <option value="愛知県">愛知県</option>
                                  <option value="岐阜県">岐阜県</option>
                                  <option value="新潟県">新潟県</option>
                                  <option value="富山県">富山県</option>
                                  <option value="石川県">石川県</option>

                                  <option value="福井県">福井県</option>
                                  <option value="滋賀県">滋賀県</option>
                                  <option value="三重県">三重県</option>
                                  <option value="和歌山県">和歌山県</option>
                                  <option value="奈良県">奈良県</option>
                                  <option value="京都府">京都府</option>
                                  <option value="大阪府">大阪府</option>
                                  <option value="兵庫県">兵庫県</option>
                                  <option value="鳥取県">鳥取県</option>

                                  <option value="島根県">島根県</option>
                                  <option value="岡山県">岡山県</option>
                                  <option value="広島県">広島県</option>
                                  <option value="山口県">山口県</option>
                                  <option value="高知県">高知県</option>
                                  <option value="徳島県">徳島県</option>
                                  <option value="香川県">香川県</option>
                                  <option value="愛媛県">愛媛県</option>
                                  <option value="福岡県">福岡県</option>

                                  <option value="佐賀県">佐賀県</option>
                                  <option value="長崎県">長崎県</option>
                                  <option value="熊本県">熊本県</option>
                                  <option value="大分県">大分県</option>
                                  <option value="宮崎県">宮崎県</option>
                                  <option value="鹿児島県">鹿児島県</option>
                                  <option value="沖縄県">沖縄県</option>
                                </select>
                              </label>
                              <p>
                                municipalities
                                <input
                                  name="add"
                                  type="text"
                                  class="asktext3"
                                  id="add"
                                  // value={add}
                                  onChange={handleChange}
                                  required
                                />
                              </p>
                              <p>
                                Building, apartment name
                                <input
                                  name="add2"
                                  type="text"
                                  class="asktext3"
                                  id="add2"
                                  // value={add2}
                                  onChange={handleChange}
                                  required
                                />
                              </p>
                            </dd>
                          </dl>
                          <dl>
                            <dt>
                              Inquiry details
                              <em class="required">(required)</em>
                            </dt>
                            <dd>
                              <textarea
                                type="text"
                                name="etc"
                                rows="5"
                                cols="30"
                                id="etc"
                                // value={etc}
                                onChange={handleChange}
                                required
                              ></textarea>
                            </dd>
                          </dl>
                        </div>
                      </div>
                      <div class="contentInnerS sectionSpace">
                        <p class="titleStyle07">
                          How we handle personal information
                        </p>
                        <p>
                          Personal information obtained through this form will
                          be used only to respond to inquiries and quotations,
                          and will be managed by Kokubu Shokai Co., Ltd.'s
                          Personal Information Protection Manager (General
                          Affairs Department Manager). We will not outsource the
                          handling of personal information or provide it to
                          third parties. Entering personal information is
                          optional, but if there are items that you do not
                          enter, we may not be able to respond to your inquiry.
                          Requests for disclosure, etc. of personal information
                          (notification of purpose of use, disclosure,
                          correction, addition or deletion of content,
                          suspension of use, erasure, and suspension of
                          provision to third parties) will be accepted at the
                          inquiry desk (048-536-1564). Please enter only after
                          agreeing to the above.
                        </p>
                        <p class="tac">
                          <input
                            type="radio"
                            name="q1"
                            value="はい"
                            id="kakunin1"
                          />
                          agree
                          <input
                            type="radio"
                            name="q1"
                            value="いいえ"
                            id="kakunin2"
                            checked
                          />
                          disagree
                        </p>
                        <div class="btnStyle03">
                          <input
                            type="submit"
                            value="send content"
                            name="kakunin"
                            id="kakunin"
                          />
                          <input type="reset" name="reset" value="reset" />
                        </div>
                        <div style={{ border: "0px", textAlign: "left" }}>
                          <script
                            type="text/javascript"
                            src="https://seal.fujissl.jp/getSeal.do?cn=www.kkb-tire.co.jp"
                          ></script>
                          <img
                            name="secureSeal"
                            src="https://seal.fujissl.jp/buildSign.do?ca=www.kkb-tire.co.jp&amp;ch=www.kkb-tire.co.jp&amp;metas=w:0,i:0,d:0&amp;design=default"
                            oncontextmenu="return false;"
                            border="0"
                            alt=""
                            usemap="#trust_seal"
                            width="140px"
                          />
                          <map name="trust_seal" id="trust_seal">
                            <area
                              alt="Click to Verify - This site has chosen an SSL Certificate to improve Web site security"
                              title=""
                              href="javascript:fujissl_splash()"
                              shape="rect"
                              coords="0,0,210,104"
                              tabindex="-1"
                              style={{ outline: "none" }}
                            />
                            <area
                              alt=""
                              title=""
                              href="javascript:symcBuySSL()"
                              shape="rect"
                              coords="63,58,115,81"
                              style={{ outline: "none" }}
                            />
                          </map>
                          <a
                            href="https://seal.fujissl.jp/validationScreen.do?cn=www.kkb-tire.co.jp"
                            target="FSVSP_Splash"
                            id="FSVSPBTN"
                            style={{ display: "none" }}
                          ></a>
                        </div>
                      </div>
                      {/* <input name="" type="submit" value="送信" /> */}
                    </form>
                    <script src="https://www.google.com/recaptcha/api.js?render=6Lf_j1gmAAAAALZFKxZWd1-MqfEOZKd02Sp3w9sG"></script>
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
              <span itemprop="title">Contact Us</span>
            </li>
          </ol>
        </div>
      </div>
    </body>
  );
};
export default EngContact;
