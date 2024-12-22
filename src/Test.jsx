import { useForm } from "react-hook-form";

const services = ["Digital Marketing", "Development", "SEO"];

function Test() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <form
        className="flex flex-col"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          type="text"
          id=""
          placeholder="Enter your name"
          {...register("fullname")}
        />
        <input
          type="number"
          className="mb-2"
          id=""
          placeholder="1"
          {...register("number")}
        />
        <div className="mb-2">
          {services.map((service) => {
            return (
              <label key={service} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("services")}
                  value={service}
                />
                <p>{service}</p>
              </label>
            );
          })}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Test;