import React from 'react';
import Responsive from 'react-responsive';

export const MinLarge = ({ children }) =>
  (<Responsive minWidth={'62rem'}>
    {children}
  </Responsive>);

export const MaxLarge = ({ children }) =>
  (<Responsive maxWidth={'62rem'}>
    {children}
  </Responsive>);

export const MinMedium = ({ children }) =>
  (<Responsive minWidth={'48rem'}>
    {children}
  </Responsive>);

export const OnlyMedium = ({ children }) =>
  (<Responsive minWidth={'48rem'} maxWidth={'62rem'}>
    {children}
  </Responsive>);

export const MaxSmall = ({ children }) =>
  (<Responsive maxWidth={'48rem'}>
    {children}
  </Responsive>);
