import photosGet from "@/actions/photos-get";
import userGet from "@/actions/user-get";
import Feed from "@/components/feed/feed";
import Link from "next/link";

export default async function AccountPage() {
  const user = await userGet();
  const photos = await photosGet({ user: user.data?.username });
  return (
    <section>
      {photos.data?.length ? (
        <Feed photos={photos.data} user={user.data?.username} />
      ) : (
        <div>
          <p
            style={{ color: "#444", fontSize: "1.25rem", marginBottom: "1rem" }}
          >
            Nenhuma foto encontrada.
          </p>
          <Link
            href={"/conta/postar"}
            className="button"
            style={{ display: "inline-block" }}
          >
            Postar Foto
          </Link>
        </div>
      )}
    </section>
  );
}
