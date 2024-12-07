export const ButtonSubmit = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="bg-neutral-700 py-3 rounded-lg 
            text-neutral-200 hover:opacity-80 transition-opacity"
      type="submit"
    >
      {text}
    </button>
  );
};
