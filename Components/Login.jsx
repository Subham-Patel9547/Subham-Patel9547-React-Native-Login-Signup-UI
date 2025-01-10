import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import Background from './Background';
import {darkGreen, gray} from './ContstantColor';
import InputField from './InputField';
import Btn from './Btn';

const Login = props => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const validateForm = () => {
    let isValid = true;
    if (!userName.trim()) {
      setUserNameError(true);
      isValid = false;
    } else {
      setUserNameError(false);
    }

    if (!password.trim()) {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    return isValid;
  };

  const handleLogin = () => {
    if (validateForm()) {
      setSuccessModalVisible(true);
    }
  };

  const closeModal = () => {
    setSuccessModalVisible(false);
    // Navigate to another screen or reset the form
    props.navigation.navigate('Home'); // Adjust navigation if needed
  };

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.headerText}>Login</Text>
        <View style={styles.loginCard}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.subtitle}>Login To Your Account</Text>
          <InputField
            placeholder="Username"
            keyboardType="email-address"
            value={userName}
            onChangeText={setUserName}
          />
          {userNameError ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>Username is required!</Text>
            </View>
          ) : null}

          <InputField
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          {passwordError ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>Password is required!</Text>
            </View>
          ) : null}

          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forget Password?</Text>
          </View>
          <View style={styles.accountContainer}>
            <Text style={styles.accountText}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text style={styles.signupText}>Signup</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <Btn
              press={handleLogin}
              btnLabel="Login"
              bgColor={darkGreen}
              textColor="white"
            />
          </View>
        </View>
        {/* Success Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={successModalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.successTitle}>Login Successful!</Text>
              <Text style={styles.successMessage}>
                Welcome back,{' '}
                <Text style={{color: darkGreen, fontWeight: 'bold'}}>
                  {userName}
                </Text>{' '}
                !
              </Text>
              <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                <Text style={styles.modalButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 410,
  },
  headerText: {
    color: 'white',
    fontSize: 65,
    fontWeight: 800,
    marginVertical: 20,
  },
  loginCard: {
    width: '95%',
    paddingTop: 100,
    paddingBottom: 50,
    alignItems: 'center',
    borderTopLeftRadius: 150,
    borderBottomRightRadius: 50,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  welcomeText: {
    fontSize: 40,
    color: darkGreen,
    fontWeight: 'bold',
  },
  subtitle: {
    color: gray,
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    width: '90%',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  forgotPasswordText: {
    fontWeight: '500',
    color: gray,
    fontSize: 16,
  },
  accountContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  accountText: {
    fontWeight: '500',
    color: gray,
    fontSize: 16,
    marginTop: 5,
  },
  signupText: {
    fontWeight: '800',
    color: darkGreen,
    fontSize: 16,
    marginTop: 5,
  },

  buttonContainer: {
    marginTop: 10,
  },

  errorContainer: {
    width: '80%',
    marginTop: -10,
  },

  errorText: {
    color: 'red',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: darkGreen,
    marginBottom: 10,
  },
  successMessage: {
    fontSize: 16,
    color: gray,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: darkGreen,
    padding: 10,
    borderRadius: 10,
    width: '60%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
