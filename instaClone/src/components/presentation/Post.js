import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    Dimensions, 
    TouchableOpacity 
} from 'react-native'
import config from '../../config';


class Post extends Component {
    constructor() {
        super();
        this.state = {
            liked: false,
            screenWidth: Dimensions.get("window").width
        };
    }

    likeToggled() {
        this.setState({
            liked: !this.state.liked
        })
    }

    render() {
        console.log(this.props.item)
        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        const imageSelection = 
            this.props.item % 2 == 0
            ? "https://cdn.fotofits.com/petzlover/gallery/img/l/siberian-husky-681704.jpg"
            : "https://www.thesprucepets.com/thmb/D48Ahacn4J743NDtDTnplP-MQho=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/31170124_355309831644176_4994517524629422080_n-5b3a4d0ec9e77c003771e6a6.jpg"
        const imageUri = imageSelection;
        // "=s" + imageHeight + "-c"; Cai nay dung de lam gi


        const heartIcon = this.state.liked ? "rgb(252,61,57)" : null;

        return (
            <View style={{ flex: 1,  width: 100 + "%"}}>
                <View style={styles.userBar}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={styles.userPic}
                            source={{
                                uri:
                                    "https://scontent.fsgn6-2.fna.fbcdn.net/v/t1.0-1/p320x320/61927571_1283256821823090_233414954093379584_n.jpg?_nc_cat=110&_nc_ohc=KWhTgjxsMREAQkQANw6ULnY7jbNW-BwcUayPzjKkMQFYHGa4dvughmWkg&_nc_ht=scontent.fsgn6-2.fna&oh=c49370580228fd6223d82b25be6f4a67&oe=5EA9F02E"
                            }}
                        />
                        <Text style={{ marginLeft: 10 }}>Harry</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 30 }}>...</Text>
                    </View>
                </View>
                <TouchableOpacity 
                activeOpacity={0.5}
                onPress={() => {
                    this.likeToggled();
                }}>
                    <Image style={{ width: this.state.screenWidth, height: 580 }}
                        source={{
                            uri: imageUri
                        }}
                    />
                </TouchableOpacity>


                <View style={styles.iconBar}>
                    <Image 
                        style={[styles.icon, { height: 30, width: 30, tintColor: heartIcon }]}
                        source={config.images.heartIcon}>    
                    </Image>
                    <Image 
                        style={[styles.icon, { height: 30, width: 30 }]} 
                        source={config.images.chatIcon}
                    ></Image>
                    <Image 
                        style={[styles.icon, { height: 30, width: 30 }]} 
                        source={config.images.arrowIcon}>
                    </Image>
                </View>

                <View style={styles.commentBar}>
                    <Image 
                        style={[styles.icon, { height: 25, width: 25}]} 
                        source={config.images.heartIcon}>
                    </Image>
                    <Text style={ {marginLeft: 3 }}>128 Likes</Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    userBar: {
        width: 100 + "%",
        height: config.styleConstants.rowHeight,
        // backgroundColor: "blue",
        backgroundColor: "rgb(255,255,255)",
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    userPic: {
        // marginTop: 5,
        width: 40,
        height: 40,
        borderRadius: 40
    },

    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomColor: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",

    },
    icon: {
        marginLeft: 12
    },

    commentBar: {
        width: 100 + "%",
        height: config.styleConstants.rowHeight,
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    }
})
export default Post;