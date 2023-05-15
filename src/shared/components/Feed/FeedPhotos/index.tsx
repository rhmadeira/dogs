import Error from "../../elements/Error";
import Loading from "../../elements/Loading";
import FeedPhotosItem from "../FeedPhotoItem";
import styles from "./FeedPhotos.module.css";
import { useQuery } from "@tanstack/react-query";
import { IPhoto, getPhotos } from "../../../services/photos";

interface IFeedPhotosProps {
  setModalPhoto: React.Dispatch<React.SetStateAction<IPhoto>>;
}

const FeedPhotos = ({ setModalPhoto }: IFeedPhotosProps) => {
  const { data, error, isLoading } = useQuery(["photos", 1, 6, 0], () =>
    getPhotos(1, 6, 0)
  );

  if (error) return <Error error={error} />;
  if (isLoading) return <Loading text="Carregando..." />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((item) => (
          <FeedPhotosItem
            setModalPhoto={setModalPhoto}
            key={item.id}
            photo={item}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
