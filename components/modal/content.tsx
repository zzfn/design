import React from 'react'

export default function Content (props: any) {
  return (
    props.visible && (
      <div className={'zzf-modal-container'}>
        <header className={'zzf-modal-header'}>
          <div>{props.title}</div>
          <svg onClick={() => props.close()} className={'zzf-model-close'} width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8L40 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 40L40 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </header>
        <div>{props.children}</div>
        <div>
          <button
            onClick={() => {
              props.close()
            }}
          >
            取消
          </button>
          <button
            onClick={() => {
              props.close()
            }}
          >
            确定
          </button>
        </div>
      </div>
    )
  )
}
