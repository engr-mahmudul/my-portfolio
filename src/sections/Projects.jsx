import dashBoard from "../assets/images/dash.jpg";
import eCommerce from "../assets/images/ecom.jpg";
import membership from "../assets/images/membership_site.jpg";
export default function Projects() {
  return (
    <div className="s1">
      <div className="main-container">
        <h3 style={{ textAlign: "center" }}>Some of my past projects</h3>

        <div className="post-wrapper">
          <div>
            <div className="post">
              <img className="thumbnail" src={dashBoard} />
              <div className="post-preview">
                <h6 className="post-title">Laboratory Management System</h6>
                <p className="post-intro">
                  Designed built & mantained a the lab managment system for FOI
                  Laboratories
                </p>
                <a href="post.html">Read More</a>
              </div>
            </div>
          </div>

          <div>
            <div className="post">
              <img className="thumbnail" src={membership} />
              <div className="post-preview">
                <h6 className="post-title">Online Store - CoursePost Title</h6>
                <p className="post-intro">
                  Online store with paypal payments intergration and guest user
                  shopping
                </p>
                <a href="post.html">Read More</a>
              </div>
            </div>
          </div>

          <div>
            <div className="post">
              <img className="thumbnail" src={eCommerce} />
              <div className="post-preview">
                <h6 className="post-title">Membership Website</h6>
                <p className="post-intro">
                  Modulized guide for online courses with step by step
                  intructions
                </p>
                <a href="post.html">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
