import { CheckCircle2, Plus } from "lucide-react";
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

      <div className="flex flex-wrap gap-3">
        <OutlineButton><Plus className="size-4 text-zinc-400"/>Meditar</OutlineButton>
        <OutlineButton><Plus className="size-4 text-zinc-400"/>Academia</OutlineButton>
        <OutlineButton><Plus className="size-4 text-zinc-400"/>Andar de Bicicleta</OutlineButton>
        <OutlineButton><Plus className="size-4 text-zinc-400"/>Nadar</OutlineButton>
        <OutlineButton><Plus className="size-4 text-zinc-400"/>Correr</OutlineButton>
        <OutlineButton><Plus className="size-4 text-zinc-400"/>Estudar</OutlineButton>
        <OutlineButton><Plus className="size-4 text-zinc-400"/>Ler</OutlineButton>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-medium">
          Sua semana
        </h2>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium">Domingo <span className="text-zinc-400 text-xs">(10 de agosto)</span></h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500"/>
              <span className="text-sm text-zinc-400">Você completou “<span className="font-semibold text-zinc-100">Acordar cedo</span>” às <span className="font-semibold text-zinc-100">08:13h</span></span>
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500"/>
              <span className="text-sm text-zinc-400">Você completou “<span className="font-semibold text-zinc-100">Acordar cedo</span>” às <span className="font-semibold text-zinc-100">08:13h</span></span>
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500"/>
              <span className="text-sm text-zinc-400">Você completou “<span className="font-semibold text-zinc-100">Acordar cedo</span>” às <span className="font-semibold text-zinc-100">08:13h</span></span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-4">
          <h3 className="font-medium">Segunda-Feira <span className="text-zinc-400 text-xs">(11 de agosto)</span></h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500"/>
              <span className="text-sm text-zinc-400">Você completou “<span className="font-semibold text-zinc-100">Acordar cedo</span>” às <span className="font-semibold text-zinc-100">08:13h</span></span>
            </li>

          </ul>
        </div>
      </div>
      
  )
}