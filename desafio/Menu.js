import React from 'react'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Mult'
import Contador from './components/Contador'

const NavStack = createDrawerNavigator({
    Contador: {
        screen: () => <Contador numeroInicial={1000}/>,
        navigationOptions: {title: 'Contador'}
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8}/>,
        navigationOptions: {title: 'MegaSena'}
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!'/>
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />
    },
    Simples: {
        screen: () => <Simples texto='flexivel' />
    }
    }, {drawerWidth: 150})


const Drawer = createAppContainer(NavStack);

export default Drawer;

