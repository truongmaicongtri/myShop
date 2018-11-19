import React, { Component } from 'react';
import {
  View, Text, StyleSheet,
  TouchableOpacity, Image,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import Modal from 'react-native-modal';
import { ImagePicker, Permissions, LinearGradient } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { accountInfo } from '../../data';


class UserControlScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      yesNoDialogVisible: false,
      uploadImageDialogVisible: false
    };
  }

  setYesNoDialogVisible(state) {
    this.setState({ yesNoDialogVisible: state });
  }

  setScreenTaget(state) {
    this.setState({ screenTaget: state });
  }

  pickImageFromLibrary = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3, 3],
    });

    if (!result.cancelled) {
      this.setState({ avatarSource: result.uri });
    }
  };

  pickImageFromCamera = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const result = await ImagePicker.launchCameraAsync({
    });

    if (!result.cancelled) {
      this.setState({ avatarSource: result.uri });
    }
  };

  handleLogOut() {
    this.props.logOut();
  }


  render() {
    return (
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#2980B9', '#6DD5FA']} style={styles.screen}>
        <View style={styles.topContainer}>
          <View style={styles.avatarView}>
            <TouchableOpacity
              onPress={() =>
                this.setState({ uploadImageDialogVisible: true })
              }
            >
              <Image
                style={styles.avatarImage}
                source={this.state.avatarSource != null
                  ?
                  { uri: this.state.avatarSource } :
                  require('../../drawable/icon/userDefaultAvater.png')}
              />
              <View
                style={{
                  position: 'absolute',
                  justifyContent: 'center',
                  left: 110,
                  top: 110
                }}
              >
                <Image
                  style={styles.avatarIcon}
                  source={require('../../drawable/icon/avatarPlus.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{ marginTop: 20 }}>Have a nice day, {accountInfo.firstName}!</Text>
        </View>
        <View>
          <LinearGradient colors={['#4a9cf9', '#268bff']} style={styles.btnStyle}>
            <TouchableOpacity
              onPress={() => this.props.navigate('UserInfo')}
              style={styles.touchableStyle}
            >
              <Text style={styles.txtButton}>Your information</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient colors={['#4a9cf9', '#268bff']} style={styles.btnStyle}>
            <TouchableOpacity
              onPress={() => this.props.navigate('PurchaseHistory')}
              style={styles.touchableStyle}
            >
              <Text style={styles.txtButton}>Your purchase history</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient colors={['#4a9cf9', '#268bff']} style={styles.btnStyle}>
            <TouchableOpacity
              onPress={() => this.props.navigate('RatingHistory')}
              style={styles.touchableStyle}
            >
              <Text style={styles.txtButton}>Shop rating history</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient colors={['#4a9cf9', '#268bff']} style={styles.btnStyle}>
            <TouchableOpacity>
              <Text style={styles.txtButton}>Share with friend!</Text>
            </TouchableOpacity>
          </LinearGradient>
          <View style={styles.logoutButton}>
            <TouchableOpacity
              onPress={() => this.setYesNoDialogVisible(true)}
              style={styles.touchableStyle}
            >
              <Text style={{ textAlign: 'center', color: 'black' }}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>


        {/* YesNo Dialog */}

        <Modal
          style={styles.modal}
          isVisible={this.state.yesNoDialogVisible}
          onBackdropPress={() => this.setYesNoDialogVisible(false)}
          backdropOpacity={0.2}
          onSwipe={() => this.setYesNoDialogVisible(false)}
          swipeDirection="left"
        >
          <View>
            <View style={styles.modalAlert}>
              <Text>Are you sure?</Text>
            </View>
            <View style={styles.modalOption}>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.setYesNoDialogVisible(false);
                  this.handleLogOut();
                }}
              >
                <View style={styles.modalYes}>
                  <Text>Yes</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => this.setYesNoDialogVisible(false)}
              >
                <View style={styles.modalNo}>
                  <Text>No</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </Modal>
        {/* Choose way to upload image Dialog */}
        <Modal
          style={styles.modal}
          isVisible={this.state.uploadImageDialogVisible}
          onBackdropPress={() => this.setState({ uploadImageDialogVisible: false })}
          backdropOpacity={0.2}
          onSwipe={() => this.setState({ uploadImageDialogVisible: false })}
          swipeDirection="left"
        >
          <View>
            <View style={styles.modalAlert}>
              <Text>Upload avatar from:</Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                this.setState({ uploadImageDialogVisible: false });
                this.pickImageFromCamera();
              }}
            >
              <View style={styles.modalOptionCamera}>
                <Text>Camera</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                this.setState({ uploadImageDialogVisible: false });
                this.pickImageFromLibrary();
              }}
            >
              <View style={styles.modalOptionCamera}>
                <Text>Library</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                this.setState({ uploadImageDialogVisible: false });
              }}
            >
              <View style={styles.modalOptionLibrary}>
                <Text>Cancel</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Modal>
      </LinearGradient >
    );
  }
}

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#82bbfc',
    padding: width / 20,
  },
  topContainer: {
    height: (height / 3),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  avatarView: {
    width: 150,
    height: 150,
  },
  avatarImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#268bff'
  },
  avatarIcon: {
    width: 32,
    height: 32,
  },
  btnStyle: {
    marginTop: 20,
    backgroundColor: '#268bff',
    height: height / 13,
    borderRadius: height / 13,
    justifyContent: 'center',
    elevation: 5,
  },
  touchableStyle: {
    height: height / 13,
    borderRadius: height / 13,
    justifyContent: 'center',
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: '#acd0f9',
    height: height / 13,
    padding: 10,
    borderRadius: height / 13,
    justifyContent: 'center',
    elevation: 5,
  },
  txtButton: {
    textAlign: 'center',
    color: '#fff'
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height
  },
  modalAlert: {
    width: width * 0.6,
    height: height / 12,
    backgroundColor: 'white',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 1,
    borderRightWidth: 2,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOption: {
    width: width * 0.6,
    height: height / 12,
    flexDirection: 'row',
  },
  modalYes: {
    width: width * 0.3,
    height: height / 12,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 1,
    borderBottomLeftRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalNo: {
    width: width * 0.3,
    height: height / 12,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOptionCamera: {
    width: width * 0.6,
    height: height / 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderLeftWidth: 2,
    borderBottomWidth: 1,
    borderRightWidth: 2,
  },
  modalOptionLibrary: {
    width: width * 0.6,
    height: height / 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  }
});

export default connect(null, actions)(UserControlScreen);
