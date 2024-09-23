import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
import  InOrbit  from '../assets/in.orbit-logo.svg'
import { Progress, ProgressIndicator } from "./ui/progress-bar";
import { Separator } from "./ui/separator";
import { OutlineButton } from "./ui/outline-button";

export function Summary(){
  return(
    <div className="py-10 max-w-[600px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <img src={InOrbit} alt="" />
        <span className="text-lg font-semibold">05 a 10 de agosto</span>
        </div>
        <DialogTrigger>
          <Button size="sm">
            <Plus className="size-4"/>
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress max={15} value={10} >
          <ProgressIndicator style={{width: '53%'}}/>
        </Progress>
      </div>

      <div className="flex items-center justify-between text-sm text-zinc-400">
        <span>Você completou <span className="text-zinc-100">8</span> de <span className="text-zinc-100">15</span> metas nessa semana.</span>
        <span>53%</span>
      </div>

      <Separator/>

      <div className="flex gap-3">
        <OutlineButton>Meditar</OutlineButton>
      </div>
      
    </div>
  )
}