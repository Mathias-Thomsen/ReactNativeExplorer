import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Gyroscope } from 'expo-sensors';

const GyroscopeScreen = () => {
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0
    });

    useEffect(() => {
        Gyroscope.setUpdateInterval(1000);  // Opdater hver sekund

        const subscription = Gyroscope.addListener(gyroscopeData => {
            setData(gyroscopeData);
        });

        return () => {
            subscription.remove();
        };
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Gyroscope Data:</Text>
            <Text style={styles.text}>X-axis: {data.x.toFixed(3)} rad/s</Text>
            <Text style={styles.text}>Y-axis: {data.y.toFixed(3)} rad/s</Text>
            <Text style={styles.text}>Z-axis: {data.z.toFixed(3)} rad/s</Text>
            <Text style={styles.description}>
                Gyroskopet måler rotationsraten, hvilket hjælper med at forstå enhedens orientering i rummet.
            </Text>
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
    textTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        color: '#333',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginTop: 20,
        textAlign: 'center',
    }
});

export default GyroscopeScreen;
