import { Play, HandPalm } from "phosphor-react";
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns"

interface TypesFormTimer {
  task: string,
  time: number,
}

interface Cycle {
  id: string,
  task: string,
  time: number,
  startDate: Date,
  interruptedDate?: Date,
  finishedDate?: Date,
}

const createUserFormSchema = yup.object({
  task: yup.string().required("É necessário informar uma tarefa!"),
  time: yup.number().min(5, "O tempo precisa ser maior que 5 minutos!").max(60, "O tempo precisa ser menor que 60 minutos!").required("É necessário informar um tempo!")
})

export function Timer() {

  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [secondPassed, setSecondPassed] = useState(0)

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<TypesFormTimer>({
    resolver: yupResolver(createUserFormSchema),
    defaultValues: {
      task: '',
      time: 0,
    }
  });

  const activeCycle = cycles?.find((i: any) => i?.id === activeCycleId)

  const convertMinuteToSecond = activeCycle ? activeCycle?.time * 60 : 0
  const totalSeconds = convertMinuteToSecond

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(new Date(), activeCycle?.startDate)

        if (secondsDifference >= totalSeconds) {
          setCycles(state => state?.map((cycle) => {
            if (cycle?.id === activeCycleId) {
              return { ...cycle, finishedDate: new Date() }
            } else {
              return cycle
            }
          }))
          setSecondPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondPassed(secondsDifference)
        }
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds])

  function createTask(data: TypesFormTimer) {
    const id = new Date().getTime().toString()
    const newCycle: Cycle = {
      id,
      task: data?.task,
      time: data?.time,
      startDate: new Date(),
    }
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setSecondPassed(0)
  }

  function interruptCycle() {
    setCycles(state => state?.map((cycle) => {
      if (cycle?.id === activeCycleId) {
        return { ...cycle, interruptedDate: new Date() }
      } else {
        return cycle
      }
    }))
    setActiveCycleId(null)
  }
  const currentSeconds = activeCycle ? totalSeconds - secondPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds])

  const task = watch('task')
  const buttonDisabled = !task

  return (
    <>
      <div className='flex flex-col items-center mt-10 max-w-2xl mx-auto'>
        <form onSubmit={handleSubmit(createTask)} className='flex flex-col text-gray7 items-center w-full'>
          <div className="flex mb-[100px]">
            <label htmlFor='task' className='font-bold text-lg mr-2'>Vou trabalhar em</label>
            <div className="flex flex-col">
              <input
                id='task'
                placeholder="Dê um nome para o seu projeto"
                className={`focus:outline-none text-gray4 bg-transparent h-10 font-bold text-lg px-2 border-b-2 flex-1 text-center no-arrow ${errors?.task ? "border-red" : "border-gray4"}`}
                list='task-suggestion'
                disabled={!!activeCycle}
                {...register('task')}
              />
            </div>
            <datalist id="task-suggestion">
              <option>Teste</option>
            </datalist>
            <label htmlFor='time' className='mx-2'>durante</label>
            <input
              id='time'
              placeholder="0"
              type="number"
              className={`focus:outline-none text-gray4 bg-transparent h-10 w-16 border-b-2 text-center ${errors?.time ? "border-red" : "border-gray4"}`}
              min={5} max={60}
              disabled={!!activeCycle}
              {...register('time', { valueAsNumber: true })}
            />
            <label htmlFor='time' className='ml-2'>minutos.</label>
          </div>
          <div className='mb-14 font-coutdown text-[10rem] leading-[8rem] text-gray7 font-bold select-none'>
            <span className='bg-gray-700 px-6 py-4 mr-4 rounded-lg'>{minutes[0]}</span>
            <span className='bg-gray-700 px-6 py-4 rounded-lg'>{minutes[1]}</span>
            <span className='text-green'>:</span>
            <span className='bg-gray-700 px-6 py-4 mr-4 rounded-lg'>{seconds[0]}</span>
            <span className='bg-gray-700 px-6 py-4 rounded-lg'>{seconds[1]}</span>
          </div>
          {!activeCycle
            ? <button
              className='bg-green text-white w-full py-5 rounded-lg flex items-center justify-center mb-20 mt-14 transition-all disabled:bg-green disabled:opacity-70 hover:bg-green-dark '
              disabled={buttonDisabled}
            >
              <Play size={30} className='mr-1' />
              Começar
            </button>
            : <button
              className='bg-red text-white w-full py-5 rounded-lg flex items-center justify-center mb-20 mt-14 transition-all disabled:opacity-70 hover:bg-red-dark '
              type="button" onClick={interruptCycle}
            >
              <HandPalm size={30} className='mr-1' />
              Interromper
            </button>
          }
        </form>
      </div>
    </>
  );
}