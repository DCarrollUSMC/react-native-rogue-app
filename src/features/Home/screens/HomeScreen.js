/**
 * FILENAME:        features/Home/screens/HomeScreen.js
 *
 * DESCRIPTION:     Primary screen for Home feature.
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

// Import API methods for Home Screen
import { getUser, getProductList } from '../../../api/home';

// Import redux store and actions
import { setUser, setProductList } from '../../../redux/actions/actions';
import { connect } from 'react-redux';

// Import assets
import styles from '../styles/styles';
import ProductList from '../../../components/Product/ProductList';

/**
* mapDispatchToProps will allow access to actions allowing
* the component to update the state in redux
*/
function mapDispatchToProps(dispatch) {
    return {
        setUser: user => dispatch(setUser(user)),
        setProductList: productList => dispatch(setProductList(productList))
    };
}

// mapStateToProps will allow access to state values in component props
function mapStateToProps(state) {
    const { user, productList } = state
    return {
        user: user,
        productList: productList
    };
}

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    /**
     * async componentDidMount life cycle hook to fire
     * getUser & getProductList methods to make Axios API call to AV2.
     */
    async componentDidMount() {
        try {
            this.setState({loading: true})
            // Axios API call to AV2 for User Data
            let user = await getUser();

            // Fire setUser to dispatch redux action to set user in state
            this.props.setUser({ user });

            // Axios API call to AV2 for productList
            let productList = await getProductList(user.data.id);

            // Fire setProductList to dispatch redux action to set product list in state
            this.props.setProductList({ productList });
            this.setState({loading: false})
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' />
                <ProductList productList={this.props.productList} loading={this.state.loading} />
            </View>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (HomeScreen);