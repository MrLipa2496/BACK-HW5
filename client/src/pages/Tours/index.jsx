import React, { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { connect } from 'react-redux';
import { getToursThunk } from './../../store/slices/toursSlice';
import styles from './Tours.module.sass';
import defImg from './../../../img/in-process-img.png'; // Зображення для турів без зображень

function Tours ({ tours, isFetching, error, getTours }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTours, setFilteredTours] = useState([]);

  useEffect(() => {
    console.log('Received tours:', tours);
  }, [tours]);

  useEffect(() => {
    getTours();
  }, [getTours]);

  useEffect(() => {
    setFilteredTours(
      tours.filter(tour =>
        tour.TR_Name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, tours]);

  return (
    <>
      <div className={styles.headerWrapper}>
        <h2 className={styles.toursTitle}>
          Inspiring Tours: Create Your Memories!
        </h2>
        <p className={styles.toursSubTitle}>
          Your next adventure is already waiting for you! Choose from a wide
          array of tours that will inspire you to discover new sights and make
          unforgettable moments. Whether you prefer a getaway in exotic
          locations or an active retreat in the mountains, find a tour that will
          leave a lasting impression in your life. Start your journey to new
          experiences!
        </p>
      </div>
      <div className={styles.searchInputWrapper}>
        <input
          type='text'
          placeholder='Search tours...'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.toursWrapper}>
        {isFetching && <BeatLoader loading={isFetching} />}
        {error && <div>{error.message || '!!!ERROR!!!'}</div>}
        {filteredTours.length === 0 && !isFetching && (
          <p>No tours available.</p>
        )}
        <div className={styles.tourCards}>
          {filteredTours.map(tour => (
            <div key={tour.TR_ID} className={styles.cardWrapper}>
              <img
                className={styles.tourImg}
                src={
                  tour.TR_Img ? `http://localhost:5001/${tour.TR_Img}` : defImg
                }
                alt={tour.TR_Name}
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
          ))}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ toursData }) => ({
  isFetching: toursData.isFetching,
  error: toursData.error,
  tours: toursData.tours,
});

const mapDispatchToProps = dispatch => ({
  getTours: () => dispatch(getToursThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tours);
