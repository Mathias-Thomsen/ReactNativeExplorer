import React from 'react';
import { ScrollView, Text } from 'react-native';
import CardComponent from '../componets/CardComponent';
import globalStyles from '../styles/GlobalStyles';
import { sortModulesByTitle } from '../utils/sortingASC'; // Importerer den dedikerede sortering funktion

const HomeScreen = ({ navigation }) => {
  const modules = [
    {
        title: 'Accelerometer',
        description: 'Lær hvordan du bruger Accelerometeret til at måle enhedens bevægelse.',
        iconName: 'tachometer-alt',
        navigateTo: 'Accelerometer'
    },
    {
        title: 'Barometer',
        description: 'Lær hvordan du bruger Barometeret til at måle atmosfærisk tryk.',
        iconName: 'barometer', // Sikre dig at dette ikon findes i det ikonbibliotek du bruger, ellers vælg et passende alternativ
        navigateTo: 'Barometer'
    },    
    {
        title: 'DeviceMotion',
        description: 'Lær hvordan du bruger DeviceMotion til at spore og analysere enhedsbevægelse.',
        iconName: 'sensor', // Eller et andet passende ikon, der repræsenterer bevægelsesdata
        navigateTo: 'DeviceMotion'
    },
    {
        title: 'Gyroscope',
        description: 'Lær hvordan du bruger gyroskopet til at måle og analysere enhedens rotationshastighed.',
        iconName: 'compass', // Eller et andet passende ikon, der repræsenterer rotationsdata
        navigateTo: 'Gyroscope'
    },
    {
        title: 'LightSensor',
        description: 'Lær hvordan du bruger lyssensoren til at måle omgivende lysniveauer.',
        iconName: 'lightbulb', // Vælg et ikon der passer til lyssensorer, fx en lyspære
        navigateTo: 'LightSensor'
    },
    {
        title: 'Magnetometer',
        description: 'Lær hvordan du bruger magnetometeret til at måle magnetfeltets styrke og retning.',
        iconName: 'magnet', // Vælg et ikon der repræsenterer magnetiske data, fx en magnet
        navigateTo: 'Magnetometer'
    },
    {
        title: 'Pedometer',
        description: 'Lær hvordan du bruger skridttælleren til at måle antallet af skridt du tager.',
        iconName: 'walk', // Vælg et ikon der repræsenterer skridttælling, fx en gående person
        navigateTo: 'Pedometer'
    },
    {
        title: 'Speedometer',
        description: 'Lær hvordan du bruger GPS til at måle din nuværende hastighed i km/t.',
        iconName: 'speed',
        navigateTo: 'Speedometer'
    }
    
    
  ];

  // Anvend funktionen til at sortere modulerne
  const sortedModules = sortModulesByTitle(modules);

  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <Text style={globalStyles.title}>React Native Læringsmoduler</Text>
      {sortedModules.map((module, index) => (
        <CardComponent
          key={index}
          title={module.title}
          description={module.description}
          iconName={module.iconName}
          onPress={() => navigation.navigate(module.navigateTo)}
        />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
