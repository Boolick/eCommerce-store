import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {StateSchema} from 'shared/types/StateSchema';
import Button from 'shared/ui/ButtonSubmit/Button';
import {UserAddresses} from '../userAddresses/UserAddresses';
import EditUserProfile from '../editUserProfile/EditUserProfile';

const User: React.FC = (): JSX.Element => {
  const user = useSelector((state: StateSchema) => state.user.data);

  if (!user) {
    return <div>Hello Anonymous!</div>;
  }

  return (
    <div>
      <h2>Personal Information</h2>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <UserAddresses
        addresses={user.addresses}
        shippingAddressIds={user.shippingAddressIds}
        billingAddressIds={user.billingAddressIds}
      />
    </div>
  );
};

export const UserProfile: React.FC = () => {
  const user = useSelector((state: StateSchema) => state.user.data);
  const [isEditing, setIsEditing] = useState(false);

  if (!user) {
    return <div>Hello Anonymous!</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      {isEditing ? (
        <>
          <EditUserProfile setIsEditing={setIsEditing} />
        </>
      ) : (
        <>
          <User />
        </>
      )}
      <Button type="button" onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel' : 'Edit Profile'}
      </Button>
    </div>
  );
};

export default UserProfile;
