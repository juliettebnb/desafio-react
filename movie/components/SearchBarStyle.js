const React = require('react-native');
const { Dimensions, StyleSheet } = React;

module.exports=StyleSheet.create({
    searchBarContainer: {
        width: Dimensions.get('window').width -20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        borderBottomWidth: 2,
        marginVertical: 10,
        borderColor: 'lightgray',
        flex: 1



    }
})