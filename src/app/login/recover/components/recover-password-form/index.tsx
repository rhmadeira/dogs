"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import React from "react";
import styles from "./login-form.module.css";
import ErrorMessage from "@/components/helper/error-message";
import passwordReset from "@/actions/password-reset";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Resetando...</Button>
      ) : (
        <Button>Resetar Senha</Button>
      )}
    </>
  );
}

export default function RecoverPasswordForm({
  keyToken,
  login,
}: {
  login: string;
  keyToken: string;
}) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <form action={action} className={styles.form}>
      <Input label="Nova Senha" name="password" type="password" />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
