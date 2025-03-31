import './App.css'
import {Title} from './components/title.tsx'
import {Intro} from './components/intro.tsx'
import {Hobby2} from "./components/hobby2.tsx";

function App() {

  return (
    <>
        <Title/>
      <div>
          <Intro name1={'Julian Espinal'} name2={'Brendon Peters'}/>
      </div>
        <div className="BHobby">
            <Hobby2/>
        </div>

    </>
  )
}

export default App
