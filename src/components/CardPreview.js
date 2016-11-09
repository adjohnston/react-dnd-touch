import React, { createClass } from 'react'
import { DragLayer } from 'react-dnd'
import Card from 'components/card'

const layerStyles = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  pointerEvents: 'none',
  zIndex: 1
}

const collect = (monitor) => {
  return {
    currentOffset: monitor.getSourceClientOffset()
  }
}

const CardPreview = createClass({
  render() {
    const { x, y } = this.props.currentOffset

    const previewStyles = {
      position: 'absolute',
      transform: `translate(${x}px, ${y}px)`
    }

    return (
      <div
        style={layerStyles}>
        <div
          style={previewStyles}>
          <Card
            card="test" />
        </div>
      </div>
    )
  }
})

export default DragLayer(collect)(CardPreview)
