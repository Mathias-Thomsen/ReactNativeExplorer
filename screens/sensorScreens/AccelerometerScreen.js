import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const AccelerometerScreen = () => {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    Accelerometer.setUpdateInterval(16); // Opdaterer ca. 60 gange i sekundet for en glattere bevægelse

    const subscription = Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
      // Beregner den nye position for bolden baseret på accelerometerdata
      const radius = 85; // Radius for cirkel minus radius for bold
      const newX = accelerometerData.x * radius;
      const newY = -accelerometerData.y * radius; // Vendt y-aksen for naturlig bevægelse

      // Beregn den faktiske distance fra centrum og begræns til radius
      const distance = Math.sqrt(newX * newX + newY * newY);
      if (distance < radius) {
        setBallPosition({ x: newX, y: newY });
      } else {
        // Hold bolden på kanten af cirklen i samme retning
        const angle = Math.atan2(newY, newX);
        setBallPosition({
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius
        });
      }
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.sensor}>
      <Text>Accelerometer:</Text>
      <Text>x: {data.x.toFixed(2)}, y: {data.y.toFixed(2)}, z: {data.z.toFixed(2)}</Text>
      <View style={styles.container}>
        <View style={[styles.ball, {
          transform: [
            { translateX: ballPosition.x },
            { translateY: ballPosition.y }
          ]
        }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sensor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: 200,
    width: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 100,
    overflow: 'hidden',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'blue',
    position: 'absolute',
  },
});

export default AccelerometerScreen;
