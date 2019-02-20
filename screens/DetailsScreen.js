
import React from "react"
import { Text } from "react-native"
import { Container, Content, Card, CardItem, Body } from "native-base"

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
        <Card>
           <CardItem>
             <Body>
               <Text>Details Screen</Text>
             </Body>
           </CardItem>
         </Card>
        </Content>
      </Container>
    )
  }
}
