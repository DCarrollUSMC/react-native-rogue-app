/**
 * FILENAME:        features/Product/screens/ProductScreen.js
 *
 * DESCRIPTION:     Product Screen for the Product Feature
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Tab, Tabs, TabHeading } from 'native-base';
import VideoAccordion from '../../../components/Product/VideoAccordion';
import ProductOverview from '../../../components/Product/ProductOverview';
import VideoPlayer from '../../../components/Product/VideoPlayer';
import Loading from '../../../components/Loading/Loading';
import Error from '../../../components/Error/Error';
import ResourceList from '../../../components/Product/ResourceList';
import { getProduct } from '../../../api/product';
import { normalizeString } from '../../../app/helpers';
import styles from '../styles/styles';

 
 // mapStateToProps will allow access to state values in component props
function mapStateToProps(state) {
    const { user, nowPlaying } = state
    return {
        user: user,
        nowPlaying: nowPlaying
    };
};

class ProductScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            product: {},
            error: '',
            playlist: [],
            files: [],
            currentTab: 0,
            currentPlaylist: -1
        };
        this.tocSwitch = this.tocSwitch.bind(this);
    };

    componentDidMount() {
        this.bootstrapProduct();
    };

    async bootstrapProduct() {
        try {

            // Axios API call to AV2 for User Data
            let res = await getProduct(this.props.user.id, this.props.navigation.getParam('slug'));

            // Set error state if response is 500
            if(res.response && res.response.status === 500) {
                this.setState({ error: res.message });
            }

            // Normalize Summary to remove HTML and curly braces
            var prod = Object.assign({},res.data);
            prod.summary = normalizeString(prod.summary);

            // For now set data to local component state.  Eventually this may be stored in redux
            this.setState({ product: prod, playlist: res.data.playlists, files: res.data.files, loading: false });

        } catch (err) {
            console.log(err);
        }
    };

    renderResources() {
        return this.state.files.map((file) => {
            return (
                <View key={file.id} style={styles.container}>
                    <Text style={styles.text}>{file.name}</Text>
                </View>
            );
        });
    };

    /**
     * Called from ProductOverview.js, can be called from anywhere. 
     * Switches tab to video tab and sends index of playlist to VideoAccordion.js
     * so it can expand playlist in accordion.
     * 
     * @param number id 
     */
    tocSwitch(id) {
        this.setState({currentTab: 1, currentPlaylist: id});
    }

    render() {
        if(this.state.loading) {
            return (
                <Loading />
            )
        } else if(this.state.error) {
            return (
                <Error error={this.state.error}/>
            )
        } else {
            return (
                <View style={styles.screenContainer}>
                {this.props.nowPlaying != '' ?
                    <VideoPlayer source={this.props.nowPlaying} />
                :
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: this.state.product.mobile_thumbnail }} />
                    </View>
                }
                    <View style={styles.tabBarContainer}>
                        <Tabs 
                            page={this.state.currentTab}
                            initialPage={0}
                            tabBarUnderlineStyle={{ height: 0 }} 
                            onChangeTab={({i}) => this.setState({currentTab: i})}
                            tabContainerStyle={styles.tabContainer}>
                            <Tab heading={
                                    <TabHeading style={styles.tab}>
                                        <View style={this.state.currentTab === 0 ? styles.activeTab : styles.tab}>
                                            <Text style={styles.text}>Overview</Text>
                                        </View>
                                    </TabHeading>
                                }
                                style={styles.tab}>
                                <ScrollView style={styles.summaryContainer}>
                                    <Text style={styles.text}>{this.state.product.summary}</Text>
                                    <Text style={styles.toc}>TABLE OF CONTENTS</Text>
                                    {this.state.playlist && 
                                        <ProductOverview dataArray={this.state.playlist} tabSwitch={this.tocSwitch}/>
                                    }
                                </ScrollView>
                            </Tab>
                            <Tab heading={
                                    <TabHeading style={styles.tab}>
                                        <View style={this.state.currentTab === 1 ? styles.activeTab : styles.tab}>
                                            <Text style={styles.text}>Videos</Text>
                                        </View>
                                    </TabHeading>
                                }
                            style={styles.tab}>
                            {this.state.playlist && 
                                <ScrollView>
                                    <VideoAccordion dataArray={this.state.playlist} currPlaylist={this.state.currentPlaylist}/>
                                </ScrollView>
                            }
                            </Tab>
                            <Tab heading={
                                    <TabHeading style={styles.tab}>
                                        <View style={this.state.currentTab === 2 ? styles.activeTab : styles.tab}>
                                            <Text style={styles.text}>Resources</Text>
                                        </View>
                                    </TabHeading>
                                } 
                                style={styles.tab}>
                                <ScrollView style={{width: '100%'}}>
                                {this.state.files &&
                                    <ResourceList files={this.state.files} />
                                }
                                </ScrollView>
                            </Tab>
                        </Tabs>
                    </View>
                </View>
            )
        };
    };
};

export default connect(mapStateToProps)(ProductScreen);