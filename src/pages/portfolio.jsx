import Project from "../components/project";

const cards = [
  {
    id: 1,
    name: "Employee Tracker",
    link: "https://github.com/Liathor/employee_tracker",
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codes: ['TypeScript', 'Node']
  },
  {
    id: 2,
    name: "README Generator",
    link: "https://github.com/Liathor/README.md-Generator",
    image: "https://images.unsplash.com/photo-1513705153361-9bc726c8db67?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codes: ['JavaScript', 'Node']
  },
  {
    id: 3,
    name: "Weather Dashboard",
    link: "https://github.com/Liathor/weather_dashboard",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codes: ['CSS', 'APIs', 'TypeScript', 'HTML', 'JavaScript']
  },
  {
    id: 4,
    name: "Vehicle Builder",
    link: "https://github.com/Liathor/vehicle_builder",
    image: "https://images.unsplash.com/photo-1610213881011-ba006d40d5b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codes: ['TypeScript', 'Node']
  },
  {
    id: 5,
    name: "Portfolio",
    link: "https://github.com/Liathor/portfolio",
    image: "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codes: ['JavaScript', 'CSS', 'HTML', 'React']
  },
];

function Portfolio() {
  return (
    <div>
        <h2>Portfolio</h2>
        <Project cards={cards} />
    </div>
    );
}

export default Portfolio;