import './App.css'
import {Title} from './components/title.tsx'
import {Intro} from './components/intro.tsx'

function App() {

  return (
    <>
        <Title/>
      <div>
          <Intro name1={'Julian Espinal'} name2={'Brendon Peters'}/>

      </div>
    </>
  )
}

export default App
