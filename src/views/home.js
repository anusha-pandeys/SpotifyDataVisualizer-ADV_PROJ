import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import ActiveUsers from '../components/active-users'
import YouTube from '../components/you-tube'
import Testimonal from '../components/testimonal'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Active Online Software Page</title>
        <meta property="og:title" content="Active Online Software Page" />
      </Helmet>
      <section className="home-features">
        <span className="home-text">
          Ready to see your music for the first time?
        </span>
        <img
          alt="pastedImage"
          src="/pastedimage-cdo-1500w.png"
          loading="lazy"
          className="home-image"
        />
        <div className="home-title">
          <span className="home-text001">
            <span>
              Let&apos;s grow your social media
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>presence</span>
          </span>
          <span className="home-text005">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>eiusmod tempor incididunt.</span>
          </span>
        </div>
        <div className="home-cards">
          <div className="home-container01">
            <div className="card">
              <img
                alt="pastedImage"
                src="/pastedimage-fii6m-200h.png"
                className="home-icon"
              />
              <span className="home-text008">Schedule</span>
              <span className="home-text009">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>
            <div className="home-publish card">
              <img
                alt="pastedImage"
                src="/pastedimage-mimg-200h.png"
                className="home-icon01"
              />
              <span className="home-text010">Publish</span>
              <span className="home-text011">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
              </span>
            </div>
          </div>
          <div className="home-container02">
            <div className="card home-analyze">
              <img
                alt="pastedImage"
                src="/pastedimage-l6p-200h.png"
                className="home-icon02"
              />
              <span className="home-text012">Analyze</span>
              <span className="home-text013">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>
            <div className="card">
              <img
                alt="pastedImage"
                src="/pastedimage-vyi5-200h.png"
                className="home-icon03"
              />
              <span className="home-text014">Get leads</span>
              <span className="home-text015">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-quote-container">
        <div className="home-quote">
          <span className="home-message">
            “Scale your content, grew lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.”
          </span>
          <div className="home-author">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdpcmx8ZW58MHx8fHwxNjY0ODA5MjE1&amp;ixlib=rb-1.2.1&amp;w=200"
              className="home-avatar"
            />
            <span className="home-quote1">
              <span className="home-text016">—  Peter McPau</span>
              <span>, Founder and CEO, Active</span>
            </span>
          </div>
        </div>
      </section>
      <section className="home-statistics">
        <div className="home-container03">
          <ActiveUsers caption="— Active users" statistic="3.5M"></ActiveUsers>
          <ActiveUsers caption="— Brands" statistic="50k"></ActiveUsers>
          <ActiveUsers
            caption="— Accounts Managed"
            statistic="250K"
          ></ActiveUsers>
          <ActiveUsers caption="— Active leads" statistic="30M"></ActiveUsers>
        </div>
      </section>
      <section className="home-banners">
        <div className="home-banner-manage">
          <div className="home-container04">
            <div className="home-left">
              <span className="sub-title">Content Management</span>
              <span className="home-text019 title">
                Manage all your platforms in just one place.
              </span>
              <span className="home-text020">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
              <div className="home-get-started template-button">
                <span className="home-text021">Get started</span>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="pastedImage"
                src="/pastedimage-wvmq%201-1200w.png"
                className="home-cards-image"
              />
            </div>
          </div>
        </div>
        <div className="home-banner-advanced-analytics">
          <div className="home-centered-container">
            <div className="home-image-container1">
              <img
                alt="pastedImage"
                src="/test-1200w.png"
                className="home-cards-image1"
              />
            </div>
            <div className="home-right">
              <span className="sub-title">
                Reporting Metrics
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <h2 className="home-text023 title">
                Advanced analytics, easy to understand.
              </h2>
              <div className="home-category">
                <span className="home-text024">Power reports</span>
                <span className="home-text025">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <span className="home-text026">Example -&gt;</span>
              </div>
              <div className="home-category1">
                <span className="home-text027">Power reports</span>
                <span className="home-text028">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <span className="home-text029">Example -&gt;</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-container05">
            <div className="home-left1">
              <span className="home-text030">Improve Scheduling</span>
              <h2 className="home-text031 title">
                Powerful scheduler that saves you time
              </h2>
              <span className="home-text032">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
              <div className="home-get-started1 template-button">
                <span className="home-text033">Get started</span>
              </div>
            </div>
            <div className="home-image-container2">
              <img
                alt="pastedImage"
                src="/83d913a38a75e38d7cef4fea757ed7ed-1200w.png"
                className="home-cards-image2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-integrations">
        <div className="home-centered-container1">
          <div className="home-heading">
            <span className="sub-title">Integrations</span>
            <span className="title">
              Integrated with the tools you know and love
            </span>
            <span className="home-text036">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
            </span>
          </div>
          <div className="home-pills-container">
            <div className="home-pills">
              <div className="home-container06">
                <YouTube></YouTube>
                <YouTube pastedImageSrc="/logos/group%201012-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/layer1-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group-200h.png"></YouTube>
              </div>
              <div className="home-container07">
                <YouTube pastedImageSrc="/logos/pinterest%20logo-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201014-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201015-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201017-200h.png"></YouTube>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-how-it-works">
        <div className="home-centered-container2">
          <div className="home-heading1">
            <span className="home-text037">How it works</span>
            <span className="home-text038 title">
              Being social and getting leads has never been easier
            </span>
          </div>
          <div className="home-category2">
            <div className="home-headng">
              <span className="home-text039">
                1 — Sign up
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text040">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
              <div className="home-get-started2 template-button">
                <span className="home-text041">Get started</span>
              </div>
            </div>
            <div className="home-container08">
              <img
                alt="pastedImage"
                src="/pastedimage-k5xi%201-1200w.png"
                className="home-pasted-image"
              />
            </div>
          </div>
          <div className="home-row">
            <div className="home-category3">
              <div className="home-headng1">
                <span className="home-text042">2 — Act</span>
                <span className="home-text043">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/pastedimage-ibg-1200w.png"
                className="home-pasted-image1"
              />
            </div>
            <div className="home-category4">
              <div className="home-headng2">
                <span className="home-text044">2 — Act</span>
                <span className="home-text045">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/pastedimage-3c4o-1200w.png"
                className="home-pasted-image2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-pricing">
        <div className="home-centered-container3">
          <div className="home-heading2">
            <span className="home-text046 title">
              Pricing for all kind of businesses
            </span>
            <span className="home-text047">
              Create next-generation solutions for small business customers with
              pricing options that accommodate everyone.
            </span>
            <div className="home-selection">
              <span className="home-text048">Monthly</span>
              <span className="home-text049">Yearly</span>
            </div>
          </div>
          <div className="home-cards1">
            <div className="home-card">
              <span className="home-text050">Free</span>
              <span className="home-text051">
                Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed doliqua.
              </span>
              <div className="home-get-started3 template-button">
                <span className="home-text052">Start for free</span>
              </div>
              <span className="home-text053">What&apos;s included</span>
              <div className="home-bullet-points">
                <div className="home-point">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon04"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text054">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point01">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text055">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
            <div className="home-card1">
              <span className="home-text056">Pay as you go</span>
              <span className="home-text057">
                <span>Launch your lorem for $49/mo</span>
                <br></br>
                <span>lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              </span>
              <div className="home-get-started4 template-button">
                <span className="home-text061">
                  <span>Upgrade now</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text064">What&apos;s included</span>
              <div className="home-bullet-points1">
                <div className="home-point02">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon08"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text065">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point03">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text066">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point04">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon12"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text067">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point05">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon14"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text068">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
            <div className="home-card2">
              <span className="home-text069">Enterprise</span>
              <span className="home-text070">
                <span>
                  Custom-built lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed doliqua.
                </span>
                <br></br>
              </span>
              <div className="home-get-started5 template-button">
                <span className="home-text073">
                  <span>Contact us</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text076">What&apos;s included</span>
              <div className="home-bullet-points2">
                <div className="home-point06">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon16"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text077">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point07">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon18"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text078">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point08">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon20"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text079">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point09">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon22"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text080">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonals">
        <div className="home-left2">
          <span className="home-text081">Testimonals</span>
          <span className="home-text082 title">
            What people say about Active
          </span>
        </div>
        <div className="home-right1">
          <div className="home-column">
            <Testimonal
              quote='"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”'
              avatarSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
            <Testimonal
              from="Social Club"
              name="Jessica Smith"
              quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.\u2028 Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”"
              avatarSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
            <Testimonal
              from="BeMe"
              name="Logan Boy"
              quote="“Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo..”"
              avatarSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
            <Testimonal
              from="Hello W."
              name="Laraine Summers"
              quote="“Rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.”"
              avatarSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
          </div>
          <div className="home-column1">
            <Testimonal
              from="Handsly"
              name="William McPau"
              quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
              avatarSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
            <Testimonal
              from="Share"
              name="Mariah Mae"
              quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
              avatarSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
            <Testimonal
              from="Gather"
              name="John Finati"
              quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'
              avatarSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
            <Testimonal
              from="Zigo"
              name="Mary Pau"
              quote='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ”'
              avatarSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
          </div>
        </div>
        <span className="home-text083">
          <span>Show more</span>
          <br></br>
        </span>
      </section>
      <section className="home-action-bar">
        <div className="home-action">
          <div className="home-heading3">
            <span className="home-text086 title">
              <span>Get leads now </span>
              <br></br>
              <span>with Active!</span>
            </span>
            <span className="home-text090">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <div className="home-get-started6 template-button">
              <span className="home-text091">
                <span>Start free</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-images">
            <img
              alt="image"
              src="/e564eaa3c4fab71792794d666a281742-1200w.png"
              className="home-image1"
            />
          </div>
        </div>
      </section>
      <section className="home-faq">
        <div className="home-heading4">
          <span className="home-text094 title">Frequently asked questions</span>
          <span className="home-text095">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
          </span>
        </div>
        <div className="home-accordion">
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header">
              <span className="home-text096">
                — What is sit amet, consectetur adipiscing elit, sed do?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text097">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div className="accordionContainer">
            <div className="home-header1">
              <span className="home-text098">
                — Why is dolore magna aliqua excepteur sint
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text099">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header2">
              <span className="home-text100">
                — Is excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text101">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header3">
              <span className="home-text102">
                — Who quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text103">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header4">
              <span className="home-text104">
                — Is minim veniam quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text105">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container10">
            <Script
              html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-top">
          <div className="home-left3">
            <span className="home-text106">Subscribe to our newsletter</span>
            <div className="home-subscription">
              <input
                type="email"
                placeholder="Enter your email"
                className="home-textinput input"
              />
              <div className="home-subscribe">
                <span className="home-text107">Subscribe</span>
              </div>
            </div>
            <span className="home-text108">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </span>
            <div className="home-contact">
              <span className="home-text109">Contact</span>
              <a
                href="mailto:use@active-app.com?subject=Support"
                className="home-link"
              >
                use@active-app.com
              </a>
            </div>
          </div>
          <div className="home-right2">
            <div className="home-category5">
              <span className="home-text110">Solutions</span>
              <div className="home-links">
                <span className="home-text111">Responsive Web Design</span>
                <span className="home-text112">Responsive Prototypesv</span>
                <span className="home-text113">Design to Code</span>
                <span className="home-text114">Static Website Builder</span>
                <span className="home-text115">Static Website Generator</span>
              </div>
            </div>
            <div className="home-category6">
              <span className="home-text116">Company</span>
              <div className="home-links1">
                <span className="home-text117">About</span>
                <span className="home-text118">Team</span>
                <span className="home-text119">News</span>
                <span className="home-text120">Partners</span>
                <span className="home-text121">Careers</span>
                <span className="home-text122">Press &amp; Media</span>
              </div>
            </div>
            <div className="home-category7">
              <span className="home-text123">Solutions</span>
              <div className="home-links2">
                <span className="home-text124">Twitter</span>
                <span className="home-text125">Linkedin</span>
                <span className="home-text126">Crunchbase</span>
                <span className="home-text127">Instagram</span>
                <span className="home-text128">Facebook</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-bottom">
          <img
            alt="pastedImage"
            src="/pastedimage-no9b-1500h.png"
            className="home-branding"
          />
          <span className="home-text129">Copyright © Active - 2022</span>
        </div>
      </footer>
    </div>
  )
}

export default Home
