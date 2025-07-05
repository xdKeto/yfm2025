import yfmLogo from "../assets/yfm.png";
import tagline from "../assets/tagline.png";
import blueStar from "../assets/blue_star.png";
import blueStar2 from "../assets/blue_star2.png";
import greenStar from "../assets/green_star.png";
import starBits from "../assets/star_bits.png";
import greenCurve from "../assets/green_curve.png";
import yellowCurve from "../assets/yellow_curve.png";
import pinkStar1 from "../assets/pink_star1.png";
import pinkStar2 from "../assets/pink_star2.png";
import redStar1 from "../assets/red_star1.png";
import redStar2 from "../assets/red_star2.png";
import yellowStar1 from "../assets/yellow_star1.png";
import yellowStar2 from "../assets/yellow_star2.png";

const stars = [
  { top: "25%", left: "10%", zIndex: 5, size: 40, rotate: 0, image: blueStar },
  { top: "55%", left: "80%", zIndex: 5, size: 70, rotate: 0, image: blueStar2 },
  { top: "70%", left: "65%", zIndex: 1, size: 55, rotate: 30, image: starBits },
  { top: "10%", left: "28%", zIndex: 3, size: 45, rotate: 25, image: yellowCurve },
  { top: "85%", left: "85%", zIndex: 4, size: 72, rotate: 30, image: greenCurve },
  { top: "15%", left: "60%", zIndex: 2, size: 72, rotate: 15, image: pinkStar1 },
  { top: "35%", left: "30%", zIndex: 6, size: 42, rotate: -12, image: pinkStar2 },
  { top: "45%", left: "70%", zIndex: 2, size: 48, rotate: 8, image: redStar1 },
  { top: "60%", left: "30%", zIndex: 2, size: 78, rotate: 8, image: redStar2 },
  { top: "85%", left: "12%", zIndex: 5, size: 60, rotate: 0, image: yellowStar1 },
  { top: "25%", left: "85%", zIndex: 1, size: 72, rotate: -10, image: yellowStar2 },
  { top: "55%", left: "8%", zIndex: 1, size: 50, rotate: -10, image: greenStar },
];

const Hero = () => {
  return (
    <section id="hero_section" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Stars */}
      {stars.map((star, idx) => (
        <img
          key={idx}
          src={star.image}
          alt=""
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            zIndex: star.zIndex,
            transform: `rotate(${star.rotate}deg)`,
            pointerEvents: "none",
            opacity: 0.85,
          }}
        />
      ))}

      {/* Logo and tagline group */}
      <div className="flex flex-col items-center justify-center space-y-4 md:mt-16 relative z-10">
        <img src={yfmLogo} width={580} height={650} alt="" />
        <img src={tagline} width={300} height={650} alt="" />
      </div>
      <div class="custom-shape-divider-bottom-1751734920">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
