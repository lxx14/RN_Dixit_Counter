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
        text: {
            fontWeight: 'bold',
            fontSize: 19,
            paddingLeft: 15,
            marginBottom: 5,
        },
        score: {
            fontWeight: 'bold',
            fontSize: 20,
            paddingLeft: 15,
            color: '#0400ff',
        },
        phrase: {
            fontSize: 17,
            color: '#ff9900',
            marginTop: 30,
            textAlign: 'center',
        },
        textL: {
            fontSize: 17,
            fontWeight: 'bold',
            color: '#000000'
        }
    }
)