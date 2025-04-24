import React from "react";

const LastDay = () => {
  return (
    <>
      <div className="container mx-auto p-4 mt-6 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-4/5 mb-8 md:mb-0">
          <div className="border-blue-600 border-2 font-bold p-2 rounded mt-0 md:ml-20 w-3/12">
            <h1 className="text-sm text-blue-600 ml-5">End of Term</h1>
          </div>
          <div className="ml-4 md:ml-16 mt-4">
            <h1 className="text-2xl md:text-4xl font-bold">Celebrating the Last Day</h1>
          </div>
          <div className="ml-4 md:ml-16 mt-2">
            <h2 className="text-xl md:text-2xl font-semibold">
              A Moment of Reflection, Celebration, and Looking Ahead
            </h2>
          </div>
          <div className="ml-4 md:ml-16 mt-2 w-full md:w-7/12">
            <h4 className="font-medium text-sm md:text-base">
              As we close another incredible chapter, we celebrate our students' achievements, growth, and perseverance. 
              This day marks not just an end, but a beautiful beginning toward greater learning adventures ahead.
            </h4>
          </div>
          <div className="ml-4 md:ml-16 mt-4">
            <button className="bg-yellow-400 px-4 md:px-7 py-2 md:py-3 rounded-full">Share Your Memories</button>
          </div>
        </div>
        <div className="flex items-center">
          <img className="w-full md:w-4/5 rounded-lg" src="https://img.freepik.com/premium-vector/d-books-graduation-cap-hat-calculator-diploma-earth-paper-plane-isolated-background_684471-129.jpg?semt=ais_hybrid&w=740" alt="End of school celebration" />
        </div>
      </div>

      <div className="ml-4 md:ml-20">
        <div className="border-2 border-black rounded-2xl p-2 md:mr-20 my-5">
          <h1 className="text-3xl font-semibold">Highlights of the Year</h1>
          <h3 className="text-2xl pl-2 font-semibold">1. Milestones Achieved</h3>
          <p className="text-xl pl-6 text-gray-700">Celebrate the progress made this academic year—from academic excellence to character development and co-curricular wins.</p>
          <h3 className="text-2xl pl-2 font-semibold">2. Student Spotlights</h3>
          <p className="text-xl pl-6 text-gray-700">We shine a light on those who’ve gone above and beyond, making the school community proud.</p>
        </div>

        <div className="border-2 border-black rounded-2xl p-2 md:mr-20 my-5">
          <h1 className="text-3xl font-semibold">Looking Ahead</h1>
          <h3 className="text-2xl pl-2 font-semibold">1. Summer Enrichment</h3>
          <p className="text-xl pl-6 text-gray-700">Explore summer workshops and recommended resources to keep the learning momentum going over the break.</p>
          <h3 className="text-2xl pl-2 font-semibold">2. Next Term Preview</h3>
          <p className="text-xl pl-6 text-gray-700">Get a glimpse of what’s in store for the upcoming term, including new initiatives and learning goals.</p>
        </div>

        <div className="border-2 border-black rounded-2xl p-2 md:mr-20 my-5">
          <h1 className="text-3xl font-semibold">Messages & Memories</h1>
          <h3 className="text-2xl pl-2 font-semibold">1. From Our Mentors</h3>
          <p className="text-xl pl-6 text-gray-700">Heartfelt messages from teachers and staff, recognizing student efforts and offering encouragement for the future.</p>
          <h3 className="text-2xl pl-2 font-semibold">2. Memory Wall</h3>
          <p className="text-xl pl-6 text-gray-700">A space to share photos, stories, and cherished moments from the year gone by. Let's celebrate together!</p>
        </div>
      </div>
    </>
  );
};

export default LastDay;
