import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { DeviceMotion } from 'expo-sensors';

export default function DeviceMotionScreen() {
    const [data, setData] = useState({
        acceleration: null,
        rotation: null,
        orientation: null,
        gyro: null,
        gravity: null,
        accelerationIncludingGravity: null,
    });

    useEffect(() => {
        DeviceMotion.setUpdateInterval(500); // Opdater hvert halve sekund

        const subscription = DeviceMotion.addListener(deviceMotionData => {
            setData({
                acceleration: deviceMotionData.acceleration,
                rotation: deviceMotionData.rotation,
                orientation: deviceMotionData.orientation,
                gyro: deviceMotionData.rotation,
                gravity: deviceMotionData.gravity,
                accelerationIncludingGravity: deviceMotionData.accelerationIncludingGravity
            });
        });

        return () => subscription.remove();
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.textTitle}>Device Motion Data:</Text>
            
            <Text style={styles.text}>Acceleration (m/s²):</Text>
            <Text style={styles.dataText}>
                x: {data.acceleration?.x?.toFixed(3)}, 
                y: {data.acceleration?.y?.toFixed(3)}, 
                z: {data.acceleration?.z?.toFixed(3)}
            </Text>
            <Text style={styles.descriptionText}>
                Måler accelerationen af enheden i rummet, eksklusiv tyngdekraftens effekt.
            </Text>

            <Text style={styles.text}>Gyroscope (rad/s):</Text>
            <Text style={styles.dataText}>
                alpha: {data.rotation?.alpha?.toFixed(3)}, 
                beta: {data.rotation?.beta?.toFixed(3)}, 
                gamma: {data.rotation?.gamma?.toFixed(3)}
            </Text>
            <Text style={styles.descriptionText}>
                Måler rotationsraten omkring enhedens tre akser.
            </Text>

            <Text style={styles.text}>Orientation (grader):</Text>
            <Text style={styles.dataText}>
                alpha: {data.orientation?.alpha?.toFixed(3)}, 
                beta: {data.orientation?.beta?.toFixed(3)}, 
                gamma: {data.orientation?.gamma?.toFixed(3)}
            </Text>
            <Text style={styles.descriptionText}>
                Angiver enhedens aktuelle orientering i rummet med reference til en fast akse.
            </Text>

            <Text style={styles.text}>Gravity (m/s²):</Text>
            <Text style={styles.dataText}>
                x: {data.gravity?.x?.toFixed(3)}, 
                y: {data.gravity?.y?.toFixed(3)}, 
                z: {data.gravity?.z?.toFixed(3)}
            </Text>
            <Text style={styles.descriptionText}>
                Måler accelerationen som skyldes tyngdekraften, der påvirker enheden.
            </Text>

            <Text style={styles.text}>Acceleration Including Gravity (m/s²):</Text>
            <Text style={styles.dataText}>
                x: {data.accelerationIncludingGravity?.x?.toFixed(3)}, 
                y: {data.accelerationIncludingGravity?.y?.toFixed(3)}, 
                z: {data.accelerationIncludingGravity?.z?.toFixed(3)}
            </Text>
            <Text style={styles.descriptionText}>
                Måler accelerationen af enheden i rummet, inklusiv tyngdekraftens effekt.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        marginTop: 20,
        color: '#333',
    },
    dataText: {
        fontSize: 16,
        marginLeft: 10,
        color: '#666',
    },
    descriptionText: {
        fontSize: 14,
        marginLeft: 10,
        color: '#888',
        marginBottom: 20,
        fontStyle: 'italic',
    },
});
