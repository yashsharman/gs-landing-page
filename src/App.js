import "./App.css";
import logo from "./resources/Group1054.png";
import btnArrow from "./resources/btn-arrow.png";
import ellipseVideo from "./resources/ellipseVideo.png";
import dropdownIcon from "./resources/dropdownIcon.png";
import menu from "./resources/menu.png";
import startacall from "./resources/startacall.png";
import devices from "./resources/devices.png";
import click from "./resources/click.png";
import optional from "./resources/optional.png";
import noapp from "./resources/noapp.png";
import point from "./resources/point.png";

import technologies from "./resources/technologies.png";

import Agent from "./resources/agent.png";
import CallRouting from "./resources/call-routing.png";
import Calendar from "./resources/calendar.png";
import Recording from "./resources/recording.png";
import Reminders from "./resources/reminder.png";
import Triaging from "./resources/triaging.png";
import Scheduling from "./resources/scheduling.png";
import Dashboard from "./resources/dashboard.png";

import sameen from "./resources/sameen.png";
import star from "./resources/star.png";

import appstore from "./resources/app-store.png";
import googleplay from "./resources/google-play.png";

import fb from "./resources/fb.png";
import linkedin from "./resources/linkedin.png";
import twitter from "./resources/twitter.png";
import copyright from "./resources/copyright.png";

function App() {
  return (
    <>
      <section className="frame2112">
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <ul>
              <li className="dropdown">
                <div className="dropbtn">
                  Use Case
                  <div className="downsymb">
                    <img className="dropdownIcon" src={dropdownIcon} alt="" />
                  </div>
                </div>
                <div className="dropdown-content">
                  <li className="dd-li">Retail</li>
                  <li className="dd-li">E-Commerce</li>
                  <li className="dd-li">SaaS</li>
                </div>
              </li>
              <li>How it works</li>
              <li>Pricing</li>
              <li>Sign in</li>
            </ul>
            <div className="menu">
              <img className="menu" src={menu} alt="menu" />
            </div>
          </div>
        </nav>
        <div className="intro">
          <div className="info">
            <h1>Meet your customers face-to-face</h1>
            <h2>Instantly on your website/app</h2>
            <p>
              Integrate video calling on your website/app in under 5 minutes.{" "}
              <br />
              your products, assist them with their purchase or help resolve
              issues faster with video.
            </p>
            <br />
            <button className="btn info-btn">
              <div className="inside-btn">
                Register for a demo
                <img className="btnArrow" src={btnArrow} alt="" />
              </div>
            </button>
          </div>
          <div className="ellipse">
            <img
              className="ellipseVideo"
              src={ellipseVideo}
              alt="ellipse-video"
            />
          </div>
        </div>
      </section>
      <section className="frame2113">
        <div className="top-headings">
          <h2 className="heading">
            Seamless one-one conversations on your website
          </h2>
          <p className="grey-p">
            Allow your customers to call you whenever they need you. Connect
            them instantly to an agent without taking them away from your
            website.
          </p>
        </div>
        <div className="touch-yt">
          <div className="get-in-touch">
            <div className="touch">
              <img className="touch-imgs" src={devices} alt="devices" /> works
              on all devices
            </div>
            <div className="touch">
              <img className="touch-imgs" src={click} alt="click" /> 1-Click
              video calls directly from browser
            </div>
            <div className="touch">
              <img className="touch-imgs" src={optional} alt="optional" />{" "}
              Optional video for customers
            </div>
            <div className="touch">
              <img className="touch-imgs" src={noapp} alt="noapp" /> No app
              downloads
            </div>
            <button className="btn touch-btn">
              Get in touch <img className="btnArrow" src={btnArrow} alt="" />{" "}
            </button>
          </div>
          <div className="start-a-call">
            <img src={startacall} alt="startacall" />
          </div>
        </div>
      </section>
      <section className="frame2114">
        <div className="divider"></div>
        <div className="top-headings">
          <p className="grey-p">
            Worried about missing calls from customers? What if your team is
            busy or not available?
          </p>
          <h2 className="heading-let">
            Let customers schedule calls when you are not around
          </h2>
        </div>
        <div className="schedule">
          <div className="schedule-call card">
            When would you like to <br /> schedule the call?
            <div className="schedule-dates">
              <div className="schedule-date">
                <div className="day">WED</div>
                <div className="date">Mar 6</div>
              </div>
              <div className="schedule-date">
                <div className="day">THU</div>
                <div className="date">Mar 7</div>
              </div>
              <div className="schedule-date">
                <div className="day">FRI</div>
                <div className="date">Mar 8</div>
              </div>
            </div>
          </div>

          <div className="callback">
            <h3 className="heading2">
              {" "}
              Schedule callback when you are not around
            </h3>

            <p className="callback-p">
              <img className="point" src={point} alt="point" /> Automatically
              capture contact details and schedule callback
            </p>
            <p className="callback-p">
              <img className="point" src={point} alt="point" /> Book meeting
              only during your office hours
            </p>
            <p className="callback-p">
              <img className="point" src={point} alt="point" /> Use any software
              to complete the call- Zoom, Meet, or just phone
            </p>
          </div>
        </div>

        <div className="schedule">
          <div className="callback">
            <h3 className="heading2">
              Sync your team’s calendar and manage <br /> schedules without a
              separate calendar software
            </h3>

            <p className="callback-p">
              <img className="point" src={point} alt="point" /> Show
              availability across your agents’ calendar
            </p>
            <p className="callback-p">
              <img className="point" src={point} alt="point" /> Send reminders
              so that they don’t forget their appointments
            </p>
            <p className="callback-p">
              <img className="point" src={point} alt="point" /> Add calls to
              your calendar or CRM
            </p>
          </div>
          <div className="sync-card card">
            Sync your Googe Calendar account and update it as calls gets
            scheduled on Gumstack
            <div className="input">
              <input
                type="email"
                name="email"
                id=""
                placeholder="George@gmail.com"
              />
              <button className="add-btn">Add</button>
            </div>
          </div>
        </div>
        <div className="center-btn">
          <button className="btn">
            Let’s get started <img className="btnArrow" src={btnArrow} alt="" />
          </button>
        </div>
      </section>

      <section className="frame2115">
        <div className="integrate">
          <div className="integrate-info">
            <h2 className="heading">Integrate in under 5 minutes</h2>
            <p className="callback-p">
              <img className="point" src={point} alt="point" /> Integrate using
              Google Tag Manager, or add a few lines of script to your website.
            </p>
            <p className="callback-p">
              <img className="point" src={point} alt="point" />
              1-click installations for Shopify, Wordpress, Wix.
            </p>
            <p className="callback-p">
              <img className="point" src={point} alt="point" />
              Install easily on Webflow, Squarespace and more.
            </p>
            <button className="btn dev-btn">
              Talk to our developer
              <img className="btnArrow" src={btnArrow} alt="" />
            </button>
            <div className="powered">Powered by Gumstack</div>
          </div>
          <div className="technology">
            <img src={technologies} alt="technologies" />
          </div>
        </div>
      </section>

      <section className="frame2116">
        <div className="top-headings">
          <h2 className="heading">
            Everything you need to support your customers over video call
          </h2>
          <p className="grey-p">
            Just install your script, add your team and start delighting your
            customers.
          </p>
        </div>
        <div className="features">
          <div className="f">
            <img src={Agent} alt="Agent" />
            <h3 className="f-h3">Agent Inbox</h3>
            <p className="f-p">
              Allows agents to manage their queue & answer customers from any
              device.
            </p>
          </div>

          <div className="f">
            <img src={CallRouting} alt="Call Routing" />
            <h3 className="f-h3">Call Routing</h3>
            <p className="f-p">Route your calls to the right agent.</p>
          </div>

          <div className="f">
            <img src={Calendar} alt="Calendar" />
            <h3 className="f-h3">Calendar</h3>
            <p className="f-p">
              Manage your team’s schedules, availability and workload.
            </p>
          </div>

          <div className="f">
            <img src={Recording} alt="Recording" />
            <h3 className="f-h3">Recording</h3>
            <p className="f-p">
              Use recordings to train your agents to be more effective.
            </p>
          </div>

          <div className="f">
            <img src={Reminders} alt="Reminders" />
            <h3 className="f-h3">Reminders</h3>
            <p className="f-p">
              Notifications and alerts to agents and customers, so no calls go
              unanswered.
            </p>
          </div>

          <div className="f">
            <img src={Triaging} alt="Triaging" />
            <h3 className="f-h3">Triaging</h3>
            <p className="f-p">
              Manually assign calls to agents based on their schedules.
            </p>
          </div>

          <div className="f">
            <img src={Scheduling} alt="Scheduling" />
            <h3 className="f-h3">Scheduling</h3>
            <p className="f-p">
              Automatically assign scheduled calls to the available agent.
            </p>
          </div>

          <div className="f">
            <img src={Dashboard} alt="Dashboard" />
            <h3>Dashboard</h3>
            <p className="f-p">
              Monitor response times and improve the overall customer
              experience.
            </p>
          </div>
          <div className="center-btn">
            <button className="btn">
              Get started for free{" "}
              <img className="btnArrow" src={btnArrow} alt="" />
            </button>
          </div>
        </div>
      </section>

      <section className="frame2117">
        <div className="top-headings">
          <h2 className="heading">You are in good company</h2>
          <p className="grey-p">
            Gumstack allows your customers to call you directly from your online
            store, and get them to video shop with the help of your agents
          </p>
        </div>
        <div className="profile">
          <img src={sameen} alt="sameen" />
          <h3 className="profile-h3 profile-name">Sameen Eajaz</h3>
          <h3 className="profile-h3">COO, Co-Founder, Koskii</h3>
          <div className="stars">
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
          </div>
          <p className="profile-p">
            “The app is exactly what we were looking for and has helped us add
            another sales channel very quickly giving our customers a discovery
            platform to explore high asp products”
          </p>
        </div>
      </section>

      <section className="frame2118">
        <h2 className="trail-h">Ready to meet your customers face to face?</h2>

        <button className="btn info-btn">
          <div className="inside-btn">
            Get started for free
            <img className="btnArrow" src={btnArrow} alt="" />
          </div>
        </button>
      </section>
      <footer className="frame2119">
        <div className="bottom-nav">
          <div className="nav-group">
            <h3 className="nav-h3">Use cases</h3>
            <p className="nav-p">Retail</p>
            <p className="nav-p">E-Commerce</p>
            <p className="nav-p">SaaS</p>
          </div>
          <div className="nav-group">
            <h3 className="nav-h3">Integrations</h3>
            <p className="nav-p">Shopify</p>
            <p className="nav-p">Google Tag Manager</p>
          </div>
          <div className="nav-group">
            <h3 className="nav-h3">Compare</h3>
            <p className="nav-p">Vs Whatsapp</p>
            <p className="nav-p">Vs Facetime</p>
          </div>
          <div className="nav-group">
            <h3 className="nav-h3">Support</h3>
            <p className="nav-p">Talk to us on Gumstack</p>
            <p className="nav-p">Chat with us</p>
          </div>
          <div className="nav-group">
            <h3 className="nav-h3">Resources</h3>
            <p className="nav-p">Developer API</p>
            <p className="nav-p">Download Agent apps</p>
            <div className="resource-imgs">
              <img className="resource-img" src={appstore} alt="appstore" />
              <img className="resource-img" src={googleplay} alt="googleplay" />
            </div>
          </div>
        </div>
        <div className=" footer-divider"></div>
        <div className="socials">
          <div className="socials-div">
            <img className="socials-img" src={fb} alt="fb" />
            <img className="socials-img" src={linkedin} alt="linkedin" />
            <img className="socials-img" src={twitter} alt="twitter" />
          </div>
          <div className="socials-div">
            <img className="copyright" src={copyright} alt="copyright" />
            Copyright Gumstack Inc. 2020- All rights reserved
          </div>
          <div className="socials-div">
            <div className="TC">Terms & Conditions</div>
            <div className="PP">Privacy Policy</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
