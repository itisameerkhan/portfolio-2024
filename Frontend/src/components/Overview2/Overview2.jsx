import "./Overview2.scss";

const Overview2 = () => {
  return (
    <div className="overview-2">
      <div>
        <a
          href="https://drive.google.com/file/d/1Ye2F4NYyMPB5W7uPzla6Q88e2jl3CcaO/view"
          target="_blank"
        >
          <p>RESUME</p>
          <span className="material-symbols-outlined north-east">
            north_east
          </span>
        </a>
      </div>
      <div>
        <a href="mailto:itisameerkhan@gmail.com" target="_blank">
          <p>MAIL</p>
          <span className="material-symbols-outlined north-east">
            north_east
          </span>
        </a>
      </div>
      <div>
        <a
          href="https://open.spotify.com/playlist/6vSky7ETxcqJW7Z43GPxI0?si=e304f02aeedd4455"
          target="_blank"
        >
          <p>SPOTIFY PLAYLIST</p>
          <span className="material-symbols-outlined north-east">
            north_east
          </span>
        </a>
      </div>
      <div className="coming-soon">
        <a>
          <p>BLOGS</p>
          <span className="material-symbols-outlined">lock</span>
        </a>
      </div>
    </div>
  );
};

export default Overview2;
