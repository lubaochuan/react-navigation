import React from "react"
import { Text } from "react-native"
import { Container, Header, Content, Card, CardItem, Body, Button } from "native-base"

export default class ModalScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Text>Model Example</Text>
          </Body>
        </Header>
        <Content padder>
        <Card>
           <CardItem>
             <Body>
               <Text>This is an example of a model screen.</Text>
             </Body>
           </CardItem>
         </Card>
         <Button  full
           onPress={() => this.props.navigation.goBack()}>
           <Text>Dismiss</Text>
         </Button>
        </Content>
      </Container>
    )
  }
}
