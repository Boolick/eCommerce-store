import React from 'react';
import {Address, UserAddressesProps} from '../../model/types/types';

export const UserAddresses: React.FC<UserAddressesProps> = ({
  addresses,
  shippingAddressIds,
  billingAddressIds,
}) => {
  return (
    <div>
      <h2>Saved Addresses</h2>
      {addresses.map((address: Address) => (
        <div
          key={address.id}
          style={{border: '1px solid black', padding: '10px', margin: '10px 0'}}
        >
          <p>
            {address.firstName} {address.lastName}
          </p>
          <p>
            {address.streetNumber} {address.streetName}
          </p>
          <p>
            {address.city}, {address.postalCode}
          </p>
          <p>{address.country}</p>
          {shippingAddressIds.includes(address.id) && (
            <p>
              <strong>Default Shipping Address</strong>
            </p>
          )}
          {billingAddressIds.includes(address.id) && (
            <p>
              <strong>Default Billing Address</strong>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
export default UserAddresses;
