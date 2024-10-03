import { View, StyleSheet, Text } from 'react-native'

export interface ItemProps {
    principal: string
    secundario: string
}

export default function Item(props: ItemProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.primario}>{props.principal}</Text>
            <Text style={styles.secundario}>{props.secundario}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    primario: {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 10,
        fontWeight: 'bold',
    },
    secundario: {
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 50,
        color: '#777',
        fontStyle: 'italic',
    }
})
