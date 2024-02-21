/** @format */
export interface MessageListProps {
    type?: 'warning' | 'error' | 'info' | 'success';
    items: MessageListItemProps[];
}
export interface MessageListItemProps {
    type?: 'warning' | 'error' | 'info' | 'success';
    title?: string;
    messages: string[];
}
