import AsyncStorage from "@react-native-async-storage/async-storage";

export const RemoveItem = async () => {
    try {
        await AsyncStorage.removeItem('token');
        return 'Success';
    }
    catch(exception) {
        return 'Fail';
    }
}

export const GetItem = async () => {
    try{
        return await AsyncStorage.getItem('token');
    }catch (e){
        return null;
    }
}

export const StoreItem = async (token) => {
    try{
        await AsyncStorage.setItem('token',token);
        return true;
    }catch (e){
        return false;
    }
}

export const GetAllKeys = async () => {
    let keys = []
    try {
        keys = await AsyncStorage.getAllKeys()
        return keys;
    } catch(e) {
        return e;
    }
}
