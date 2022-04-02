import {Switch, Route} from 'react-router-dom'

import './App.css'





import MedicationPage from './components/ActiveMedications'

const App = () => (
  <Switch>
    <Route exact path="/" component={MedicationPage} />
  </Switch>
)

export default App
