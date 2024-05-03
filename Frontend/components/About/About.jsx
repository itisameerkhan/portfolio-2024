import "./About.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { cloudinary_img } from "./utils/constants";
import { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

const About = () => {
  useEffect(() => {
    let typeSplit = new SplitType("[data-animate]", {
      types: "lines, words, chars",
      tagName: "span",
    });

    gsap.from("[data-animate] .word", {
      opacity: 0.3,
      duration: 0.5,
      ease: "power1.out",
      stagger: 0.1,

      scrollTrigger: {
        trigger: "[data-animate]",
        start: "top center",
        scrub: true,
      },
    });
  }, []);

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
        <div className="about-main" data-animate>
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
