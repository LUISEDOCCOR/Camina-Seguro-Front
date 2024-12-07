export const GroupCard = ({
  id,
  parents,
  schedule,
  students,
  isPublic,
  route,
  token,
  isUserGroup,
}) => {
  return (
    <article
      key={id}
      className="w-full bg-neutral-900 border border-neutral-700 
      rounded-lg overflow-hidden p-3 flex flex-col justify-between gap-3"
    >
      <div className="space-y-1">
        <h2 className="text-lg font-bold">{route}</h2>
        <p className="text-sm text-neutral-500 font-mono">{schedule}</p>
      </div>
      {!isPublic && (
        <div>
          <span className="text-sm bg-red-700 text-red-200 px-2 py-.5 rounded-full">
            Aún no es aprobado
          </span>
        </div>
      )}
      <div className="grid grid-cols-2 gap-4">
        <div className={`space-y-1 ${parents == 0 ? "hidden" : "block"}`}>
          <p className="text-sm font-medium text-neutral-500">Padres</p>
          <p className="text-md font-bold text-white">{parents}</p>
        </div>
        <div className={`space-y-1 ${parents == 0 ? "hidden" : "block"}`}>
          <p className="text-sm font-medium text-neutral-500">Estudiantes</p>
          <p className="text-md font-bold text-white">{students}</p>
        </div>
      </div>
      {token && !isUserGroup && (
        <button
          className="bg-neutral-800 font-mono text-sm text-neutral-400 py-1 rounded-lg 
          hover:opacity-85 transition-opacity"
        >
          unete
        </button>
      )}
    </article>
  );
};
