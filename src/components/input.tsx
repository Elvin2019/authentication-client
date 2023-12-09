const OutlineInput = () => {
    return (
      <div className="flex flex-col">
        <label htmlFor="input" className="mb-1 text-gray-600">Label</label>
        <input id="input" type="text" className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
      </div>
    );
  }
  
  export default OutlineInput;