import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Layout } from "@/layouts/layout";
import { ButtonSubmit, Input } from "@/components";
import { useFecth } from "@/hooks";
import { setCookie } from "@/utils";

export const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");
  const { data, setEnpoint, setMethod, setBody, response, isDone } = useFecth();
  const navigate = useNavigate();

  const auth = (action) => {
    if (email.length <= 4 || passsword.length <= 4) {
      toast("Se ocupan 4 caracteres para que los campos sean válidos.");
      return;
    }
    setMethod("POST");
    setBody({ email: email, password: passsword });
    setEnpoint(`/auth/${action}`);
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
      setCookie({ key: "token", value: data.token, days: 29 });
      setCookie({ key: "email", value: data.email, days: 29 });
      return navigate("/home");
    }
  }, [isDone]);

  return (
    <Layout>
      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="space-y-6"
        >
          <Input
            onChange={setEmail}
            type="email"
            value={email}
            id="email"
            placeholder="correo@ejemplo.com"
            label="Correo"
          />
          <Input
            onChange={setPassword}
            type="password"
            value={passsword}
            id="password"
            placeholder="*****"
            label="Contraseña"
          />
          <div className="max-w-md grid grid-cols-2 gap-4">
            <ButtonSubmit
              text="Inicia Seción"
              onClick={() => {
                auth("login");
              }}
            />
            <ButtonSubmit
              text="Registrarme"
              onClick={() => {
                auth("signup");
              }}
            />
          </div>
        </form>
      </main>
    </Layout>
  );
};
