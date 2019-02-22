import React from "react"
import { Text } from "react-native"
import { Container, Content, Card, CardItem, Body, Button, Icon } from "native-base"

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerRight:
        <Button dark transparent
          onPress={navigation.getParam('gotoSettings')}>
          <Icon name='cog' />
        </Button>
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ gotoSettings: this._gotoSettings })
  }

  _gotoSettings = ()=>{
    this.props.navigation.navigate('Settings')
  }

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
         <Button  full
           style={{ marginTop: 10 }}
           onPress={() => this.props.navigation.navigate('MyModal')}>
           <Text>Go to ModalScreen</Text>
         </Button>
        </Content>
      </Container>
    )
  }
}
