import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import Background from './Background';
import {darkGreen, gray} from './ContstantColor';
import InputField from './InputField';
import Btn from './Btn';

const SignUp = props => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [emailId, setEmailID] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setConfirmPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [contactNoError, setContactNoError] = useState(false);
  const [emailIdError, setEmailIDError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setConfirmPasswordError] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);

  const validateForm = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }

    if (!userName.trim()) {
      setUserNameError(true);
      isValid = false;
    } else {
      setUserNameError(false);
    }

    if (!contactNo.trim()) {
      setContactNoError('Contact number is required!');
      isValid = false;
    } else if (!/^\d+$/.test(contactNo)) {
      setContactNoError('Contact number must contain only digits!');
      isValid = false;
    } else if (contactNo.length !== 10) {
      setContactNoError('Contact number must be 10 digits long!');
      isValid = false;
    } else {
      setContactNoError(false);
    }

    if (!emailId.trim()) {
      setEmailIDError(true);
      isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(emailId)) {
      setEmailIDError(true);
      isValid = false;
    } else {
      setEmailIDError(false);
    }

    if (!password.trim()) {
      setPasswordError('Password is required!');
      isValid = false;
    } else if (password.length < 4) {
      setPasswordError('Password must be at least 4 characters long!');
    } else {
      setPasswordError(false);
    }

    // Confirm Password validation
    if (!passwordConfirm.trim()) {
      setConfirmPasswordError('Confirm Password is required!');
      isValid = false;
    } else if (password !== passwordConfirm) {
      setConfirmPasswordError('Passwords do not match!');
      isValid = false;
    } else {
      setConfirmPasswordError(false);
    }

    return isValid;
  };

  const handleSignup = () => {
    if (validateForm()) {
      setModalVisible(true);
    }
  };

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.headerText}>Register</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>Create A new Account</Text>
        </View>
        <View style={styles.signupCard}>
          <InputField placeholder="Name" value={name} onChangeText={setName} />
          {nameError ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>Name is required!</Text>
            </View>
          ) : null}

          <InputField
            placeholder="User Name"
            value={userName}
            onChangeText={setUserName}
          />
          {userNameError ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>User Name is required!</Text>
            </View>
          ) : null}

          <InputField
            placeholder="Contact Number"
            keyboardType="numeric"
            value={contactNo}
            onChangeText={setContactNo}
          />
          {contactNoError ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{contactNoError}</Text>
            </View>
          ) : null}

          <InputField
            placeholder="Email ID"
            keyboardType="email-address"
            value={emailId}
            onChangeText={setEmailID}
          />
          {emailIdError ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>
                Please enter a valid Gmail address!
              </Text>
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
              <Text style={styles.errorText}>{passwordError}</Text>
            </View>
          ) : null}

          <InputField
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={passwordConfirm}
            onChangeText={setConfirmPassword}
          />

          {passwordConfirmError ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{passwordConfirmError}</Text>
            </View>
          ) : null}

          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By signing in, you agree to our
            </Text>
            <Text style={styles.termsHighlight}>Terms & Conditions</Text>
          </View>
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>and </Text>
            <Text style={styles.termsHighlight}>Privacy Policy</Text>
          </View>
          <Btn
            btnLabel="Signup"
            bgColor={darkGreen}
            textColor="white"
            press={handleSignup}
          />
          <View style={styles.accountContainer}>
            <Text style={styles.accountText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          transparent={true}
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.successHeader}>Signup Successful!</Text>
              <Text style={styles.successMessage}>
                Welcome,{' '}
                <Text style={{color: darkGreen, fontWeight: 'bold'}}>
                  {name}
                </Text>{' '}
                ! Your account has been created.
              </Text>
              <Text style={styles.successMessage}>
                Your User Name Account is:{' '}
                <Text style={{color: darkGreen, fontWeight: 'bold'}}>
                  {userName}
                </Text>
              </Text>
              <Btn
                btnLabel="Go to Login"
                bgColor={darkGreen}
                textColor="white"
                press={() => {
                  setModalVisible(false);
                  props.navigation.navigate('Login');
                }}
              />
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
  },
  descriptionContainer: {
    marginBottom: 10,
  },
  descriptionText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  signupCard: {
    width: '95%',
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: 'center',
    borderTopLeftRadius: 120,
    borderBottomRightRadius: 50,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  termsContainer: {
    width: '80%',
    flexDirection: 'row',
    fontSize: 20,
  },
  termsText: {
    color: gray,
  },
  termsHighlight: {
    color: darkGreen,
    fontWeight: 'bold',
  },
  accountContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  accountText: {
    fontWeight: '500',
    color: gray,
    fontSize: 16,
  },
  loginText: {
    fontWeight: '800',
    color: darkGreen,
    fontSize: 16,
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  successHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: darkGreen,
    marginBottom: 10,
  },
  successMessage: {
    fontSize: 16,
    textAlign: 'center',
    color: gray,
    marginBottom: 5,
  },
});

export default SignUp;
