// import AsyncStorage from '@react-native-async-storage/async-storage';


export const sauvegardeDonnee = async (value, key) => {
    try {
        const jsonValue = JSON.stringify(value)
        //await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        // saving error
    }
}


export const lectureDonnee = async (key) => {
    try {
        //const jsonValue = await AsyncStorage.getItem(key)
        //return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}
