import React from "react";
import logo from "../assets/logo.png";

const HeaderEng = () => {
  return (
    <header1 id="header1">
      <div id="menuSP">
        <div class="open">
          <a>MENU</a>
        </div>
        <div class="inner">
          <nav id="gNavi">
            <ul>
              <li class="attention">
                <a href="/eng/attention/">Important notice</a>
              </li>
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
              <li>
                <a href="/eng/company/">About Us</a>
              </li>
              <li>
                <a href="/eng/contact/" class="contactBtn">
                  Contact Us
                </a>
              </li>
            </ul>
            <ul id="subNavi">
              <li>
                <a href="tel:+81485367755">+81-48-536-7755</a>
              </li>
              <li>
                <a href="http://www.kkb-tire.co.jp/" target="_blank">
                  Japanese
                </a>
              </li>
            </ul>
          </nav>
          <div class="close">
            <a>CLOSE</a>
          </div>
        </div>
      </div>
      <div class="contentInner">
        <h1 id="logo">
          <a href="/eng/">
            <img alt="KKB Kokubu shokai Co., Ltd" src={logo} />
          </a>
        </h1>
        <nav id="gNavi">
          <ul>
            <li class="attention">
              <a href="/eng/attention/">Important notice</a>
            </li>
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
            <li>
              <a href="/eng/company/">About Us</a>
            </li>
            <li>
              <a href="/eng/contact/" class="contactBtn">
                Contact Us
              </a>
            </li>
          </ul>
          <ul id="subNavi">
            <li>
              <a href="tel:+81485367755">+81-48-536-7755</a>
            </li>
            <li>
              <a href="/" target="_blank">
                Japanese
              </a>
            </li>
          </ul>
        </nav>
        <div class="attention sp">
          <a href="/eng/attention/">Important notice</a>
        </div>
      </div>
    </header1>
  );
};

export default HeaderEng;
