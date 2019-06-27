import React, { Component } from 'react'
import InstagramEmbed from 'react-instagram-embed';

export default class Insta extends Component {
  render() {
    return (
      <div>
      <InstagramEmbed
      url='https://www.instagram.com/p/BzMBudbH6Zr/'
      maxWidth={100}
      hideCaption={true}
      containerTagName='div'
      protocol=''
      injectScript
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
    />
      </div>
    )
  }
}
