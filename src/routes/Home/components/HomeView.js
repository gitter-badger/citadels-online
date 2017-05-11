import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

import { Button } from 'react-toolbox/lib/button'

export const HomeView = () => (
  <div className="home-view">
    <h4>Test react-toolbox</h4>
    <Button icon="bookmark" label="Bookmark" accent />
    <Button icon="bookmark" label="Bookmark" raised primary />
    <Button icon="inbox" label="Inbox" flat />
    <Button icon="add" floating />
    <Button icon="add" floating accent mini />
  </div>
)

export default HomeView
