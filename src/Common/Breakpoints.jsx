import React from 'react';
import Responsive from 'react-responsive';

export const MinLarge = ({ children }) =>
  (<Responsive minWidth={992}>
    {children}
  </Responsive>);

export const MaxLarge = ({ children }) =>
  (<Responsive maxWidth={991}>
    {children}
  </Responsive>);

export const MinMedium = ({ children }) =>
  (<Responsive minWidth={768}>
    {children}
  </Responsive>);

export const OnlyMedium = ({ children }) =>
  (<Responsive minWidth={768} maxWidth={992}>
    {children}
  </Responsive>);

export const MaxSmall = ({ children }) =>
  (<Responsive maxWidth={767}>
    {children}
  </Responsive>);
