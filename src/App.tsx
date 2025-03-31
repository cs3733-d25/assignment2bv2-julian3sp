import './App.css'

import {Title} from './components/title.tsx'
import {Intro} from './components/intro.tsx'
import {JuliansHobby} from './components/hobby1.tsx'

function App() {

  return (
    <div>
        <Title/>
      <div>
          <Intro name1={'Julian Espinal'} name2={'Brendon Peters'}/>

      </div>
        <JuliansHobby/>
    </div>
  )
}

export default App
