export default function Resume() {
    return (
      <div className="container text-center px-2">
        <h1 className="display-4">Resume</h1>
        <div className="row align-items-start">
          <div className="col">
            <h3>Front-end Proficiences</h3>
            <ul className="list-group">
              <li className="list-group-item">HTML</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">Javascript</li>
              <li className="list-group-item">React</li>
              <li className="list-group-item">Bootstrap</li>
            </ul>
          </div>
          <div className="col">
            <h3>Back-end Proficiencies</h3>
            <ul className="list-group">
              <li className="list-group-item">SQL</li>
              <li className="list-group-item">Node</li>
              <li className="list-group-item">APIs</li>
            </ul>
          </div>
        </div>
        <div className="row align-items-center m-2">
          <h3>My Resume</h3>
            <a href="https://drive.google.com/uc?export=download&id=1HMgyMQ2uvHt9WmrYR54cobgKgZ162OF_" download>
              <button>Download PDF</button>
            </a>
        </div>
      </div>
    );
  }