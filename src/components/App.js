import React, { createClass } from 'react'
import { DragDropContext } from 'react-dnd'
import TouchBackend from 'react-dnd-touch-backend'
import Target from 'components/Target'

const App = createClass({
  render() {
    return (
      <div>
        <Target />
        <Target
          card='original' />
      </div>
    )
  }
})

export default DragDropContext(TouchBackend)(App)
