import profileImage from "../assets/images/profile.jpg";
export default function Hero() {
  return (
    <section className="s1">
      <div className="main-container">
        <div className="greeting-wrapper">
          <h1>Hi, I'm Mahmudul Hasan</h1>
        </div>

        <div className="intro-wrapper">
          <div className="nav-wrapper">
            <a href="index.html">
              <div className="dots-wrapper">
                <div id="dot-1" className="browser-dot"></div>
                <div id="dot-2" className="browser-dot"></div>
                <div id="dot-3" className="browser-dot"></div>
              </div>
            </a>

            <ul id="navigation">
              <li>
                <a href="index.html#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="left-column">
            <img id="profile_pic" src={profileImage} />
            <h5 style={{ textAlign: "center", lineHeight: 0 }}>
              Personalize Theme
            </h5>

            <div id="theme-options-wrapper">
              <div data-mode="light" id="light-mode" className="theme-dot"></div>
              <div data-mode="blue" id="blue-mode" className="theme-dot"></div>
              <div data-mode="green" id="green-mode" className="theme-dot"></div>
              <div data-mode="purple" id="purple-mode" className="theme-dot"></div>
            </div>

            <p id="settings-note">
              *Theme settings will be saved for
              <br />
              your next vist
            </p>
          </div>

          <div className="right-column">
            <div id="preview-shadow">
              <div id="preview">
                <div id="corner-tl" className="corner"></div>
                <div id="corner-tr" className="corner"></div>
                <h3>What I Do</h3>
                <p>
                  I was a lead developer in a past life, now I enjoy teaching
                  courses.
                </p>
                <div id="corner-br" className="corner"></div>
                <div id="corner-bl" className="corner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
