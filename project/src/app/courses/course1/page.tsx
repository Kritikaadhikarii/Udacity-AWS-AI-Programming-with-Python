import React from "react";

const Course1 = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1>
        Course 1 : <span className="text-amber-600">Begin Your Journey</span>
      </h1>
      <p className="bg-green-200 w-fit px-4 rounded-full">My rating: 5/5 🌟</p>
      <p>Overall summary :</p>

      <p>Here the contents were basically regarding the following topics :</p>

      <ol className="list-decimal ml-12 space-y-2">
        <span className="bg-amber-100 px-4">Getting Started</span>
        <li>
          <span className="text-amber-600">Welcome to Udacity : </span>A welcome
          message by Sebastian Thrun, the founder of Udacity. Here he talked
          about the missions of Udacity and how he's honored to have students
          onboard. Overall, it was a very warming message by Sebastian, no
          wonder he's a great founder.
        </li>

        <li>
          <span className="text-amber-600">About the program : </span>A brief
          overview of the program structure, along with the components of the
          programs. The nanodegree comprised of different modules with short
          videos and interactive excersies that users can do to learn the
          concepts. In addition to that, the most important and helpful portions
          of the program{" "}
          <span className="text-amber-600">(from my perspective)</span> were
          actual projects, weekly mentorship sessions and very supportive
          community.
        </li>

        <li>
          <span className="text-amber-600">Weekly Schedule : </span>
          We had weekly sessions, hence there was an option of choosing out
          session dates, tutors and revoking dates if needed.{" "}
          <span className="text-amber-600">
            Once again, those sessions were very helpful.
          </span>
        </li>

        <li>
          <span className="text-amber-600">Guide to join community : </span>
          Communities were one of the best part of the nanodegree. We could ask
          questions and get help from peers and mentors. In addition to that, we
          frequently had ice breakers too. The community was very supportive and
          helpful, and I really enjoyed being a part of it.
        </li>

        <li>
          <span className="text-amber-600">Classroom Tour : </span>
          We were taught about how to navigate through the classroom and to
          choose sessions. They had an indepth explanation video which was very
          helpful and easy to understand.
        </li>
      </ol>

      <ol className="list-decimal ml-12 mt-8 space-y-3">
        <span className="bg-amber-100 px-4">Getting Help</span>
        <li>
          <span className="text-amber-600">General Summary : </span>A Here we
          were basically told about Udacity GPT and how to use it, submitting
          classroom feedback, help center and most importantly, plagiarism.
        </li>
      </ol>

      <p className="my-8">
        Conclusion: This course was more of an onboarding course. But indeed, I
        must appreciate the effort that udacity has put into creating a
        welcoming and informative environment for new students.
      </p>
    </div>
  );
};

export default Course1;
