import React from "react"
import { Text } from "react-native"
import { Container, Content, Card, CardItem, Body } from "native-base"

export default class InfoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'InfoScreen',
    }
  }

  render() {
    return (
      <Container>
        <Content padder>
        <Card>
           <CardItem>
             <Body>
               <Text>Information Screen</Text>
             </Body>
           </CardItem>
         </Card>
        </Content>
      </Container>
    )
  }
}
