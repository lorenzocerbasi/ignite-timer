import { Play } from "phosphor-react";

export function Timer() {
  return (
    <>
      <div className='flex flex-col items-center mt-10 max-w-2xl mx-auto'>
        <form className='flex text-gray7 mb-[100px] items-center w-full'>
          <label htmlFor='task' className='font-bold text-lg mr-2'>Vou trabalhar em</label>
          <input
            id='task'
            placeholder="Dê um nome para o seu projeto"
            className="focus:outline-none text-gray4 bg-transparent h-10 font-bold text-lg px-2 border-b-2 border-gray4 flex-1 text-center no-arrow"
            list='task-suggestion'
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
          />
          <label htmlFor='time' className='ml-2'>minutos.</label>
        </form>
        <div className='mb-14 font-coutdown text-[10rem] leading-[8rem] text-gray7 font-bold'>
          <span className='bg-gray-700 px-6 py-4 mr-4 rounded-lg'>0</span>
          <span className='bg-gray-700 px-6 py-4 rounded-lg'>0</span>
          <span className='text-green'>:</span>
          <span className='bg-gray-700 px-6 py-4 mr-4 rounded-lg'>0</span>
          <span className='bg-gray-700 px-6 py-4 rounded-lg'>0</span>
        </div>
        <button
          className='bg-green text-white w-full py-5 rounded-lg flex items-center justify-center mb-20 mt-14 transition-all disabled:bg-green disabled:opacity-70 hover:bg-green-dark '>
          <Play size={30} className='mr-1' />
          Começar
        </button>
      </div>
    </>
  );
}