import { Layout } from "@/layouts/layout";
import { useAuth } from "@/hooks";
import { AllGroups, UserGroups } from "./sections";

export const GroupsPage = () => {
  const { email, token } = useAuth();
  return (
    <Layout>
      <main className="space-y-8">
        <AllGroups token={token} email={email} />
        <UserGroups token={token} />
      </main>
    </Layout>
  );
};
