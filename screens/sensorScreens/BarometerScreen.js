import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Barometer } from 'expo-sensors';

const BarometerScreen = () => {
  const [data, setData] = useState({
    pressure: 0,
    relativeAltitude: 0 // Denne værdi er kun tilgængelig på iOS
  });

  useEffect(() => {
    // Tjekker om Barometer er tilgængelig
    async function checkSensorAvailability() {
      const { status } = await Barometer.isAvailableAsync();
      console.log('Barometer available:', status);
      if (status) {
        Barometer.setUpdateInterval(1000);
  
        const subscription = Barometer.addListener(barometerData => {
          console.log("Barometer data:", barometerData);
          setData(barometerData);
        });
  
        return () => subscription.remove();
      } else {
        console.log('Barometer not available on this device.');
      }
    }
  
    checkSensorAvailability();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Atmosfærisk Tryk: {data.pressure} hPa</Text>
      {Platform.OS === 'ios' && (
        <Text style={styles.text}>Relativ Højde: {data.relativeAltitude} meter</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default BarometerScreen;
