import React from 'react'
import { View, Text } from 'react-native'
import Standard from '../style/Standard'
import If from './If'

function parOuImpar(num){
    // if (num % 2 == 0) {
    //     return <Text style={Standard.ex}>Par</Text>
    // } else {
    //     return <Text style={Standard.ex}>Impar</Text>
    // }
    const v = num % 2 ==0 ? 'Par' : 'Impar'
    return <Text style={Standard.ex}>{v}</Text>
}

// export default props =>
//     <View>
//         <If test={props.numero % 2 == 0}>
//             <Text style={Standard.ex}>Par</Text>
//         </If>
//         <If test={props.numero % 2 == 1}>
//             <Text style={Standard.ex}>Impar</Text>
//         </If>
//     </View>

export default props =>
    <View>
        {parOuImpar(props.numero)}
        {/* {
            props.numero % 2 ==0
            ? <Text style={Standard.ex}>Par</Text>
            :<Text style={Standard.ex}>Impar </Text>
        } */}
    </View>