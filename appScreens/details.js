import React, {useState, useEffect} from 'react'
import {View, Text, StatusBar, StyleSheet} from 'react-native'
const Details = ({route}) =>{
    const [item, setItem] = useState(route.params.fullObject)
   
return(
    <View style={{flex:1}}>
        <View style={styles.barViewStyl}>
        <StatusBar backgroundColor={'#3E5569'}  />
        </View>
     <View style={styles.containerStyl}>
     <View style={styles.headeViewStyl}>
     <Text style={styles.txtStyl}>Company Details</Text>
     </View>
     <View style={styles.viewStyl}>
          <Text style={{width:'40%', marginLeft:10}}>Status:</Text>
          <Text>{item.situacao}</Text>
      </View>
      <View style={styles.viewStyl}>
          <Text style={styles.inputTxtStyl}>Phone Number:</Text>
          <Text style={{width:'50%', }}>{item.telefone}</Text>
      </View>
      <View style={styles.viewStyl}>
          <Text style={styles.inputTxtStyl}>Number of Activities:</Text>
          <Text>{item.atividade_principal[0].code}</Text>
      </View>
      <View style={styles.viewStyl}>
          <Text style={styles.inputTxtStyl}>Initiial Income:</Text>
          <Text>{item.capital_social}</Text>
      </View>
      <View style={styles.viewStyl}>
          <Text style={styles.inputTxtStyl}>Company Name:</Text>
          <Text>{item.fantasia}</Text>
      </View>
      <View style={styles.viewStyl}>
            <Text style={styles.inputTxtStyl}>Company Legal Name:</Text>
            <Text>{item.nome}</Text>
      </View>
      <View style={styles.viewStyl}>
          <Text style={styles.inputTxtStyl}>Date of last update:</Text>
          <Text>{item.ultima_atualizacao.split('T')[0]}</Text>
      </View>
 </View>
    </View>
)
}
export default Details
const styles = StyleSheet.create({
    barViewStyl:{height:50, width:'100%', backgroundColor:'#3E5569'},
    containerStyl:{height: '70%', backgroundColor:'#fff', alignSelf:'center', width:'95%', borderRadius:10, marginTop:10},
    headeViewStyl:{height:30, width:'100%', borderTopLeftRadius:10, borderTopRightRadius:10, backgroundColor:'#3E5569'},
    txtStyl:{textAlign:'center', fontSize:18, color:'#fff'},
    viewStyl:{width:'95%',alignSelf:'center', height:40, alignItems:'center', marginTop:10, flexDirection:'row', borderRadius:10, backgroundColor:'lightgray'},
    inputTxtStyl:{width:'40%',marginLeft:10}
})