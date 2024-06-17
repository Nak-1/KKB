import React, { useState } from "react";
import axios from "axios";
// import "../css/common.css";

const Otoiawase = () => {
  const [formData, setFormData] = useState({
    companyname: '',
    companybusyo: '',
    name1: '',
    name2: '',
    furi1: '',
    furi2: '',
    email: '',
    tell: '',
    zip1: '',
    zip2: '',
    add: '',
    add2: '',
    etc: '',
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
      alert('Data successfully submitted!');
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      setStatus("Error sending email.");
    }
  };

  return (
    <body>
      <div id="wrap" className="">
        <div id="mainContent">
          <section>
            <div id="titleImg">
              <div class="inner">
                <h1>
                  <span>お問い合わせ・お見積もり</span>
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
                    <li>お問い合わせ・お見積もり</li>
                  </ul>
                </ul>
              </div>
            </div>

            <div class="contentInnerS">
              <p>
                下記のお問い合せフォームに必要事項をご記入の上、内容確認ボタンを押してください。後日、弊社よりご連絡させていただきます。
              </p>
              <p class="red">
                ※漢字・ひらがな・カタカナは全角文字、英数字記号は半角文字で入力してください。
                ※（必須）の項目は、必ずご記入ください。
              </p>
            </div>
            <form
              action="contact.php"
              method="post"
              enctype="multipart/form-data"
              id="mail_form"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="recaptchaToken" id="recaptchaToken" />
              <div class="contentInnerS sectionSpace">
                <div class="listStyle05">
                  <dl>
                    <dt>会社名</dt>
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
                    <dt>部署名</dt>
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
                      お名前<em class="required">(必須)</em>
                    </dt>
                    <dd>
                      （姓）
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
                      （名）
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
                      フリガナ<em class="required">(必須)</em>
                    </dt>
                    <dd>
                      （セイ）
                      <input
                        type="text"
                        name="furi1"
                        id="furi1"
                        class="asktext2"
                        // value={furi1}
                        onChange={handleChange}
                        required
                      />
                      （メイ）
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
                      E-mail<em class="required">(必須)</em>
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
                    <dt>お電話番号</dt>
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
                    <dt>郵便番号</dt>
                    <dd>
                      〒
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
                    <dt>住所</dt>
                    <dd>
                      <label class="select">
                        <select name="pref" id="pref" class="mb15">
                          <option value="" selected="selected">
                            都道府県
                          </option>
                          <option value="北海道">北海道</option>
                          <option value="青森県">青森県</option>
                          <option value="秋田県">秋田県</option>
                          <option value="岩手県">岩手県</option>

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
                        市区町村
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
                        ビル・マンション名
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
                      お問合せ内容<em class="required">(必須)</em>
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
                <p class="titleStyle07">当社における個人情報の取扱いについて</p>
                <p>
                  本フォームより取得する個人情報はお問い合わせや見積もりの回答のためのみに利用し、個人情報は(株)国分商会の個人情報保護管理者(総務部長)が管理します。個人情報の取扱いの委託及び第三者提供はいたしません。個人情報の入力は任意ですが入力頂けない項目がありますとお問い合わせ等に回答できないことがあります。個人情報に関する開示等（利用目的の通知、開示、内容の訂正、追加又は削除、利用の停止、消去及び第三者提供の停止）の請求はお問い合わせ窓口（048-536-1564）でお受けいたします。以上にご同意の上にご入力下さい。
                </p>
                <p class="tac">
                  <input type="radio" name="q1" value="はい" id="kakunin1" />
                  同意する
                  <input
                    type="radio"
                    name="q1"
                    value="いいえ"
                    id="kakunin2"
                    checked
                  />
                  同意しない
                </p>
                <div class="btnStyle03">
                  <input
                    type="submit"
                    value="内容を送信"
                    name="kakunin"
                    id="kakunin"
                  />
                  <input type="reset" name="reset" value="リセット" />
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
            {/* <script src="https://www.google.com/recaptcha/api.js?render=6Lf_j1gmAAAAALZFKxZWd1-MqfEOZKd02Sp3w9sG"></script> */}
          </section>
        </div>
      </div>
    </body>
  );
};
export default Otoiawase;
