import followImage from "../assets/images/bg-1.svg";
// import followImage from "../assets/images/follow.jpg";
export default function MoreAbout() {
  return (
    <section className="s2">
      <div className="main-container">
        <div className="about-wrapper">
          <div className="about-me">
            <h4>MORE ABOUT ME</h4>

            <p>
              I build new projects just to tickle my brain and love teaching
              others how they are made.
            </p>

            <p>
              While I keep busy teaching courses, I still take interviews in
              search of a great team & projects that interest me.
            </p>

            <hr />

            <h4>TOP EXPERTISE</h4>

            <p>
              Fullstack developer with primary focus on Django + React:{" "}
              <a target="_blank" href="resume.pdf">
                Download Resume
              </a>
            </p>

            <div id="skills">
              <ul>
                <li>Python</li>
                <li>Django</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Postgres</li>
              </ul>

              <ul>
                <li>Google Maps API</li>
                <li>JS Charts</li>
                <li>AWS (RDS/S3)</li>
                <li>Heroku</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
          </div>

          <div className="social-links">
            <img
              id="social_img"
              src={followImage}
              style={{ width: "50%", margin: "0 auto", marginTop: "15%" }}
            />
            <h3>Find me on Social Media</h3>

            <a target="_blank" href="https://www.youtube.com/c/dennisivy">
              YouTube: @DennisIvy
            </a>
            <br />
            <a target="_blank" href="https://twitter.com/dennisivy11">
              Twitter: @DennisIvy11
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
