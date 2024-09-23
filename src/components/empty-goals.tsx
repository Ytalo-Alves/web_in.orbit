

import Logo from '../assets/logo_in_orbit.svg'
import letsStart from '../assets/lets-start-illustration.svg'
import { Plus } from '@phosphor-icons/react'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'
import { CreateGoal } from './create-goal'



export function EmptyGoals() {
  return (
    <Dialog>
      <div className="h-screen flex flex-col items-center justify-center gap-8">
        <img src={Logo} alt="in.orbit" />
        <img src={letsStart} alt="" />

        <p className='text-zinc-300 leading-relaxed max-w-80 text-center mt-10'>Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?</p>

        <DialogTrigger asChild>
          <Button className='mt-5'>
            <Plus className='size-4' />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>
      <CreateGoal/>
    </Dialog>
  )
}