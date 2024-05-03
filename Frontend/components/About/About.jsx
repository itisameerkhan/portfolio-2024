import "./About.scss";
import { cloudinary_img } from "../../utils/constants";

const About = () => {
  return (
    <div id="about">
      <div className="about-inner">
        {/* <div className="about-left">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {cloudinary_img.map((data) => (
              <SwiperSlide key={data}>
                <img
                  src={`https://res.cloudinary.com/dnyehgbeu/image/upload/f_auto,q_auto/${data}`}
                  alt="image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
        <div className="about-main">
          <p className="word">
            I'm Ameer khan B - Driven Electrical Engineering student with a
            passion for software development. Currently exploring the MERN stack
            and actively seeking opportunities to learn and grow in the dynamic
            IT industry . Open to connect and collaborate with fellow tech
            enthusiasts!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
