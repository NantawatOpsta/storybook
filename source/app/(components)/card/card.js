export default function Card({children}) {
  return <div className="flex border border-gray-200 rounded-md p-5 shadow-sm">
    {children}
  </div>;
}
