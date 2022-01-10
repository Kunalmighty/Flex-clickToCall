import React from 'react'
import CallButton from "./CallButton"
import constants from "./constants"
const { outboundCallerIdOverride } = constants

const addCallButton = (flex, manager) => {
  flex.TaskCanvasHeader.Content.add(
    <CallButton key="callbutton" flex={flex} />,
    {
      if: (props) =>
        props.task &&
        props.task.taskChannelUniqueName !== 'voice' &&
        props.task.attributes &&
        props.task.attributes.from,
    },
  )

  let overrides = outboundCallerIdOverride
  //overwrite outboundcall action to take outbound number based on ani
  flex.Actions.replaceAction('StartOutboundCall', (payload, original) => {
    let { destination } = payload

    //check worker for a preferred outbound number
    const { outboundNumber } = manager.workerClient.attributes
    if (outboundNumber) {
      payload.callerId = outboundNumber
    } else {
      //if worker does not have a preferred outbound, use a simple prefix check
      for (let i = 0; i < overrides?.length; i++) {
        if (destination.indexOf(overrides[i].prefix) === 0) {
          payload.callerId = overrides[i].callerId
          break
        }
      }
    }
    console.log('updated outbound call to:', payload)
    original(payload)
  })
}

export default addCallButton
