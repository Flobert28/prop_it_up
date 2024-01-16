import './App.css'
import PersonCard from './components/PersonCard'

function App() {

  return (
    <>
    <PersonCard 
    firstName={"Doe,"}
    lastName={"Jane"} 
    age={ 45 }
    hair={"Black"} >
    </PersonCard>
    <PersonCard 
    firstName={"Smith,"} 
    lastName={"John"} 
    age={ 88 }
    hair={"Brown"} >
    </PersonCard>
    <PersonCard 
    firstName={"Fillmore,"} 
    lastName={"Millard"} 
    age={ 50 }
    hair={"Brown"} >
    </PersonCard>
    <PersonCard 
    firstName={"Smith,"} 
    lastName={"Maria"} 
    age={ 62 }
    hair={"Brown"} >
    </PersonCard>
    </>
  )
}

export default App
