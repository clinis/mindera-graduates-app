import React from 'react'
import { FlatList, Text, View } from 'react-native'

import { getListItems } from '../components/api'

export class GalleryScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: getListItems()
    }
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('list', 'List')
    }
  }

  render () {
    return (
      <FlatList
        data={this.state.list}
        contentContainerStyle={{
          paddingLeft: 10,
          paddingRight: 10
        }}
        renderItem={({item}) => (
          <View style={{
            flex: 1,
            alignItems: 'center',
            width: 160,
            minHeight: 160,
            maxHeight: 200,
            marginTop: 20
          }}>
            <View>
              <View style={{height: 160, width: 160, backgroundColor: 'darkgrey'}}/>
              <Text style={{marginTop: 5}}>{item}</Text>
            </View>
          </View>
        )}
        numColumns={2}
        keyExtractor={(item) => item}
      />
    )
  }
}