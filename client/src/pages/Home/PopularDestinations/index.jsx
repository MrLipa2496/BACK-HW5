import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './PopularDestinations.module.sass';
import img from '../../../../img/in-process-img.png'; // це поки для турів без зображень

function PopularDestinations () {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    axios
      .get('/api/tours?limit=3')
      .then(response => {
        setTours(response.data.data || []);
      })
      .catch(error => {
        console.error('Error fetching tours:', error);
      });
  }, []);

  return (
    <div className={styles.popDesWrapper}>
      <h2 className={styles.popDesTitle}>Popular Destinations</h2>
      <div className={styles.popDesCards}>
        {tours.length > 0 ? (
          tours.map(tour => (
            <div key={tour.TR_ID} className={styles.cardWrapper}>
              <img
                className={styles.tourImg}
                src={tour.imageUrl || img}
                alt={tour.trName}
              />
              <div className={styles.infoWrapper}>
                <h3 className={styles.destination}>{tour.TR_Name}</h3>
                <p className={styles.destinDescription}>
                  {tour.TR_Description}
                </p>
                <p className={styles.price}>{`from $${tour.TR_Price}`}</p>
                <button className={styles.detailsBtn}>View Details</button>
              </div>
            </div>
          ))
        ) : (
          <p>No popular tours available.</p>
        )}
      </div>
    </div>
  );
}

export default PopularDestinations;
