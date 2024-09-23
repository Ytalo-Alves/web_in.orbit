import { Dialog } from './components/ui/dialog'
import './index.css'

// import { EmptyGoals } from '../src/components/empty-goals'
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'

export function App() {
  return (
    <Dialog>
       {/* <EmptyGoals/> */}
       <Summary/>
       <CreateGoal/>
    </Dialog>
   
  )
}

