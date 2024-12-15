import React from "react";

const services = [
  "Website Design",
  "Content",
  "UX Design",
  "Strategy",
  "User Research",
  "Other",
];

const Form = () => {
  return (
    <div>
      <h1 className="w-96 text-3xl font-semibold">
        Got Ideas We've got the skills. Let's team up.
      </h1>
      <p className="my-5 text-xl">
        Tell us more about yourself and what's on your mind.
      </p>
      <div className="flex w-full flex-col gap-3">
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Your name"
          className="w-full border-b border-zinc-600 p-1 placeholder-stone-600 md:bg-lime-400"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@company.com"
          className="w-full border-b border-zinc-600 p-1 placeholder-stone-600 md:bg-lime-400"
        />
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Tell us a little about your project..."
          className="h-24 w-full border-b border-zinc-600 p-1 placeholder-stone-600 md:bg-lime-400"
        />

        <p className="my-3 text-stone-700">How can we help?</p>

        <div className="mb-6 grid max-w-96 grid-cols-2">
          {services.map((service) => {
            return (
              <label className="flex items-center gap-1" key={service}>
                <input
                  type="checkbox"
                  name="Website Design"
                  className="size-5"
                />{" "}
                {service}
              </label>
            );
          })}
        </div>

        <button className="rounded-lg bg-stone-950 p-1 text-white">
          Let's get started
        </button>
      </div>
    </div>
  );
};

export default Form;