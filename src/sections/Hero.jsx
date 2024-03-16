import profileImage from "../assets/images/profile.jpg";
export default function Hero() {
  return (
    <section class="s1">
      <div class="main-container">
        <div class="greeting-wrapper">
          <h1>Hi, I'm Dennis Ivanov</h1>
        </div>

        <div class="intro-wrapper">
          <div class="nav-wrapper">
            <a href="index.html">
              <div class="dots-wrapper">
                <div id="dot-1" class="browser-dot"></div>
                <div id="dot-2" class="browser-dot"></div>
                <div id="dot-3" class="browser-dot"></div>
              </div>
            </a>

            <ul id="navigation">
              <li>
                <a href="index.html#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div class="left-column">
            <img id="profile_pic" src={profileImage} />
            <h5 style={{ textAlign: "center", lineHeight: 0 }}>
              Personalize Theme
            </h5>

            <div id="theme-options-wrapper">
              <div data-mode="light" id="light-mode" class="theme-dot"></div>
              <div data-mode="blue" id="blue-mode" class="theme-dot"></div>
              <div data-mode="green" id="green-mode" class="theme-dot"></div>
              <div data-mode="purple" id="purple-mode" class="theme-dot"></div>
            </div>

            <p id="settings-note">
              *Theme settings will be saved for
              <br />
              your next vist
            </p>
          </div>

          <div class="right-column">
            <div id="preview-shadow">
              <div id="preview">
                <div id="corner-tl" class="corner"></div>
                <div id="corner-tr" class="corner"></div>
                <h3>What I Do</h3>
                <p>
                  I was a lead developer in a past life, now I enjoy teaching
                  courses.
                </p>
                <div id="corner-br" class="corner"></div>
                <div id="corner-bl" class="corner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
