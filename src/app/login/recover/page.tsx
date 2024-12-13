import { Metadata } from "next";
import RecoverAccountForm from "./components/recover-account-form";

export const metadata: Metadata = {
  title: "Recover | Dogs",
  description: "Recover your account",
};
export default async function RecoverPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <RecoverAccountForm />
    </div>
  );
}
