import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create(
    {
        container: {
            flex: 0,
            padding: 20,
            height: 200,
            backgroundColor: '#4287f5',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        button: {
            backgroundColor: 'white',
            width: 150,
            padding: 15,
            borderRadius: 10,
            textAlign: 'center',
            fontSize: 20,
        },
        input: {
            width: 250,
            height: 40,
            fontSize: 17,
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: 'white',
            borderRadius: 10,
        },
        icon: {
            paddingBottom: 10,
        }
    }
)