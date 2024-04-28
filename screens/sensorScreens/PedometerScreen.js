import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Pedometer } from 'expo-sensors';

export default function PedometerScreen() {
    const [currentStepCount, setCurrentStepCount] = useState(0);

    useEffect(() => {
        const subscribe = () => {
            Pedometer.watchStepCount(result => {
                setCurrentStepCount(result.steps);
            });
        };

        subscribe();

        return () => Pedometer.stopPedometerUpdates();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Step Counter:</Text>
            <Text style={styles.text}>Steps Taken: {currentStepCount}</Text>
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
    }
});
