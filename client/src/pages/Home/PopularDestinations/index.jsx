import React from 'react';
import styles from './PopularDestinations.module.sass';
import img from '../../../../img/in-process-img.png';

const popularDestinations = [
  {
    id: 1,
    destination: 'Cultural Journey to Japan',
    description:
      'Explore the rich history and culture of Japan, a land where ancient traditions blend seamlessly with modern innovations.',
    price: 'from $1500',
    imageUrl: img,
  },
  {
    id: 2,
    destination: 'Island Hopping in Greece',
    description:
      'Visit stunning islands like Santorini, Mykonos, Crete, and Rhodes, where sparkling turquoise waters meet white-washed buildings perched on cliffs, creating picture-perfect landscapes at every turn.',
    price: 'from $2000',
    imageUrl: img,
  },
  {
    id: 3,
    destination: 'Business Conference in Dubai',
    description:
      'Join an international business conference in Dubai, a global hub for innovation, finance, and entrepreneurship.',
    price: 'from $4500',
    imageUrl: img,
  },
];

function PopularDestinations () {
  return (
    <div className={styles.popDesWrapper}>
      <h2 className={styles.popDesTitle}>Popular Destinations</h2>
      <div className={styles.popDesCards}>
        {popularDestinations.map(destination => (
          <div key={destination.id} className={styles.cardWrapper}>
            <img
              className={styles.tourImg}
              src={destination.imageUrl}
              alt={destination.destination}
            />
            <div className={styles.infoWrapper}>
              <h3 className={styles.destination}>{destination.destination}</h3>
              <p className={styles.destinDescription}>
                {destination.description}
              </p>
              <p className={styles.price}>{destination.price}</p>
              <button className={styles.detailsBtn}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularDestinations;
