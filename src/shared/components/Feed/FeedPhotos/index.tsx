import { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { PHOTOS_GET } from "../../../services/api";
import Error from "../../elements/Error";
import Loading from "../../elements/Loading";
import FeedPhotosItem from "../FeedPhotoItem";
import styles from "./FeedPhotos.module.css";
import { useQuery } from "@tanstack/react-query";
import { getPhotos } from "../../../services/photos";

const FeedPhotos = ({ setModalPhoto }) => {
  // const { data, loading, error, request } = useFetch();

  const { data } = useQuery(["photos", 1, 6, 0], () => getPhotos(1, 6, 0));

  // if (error) return <Error error={error} />;
  // if (loading) return <Loading text="Carregando..." />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {/* {data.map((item) => (
          <FeedPhotosItem
            setModalPhoto={setModalPhoto}
            key={item.id}
            photo={item}
          />
        ))} */}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
