/** @format */
import { Space, Typography } from 'antd';
import React from 'react';
import './MessageList.module.scss';
import { MessageListItemProps, MessageListProps } from './index';

const MessageList = ({ items }: MessageListProps) => {
  return (
    <div className={'MessageListContainer'}>
      {items && items.length > 0 && (
        <>
          {items.map((item: MessageListItemProps) => {
            const { title, messages } = item;
            return (
              <Space direction='vertical' size='middle'>
                <Typography.Title level={3}>{title || ''}</Typography.Title>
                <Space align='end' direction='vertical' size='small'>
                  {messages.map((message: string) => {
                    return <>{message}</>;
                  })}
                </Space>
              </Space>
            );
          })}
        </>
      )}
    </div>
  );
};

export default MessageList;
