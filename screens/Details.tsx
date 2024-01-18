import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({route}: DetailsProps) => {
    const {productID} = route.params
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details: {productID}</Text>
      <Button
        title="Go to Home"
        // onPress={()=> navigation.goBack()}
        // onPress={() => navigation.pop(2)}
        onPress={() => navigation.popToTop()}
      />
      <Button
        title='Contact Info'
        onPress={() => navigation.push('Contact')}
      />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    },
    smallText: {
        color: "#000000"
    }
})