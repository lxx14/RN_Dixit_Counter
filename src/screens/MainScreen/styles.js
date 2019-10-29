import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        button: {
            backgroundColor: '#03a1fc',
            marginTop: 40,
            marginBottom: 40,
            textAlign: 'center',
            width: 150,
            paddingTop: 20,
            paddingBottom: 20,
            alignSelf: 'center',
            fontWeight: 'bold',
            borderRadius: 7,
        },
        buttonEndGame: {
            backgroundColor: '#ffb854',
            marginBottom: 40,
            textAlign: 'center',
            width: 150,
            paddingTop: 20,
            paddingBottom: 20,
            alignSelf: 'center',
            fontWeight: 'bold',
            borderRadius: 7,
        },
        round: {
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 10,
            fontSize: 30,
        },
    }
)