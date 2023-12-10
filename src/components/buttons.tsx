const ActionButton = (
    props: React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  ) => {
    const { disabled, children } = props;
    return (
      <button
        className={`mt-4 ${
          disabled ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        } px-4 py-2 text-white uppercase rounded text-xs tracking-wider flex items-center justify-center w-20`}
        type="submit"
        disabled={disabled}
        {...props}
      >
        {disabled ? (
          <div
            className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] text-white-500  motion-reduce:animate-[spin_1.5s_linear_infinite] "
            role="status"
          >
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
  

  export default ActionButton;
