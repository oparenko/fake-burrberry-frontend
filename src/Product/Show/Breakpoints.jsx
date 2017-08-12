import React from 'react';
import Responsive from 'react-responsive';

export const MinDeviceWidthLarge = ({ children }) => <Responsive minWidth={'62rem'} children={children} />;
export const MaxDeviceWidthLarge = ({ children }) => <Responsive maxWidth={'62rem'} children={children} />;

export const MinDeviceWidthMedium = ({ children }) =>
  <Responsive minWidth={'48rem'} children={children} />;
export const DeviceWidthMedium = ({ children }) =>
  <Responsive minWidth={'48rem'} maxWidth={'62rem'} children={children} />;

export const MaxDeviceWidthSmall = ({ children }) => <Responsive maxWidth={767} children={children} />;
