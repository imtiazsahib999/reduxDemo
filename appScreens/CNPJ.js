import React,{useState} from 'react'
import {Text, View,  StatusBar, TextInput, StyleSheet, TouchableOpacity,Alert, KeyboardAvoidingView} from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const CNPJ = ({navigation}) =>{
  const [isCnic, setIsCnic] = useState('')
  const [loading, setLoading] = useState(false)
  const [listArray, setListArray] = useState([])
  
  var formatNum = isCnic.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  
  const getData = () => {
    if (isCnic === '') {
           
        Alert.alert(
            'Wrong Input!',
            'Fields cannot be empty.',
            [{ text: 'Okay' }],
        );
    }
   else{
    setLoading(true)
    fetch(`https://public.fluxoresultados.com.br/v1/cnpj/${isCnic}`,{
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
          })
          .then((response) => response.json())
            .then((responseJson) => {
              setListArray(responseJson)
              if(responseJson.status === 'OK')
              {
                navigation.navigate('details',{fullObject: responseJson})
                setLoading(false)
              }
              else{
                  alert(JSON.stringify('wrong input'))
                  setLoading(false)
              }
             })
             .catch((error) => {
               alert(error , )
            })
   }
}
  return(
  <View style={{flex:1, backgroundColor:'#fff' }}>
      
      <StatusBar backgroundColor={'#fff'}/>
      {loading ?  <SkeletonPlaceholder>
      <View style={styles.loaderViewStyl}>
        <View style={{ width: 300, height: 600,  }} />
        <View style={{ marginLeft: 10 }}>
          
        </View>
      </View>
    </SkeletonPlaceholder>:
    <KeyboardAvoidingView style={styles.viewStyl}>
            <Text style={styles.txtStyl}>Welcome Here!</Text>
    <View style={styles.inputViewStyl}>
    <Text style={{fontSize:15, textAlign:'center', marginLeft:10}}>CNPJ</Text>
    <TextInput
        style={styles.inputStyl}
        onChangeText={(val) => setIsCnic(val)}
        placeholder={'xx.xxx.xxx/xxxx-xx'}
        value={formatNum}
        maxLength={18} 
        keyboardType={'numeric'}
      />
      <TouchableOpacity onPress={() =>getData() }
      style={styles.btnStyl}>
        <Text style={styles.btnTxtStyl}>Submit</Text>
      </TouchableOpacity>
    </View> 
   
      </KeyboardAvoidingView>}
  </View>
)
}
export default CNPJ
const styles = StyleSheet.create({
loaderViewStyl:{ flexDirection: "row", alignItems: "center" , alignSelf:'center', justifyContent:'center' },
viewStyl:{height:'100%',  width:'100%', justifyContent:'center', alignSelf:'center'},
txtStyl:{textAlign:'center', fontSize:25, color:'#3E5569'},
inputViewStyl:{height:'30%', width:'95%', backgroundColor:'lightgray', borderRadius:10, alignSelf:'center', alignSelf:'center', marginTop:20},
inputStyl:{height: 40, alignSelf:'center', borderColor: 'gray', borderWidth: 1, width:150},   
btnStyl:{height:40, width:100, borderRadius:10, alignSelf:'center', marginTop:10, justifyContent:'center', backgroundColor:'#3E5569'},
btnTxtStyl:{textAlign:'center', color:'#fff'}
});