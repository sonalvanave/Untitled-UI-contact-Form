import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="w-full p-4">
      <Header />

      <div className="mx-automax-w-7xl rounded-lg bg-lime-400 p-4">
        <h1 className="text-3xl font-bold">Submission Completed 🎉</h1>
        <p>
          Form is submitted successfully! Go and visit here{" "}
          <a
            target="_blank"
            className="text-blue-700"
            href={import.meta.env.VITE_ENTRIES}
          >
            here.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;