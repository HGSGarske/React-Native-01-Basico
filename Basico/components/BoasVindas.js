import React, { useState } from 'react';
import { StyleSheet, Text,TextInput, View, Button, Alert} from 'react-native';

function BoasVindas(props) {
  const [nome,setNome] = useState('');
  const [sobrenome,setSobrenome] = useState('');
  const [mensagem, setMensagem] = useState('Seja bem-vindo(a)!');
  const [mostraMensagem, setMostraMensagem] = useState(false);

  const _apresentarMensagem = () => {
      if (!nome == '' && !sobrenome == '') {
          setMostraMensagem(true);
      } else {
        Alert.alert(
            'Preenchimento obrigatório',
            'Por favor informe o nome e o sobrenome!',
            [
              {text: 'ok'  },
            ],
          );
        }
      }

      const _limpar = () =>{
          setNome('');
          setSobrenome('');
          setMostraMensagem(false);
      }
      

return (
    <View style={styles.container}>

    <Text style={styles.titulo}>Indentifique-se</Text>

    <TextInput
      style={styles.campo}
      placeholder="Digite seu nome"
      onChangeText={nome => setNome(nome)}
      value={nome}
      />

    <TextInput
      style={styles.campo}
      placeholder="Digite seu sobrenome"
      onChangeText={sobrenome => setSobrenome(sobrenome)}
      value={sobrenome}      
      />

      <View style={styles.botaoContainer}>
        <Button
            onPress={_apresentarMensagem}
            title="ok"
        />
      </View>

    {mostraMensagem && (
        <View>
          <Text style={styles.texto}>Olá {nome} {sobrenome}! {props.saudacao}</Text>
          <Text style={styles.texto}>{mensagem}</Text>
        </View>
    )}

    <View style={styles.botaoContainer}>
      <Button
          onPress={_limpar}
          title="Limpar"
      />    
    </View> 
    
 </View>
  )
}
const styles = StyleSheet.create({
  container: {
     backgroundColor: '#081a31',
     width: 300,
     borderRadius: 5,
     padding: 10,
     margin: 10
  },
  titulo:{
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight:'bold',
    textAlign: "center",
  },
  texto: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: "center",
  },
  campo:{
   backgroundColor: '#dcedff',
   fontSize: 14,
   marginBotton: 5,
   marginTop: 5,
   borderRadius: 5,
   height: 35,
   textAlign: "center",
  },
  botaoContainer: {
   marginBottom: 5,
   margnTop: 5,
   borderRadius: 5,
  },
});
export default BoasVindas;
