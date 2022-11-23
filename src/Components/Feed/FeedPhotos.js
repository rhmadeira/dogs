import React, { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import Error from "../Elements/Error";
import Loading from "../Elements/Loading";
import FeedPhotosItem from "./FeedPhotosItem";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);
  if (error) return <Error error={error} />;
  if (loading) return <Loading text="Carregando..." />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((item) => (
          <FeedPhotosItem key={item.id} photo={item} />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
