import * as React from 'react'
import { withTaskContext, IconButton } from '@twilio/flex-ui'
import { css } from 'emotion'

import Call from '@material-ui/icons/Call'

const callbutton = css`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 2px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2px;
  margin-left: 8px;
  border-radius: 50%;
  align-self: center;
`

export class CallButton extends React.Component {
  render() {
    const { attributes } = this.props.task
    return (
      <IconButton
        icon={<Call />}
        className={callbutton}
        onClick={(e) => {
          this.props.flex.Actions.invokeAction('StartOutboundCall', {
            destination: attributes.from,
            taskAttributes: { ...attributes },
          })
        }}
      />
    )
  }
}

export default withTaskContext(CallButton)
