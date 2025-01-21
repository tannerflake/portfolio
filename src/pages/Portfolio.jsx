import Project from "../components/Project";
import RPSImage from "../assets/RPS.png";
import EmployeeTrackerImage from "../assets/employee-tracker.png";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <Project title="Rock, Paper, Scissors Game" image={RPSImage} repoLink="https://github.com/tannerflake/vehicle-simulator" />
      <Project title="Employee Tracker CMS" image={EmployeeTrackerImage} repoLink="https://github.com/tannerflake/employee-tracker" />
    </div>
  );
}