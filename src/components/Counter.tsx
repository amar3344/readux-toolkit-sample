import React, { Component } from 'react'
import { Text, View ,StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import { increment,decrement,incrementByValue } from '../redux/CounterSlice'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

interface IProps{
    count:number,
    increment:()=>void,
    decrement:()=>void,
    incrementByValue:()=>void,
    dispatch:Dispatch,
}

interface IState{}

export class Counter extends Component<IProps,IState> {

  render() {
    return (
      <SafeAreaView style={styles.counterStyles}>
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:20}}>Counter</Text>
        <Text style={{fontSize:25}}>{this.props.count}</Text>
        </View>
        <View style={{gap:10}}>
            <TouchableOpacity style={[styles.buttons,{ backgroundColor:'green'}]} onPress={()=>this.props.dispatch(increment())}>
                <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttons,{ backgroundColor:'red',}]} onPress={()=>this.props.dispatch(decrement())}>
                <Text style={styles.buttonText}>Decrement</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttons,{ backgroundColor:'blue',}]} onPress={()=>this.props.dispatch(incrementByValue(50))}>
                <Text style={styles.buttonText}>IncrementByvalue 50</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}
const mapStateToProps=(state:any)=>({
    count:state.counter.count
})

export default connect(mapStateToProps)(Counter)

const styles = StyleSheet.create({

    buttonText:{
        color:'#fff',
        fontSize:18,
    },
    buttons:{
        padding:10,
        // backgroundColor:'green',
        borderRadius:10,
        alignSelf:'center',
    },
    counterStyles:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
})