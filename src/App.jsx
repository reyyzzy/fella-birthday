import Navbar from "./components/Navbar";
import heroImg from "./assets/pics/3.jpeg";
import { Info } from "lucide-react";
import { FaPlay } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import CardImage from "./components/CardImage";
import { images } from "./constants/images";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const Button = ({ children, variant, ...rest }) => {
    return (
      <button
        className={`flex items-center gap-2 p-3 px-7 rounded-lg font-semibold active:scale-90 duration-300 ease-in-out ${
          variant == "primary" && "bg-white text-black "
        } ${variant == "secondary" && "bg-white/30 text-white"}`}
        {...rest}
      >
        {children}
      </button>
    );
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <Navbar />
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex justify-center items-end"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="w-full max-w-screen-2xl px-5 lg:px-10 mb-[5%] flex flex-col gap-3 lg:gap-5 z-10 text-white ">
          <h1
            className="lg:text-4xl text-2xl font-bold lg:w-[50%]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Happy Sweet Seventeen Fella ❤️
          </h1>
          <p
            className="text-sm lg:text-base lg:w-[40%]"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            This is how sima reyy, the boyfie you love so much, expresses 
            his love, maybe not much but there's so much comin!, i promise!,
            happy birthday my love 

          </p>
          <p data-aos="fade-right" data-aos-duration="1300">
            Click "Play" to see Details
          </p>
          <div
            className="actions flex items-center gap-3"
            data-aos="fade-right"
            data-aos-duration="1400"
          >
            <Button variant={"primary"} onClick={() => setOpenModal(true)}>
              <FaPlay />
              Play
            </Button>
            <Button variant={"secondary"}>
              <Info size={20} />
              More Info
            </Button>
          </div>
        </div>
      </section>
      <section className="flex justify-center bg-black text-white">
        <div className="py-5 lg:py-10 flex flex-col gap-5 px-5 lg:px-10 max-w-screen-2xl">
          <h3 className="font-semibold text-xl">More to Explore : felladelreyy</h3>
          <section className=" grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-5">
            {images.map((image, idx) => (
              <CardImage src={image.src} key={idx} idx={idx} />
            ))}
          </section>
        </div>
      </section>
      <Modal setOpenModal={setOpenModal} openModal={openModal}>
        <div
          className="relative bg-cover bg-center bg-no-repeat h-[250px] lg:h-[450px] "
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundPosition: "center 40%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black" />
        </div>
        <div className="flex flex-col gap-3 lg:gap-5 p-5 text-white">
          <h1 className="font-bold text-2xl">Happy Birthday, You </h1>
          <p>Hiiii Simammmmmmm</p>
          <p>
            I don’t even know where to start because there’s so much I want to say to you.
            It’s been a year with you, and honestly, it’s the best year of my life. You’ve seen me at my lowest. 
            You were there when I had nothing, when I was broke, when I couldn’t even afford proper food. And you didn’t leave. 
            You stayed. You cared. You loved me the same.
            That’s something I will never forget.
            You’re not just sweet you’re rare and also you're hot as fuck :3. The way you support me, the way you understand me, 
            the way you stay patient with me… it means everything. You make me feel safe. You make me feel like I’m not alone in this world.
            I know I’m not perfect. I’m still building myself, still chasing my goals, still trying to become a better man. 
            But I promise you, everything I’m building is not just for me it’s for us. 
            One day, I’ll look back at these hard times and remember that you were the one who stayed beside me when things were tough.
            You’re so perfect to me, fell. Not because you don’t have flaws, but because your heart is pure. 
            And I’m so lucky you chose me.
            I hope this year gives you everything you deserve happiness, peace, success, and all the love in the world. 
            I’ll always try my best to be someone you’re proud of.

            I love you more than I can explain.
          </p>
          <p>
            With so much love,
            <br />
            Reyy
          </p>
        </div>
      </Modal>
    </main>
  );
}

export default App;
