import React, { useEffect } from "react";
import { useEnglish } from "../../context/EnglishContext";

import "../../css/sub.css";
import "../../css/common.css"
import "../../css/jquery.css"
import "../../css/remodal.css"
import "../../css/remodal-default.css"

const EngAttention = () => {
  const { setIsEnglishPage } = useEnglish();

  useEffect(() => {
    setIsEnglishPage(true);
    return () => setIsEnglishPage(false);
  }, [setIsEnglishPage]);
  return (
    <body class="">
      <div id="wrap">
        <div id="mainContent">
          <article>
            <div class="ttlWrap">
              <h1>Important notice</h1>
            </div>
            <div class="one_columnWrap">
              <div class="mainBlock">
                <div class="contBoxinner">
                  <h2>Special attention for potential customers</h2>
                  <div class="txtBox">
                    <p class="mb20">! Please be aware of a case of fraud!</p>
                    <p class="mb20">
                      Because of popularity and high reputation of our company
                      in the business field, misuse the name and staff of our
                      company as a case of fraud reported.
                    </p>
                    <p class="mb20">
                      We have been contacted by a company in Puerto Rico that
                      claims that they purchased used tires from our company and
                      had made an advance payment of about US$9,000 but never
                      received the goods nor Bill of Lading from us.
                    </p>
                    <p class="mb20">
                      Having received invoices and copy of e-mail exchanges from
                      the presumed victim, we see that invoices were made in the
                      name of our company and our staff.
                      <br />
                      In the Header of the invoice, there were physical address
                      and phone number of our company that are correct but there
                      was another phone number, seemingly a mobile phone number,
                      with country code of (504) that is for Honduras.
                    </p>
                    <p class="mb20">
                      * Our company is located in Japan and thus, country code
                      number is 81!
                    </p>
                    <p class="mb20">
                      Also, in the received copy of e-mail exchanges between the
                      presumed victim and the fraud doer, the fraud doer was
                      directing the presumed victim to make money transfer to a
                      bank in Thailand!
                    </p>
                    <p class="mb20">
                      * Our company is located in Japan and have no branch in
                      Thailand, and of course, we never hold a bank account in
                      Thailand!
                    </p>
                    <p class="mb20">
                      * * * * * * * * * * * * * * * * * <br class="sp" />
                      Please be cautious <br class="sp" />* * * * * * * * * * *
                      * * * * * *
                    </p>
                    <p class="mb20">
                      Though we had experienced such a case of fraud just one
                      time so far, please let us remind you of keeping a caution
                      when dealing with a company in overseas.
                    </p>
                    <ol class="numberList">
                      <li>
                        Please do not make advance payment without checking the
                        seller!
                        <br />
                        You should at least call the company, access the web
                        site, and most importantly.
                        <br />
                        check the bank designated, and location of the bank.
                      </li>
                      <li>
                        Do not proceed with a doubt in mind!
                        <br />
                        If you have an uncertainty or a doubt with the seller,
                        please do not proceed further.
                        <br />
                        Then, consult with an institution or a sponsor of the
                        web site.
                      </li>
                    </ol>
                    <p class="mb20">
                      * * * * * * * * * * * * * * * * * <br class="sp" />
                      end of caution <br class="sp" />* * * * * * * * * * * * *
                      * * * *
                    </p>
                    <p>
                      We are KOKUBU SHOKAI CO., LTD, in Saitama Japan, having
                      been in the business for over 40 years, having been highly
                      valued of our business ethics and trustfully practice by
                      our customers all around the world.
                      <br />
                      Thus, please feel free to contact us for your inquiries
                      you may have.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div id="pageTop" class="scroll"></div>
        <div id="breadcrumb">
          <ol>
            <li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
              <a itemprop="url" href="/eng/">
                <span itemprop="title">Home</span>
              </a>
            </li>

            <li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
              <span itemprop="title">Important notice</span>
            </li>
          </ol>
        </div>
      </div>
    </body>
  );
};

export default EngAttention;
