import { Header } from "../components/Header";
import { HistoryComponent } from "../components/HistoryComponent";

export function History() {
  return (
    <>
      <div className='mx-40 my-20 bg-gray2 rounded-lg'>
        <Header />
        <HistoryComponent />
      </div>
    </>
  );
}