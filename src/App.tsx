import { Dialog } from './components/ui/dialog'
import './index.css'
import { CreateGoal } from './components/create-goal'
import { useEffect, useState } from 'react'
import { Summary } from './components/summary'
import { EmptyGoals } from './components/empty-goals'


export function App() {

  const [summary, setSummary] = useState(null)


  useEffect(() => {
    fetch('http://localhost:3333/summary')
      .then(response => {
        return response.json()
      }).then(data => {
        setSummary(data.summary)
      })
  }, [])



  return (
    <Dialog>

      {summary?.total > 0 ? <Summary/> : <EmptyGoals/>}

      


      <CreateGoal />
    </Dialog>

  )
}

