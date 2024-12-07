import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "@/layouts/layout";
import { ButtonSubmit, Input } from "@/components";
import { useProtectedRoute, useFecth, useAuth } from "@/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const CreateGroupPage = () => {
  useProtectedRoute();

  const [route, setRoute] = useState("");
  const [schedule, setSchedule] = useState("");
  const { data, setEnpoint, setMethod, setBody, response, isDone, setToken } =
    useFecth();
  const { token } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (route.length <= 4 || schedule.length <= 4) {
      toast("Se ocupan 4 caracteres para que los campos sean válidos.");
      return;
    }
    setMethod("POST");
    setBody({
      route: route,
      schedule: schedule,
    });
    setToken(token);
    setEnpoint("/group/");
  };

  useEffect(() => {
    if (isDone) {
      if (response.status == 500) {
        toast("Error en el servidor, intente más tarde");
        return;
      }
      if (!response.ok) {
        toast(data.msg);
        return;
      }
      return navigate("/home");
    }
  }, [isDone]);

  return (
    <Layout>
      <main>
        <form onSubmit={onSubmit} className="space-y-6">
          <Input
            onChange={setRoute}
            type="text"
            value={route}
            id="route"
            placeholder="Escobedo - Parque Fundidora"
            label="Ruta"
          />
          <Input
            onChange={setSchedule}
            type="text"
            value={schedule}
            id="schedule"
            placeholder="1:30 pm - 2:15 pm"
            label="Horario"
          />
          <div className="max-w-md grid grid-cols-1 gap-4">
            <ButtonSubmit text="Crear Grupo" onClick={() => {}} />
          </div>
        </form>
      </main>
    </Layout>
  );
};
