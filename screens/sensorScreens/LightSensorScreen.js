import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { LightSensor } from 'expo-sensors';

export default function LightSensorScreen() {
    const [data, setData] = useState({
        light: 0
    });

    useEffect(() => {
        if (Platform.OS === 'android') {
            LightSensor.setUpdateInterval(500); // Kun på Android
        }

        const subscription = LightSensor.addListener(lightData => {
            console.log("Received light data:", lightData);
            setData({ light: lightData.illuminance });
        });
        

        return () => {
            subscription.remove();
        };
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Ambient Light Level:</Text>
            <Text style={styles.text}>Illuminance: {data.light.toFixed(2)} lux</Text>
            <Text style={styles.description}>
                Dette måler mængden af synligt lys omkring enheden, hvilket kan bruges til at justere skærmens lysstyrke eller for at analysere brugsmiljøet.
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
