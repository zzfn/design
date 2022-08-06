import React, { ReactNode } from 'react';
import {Button} from "../button";

interface CommentProps {
  author?: string;
  avatar?: string;
  content?: string;
  datetime?: string;
  children?: ReactNode;
}
const Comment = (props: CommentProps) => {
  const { author, avatar, content, datetime, children } = props;
  return (
    <div className={'zzf-comment'}>
      <div className='zzf-comment-avatar'>
        {avatar}
      </div>
      <div className='zzf-comment-content-container'>
        <header className='zzf-comment-header'>
          <span>{author}</span>
          <span>{datetime}</span>
        </header>
        <p className={'zzf-comment-content'}>{content}</p>
        <div className={'zzf-comment-actions'}>
          <Button type='text' size='mini'>replay</Button>
        </div>
        <div className={'zzf-comment-replay'}>{children}</div>
      </div>
    </div>
  );
};
export default Comment;
