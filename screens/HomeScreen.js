import React from "react"
import { Text } from "react-native"
import { Container, Content, Card, CardItem, Body } from "native-base"

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
        </Content>
      </Container>
    )
  }
}
