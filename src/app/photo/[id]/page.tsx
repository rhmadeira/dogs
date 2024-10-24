interface IProps {
  params: {
    id: string;
  };
}

export default async function PhotoIdPage({ params }: IProps) {
  return (
    <main>
      <h1>Foto id:{params.id}</h1>
    </main>
  );
}
