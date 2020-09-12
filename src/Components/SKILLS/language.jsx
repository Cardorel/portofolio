import React from "react";

export default function Language() {
  return (
    <div className="skill_language">
      <div className="header_language">
        <p>Language</p>
      </div>
      <div className="language_container">
        <div className="language">
          <div className="language_left">
            <div className="skill_french">
              <p>French:</p>
              <p>
                <span role="img" aria-label="level">
                  ⭐⭐⭐⭐⭐
                </span>
              </p>
            </div>
            <div className="skill_ukr">
              <p>Ukrainian:</p>
              <p>
                <span role="img" aria-label="level">
                  ⭐⭐⭐⭐
                </span>
              </p>
            </div>
          </div>
          <div className="language_right">
            <div className="skill_english">
              <p>English:</p>
              <p>
                <span role="img" aria-label="level">
                  ⭐⭐⭐
                </span>
              </p>
            </div>
            <div className="skill_russ">
              <p>Russian:</p>
              <p>
                <span role="img" aria-label="level">
                  ⭐⭐⭐
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}