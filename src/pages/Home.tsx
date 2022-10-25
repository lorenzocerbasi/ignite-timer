import { Header } from "../components/Header";
import { Timer } from "../components/Timer";

export function Home() {
  return (
    <>
      <div className='mx-40 my-20 bg-gray2 rounded-lg'>
        <Header />
        <Timer />
      </div>
    </>
  );
}