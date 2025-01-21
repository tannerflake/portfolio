function Project({ title, image, repoLink }) {
    return (
      <div className="project">
        <img src={image} alt={`${title} screenshot`} className="project-image" />
        <h3>{title}</h3>
        <div className="project-links">
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    );
  }
  
  export default Project;