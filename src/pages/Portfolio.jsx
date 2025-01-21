import Project from "../components/Project";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <Project title="Rock, Paper, Scissors Game" image='./src/assets/RPS.png' repoLink="https://github.com/tannerflake/vehicle-simulator" />
      <Project title="Employee Tracker CMS" image="./src/assets/employee-tracker.png" repoLink="https://github.com/tannerflake/employee-tracker" />
    </div>
  );
}
