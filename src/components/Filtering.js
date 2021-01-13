const Filtering = ({onFind: onFiltering, ...props}) => {
  return <div className="mt-3 relative rounded-md shadow-sm">
    <svg className="w-5 h-5 absolute left-4 top-1/2 -mt-3 font-bold text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input
      {...props}
      type="text"
      id='find'
      name='find'
      placeholder='Find My Memo'
      onChange={onFiltering}
      className="block w-full pl-12 pr-5 py-4 text-sm font-square rounded-md shadow-neumo-active bg-neumo focus:outline-none"
    />
</div>
}
export default Filtering;