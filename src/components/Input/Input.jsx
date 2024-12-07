export const Input = ({
  onChange,
  type,
  value,
  id,
  placeholder,
  label,
  min,
}) => {
  return (
    <label htmlFor={id} className="flex flex-col gap-3">
      <span className="font-semibold">{label}</span>
      <input
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        type={type}
        className="max-w-md px-4 py-3 outline-none rounded-md border border-neutral-500"
        id={id}
        placeholder={placeholder}
      />
    </label>
  );
};
