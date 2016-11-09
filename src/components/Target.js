import React, { createClass } from 'react'
import { DropTarget } from 'react-dnd'
import Card from 'components/Card'

const dropSpec = {}

const collect = (connect) => {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

const Target = createClass({
  render() {
    const { connectDropTarget, card } = this.props

    if (card) {
      return connectDropTarget(
        <div
          style={{height:'100px',border:'2px dotted'}}>
          <Card
            card={card} />
        </div>
      )
    }

    return connectDropTarget(
      <div
        style={{height:'100px',border:'2px dotted'}}>
      </div>
    )
  }
})

export default DropTarget('card', dropSpec, collect)(Target)
