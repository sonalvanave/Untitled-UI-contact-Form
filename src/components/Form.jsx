import { useState } from "react";
import { RiSparkling2Fill, RiMagicLine } from "react-icons/ri";
const services = [
  "Website Design",
  "Content",
  "UX Design",
  "Strategy",
  "User Research",
  "Other",
];

const Form = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);

  const handleCheckbox = (value, status) => {
    setSelectedServices((prevState) => {
      return status
        ? [...prevState, value]
        : prevState.filter((v) => v !== value);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(import.meta.env.VITE_FULLNAME, fullname);
    formData.append(import.meta.env.VITE_EMAIL, email);
    formData.append(import.meta.env.VITE_MESSAGE, message);
    formData.append(import.meta.env.VITE_SERVICES, selectedServices);

    fetch(import.meta.env.VITE_SUBMIT_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }).then(() => console.log("form fill hogya",import.meta.env.VITE_ENTRIES));
  };

  return (
    <div>
      <h1 className="w-96 text-3xl font-semibold">
        Got Ideas?{" "}
        <RiMagicLine className="inline-block text-lime-500 md:text-black" />
        We've got the skills. Let's team up.
      </h1>
      <p className="my-5 text-xl">
        Tell us more about yourself and what's on your mind.
      </p>

      <form className="flex w-full flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          id="fullname"
          placeholder="Your name"
          className="w-full border-b border-zinc-600 p-1 placeholder-stone-600 md:bg-lime-400"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <input
          type="email"
          id="email"
          placeholder="your@company.com"
          className="w-full border-b border-zinc-600 p-1 placeholder-stone-600 md:bg-lime-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          id="message"
          placeholder="Tell us a little about your project..."
          className="h-24 w-full border-b border-zinc-600 p-1 placeholder-stone-600 md:bg-lime-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <p className="my-3 text-stone-700">How can we help?</p>

        <div className="mb-6 grid max-w-96 grid-cols-2">
          {services.map((service) => {
            return (
              <label className="flex items-center gap-1" key={service}>
                <input
                  type="checkbox"
                  className="size-5"
                  value={service}
                  onChange={(e) => handleCheckbox(service, e.target.checked)}
                />{" "}
                {service}
              </label>
            );
          })}
        </div>

        <button className="flex items-center justify-center gap-2 rounded-lg bg-stone-950 p-1 text-white">
          Let's get started{" "}
          <RiSparkling2Fill className="text-xl text-lime-400" />
        </button>
      </form>
    </div>
  );
};

export default Form;