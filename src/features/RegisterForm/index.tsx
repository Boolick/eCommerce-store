import {lazy} from 'react';

export const RegisterUser = lazy(() => import('./ui/RegistrationForm'));

export {signUpApi} from './model/slices/signUpApi';
export {SignUpSchema, SignUpResponse, SignUpRequest} from './model/types/SignUpSchema';
export {NameInput} from './ui/NameInput';
export {SurnameInput} from './ui/SurnameInput';
