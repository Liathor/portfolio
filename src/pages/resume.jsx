export default function Resume() {
    return (
      <div>
        <h2>Resume</h2>
          <h3>Download PDF</h3>
            <a href="http://localhost:5000/files/sample.pdf" download>
              <button>Download PDF</button>
            </a>
          <h3>Front-end Proficiences</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>
          <h3>Back-end Proficiencies</h3>
            <ul>
              <li>SQL</li>
              <li>Node</li>
              <li>APIs</li>
            </ul>
      </div>
    );
  }