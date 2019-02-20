
import React from "react"
import { Text } from "react-native"
import { Container, Content, Card, CardItem, Body, Button } from "native-base"

export default class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <Container>
        <Content padder>
        <Card>
           <CardItem>
             <Body>
               <Text>Details Screen</Text>
               <Text>itemId: {JSON.stringify(itemId)}</Text>
               <Text>otherParam: {JSON.stringify(otherParam)}</Text>
             </Body>
           </CardItem>
         </Card>
         <Button  full
           style={{ marginTop: 10 }}
           onPress={() => this.props.navigation.push('Details',
           {
             itemId: Math.floor(Math.random() * 100),
           })}>
           <Text>Go to Details Again</Text>
         </Button>
         <Button  full
           style={{ marginTop: 10 }}
           onPress={() => this.props.navigation.navigate('Home')}>
           <Text>Go to Home</Text>
         </Button>
         <Button  full
           style={{ marginTop: 10 }}
           onPress={() => this.props.navigation.goBack()}>
           <Text>Go back</Text>
         </Button>
        </Content>
      </Container>
    )
  }
}
