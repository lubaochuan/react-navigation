
import React from "react"
import { Text } from "react-native"
import { Container, Content, Card, CardItem, Body } from "native-base"

export default class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Settings',
    }
  }

  render() {
    return (
      <Container>
        <Content padder>
        <Card>
           <CardItem>
             <Body>
               <Text>Settings Screen</Text>
             </Body>
           </CardItem>
         </Card>
        </Content>
      </Container>
    )
  }
}
