/*
 * FILENAME:        features/Product/styles/styles.js
 *
 * DESCRIPTION:     Primary stylesheet for Product Feature
 * 
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#FFF'
    },
    error: {
        color: 'red'
    }, 
    resourceList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    resourceContainer: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        borderRadius: 10,
        margin: 20,
        justifyContent: 'space-evenly',
        width: '80%'
    },
    resourceInner: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    screenContainer: {
        flex: 1, 
        justifyContent: 'flex-start', 
        width: '100%', 
        backgroundColor: '#222'
    },
    imageContainer: {
        width: '100%',
        height: 150
    },
    image: {
        width: '100%',
        height: 150 
    },
    tabBarContainer: {
        flex: 1, 
        justifyContent: 'flex-start'
    },
    buttonContainer: {
        margin: 10,
    },
    titleContainer: {
        flex: 1,
        marginTop: 15,
        flexDirection: 'column'
    },
    resourceTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#FFF',
        textAlign: 'center',
        paddingHorizontal: 5
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width
    },
    closeButton: {
        position: 'absolute',
        zIndex: 100,
        top: 50,
        right: 25
    },
    closeIcon: {
        color: '#429321',
        fontSize: 40
    },
    tutorialText: {
        color: '#FFF',
        textTransform: 'uppercase' 
    },
    accheader: {
        width:'75%',
        flexDirection: 'row',
        flex: 1,
        marginRight: 25,
        marginTop: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#222',
    },
    accheaderTitle: {
        fontWeight: 'normal', 
        fontSize:18,
        color: '#A1A1A1',
        width: '100%',
        textAlign: 'center',
        letterSpacing: 2
    },
    accheaderNumber: {
        width:50,
        height:50,
        borderRadius: 15,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15

    },
    accheaderIcon: {
        fontSize: 18, 
        color: '#A1A1A1',
        marginRight:5,
    },
    videotext: {
        paddingLeft: 10,
        paddingBottom: 5, 
        color: '#FFF',
        width:'55%'
    },
    numberText: {
        color: '#fff',
        fontStyle: 'italic'
    },
    contentContainer: {
        width:'100%',
        padding:20,
        flex:1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    tab: {
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    resourceItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeTab: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '100%',
        height: '100%'
    },
    activeText: {
        color: '#FFF'
    },
    summaryContainer: {
        flex: 1,
        margin: 10,
        width: '90%'
    },
    tabContainer: {
        elevation: 0,
        borderBottomWidth: 0,
        marginTop: 20,
        paddingRight: 40,
        paddingLeft: 40,
        backgroundColor: '#222'
    },
    linearGradient: {
        borderRadius: 5,
        height:50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    starttext: {
        margin:5,
        color: 'white',
        fontWeight: '800',
        letterSpacing: 2,
        textAlign: 'center',
        backgroundColor: 'transparent',
    },
    toc: {
        marginTop:20,
        marginBottom: 10,
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 2,
        fontWeight: '600'
    },
    tocheaderTitle: {
        fontWeight: 'normal', 
        color: '#A1A1A1',
        width: '100%',
        textAlign: 'center',
        letterSpacing: 2
    },
    videoSummary: {
        width: '90%',
        margin:10,
    },
    accordionContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});