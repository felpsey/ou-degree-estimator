import { Module } from "../domain/Module";
import { PencilSquareIcon } from '@heroicons/react/24/solid';

type TableProps = {
    modules: Module[];
    onEditClick: (id: string) => void;
};
  
export default function Table({ modules, onEditClick }: TableProps) {
  function editModuleEntry(id: string): void {
    onEditClick(id);
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200 text-left text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-200 px-4 py-2">Module</th>
            <th className="border border-gray-200 px-4 py-2">Credits</th>
            <th className="border border-gray-200 px-4 py-2">Stage</th>
            <th className="border border-gray-200 px-4 py-2">Grade</th>
            <th className="border border-gray-200 px-4 py-2">Weighted Grade</th>
            <th className="border border-gray-200 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 even:bg-gray-100 odd:bg-white"
            >
              <td className="border border-gray-200 px-4 py-2">{item.code}</td>
              <td className="border border-gray-200 px-4 py-2">{item.credits}</td>
              <td className="border border-gray-200 px-4 py-2">{item.stage}</td>
              <td className="border border-gray-200 px-4 py-2">{item.grade}</td>
              <td className="border border-gray-200 px-4 py-2">{item.weightedGrade}</td>
              <td className="border border-gray-200 px-4 py-2">
                <button className='p-1 hover:animate-pulse rounded' onClick={() => { editModuleEntry(item.id) }}>
                    <PencilSquareIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}