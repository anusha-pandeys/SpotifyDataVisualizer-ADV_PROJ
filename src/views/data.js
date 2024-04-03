import React from 'react'

import { Helmet } from 'react-helmet'

import './data.css'

const Data = (props) => {
  return (
    <div className="data-container">
      <Helmet>
        <title>Data - Active Online Software Page</title>
        <meta
          property="og:title"
          content="Data - Active Online Software Page"
        />
      </Helmet>
      <section className="data-features">
        <div className="data-title">
          <span className="data-text">Your Analytics:</span>
        </div>
        <div className="data-container1">
          <img
            alt="pastedImage"
            src="/external/pastedimage-bkx9-500w.png"
            className="data-pasted-image"
          />
          <div className="data-publish card">
            <svg viewBox="0 0 1024 1024" className="data-icon">
              <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
            </svg>
            <span className="data-text01">Most Listened to Artists</span>
            <span className="data-text02">
              <span className="data-text03">1.</span>
              <br className="data-text04"></br>
              <span className="data-text05">2.</span>
              <br className="data-text06"></br>
              <span className="data-text07">3.</span>
              <br className="data-text08"></br>
              <span className="data-text09">4.</span>
              <br className="data-text10"></br>
              <span className="data-text11">5.</span>
              <br className="data-text12"></br>
              <span className="data-text13">6.</span>
              <br className="data-text14"></br>
              <span className="data-text15">7.</span>
              <br className="data-text16"></br>
              <span className="data-text17">8.</span>
              <br className="data-text18"></br>
              <span className="data-text19">9.</span>
              <br className="data-text20"></br>
              <span className="data-text21">10.</span>
              <br className="data-text22"></br>
              <span className="data-text23">11.</span>
              <br className="data-text24"></br>
              <span className="data-text25">12.</span>
              <br className="data-text26"></br>
              <span className="data-text27">13.</span>
              <br className="data-text28"></br>
              <span className="data-text29">14.</span>
              <br className="data-text30"></br>
              <span className="data-text31">15.</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="data-container2">
          <div className="data-publish1 card">
            <svg viewBox="0 0 1024 1024" className="data-icon2">
              <path d="M960 0h64v736c0 88.366-100.29 160-224 160s-224-71.634-224-160c0-88.368 100.29-160 224-160 62.684 0 119.342 18.4 160 48.040v-368.040l-512 113.778v494.222c0 88.366-100.288 160-224 160s-224-71.634-224-160c0-88.368 100.288-160 224-160 62.684 0 119.342 18.4 160 48.040v-624.040l576-128z"></path>
            </svg>
            <span className="data-text33">Most Listened to Songs</span>
            <span className="data-text34">
              <span className="data-text35">1.</span>
              <br className="data-text36"></br>
              <span className="data-text37">2.</span>
              <br className="data-text38"></br>
              <span className="data-text39">3.</span>
              <br className="data-text40"></br>
              <span className="data-text41">4.</span>
              <br className="data-text42"></br>
              <span className="data-text43">5.</span>
              <br className="data-text44"></br>
              <span className="data-text45">6.</span>
              <br className="data-text46"></br>
              <span className="data-text47">7.</span>
              <br className="data-text48"></br>
              <span className="data-text49">8.</span>
              <br className="data-text50"></br>
              <span className="data-text51">9.</span>
              <br className="data-text52"></br>
              <span className="data-text53">10.</span>
              <br className="data-text54"></br>
              <span className="data-text55">11.</span>
              <br className="data-text56"></br>
              <span className="data-text57">12.</span>
              <br className="data-text58"></br>
              <span className="data-text59">13.</span>
              <br className="data-text60"></br>
              <span className="data-text61">14.</span>
              <br className="data-text62"></br>
              <span className="data-text63">15.</span>
              <br></br>
            </span>
          </div>
          <img
            alt="pastedImage"
            src="/external/pastedimage-et0a-500w.png"
            className="data-pasted-image1"
          />
        </div>
        <div className="data-container3">
          <img
            alt="pastedImage"
            src="/external/pastedimage-p2lk-400w.png"
            className="data-pasted-image2"
          />
          <div className="data-publish2 card">
            <svg viewBox="0 0 1024 1024" className="data-icon4">
              <path d="M534 298v224l192 114-32 54-224-136v-256h64zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
            <span className="data-text65">Time Spent Listening</span>
            <span className="data-text66">
              <span>hours:</span>
              <br></br>
              <span>minutes:</span>
              <br></br>
              <span>seconds:</span>
              <br></br>
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Data
