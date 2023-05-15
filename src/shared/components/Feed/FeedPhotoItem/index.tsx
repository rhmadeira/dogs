import React from "react";
import Image from "../../elements/Image";
import styles from "./FeedPhotoItem.module.css";
import { IPhoto } from "../../../services/photos";

interface IFeedPhotosItemProps {
  photo: IPhoto;
  setModalPhoto: React.Dispatch<React.SetStateAction<IPhoto>>;
}

const FeedPhotosItem = ({ photo, setModalPhoto }: IFeedPhotosItemProps) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
