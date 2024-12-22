import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append(import.meta.env.VITE_FULLNAME, data.fullname);
    formData.append(import.meta.env.VITE_EMAIL, data.email);
    formData.append(import.meta.env.VITE_MESSAGE, data.message);
    formData.append(import.meta.env.VITE_SERVICES, data.services);

    fetch(import.meta.env.VITE_SUBMIT_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }).then(() => {
      console.log("form fill hogya", import.meta.env.VITE_ENTRIES);
      navigate("submission");
    });
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

      <form
        className="flex w-full flex-col gap-3"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <input
          type="text"
          id="fullname"
          placeholder="Your name"
          className="w-full border-b border-zinc-600 p-1 placeholder-stone-600 md:bg-lime-400"
          {...register("fullname", {
            required: "Please enter your name",
            min: {
              value: 5,
              message: "Must be of atleast 5 characters",
            },
          })}
        />
        {errors.fullname && (
          <p className="text-red-500">{errors.fullname.message}</p>
        )}

        <input
          type="text"
          placeholder="your@company.com"
          className="w-full border-b border-zinc-600 p-1 placeholder-stone-600 md:bg-lime-400"
          {...register("email", {
            required: "Please enter your email",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/,
              message: "Must be a valid email address from authentic source",
            },
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="text"
          id="message"
          placeholder="Tell us a little about your project..."
          className="h-24 w-full border-b border-zinc-600 p-1 placeholder-stone-600 md:bg-lime-400"
          {...register("message", {
            required: "This field is required",
          })}
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}

        <p className="my-3 text-stone-700">How can we help?</p>

        <div className="mb-6 grid max-w-96 grid-cols-2">
          {services.map((service) => {
            return (
              <label className="flex items-center gap-1" key={service}>
                <input
                  type="checkbox"
                  className="size-5"
                  value={service}
                  {...register("services", {
                    required: "Select atleast one",
                  })}
                />{" "}
                {service}
              </label>
            );
          })}

          {errors.services && (
            <p className="text-red-500">{errors.services.message}</p>
          )}
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