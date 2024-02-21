/** @format */

import { Space, Typography } from 'antd';
import * as styles from './MessageList.module.scss';
import { MessageListItemProps, MessageListProps } from './MessageList.types';

const MessageList = ({ items }: MessageListProps) => {
  return (
    <div className={styles.MessageListContainer}>
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
