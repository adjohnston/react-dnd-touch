import React, { createClass } from 'react'
import { DragSource } from 'react-dnd'
import CardPreview from 'components/CardPreview'

const cardSpec = {
  beginDrag() {
    return {}
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const Card = createClass({
  render() {
    const { connectDragSource, isDragging } = this.props

    if (isDragging) {
      return (
        <CardPreview />
      )
    }

    return connectDragSource(
      <div
        style={{height:'100%',background:'blue'}}>
        {this.props.card}
      </div>
    )
  }
})

export default DragSource('card', cardSpec, collect)(Card)
