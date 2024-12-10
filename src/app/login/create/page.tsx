import { Metadata } from "next";
import CreateAccountForm from "./components/create-account-form";

export const metadata: Metadata = {
  title: "Create your account",
  description: "Create your account to access the platform",
};

export default async function CreateAccount() {
  return (
    <div className="animeLeft">
      <h1 className="title">Create account</h1>
      <CreateAccountForm />
    </div>
  );
}
