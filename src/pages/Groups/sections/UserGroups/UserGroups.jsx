import { useFecth } from "@/hooks";
import { useEffect } from "react";
import { GroupCard, Loader } from "@/components";

export const UserGroups = ({ token }) => {
  const { data, setEnpoint, setToken } = useFecth();
  useEffect(() => {
    setToken(token);
    setEnpoint("/group/user");
  }, []);

  if (data.length > 0) {
    return (
      <section className="space-y-3">
        <h2 className="text-md font-semibold">Tus grupos</h2>
        <div>
          {
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {data.map((props) => (
                <GroupCard
                  key={props.id}
                  isUserGroup={true}
                  token={token}
                  {...props}
                />
              ))}
            </div>
          }
        </div>
      </section>
    );
  }
};
