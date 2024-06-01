const ProjectContainer = ({ data }) => {
  return (
    <div className="p-1 project-div">
      <div className="p-d-left">
        <p>{data.title}</p>
        <p>{data.description}</p>
        <a href={data.link} target="_blank" className="btn-a">
          <button>Visit</button>
        </a>
      </div>
      <div className="p-d-right">
        <img src={data.img} alt="img" className="p-d-img" />
      </div>
    </div>
  );
};

export default ProjectContainer;
