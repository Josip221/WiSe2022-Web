import { initializeApp } from 'firebase/app';
import { useState, useEffect } from 'react';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import ButtonMenu from './components/ButtonMenu';
import Table from './components/Table';

function App() {
  const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
    databaseURL: `${process.env.REACT_APP_DATABASE_URL}`,
    projectId: `${process.env.REACT_APP_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_SENDER_ID}`,
    appId: `${process.env.REACT_APP_APP_ID}`,
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  const measureHandler = () => {
    set(ref(db, 'measureStatus'), 1);
  };

  const resetHandler = () => {
    set(ref(db, 'measure'), null);
  };
  const [measureData, setMeasureData] = useState([]);

  useEffect(() => {
    const measureDataRef = ref(db, 'measure');
    onValue(measureDataRef, snapshot => {
      setMeasureData(snapshot.val());
    });
  }, [db]);

  return (
    <div className="flex flex-col items-center">
      <div className="">
        <h1 className="text-center text-6xl bold rounded-lg p-10">
          Wemos D1 App Demo
        </h1>
        <div>
          <p className="text-center">Wemos D1 board</p>
          <p className="text-center">ESP8266 WiFi communication</p>
          <p className="text-center">BME680 sensor</p>
        </div>
        <div className="divider"></div>
        <p className="text-center my-5">Control sensor for air quality data</p>
      </div>
      <ButtonMenu measureHandler={measureHandler} resetHandler={resetHandler} />
      {<Table measureData={measureData} />}
    </div>
  );
}

export default App;
