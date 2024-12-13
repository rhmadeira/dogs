import { Metadata } from "next";
import ResetPasswordForm from "./components/reset-password";

export const metadata: Metadata = {
  title: "Resetar a senha | Dogs",
  description: "Resete a sua senha",
};

type TResetSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default async function ResetPage({ searchParams }: TResetSearchParams) {
  return (
    <div className="animeLeft">
      <h1 className="title">Resete a Senha</h1>
      <ResetPasswordForm
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </div>
  );
}
