import React, { useEffect } from "react";
import { useEnglish } from "../../context/EnglishContext";
import "../../css/sub.css";

const EngContact = () => {
  const { setIsEnglishPage } = useEnglish();

  useEffect(() => {
    setIsEnglishPage(true);
    return () => setIsEnglishPage(false);
  }, [setIsEnglishPage]);
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
                      Your source for Japan used tires & scrap tire materials
                    </h2>
                    <p class="lead" style="text-align:left">
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
                    >
                      <input
                        type="hidden"
                        name="recaptchaToken"
                        id="r/ecaptchaToken"
                      />
                      <div
                        id="error_message"
                        style="color:red;font-weight:bold;"
                      >
                        Error, please provide the required information.
                      </div>
                      <div class="label first">
                        <label>
                          Company name <span class="req">*</span>
                        </label>
                      </div>
                      <div class="field first">
                        <input type="text" name="company_s" id="company" />
                      </div>
                      <div class="label">
                        <label>
                          Country <span class="req">*</span>
                        </label>
                      </div>
                      <div class="field">
                        <input type="text" name="country_s" id="country" />
                      </div>
                      <div class="label">
                        <label>
                          Name of contact person <span class="req">*</span>
                        </label>
                      </div>
                      <div class="field nameBlock">
                        <span>First name</span>
                        <input type="text" name="first_s" id="first" />
                        /
                        <br />
                        <span>Last name</span>
                        <input type="text" name="last_s" id="last" />/
                      </div>
                      <div class="label">
                        <label>
                          Phone number <span class="req">*</span>
                        </label>
                      </div>
                      <div class="field">
                        <input type="text" name="phone_s" id="phone" />/
                      </div>
                      <div class="label">
                        <label>
                          Email address <span class="req">*</span>
                        </label>
                      </div>
                      <div class="field">
                        <input type="text" name="email_s" id="email" />/
                      </div>

                      <div class="label">
                        <label>Quotation request</label>
                      </div>
                      <div class="field inquiryField">
                        <div class="inquiryBox purchase">
                          <div class="purchaseBox">
                            <input
                              type="radio"
                              name="purchase_s"
                              id="purcha/se01"
                              value="Purchase for import"
                            />
                            <label for="purchase01">Purchase for import</label>
                            <div class="inner">
                              <span>Port of discharge</span>
                              <input
                                type="text"
                                name="port_s"
                                id="port"
                              />/{" "}
                            </div>
                          </div>
                          <div class="purchaseBox">
                            <input
                              type="radio"
                              name="purchase_s"
                              id="purcha/se02"
                              value="Purchase for Japan"
                            />
                            <label for="purchase02">Purchase for Japan</label>
                            <div class="inner">
                              <span>Prefecture</span>
                              <div class="slct">
                                <select name="pref_s" class="text-box">
                                  <option value="" selected="selected"></option>
                                  <option value="Hokkaido">Hokkaido</option>
                                  <option value="Aomori">Aomori</option>
                                  <option value="Iwate">Iwate</option>
                                  <option value="Miyagi">Miyagi</option>
                                  <option value="Akita">Akita</option>
                                  <option value="Yamagata">Yamagata</option>
                                  <option value="Fukushima">Fukushima</option>
                                  <option value="Ibaraki">Ibaraki</option>
                                  <option value="Tochigi">Tochigi</option>
                                  <option value="Gunma">Gunma</option>
                                  <option value="Saitama">Saitama</option>
                                  <option value="Chiba">Chiba</option>
                                  <option value="Tokyo">Tokyo</option>
                                  <option value="Kanagawa">Kanagawa</option>
                                  <option value="Niigata">Niigata</option>
                                  <option value="Toyama">Toyama</option>
                                  <option value="Ishikawa">Ishikawa</option>
                                  <option value="Fukui">Fukui</option>
                                  <option value="Yamanashi">Yamanashi</option>
                                  <option value="Nagano">Nagano</option>
                                  <option value="Gifu">Gifu</option>
                                  <option value="Shizuoka">Shizuoka</option>
                                  <option value="Aichi">Aichi</option>
                                  <option value="Mie">Mie</option>
                                  <option value="Shiga">Shiga</option>
                                  <option value="Kyoto">Kyoto</option>
                                  <option value="Osaka">Osaka</option>
                                  <option value="Hyogo">Hyogo</option>
                                  <option value="Nara">Nara</option>
                                  <option value="Wakayama">Wakayama</option>
                                  <option value="Tottori">Tottori</option>
                                  <option value="Shimane">Shimane</option>
                                  <option value="Okayama">Okayama</option>
                                  <option value="Hiroshima">Hiroshima</option>
                                  <option value="Yamaguchi">Yamaguchi</option>
                                  <option value="Tokushima">Tokushima</option>
                                  <option value="Kagawa">Kagawa</option>
                                  <option value="Ehime">Ehime</option>
                                  <option value="Kochi">Kochi</option>
                                  <option value="Fukuoka">Fukuoka</option>
                                  <option value="Saga">Saga</option>
                                  <option value="Nagasaki">Nagasaki</option>
                                  <option value="Kumamoto">Kumamoto</option>
                                  <option value="Oita">Oita</option>
                                  <option value="Miyazaki">Miyazaki</option>
                                  <option value="Kagoshima">Kagoshima</option>
                                  <option value="Okinawa">Okinawa</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="inquiryBox item">
                          <span>Item(s)</span>
                          <div class="inner">
                            <input
                              type="checkbox"
                              name="item_s[]"
                              id="item0/1"
                              value="Used tires"
                            />
                            <label for="item01">Used tires</label>
                            <input
                              type="checkbox"
                              name="item_s[]"
                              id="item0/2"
                              value="Casings Tire"
                            />
                            <label for="item02">Casings</label>
                            <input
                              type="checkbox"
                              name="item_s[]"
                              id="item0/3"
                              value="Rubber material"
                            />
                            <label for="item03">Rubber material</label>
                            <input
                              type="checkbox"
                              name="item_s[]"
                              id="item0/4"
                              value="Other"
                            />
                            <label for="item04">Other</label>
                          </div>
                        </div>
                        <div class="inquiryBox details">
                          <span>
                            Please include details such as tire size, grade
                            (30%/50%/70% etc.), quantity, Incoterms, payment
                            currency, target purchasing price, single or
                            multiple order, etc.
                          </span>
                          <textarea
                            name="details_s"
                            rows="5"
                            id="details"
                          ></textarea>
                        </div>
                      </div>
                      <div class="label">
                        <label>Comments and inquiries</label>
                      </div>
                      <div class="field">
                        <textarea
                          name="comment_s"
                          rows="8"
                          id="comment"
                        ></textarea>
                      </div>
                      <div class="btnBox01">
                        <div class="submitBox">
                          <input type="submit" value="Send" />/{" "}
                        </div>
                      </div>
                    </form>
                    <script src="https://www.google.com/recaptcha/api.js?render=6Lf_j1gmAAAAALZFKxZWd1-MqfEOZKd02Sp3w9sG"></script>
                    <script>
                      {/* document.getElementById("mail_form").addEventListener('submit', onSubmit);

                        function onSubmit(e) 
                    {
                        e.preventDefault();
                        grecaptcha.ready(function() 
                        {
                            grecaptcha.execute('6Lf_j1gmAAAAALZFKxZWd1-MqfEOZKd02Sp3w9sG', {action: 'submit'}).then(function(token)
                            {
                                // Add your logic to submit to your backend server here.
                                var recaptchaToken = document.getElementById('recaptchaToken');
                                recaptchaToken.value = token;
                                document.getElementById("mail_form").submit();
                            });
                        });
                    } */}
                    </script>
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
