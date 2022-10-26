import { Play } from "phosphor-react";
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const createUserFormSchema = yup.object({
  task: yup.string().required("É necessário informar uma tarefa!"),
  time: yup.number().min(5, "O tempo precisar maior que 5 minutos!").max(60, "O tempo precisar menor que 60 minutos!").required("É necessário informar um tempo!")
})

export function Timer() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<any>({
    resolver: yupResolver(createUserFormSchema),
  });

  function createTask(data: any) {
    console.log(data)
  }

  console.log(errors)

  const task = watch('task')
  const buttonDisabled = !task

  return (
    <>
      <div className='flex flex-col items-center mt-10 max-w-2xl mx-auto'>
        <form onSubmit={handleSubmit(createTask)} className='flex flex-col text-gray7 items-center w-full'>
          <div className="flex mb-[100px]">
            <label htmlFor='task' className='font-bold text-lg mr-2'>Vou trabalhar em</label>
            <input
              id='task'
              placeholder="Dê um nome para o seu projeto"
              className="focus:outline-none text-gray4 bg-transparent h-10 font-bold text-lg px-2 border-b-2 border-gray4 flex-1 text-center no-arrow"
              list='task-suggestion'
              {...register('task')}
            />
            <datalist id="task-suggestion">
              <option>Teste</option>
            </datalist>
            <label htmlFor='time' className='mx-2'>durante</label>
            <input
              id='time'
              placeholder="0"
              type="number"
              className="focus:outline-none text-gray4 bg-transparent h-10 w-16 border-b-2 border-gray4 text-center"
              step={5} min={5} max={60}
              {...register('time', { valueAsNumber: true })}
            />
            <label htmlFor='time' className='ml-2'>minutos.</label>
          </div>
          <div className='mb-14 font-coutdown text-[10rem] leading-[8rem] text-gray7 font-bold select-none'>
            <span className='bg-gray-700 px-6 py-4 mr-4 rounded-lg'>0</span>
            <span className='bg-gray-700 px-6 py-4 rounded-lg'>0</span>
            <span className='text-green'>:</span>
            <span className='bg-gray-700 px-6 py-4 mr-4 rounded-lg'>0</span>
            <span className='bg-gray-700 px-6 py-4 rounded-lg'>0</span>
          </div>
          <button
            className='bg-green text-white w-full py-5 rounded-lg flex items-center justify-center mb-20 mt-14 transition-all disabled:bg-green disabled:opacity-70 hover:bg-green-dark '
            disabled={buttonDisabled}
            onSubmit={createTask}
          >
            <Play size={30} className='mr-1' />
            Começar
          </button>
        </form>
      </div>
    </>
  );
}