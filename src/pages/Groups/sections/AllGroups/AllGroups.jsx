import { useFecth } from "@/hooks";
import { useEffect } from "react";
import { GroupCard, Loader } from "@/components";

export const AllGroups = ({ token, email }) => {
  const { isLoading, data, setEnpoint } = useFecth();
  useEffect(() => {
    setEnpoint("/group/");
  }, []);

  return (
    <section>
      <h2 className="text-md font-semibold">Todos los grupos</h2>
      <h3 className="text-sm text-neutral-500">{email}</h3>
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {data.map((props) => (
              <GroupCard key={props.id} token={token} {...props} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
