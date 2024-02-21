/** @format */

import React from 'react';
import MessageList from './MessageList.lazy';

export default {
  title: 'TestComponent',
};

export const Primary = () => <MessageList items={[]} />;

export const Secondary = () => <MessageList items={[]} />;
