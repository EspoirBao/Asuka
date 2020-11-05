import * as React from 'react';
import { Text, View, Button } from 'react-native';


export default function DetailsScreen({ navigation, route }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{JSON.stringify(route.params.id)}	</Text>
        </View>
    );
}
