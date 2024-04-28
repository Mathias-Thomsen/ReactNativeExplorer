import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';


export default function SpeedometerScreen() {
    const [speed, setSpeed] = useState(0);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                return;
            }

            Location.watchPositionAsync({
                accuracy: Location.Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 1
            }, (location) => {
                const currentSpeed = location.coords.speed;
                if (currentSpeed >= 0) { // Check if speed is valid
                    setSpeed(currentSpeed * 3.6); // Convert m/s to km/h
                }
            });
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Current Speed:</Text>
            <Text style={styles.speed}>{speed.toFixed(2)} km/h</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
    speed: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'red',
    }
});
