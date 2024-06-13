import React from "react";

const FooterEng = () => {
  return (
    <footer id="footer">
      <div id="footer01">
        <div class="contentInner clearfix">
          <ul class="menu01">
            <li class="according">
              <ul>
                <li>
                  <a href="/eng/solution/">Why KKB?</a>
                </li>
                <li>
                  <a href="/eng/products/">Products</a>
                </li>
                <li>
                  <a href="/eng/shipping/">Shipping</a>
                </li>
                <li>
                  <a href="/eng/case/">Reviews</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/eng/company/">About Us</a>
                </li>
                <li>
                  <a href="/eng/news/">News Release</a>
                </li>
                <li>
                  <a class="contactBtn" href="/eng/contact/">
                    Contact Us
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="menu02">
            <li class="according">
              <div class="fbBox">
                <div
                  class="fb-page fb_iframe_widget"
                  data-href="https://www.facebook.com/usedtyreKKBjapan"
                  data-tabs="timeline"
                  data-width="500"
                  data-height="250"
                  data-small-header="true"
                  data-adapt-container-width="true"
                  data-hide-cover="true"
                  data-show-facepile="false"
                  fb-xfbml-state="rendered"
                  fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=500&amp;height=250&amp;hide_cover=true&amp;href=https%3A%2F%2Fwww.facebook.com%2FusedtyreKKBjapan&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=false&amp;small_header=true&amp;tabs=timeline&amp;width=500"
                >
                  <span
                    style={{
                      verticalAlign: "bottom",
                      width: "500px",
                      height: "250px",
                    }}
                  >
                    <iframe
                      name="f6b7ba58a3aa43684"
                      width="500px"
                      height="250px"
                      data-testid="fb:page Facebook Social Plugin"
                      title="fb:page Facebook Social Plugin"
                      frameborder="0"
                      allowtransparency="true"
                      allowfullscreen="true"
                      scrolling="no"
                      allow="encrypted-media"
                      style={{
                        border: "medium",
                        visibility: "visible",
                        width: "500px",
                        height: "250px",
                      }}
                      src="https://www.facebook.com/v2.5/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfbad63fa26b70d938%26domain%3Dwww.kkb-tire.co.jp%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.kkb-tire.co.jp%252Ff8bfaf4c224f9fc98%26relation%3Dparent.parent&amp;container_width=500&amp;height=250&amp;hide_cover=true&amp;href=https%3A%2F%2Fwww.facebook.com%2FusedtyreKKBjapan&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=false&amp;small_header=true&amp;tabs=timeline&amp;width=500"
                      class=""
                    ></iframe>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="footer02">
        <div class="footerInner clearfix">
          <ul>
            <li>
              <a href="/eng/">Home</a>
            </li>
            <li>
              <a href="/eng/policy/">Privacy Policy</a>
            </li>
          </ul>
          <p class="copyright">
            © Kokubu Shokai Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
      <div id="fb-root" class=" fb_reset">
        <div
          style={{
            position: "absolute",
            top: "-10000px",
            width: "0px",
            height: "0px",
          }}
        >
          <div></div>
        </div>
      </div>
      <script>
        {(function (d, s, id) {
          var js,
            fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s);
          js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
          fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk")}
      </script>
    </footer>
  );
};

export default FooterEng;
