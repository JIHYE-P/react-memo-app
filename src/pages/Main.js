import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../components/Item';

const Main = ({data, items, onDelete}) => {
  return <>
    {/* <div className="w-full my-5">
      <Filtering onFind={onFind} />
    </div> */}
    <div className="w-full my-5">
      <Link to={{pathname: '/insert', state: data}} className="block py-3 px-5 rounded-md bg-neumo shadow-neumo-active hover:shadow-neumo active:hover-none ">
        <svg className="inline-block w-5 h-5 mr-2 font-bold text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <span className="text-sm font-mono text-gray-600">Create Memo...</span>
      </Link>
    </div>
    <section className="w-full rounded-md bg-neumo shadow-neumo">
      {items.length > 0 
      ? items.map((item, i) => <Item key={`item${i}`} to={{pathname: '/insert', state: item}} data={item} onDelete={onDelete} />) 
      : <div className="relative p-4 border-b-1 border-gray-300 text-md font-mono font-bold text-gray-500 text-center">Not Found.</div>
      }
    </section>
  </>
}

export default Main;