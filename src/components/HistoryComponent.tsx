export function HistoryComponent() {

  const success = '#04D361'
  const interrupted = '#AB222E'
  const inProgress = '#FBA94C'

  return (
    <>
      <h2 className="text-gray7 px-14 py-5 text-2xl font-bold">Meu histórico</h2>
      <div className="flex flex-col flex-1 p-14 overflow-auto">
        <table className="w-full border-collapse min-w-[600px]">
          <thead className="text-gray7">
            <tr className="text-left text-sm leading-6">
              <th className="rounded-tl-lg bg-gray3 p-4 pl-6 w-[50%]">Tarefa</th>
              <th className="bg-gray3 p-4">Duração</th>
              <th className="bg-gray3 p-4">Início</th>
              <th className="rounded-tr-lg bg-gray3 p-4 pr-6">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm">
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">Tarefa</td>
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">20 minutos</td>
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">Há 10 meses</td>
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">
                <div className="flex items-center before:w-3 before:h-3 before:bg-green-dark before:rounded-full before:mr-2">
                  Concluído
                </div>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">Tarefa</td>
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">20 minutos</td>
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">Há 10 meses</td>
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">
                <div className="flex items-center before:w-3 before:h-3 before:bg-red-dark before:rounded-full before:mr-2">
                  Concluído
                </div>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">Tarefa</td>
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">20 minutos</td>
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">Há 10 meses</td>
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">
                <div className="flex items-center before:w-3 before:h-3 before:bg-red-dark before:rounded-full before:mr-2">
                  Concluído
                </div>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">Tarefa</td>
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">20 minutos</td>
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">Há 10 meses</td>
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">
                <div
                  className={`flex items-center before:w-3 before:h-3 before:rounded-full before:mr-2 before:bg-red-dark`}
                >
                  Concluído
                </div>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">Tarefa</td>
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">20 minutos</td>
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">Há 10 meses</td>
              <td className="bg-gray-700 border-t-4 border-gray2 p-4 text-gray6">
                <div className="flex items-center before:w-3 before:h-3 before:bg-red-dark before:rounded-full before:mr-2">
                  Concluído
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}