import { Scroll, Timer } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import Logo from '../../public/logo.svg'

export function Header() {
  return (
    <header className='p-10 flex justify-between'>
      <img src={Logo} alt='Logotipo Ignite' className='select-none' />
      <div className='flex text-gray7'>
        <NavLink to='/' end title='Timer'>
          <Timer size={32} className='mr-6' />
        </NavLink>
        <NavLink to='/history' title='Histórico'>
          <Scroll size={32} />
        </NavLink>
      </div>
    </header>
  );
}