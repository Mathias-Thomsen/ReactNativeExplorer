import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Magnetometer } from 'expo-sensors';

export default function MagnetometerScreen() {
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0
    });

    useEffect(() => {
        Magnetometer.setUpdateInterval(1000);  // Opdater hver sekund

        const subscription = Magnetometer.addListener(magnetometerData => {
            setData(magnetometerData);
        });

        return () => subscription.remove();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Magnetometer Data:</Text>
            <Text style={styles.text}>X: {data.x.toFixed(3)}</Text>
            <Text style={styles.text}>Y: {data.y.toFixed(3)}</Text>
            <Text style={styles.text}>Z: {data.z.toFixed(3)}</Text>
            <Text style={styles.description}>
                The magnetometer measures the magnetic field along the x, y, and z axes.
            </Text>
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
    textTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginTop: 20,
        textAlign: 'center',
    }
});
