import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        textContainer: {
            minHeight: 100,
            flex: 1,
            borderBottomWidth: 1,
            borderBottomColor: '#c7c7c7',
        },
        text: {
            fontWeight: 'bold',
            fontSize: 17,
            paddingLeft: 15,
        },
        roundScore: {
            color: '#11b83d',
            fontWeight: 'bold',
        },
        totalScore: {
            color: '#ebbd05',
            fontWeight: 'bold',
        },
        denyScore: {
            color: 'red',
            fontWeight: 'bold',
            marginTop: 7,
            paddingLeft: 10,
        },
        roundScoreContainer: {
            paddingLeft: 10,
        },
        totalScoreContainer: {
            paddingLeft: 10,
        }
    }
)