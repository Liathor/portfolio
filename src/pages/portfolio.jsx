import Project from "../components/project";

const cards = [
  {
    id: 1,
    name: "Employee Tracker",
    repo: "https://github.com/Liathor/employee_tracker",
    deployed: "https://drive.google.com/file/d/1uCQRnX6yZydTYcEUpAAq2Y48TJC2AI_e/view",
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codes: ['TypeScript', 'Node']
  },
  {
    id: 2,
    name: "README Generator",
    repo: "https://github.com/Liathor/README.md-Generator",
    deployed: "https://drive.google.com/file/d/1iFL2RczBO0d5ehqle7agPy6OlQqJRZ4J/view",
    image: "https://images.unsplash.com/photo-1513705153361-9bc726c8db67?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codes: ['JavaScript', 'Node']
  },
  {
    id: 3,
    name: "Weather Dashboard",
    repo: "https://github.com/Liathor/weather_dashboard",
    deployed: "https://weather-dashboard-gbh4.onrender.com/?",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codes: ['CSS', 'APIs', 'TypeScript', 'HTML', 'JavaScript']
  },
  {
    id: 4,
    name: "Vehicle Builder",
    repo: "https://github.com/Liathor/vehicle_builder",
    deployed: "https://drive.google.com/file/d/1uPbXEunam6Qsg_ACme-LiQi1OxydG6U5/view",
    image: "https://images.unsplash.com/photo-1610213881011-ba006d40d5b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codes: ['TypeScript', 'Node']
  },
  {
    id: 5,
    name: "Portfolio",
    repo: "https://github.com/Liathor/portfolio",
    deployed: "https://en.wikipedia.org/wiki/HTTP_404",
    image: "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codes: ['JavaScript', 'CSS', 'HTML', 'React']
  },
];

function Portfolio() {
  return (
    <div className="container px-2">
        <h1 className="display-4">Portfolio</h1>
        <div className="album py-5 bg-light">
          <div className="container">
            <Project cards={cards} />
          </div>
        </div>
    </div>
    );
}

export default Portfolio;