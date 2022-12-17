import React, { useEffect } from "react";

import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "./../../Hooks/UseFetch";
import Error from "./../Helper/Error";
import { PHOTOS_GET } from "./../../api";
import Loading from "./../Helper/Loading";
import styles from "../../CSS/FeedPhotos.module.css";

const FeedPhotos = ({ page, user, setModalPhoto, setInfinity }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: page, total: 3, user: user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < 3) {
        setInfinity(false);
      }
      
    }
    fetchPhotos();
  }, [request, user, page, setInfinity]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
