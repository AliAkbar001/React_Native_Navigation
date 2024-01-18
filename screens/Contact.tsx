import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type ContactProps = NativeStackScreenProps<RootStackParamList, 'Contact'>
const Contact = ({navigation}: ContactProps) => {
  return (
    <View style={styles.container}>
    <Text style={styles.smallText}>Contact Info</Text>
    <Button
      title='Home'
      onPress={() => navigation.popToTop()}
    />
    <Button
        title="Go to Details"
      // onPress={()=> navigation.goBack()}
      // onPress={() => navigation.pop(2)}
    //   onPress={() => navigation.popToTop()}
        //  onPress={() => navigation.replace('Details', {
        //     productID: '99'
        //  })}
        onPress={() => navigation.push('Details', {
            productID: '99'
         })}
    />
   
  </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    smallText: {
        color: "#000000"
    }
})