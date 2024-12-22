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
          {...register("fullname", {
            required: "Please enter your name first",
          })}
        />
        {errors.fullname && (
          <p className="text-red-500">{errors.fullname.message}</p>
        )}

        <input
          type="number"
          className="mb-2"
          id=""
          placeholder="1"
          {...register("number", {
            required: "Number to dal do",
            min: {
              value: 4,
              message: "Atleast 4",
            },
          })}
        />
        {errors.number && (
          <p className="text-red-500">{errors.number.message}</p>
        )}

        <div className="mb-2">
          {services.map((service) => {
            return (
              <label key={service} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("services", {
                    required: "Atleast one select",
                  })}
                  value={service}
                />
                <p>{service}</p>
              </label>
            );
          })}
          {errors.services && (
            <p className="text-red-500">{errors.services.message}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Test;