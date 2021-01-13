import { Link } from "react-router-dom";

const Item = ({data, to, onDelete}) => {
  return <div className="border-b border-gray-300">
    <div className="relative">
      <Link to={to} className="block p-4 pl-5 font-square text-md text-left text-gray-800 hover:text-black cursor-pointer">{data.title}</Link>
      <button onClick={_=> onDelete(data.id)} className="absolute right-4 -mt-2 focus:outline-none focus:border-none" style={{top: '50%'}}>
        <svg className="w-4 h-4 font-bold text-gray-600 hover:text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
}

export default Item;