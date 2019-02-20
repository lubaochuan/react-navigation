import React from "react"
import { Text } from "react-native"
import { Container, Content, Card, CardItem, Body, Button } from "native-base"

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
        <Card>
           <CardItem>
             <Body>
               <Text>Home Screen</Text>
             </Body>
           </CardItem>
         </Card>
         <Button  full
           onPress={() => this.props.navigation.navigate('Details',
           {
             itemId: 86,
             otherParam: 'anything you want here',
           })}>
           <Text>Go to Details</Text>
         </Button>
        </Content>
      </Container>
    )
  }
}
