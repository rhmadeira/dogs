import photosGet from "@/actions/photos-get";
import Feed from "@/components/feed/feed";

export default async function Home() {
  const { data } = await photosGet();
  console.log(data);
  return (
    <section className="container mainContainer">
      <h1 className="title">Home</h1>
      <Feed photos={data ?? []} />
    </section>
  );
}
