// TODO: GenericInputBox - Have default value show as 0.0 and not 0
// TODO: GenericInputBox - Have logic to dissallow typing number outside of bounds
//
import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <SelectorBox />
    </>
  )
}

function SelectorBox() {
  const [workout, setWorkout] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault(); // Do not reload

    localStorage.setItem('shouldBeWorkout', JSON.stringify(workout));
    alert("WOOOOP");
    console.log("Set workout reps:", workout);
  }

  return (
    <form onSubmit={handleSubmit}>
      <WeightInputBox
        workoutS={workout}
        setWorkoutS={setWorkout} />
      <RepsInputBox />
      <button type="submit" > Submit & Save </button>
    </form>
  )

}

// TODO: Could eventually make this a true generic container for weight, reps, time, distance, etc
function WeightInputBox({ workoutS, setWorkoutS }) {

  return (
    <input type="number" min={0.0} max={1000} placeholder="0.0" step={2.5}
      value={workoutS}
      onChange={(event) => setWorkoutS(event.target.value)}
    />
  )
}
function RepsInputBox() {
  return (
    <input type="number" min={0} max={1000} placeholder="0" step={1} />
  )
}
export default App
