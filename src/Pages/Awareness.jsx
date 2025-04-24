import React from "react";

const Awareness = () => {
  return (
    <>
      <div className="container mx-auto p-4 mt-6 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-4/5 mb-8 md:mb-0">
          <div className="border-blue-600 border-2 font-bold p-2 rounded mt-0 md:ml-20 w-3/12">
            <h1 className="text-sm text-blue-600 ml-5">Welcome to Educate</h1>
          </div>
          <div className="ml-4 md:ml-16 mt-4">
            <h1 className="text-2xl md:text-4xl font-bold">
              Education/Parent Awareness
            </h1>
          </div>
          <div className="ml-4 md:ml-16 mt-2">
            <h2 className="text-xl md:text-2xl font-semibold">
              Empowering Children's Educational Journey Through Collaboration
            </h2>
          </div>
          <div className="ml-4 md:ml-16 mt-2 w-full md:w-7/12">
            <h4 className="font-medium text-sm md:text-base">
              At Educate, we don't just educate students; we cultivate a
              community where parents, students, and educators collaborate to
              shape an inspiring learning environment. The Parent and Students
              Awareness Hub is your gateway to staying actively involved in your
              child's educational experience and accessing a wealth of resources
              to enrich their learning journey.
            </h4>
          </div>
          <div className="ml-4 md:ml-16 mt-4">
            <button className="bg-yellow-400 px-4 md:px-7 py-2 md:py-3 rounded-full">
              Connect with us
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="w-full md:w-4/5 rounded-lg"
            src="https://img.freepik.com/free-vector/hand-drawn-parents-helping-children-with-homework-illustration_23-2150120082.jpg?semt=ais_hybrid&w=740"
            alt=""
          />
        </div>
      </div>
      <div className="ml-4 md:ml-20">
        <div className="border-2 border-black rounded-2xl p-2 md:mr-20 my-5">
          <h1 className="text-3xl font-semibold">
            Navigating the Academic Landscape
          </h1>
          <h3 className="text-2xl pl-2 font-semibold">
            1. Curriculum Overview
          </h3>
          <p className="text-xl pl-6 text-gray-700">
            Learn more about the curriculum at Educate. Understand the subjects
            your child is studying and how they align with educational
            standards.
          </p>
          <h3 className="text-2xl pl-2 font-semibold">
            2. Assessments and Grading
          </h3>
          <p className="text-xl pl-6 text-gray-700">
            Get insights into the assessment methods used at our organization.
            Discover how grades are determined and what they signify about your
            child's progress.
          </p>
        </div>
        <div className="border-2 border-black rounded-2xl p-2 md:mr-20 my-5">
          <h1 className="text-3xl font-semibold">
            Supporting Your Child's Learning
          </h1>
          <h3 className="text-2xl pl-2 font-semibold">
            1. Homework and Study Tips
          </h3>
          <p className="text-xl pl-6 text-gray-700">
            Discover effective strategies to support your child with homework
            and study sessions. Learn how to create a conducive learning
            environment at home.
          </p>
          <h3 className="text-2xl pl-2 font-semibold">
            2. Communication Channels
          </h3>
          <p className="text-xl pl-6 text-gray-700">
            Stay connected with mentors and organization staff. Find out about
            regular communication channels and Academic updates session.
          </p>
        </div>
        <div className="border-2 border-black rounded-2xl p-2 md:mr-20 my-5">
          <h1 className="text-3xl font-semibold">
            Resources for Parental Involvement
          </h1>
          <h3 className="text-2xl pl-2 font-semibold">
            1. Parent Volunteer Opportunities
          </h3>
          <p className="text-xl pl-6 text-gray-700">
            Explore ways to get involved in organization activities. Discover
            volunteer opportunities and contribute to the your child's
            education.
          </p>
          <h3 className="text-2xl pl-2 font-semibold">
            2. Parent Education Workshops
          </h3>
          <p className="text-xl pl-6 text-gray-700">
            Stay informed about upcoming workshops designed to enhance your
            parenting skills and support your child's education.
          </p>
        </div>
        <div className="border-2 border-black rounded-2xl p-2 md:mr-20 my-5">
          <h1 className="text-3xl font-semibold">FAQs and Support</h1>
          <h3 className="text-2xl pl-2 font-semibold">
            Frequently Asked Questions
          </h3>
          <p className="text-xl pl-6 text-gray-700">
            Find answers to common questions about school policies, procedures,
            and educational practices.
          </p>
          <h3 className="text-2xl pl-2 font-semibold">Support Resources</h3>
          <p className="text-xl pl-6 text-gray-700">
            Access additional resources, including contact information for
            support staff, to address any concerns or queries you may have.
          </p>
        </div>
      </div>
    </>
  );
};

export default Awareness;
