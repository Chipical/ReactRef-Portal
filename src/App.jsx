import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Getting Harder" targetTime={10} />
        <TimerChallenge title="Testing your Limits" targetTime={15} />
        <TimerChallenge title="Time Passes So Slowly" targetTime={30} />
        <TimerChallenge title="1 out of 60" targetTime={60} />
      </div>
    </>
  );
}

export default App;
