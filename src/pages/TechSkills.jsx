const TechSkills = () => {
  return (
    <>
      <h2>Technical & Other Skills</h2>
      <section>
        <h3>Front End Development</h3>
        <ul class="withImg">
          <li class="two">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="html5 emblem"
            />
            <div>
              HTML<sub>5</sub>
            </div>
          </li>
          <li class="two">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              alt="css3 emblem"
            />
            <div>
              CSS<sub>3</sub> (including Flexbox, Grid, Custom Properties)
            </div>
          </li>
          <li class="two">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Deepin_Icon_Theme_%E2%80%93_text-x-javascript_%286%29.svg"
              alt="JavaScript emblem"
              class="emblem"
            />
            JavaScript ES6+
          </li>
          <li class="two">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React emblem"
              class="emblem"
            />
            React/.jsx
          </li>
          <li><strong>Responsive Design</strong></li>
          <li><strong>DOM (Document Object Model) Manipulation</strong></li>
        </ul>
      </section>
      <section>
        <h3>Back End Development</h3>
        <ul class="withImg">
          <li class="two">
            <img
              style={{background: "white"}}
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
              alt="Node.js emblem"
            />
            Node.js
          </li>
          <li class="two">
            <img
              style={{background: "white"}}
              src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
              alt="Express.js emblem"
              id="express"
            />
            Express.js
          </li>
          <li class="two">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d7/SQL_Image.svg"
              alt="SQL emblem"
            />
            SQL (Joins, Queries, Error Handling)
          </li>
          <li class="two">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg"
              alt="socket.io emblem"
            />
            Socket.io
          </li>
        </ul>
      </section>
      <section>
        <h3>Tools & Others</h3>
        <ul class="withImg">
          <li class="two">
            <img
              style={{background: "white"}}
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="github emblem"
            />
            GitHub
          </li>
          <li class="two">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
              alt="VS Code emblem"
            />
            VS Code
          </li>
          <li><strong>Object/Array Manipulation</strong></li>
          <li><strong>Test Driven Development (ViTest, familiar with Playwright)</strong></li>
        </ul>
      </section>
      <section>
        <h3>Soft Skills</h3>
        <ul>
          <li>Creative Problem Solving</li>
          <li>Attention to Detail</li>
          <li>Project Management (Well Organized)</li>
          <li>Team Collaboration</li>
          <li>Quick Learner</li>
          <li>High Integrity</li>
        </ul>
      </section>
    </>
  );
};

export default TechSkills;
