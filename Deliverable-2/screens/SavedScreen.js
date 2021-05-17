import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import AppTitle from '../components/AppTitle';
import AppColors from '../config/AppColors';
import DataManager from '../config/DataManager';


const getAdventures = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getAdventures(user);
    
}

function Saved({navigate}) {
    const saveList = getAdventures();
    console.log(saveList);
    getAdventures();
    return (
        <AppScreen style={styles.container}>
            <AppTitle>Saved</AppTitle>
            <FlatList
                data={saveList}
                keyExtractor={adventure => adventure.advid.toString()}
                renderItem= {({item}) => 
                
                <AppCard
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                category={item.category}

                />}
            
            />
        
            
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.background,
        flex: 1,
      },
})

export default Saved;