import React, { useState } from 'react';
import { Card, Button } from 'antd';
import CarOwnersData from '../services/Data';

function CardApp() {
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [selectedTab, setSelectedTab] = useState('owner');

  const handleOwnerClick = (owner) => {
    setSelectedOwner(owner);
    setSelectedTab('owner');
  };

  const handleCarClick = (owner) => {
    setSelectedOwner(owner);
    setSelectedTab('car');
  };

  const cardStyle = {
    height: '600px',
    width: '400px',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center' }}>Customers and Cars</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ ...cardStyle, textAlign: 'center', marginRight: '120px' }}>
          {CarOwnersData.map((owner) => (
            <Card key={owner.id} style={{ marginBottom: '10px' }}>
              <h3>{`${owner.firstName} ${owner.lastName}`}</h3>
              <Button onClick={() => handleOwnerClick(owner)}>Customer Information</Button>
              <Button onClick={() => handleCarClick(owner)}>Car Information</Button>
            </Card>
          ))}
        </div>
        <div style={{ ...cardStyle, textAlign: 'center', marginLeft: '120px' }}>
          {selectedOwner && (
            <Card>
              {selectedTab === 'owner' ? (
                <div>
                  <h2>Customer Information</h2>
                  <p>{`Name: ${selectedOwner.firstName} ${selectedOwner.lastName}`}</p>
                  <p>{`Birth Year: ${selectedOwner.birthYear}`}</p>
                  {selectedOwner.cars.length > 0 && (
                    <div>
                      <h3>Car List:</h3>
                      {selectedOwner.cars.map((car) => (
                        <p key={car.id}>{`Brand: ${car.brand}`}</p>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <h2>Car Information</h2>
                  {selectedOwner.cars.map((car) => (
                    <div key={car.id}>
                      <p>{`ID: ${car.id}`}</p>
                      <p>{`Year: ${car.year}`}</p>
                      <p>{`Brand: ${car.brand}`}</p>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardApp;
