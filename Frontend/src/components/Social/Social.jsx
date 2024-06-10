const Social = ({ data }) => {
  return (
    <a href={data.link} target="_blank">
      <div className="skill-icons">
        <img src={data.img} alt="" />
        <p className="s-m-name">{data.name}</p>
      </div>
    </a>
  );
};

export default Social;
