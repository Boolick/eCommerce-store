import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classNames from 'classnames';
import {useNavigate} from 'react-router-dom';
import {StateSchema} from 'app/providers/StoreProvider';
import Button from 'shared/ui/ButtonSubmit/Button';
// import ErrorMessage from 'shared/ui/Error/ErrorMessage';
import {EmailInput, PasswordInput} from 'features/loginForm/';
import {LoginErrorMessage} from 'features/loginForm/model/types/types';
import {NameInput, SurnameInput} from 'features/RegisterForm';
import {setError, setUser} from '../../model/slice/userSlice';
import {useUpdateUserMutation, useChangePasswordMutation} from '../../model/api/userUpdateApi';
import styles from './EditUserProfile.module.scss';

interface EditUserProfileProps {
  setIsEditing: (value: boolean) => void;
}

const EditUserProfile: React.FC<EditUserProfileProps> = ({setIsEditing}): React.JSX.Element => {
  const user = useSelector((state: StateSchema) => state.user.data);
  const [updateUser, {isSuccess: isUserUpdated, data: updatedUser}] = useUpdateUserMutation();
  const [changePassword, {isSuccess: isPasswordChanged}] = useChangePasswordMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state: StateSchema) => state.user.token);

  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [nameError, setNameError] = useState('');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [lastNameError, setLastNameError] = useState('');
  const [email, setEmail] = useState(user?.email || '');
  const [emailError, setEmailError] = useState('');

  const [currentPassword, setCurrentPassword] = useState('');
  const [currentPasswordError, setCurrentPasswordError] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const hasErrors =
    !!nameError ||
    !!lastNameError ||
    !!emailError ||
    !!currentPasswordError ||
    !!newPasswordError ||
    !!confirmPasswordError;

  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };
  /*   const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null); */
  useEffect(() => {
    if (isUserUpdated && updatedUser) {
      dispatch(setUser({user: updatedUser}));
      setIsEditing(false);
      navigate('/user');
    }
  }, [isUserUpdated, updatedUser, dispatch, navigate, setIsEditing]);

  useEffect(() => {
    if (isPasswordChanged) {
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setIsEditing(false);
      navigate('/user');
    }
  }, [isPasswordChanged, dispatch, navigate, setIsEditing]);

  const handleSave = async (event: React.FormEvent): Promise<void> => {
    try {
      event.preventDefault();
      if (!user) return;
      if (newPassword && newPassword !== confirmPassword) {
        setConfirmPasswordError('Passwords do not match.');
        return;
      }
      await updateUser({
        id: user.id,
        token: token || '',
        version: user.version,
        actions: [
          {action: 'setFirstName', firstName},
          {action: 'setLastName', lastName},
          {action: 'changeEmail', email},
        ],
      }).unwrap();
      if (newPassword) {
        await changePassword({
          id: user.id,
          token: token || '',
          version: user.version,
          currentPassword,
          newPassword,
        }).unwrap();
      }
    } catch (error) {
      const errorMessage = error as LoginErrorMessage;
      dispatch(setError(`${errorMessage.data?.message}`));
      // setNotification({message: 'Failed to update user information.', type: 'error'});
    }
  };

  return (
    <div className={classNames(styles.editProfileWrapper)}>
      <h2>Edit Profile</h2>
      <form className={classNames(styles.form)} onSubmit={handleSave}>
        <NameInput
          firstName={firstName}
          setName={setFirstName}
          nameError={nameError}
          setNameError={setNameError}
        />
        <SurnameInput
          surname={lastName}
          setSurname={setLastName}
          surnameError={lastNameError}
          setSurnameError={setLastNameError}
        />
        <EmailInput
          email={email}
          setEmail={setEmail}
          emailError={emailError}
          setEmailError={setEmailError}
        />
        <PasswordInput
          label="Current Password:"
          password={currentPassword}
          setPassword={setCurrentPassword}
          passwordError={currentPasswordError}
          setPasswordError={setCurrentPasswordError}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
        />
        <PasswordInput
          label="New Password:"
          password={newPassword}
          setPassword={setNewPassword}
          passwordError={newPasswordError}
          setPasswordError={setNewPasswordError}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
        />
        <PasswordInput
          label="Confirm New Password:"
          password={confirmPassword}
          setPassword={setConfirmPassword}
          passwordError={confirmPasswordError}
          setPasswordError={setConfirmPasswordError}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
        />
        <Button disabled={hasErrors}>Save Changes</Button>
      </form>
    </div>
  );
};

export default EditUserProfile;
