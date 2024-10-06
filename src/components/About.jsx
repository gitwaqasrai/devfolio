/**
 * @copyright 2024 Waqas Rai
 * @license Apache-2.0
 */

import React from "react";
const aboutItems = [
  {
    label: "Project done",
    number: 10,
  },
  {
    label: "Years of experience",
    number: 2,
  },
];

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hi there! I'm Waqas Rai, a passionate front-end developer who loves
            creating beautiful and user-friendly websites. I mix creativity with
            technical skills to turn your ideas into eye-catching online spaces
            that work great and look amazing. Whether it's a personal blog or a
            business site, I'm here to build the perfect digital home for your
            needs. Let's work together to make your web dreams come true!
          </p>
          <div className="flex flex-wrap item-center gap-4 md:gap-7">
            {" "}
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="./images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
