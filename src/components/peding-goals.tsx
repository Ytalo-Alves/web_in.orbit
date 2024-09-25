import { Plus } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";
import { getPendingGoals } from "../http/get-pending-goals";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createGoalCompletion } from "../http/create-goals";

export function PendingGoals(){

  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60,
  })

  if(!data){
    return null
  }

  async function handleCompletedGoal(goalId: string){
    await createGoalCompletion(goalId)

    queryClient.invalidateQueries({queryKey: ['summary']})
    queryClient.invalidateQueries({queryKey: ['pending-goals']})
  }

  return(
    <div className="flex flex-wrap gap-3">
    {data.map(goal => {
      return(
        <OutlineButton key={goal.id} disabled={goal.completionCount >= goal.desiredWeeklyFrequency} onClick={() => handleCompletedGoal(goal.id)}><Plus className="size-4 text-zinc-400" />{goal.title}</OutlineButton>
      )
    })}
   
  </div>
  )
}