interface IProps {
  params: {
    user: string;
  };
}

export default async function ProfileUserPage({ params }: IProps) {
  return (
    <main>
      <h1>User : {params.user}</h1>
    </main>
  );
}
