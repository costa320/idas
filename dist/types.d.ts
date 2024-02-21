import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

declare const LazyWrappedComponent: (props: JSX.IntrinsicAttributes & {
    children?: React.ReactNode;
} & any) => react_jsx_runtime.JSX.Element;

/** @format */

interface MessageListProps {
  type?: 'warning' | 'error' | 'info' | 'success';
  items: MessageListItemProps[];
}

interface MessageListItemProps {
  type?: 'warning' | 'error' | 'info' | 'success';
  title?: string;
  messages: string[];
}

export { LazyWrappedComponent as MessageList, type MessageListItemProps, type MessageListProps };
