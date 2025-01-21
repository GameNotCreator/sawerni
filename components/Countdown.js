import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const Timer = () => {
  return (
    <div className="flex justify-center bg-black items-center">
      <div
        className="flex flex-col items-center text-center 
             scale-50 sm:scale-75 md:scale-100 m-5"
      >
        <h1 className="mb-5 text-5xl font-bold">new drop</h1>
        <FlipClockCountdown
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
      </div>
    </div>
  );
};

export default Timer;
