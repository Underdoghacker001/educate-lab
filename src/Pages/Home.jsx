import React from "react";
import Card from "../components/Card";

const Home = () => {
  const cardData = [
    {
      text: "Best Mentors",
      description:
        "Dedicated mentor empowering individuals to unlock their full potential through guidance, support, and a shared passion for continuous growth.",
    },
    {
      text: "Best Mentors",
      description:
        "Dedicated mentor empowering individuals to unlock their full potential through guidance, support, and a shared passion for continuous growth.",
    },
    {
      text: "Best Mentors",
      description:
        "Dedicated mentor empowering individuals to unlock their full potential through guidance, support, and a shared passion for continuous growth.",
    },
    {
      text: "Best Mentors",
      description:
        "Dedicated mentor empowering individuals to unlock their full potential through guidance, support, and a shared passion for continuous growth.",
    },
    {
      text: "Best Mentors",
      description:
        "Dedicated mentor empowering individuals to unlock their full potential through guidance, support, and a shared passion for continuous growth.",
    },
  ];

  return (
    <>
      <button className="bg-yellow-400 px-7 py-3 rounded-full fixed right-10 bottom-10">
        <a target="blank" href="https://forms.gle/xY4ckBdGYESFoVFQA">
          Support
        </a>
      </button>
      <div className="md:flex items-center justify-between mt-10">
        <div className="md:w-1/2">
          <div className="flex flex-col">
            <h1 className="text-sm text-sky-600">Best E-learning Platform</h1>
            <h1 className="text-5xl font-bold text-gray-800">Getting Best</h1>
            <h1 className="text-5xl font-bold text-gray-800">
              Quality Education
            </h1>
            <h1 className="text-5xl font-bold text-gray-800">
              Is Now More Easier
            </h1>
          </div>
          <div className="my-2 md:w-3/5">
            <p>
              Crafting compelling narratives with words that captivate, educate,
              and inspire readers.
            </p>
          </div>
          <div>
            <button className="bg-yellow-400 px-5 py-3 rounded-3xl">
              Join Course
            </button>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-5 shadow-md rounded-full">
          <img
            className="w-full h-auto"
            src="https://maxcdn.icons8.com/download/misc/icons8-header/ouch-cover.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="mt-20">
        <div className="flex justify-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold text-gray-800 text-center">
              Why Are We the Best?
            </h1>
            <p>
              Teachers are passionate about their subject area and about helping
              students learn.
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-wrap my-5">
          {cardData.map((item, index) => (
            <Card key={index} text={item.text} description={item.description} />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-yellow-400 px-7 py-3 rounded-full my-5">
          Course
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10">
  <div className="w-full md:w-1/2 md:mr-5">
    <img
      className="w-full h-auto"
      src="https://cdn3d.iconscout.com/3d/premium/thumb/mentor-5565611-4715112.png?f=webp"
      alt="mentor"
    />
  </div>

  <div className="w-full md:w-1/2 text-center md:text-right mt-5 md:mt-0">
    <h1 className="text-6xl font-semibold">Mentor</h1>
    <p className="text-gray-700 text-base md:text-lg lg:text-xl mt-3">
      "A seasoned mentor provides more than just knowledge; they foster growth,
      offer guidance, and instill confidence. A great mentor not only shares
      their expertise but also inspires, encourages resilience, and helps
      navigate the path to success. The true essence of mentorship lies in the
      ability to empower others, fostering a collaborative learning journey
      where both mentor and mentee evolve and excel together.
    </p>
  </div>
</div>

    </>
  );
};

export default Home;
