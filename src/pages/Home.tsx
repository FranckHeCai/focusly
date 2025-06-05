import Header from "@components/Header";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <div className="flex flex-col sm:flex-row gap-5 px-5">
        <div className="border-3 border-emerald-600 rounded-xl flex-1 h-162 p-3">
          <h2 className="text-2xl font-bold text-center">Focus</h2>
        </div>
        <div className="border-3 border-emerald-600 rounded-xl flex-1 h-162 p-3">
        <h2 className="text-2xl font-bold text-center">Stats</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;