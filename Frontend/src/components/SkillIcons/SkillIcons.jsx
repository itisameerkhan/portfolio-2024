const SkillIcons = ({ data }) => {
  return (
    <div className="skill-icons">
      <img src={`https://skillicons.dev/icons?i=${data}`} alt="" />
      <p className="s-m-name">{data}</p>
    </div>
  );
};

export default SkillIcons;
