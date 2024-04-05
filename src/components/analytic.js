import React from 'react'

import PropTypes from 'prop-types'

import './analytic.css'

const Analytic = (props) => {
  return (
    <div className={`analytic-container ${props.rootClassName} `}>
      <div className="analytic-publish card">
        <svg viewBox="0 0 1024 1024" className="analytic-icon">
          <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
        </svg>
        <span className="analytic-text">{props.text}</span>
        <span className="analytic-text01">
          <span className="analytic-text02">1.</span>
          <br className="analytic-text03"></br>
          <span className="analytic-text04">2.</span>
          <br className="analytic-text05"></br>
          <span className="analytic-text06">3.</span>
          <br className="analytic-text07"></br>
          <span className="analytic-text08">4.</span>
          <br className="analytic-text09"></br>
          <span className="analytic-text10">5.</span>
          <br className="analytic-text11"></br>
          <span className="analytic-text12">6.</span>
          <br className="analytic-text13"></br>
          <span className="analytic-text14">7.</span>
          <br className="analytic-text15"></br>
          <span className="analytic-text16">8.</span>
          <br className="analytic-text17"></br>
          <span className="analytic-text18">9.</span>
          <br className="analytic-text19"></br>
          <span className="analytic-text20">10.</span>
          <br className="analytic-text21"></br>
          <span className="analytic-text22">11.</span>
          <br className="analytic-text23"></br>
          <span className="analytic-text24">12.</span>
          <br className="analytic-text25"></br>
          <span className="analytic-text26">13.</span>
          <br className="analytic-text27"></br>
          <span className="analytic-text28">14.</span>
          <br className="analytic-text29"></br>
          <span className="analytic-text30">15.</span>
          <br></br>
        </span>
      </div>
      <img
        alt={props.pastedImageAlt}
        src={props.pastedImageSrc}
        className="analytic-pasted-image"
      />
    </div>
  )
}

Analytic.defaultProps = {
  rootClassName: '',
  text: 'Most Listened to Artists',
  pastedImageSrc: '/external/pastedimage-bkx9-500w.png',
  pastedImageAlt: 'pastedImage',
}

Analytic.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  pastedImageAlt: PropTypes.string,
}

export default Analytic
