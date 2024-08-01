import TopLevelState from "./TopLevelState";
import StateMovedDown from "./StateMovedDown";

export default function Index() {
  return (
    <div>
      <h1>Moving state down</h1>

      <div className="examples">
        <TopLevelState />

        <StateMovedDown />
      </div>
    </div>
  );
}
