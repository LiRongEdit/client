// @flow
import React, {Component} from 'react'
import {
  Box2,
  Box,
  Text,
  Button,
  Checkbox,
  Icon,
  ProgressIndicator,
  HeaderHocHeader,
} from '../../common-adapters'
import {globalStyles, globalColors, styleSheetCreate} from '../../styles'
import {getStyle} from '../../common-adapters/text'
import type {Props} from '.'

type State = {
  inWallet: boolean,
}

class SuccessRender extends Component<Props, State> {
  state: State

  constructor(props: Props) {
    super(props)
    this.state = {inWallet: false}
  }

  render() {
    const contents = this.props.paperkey ? (
      <Box style={stylesPaperKeyContainer}>
        <Text type="Header" selectable={true} style={stylesPaperkey}>
          {this.props.paperkey.stringValue()}
        </Text>
        <Icon type="icon-paper-key-corner" style={stylesPaperCorner} />
      </Box>
    ) : (
      <Box style={{stylesPaperKeyContainer}}>
        <ProgressIndicator type="Small" style={{width: 40}} />
        <Icon type="icon-paper-key-corner" style={stylesPaperCorner} />
      </Box>
    )

    return (
      <Box2 direction="vertical" fullWidth={true} fullHeight={true}>
        <HeaderHocHeader onBack={this.props.onBack} headerStyle={styles.header} />
        <Box2 direction="vertical" fullWidth={true} fullHeight={true} centerChildren={true} gap="small">
          <Text type="Header" style={stylesHeader}>
            {this.props.title || "Congratulations, you've just joined Keybase!"}
          </Text>
          <Text type="Body" style={stylesBody}>
            Here is your unique paper key, it will allow you to perform important Keybase tasks in the future.
            This is the only time you'll see this so be sure to write it down.
          </Text>
          {contents}
          <Checkbox
            style={stylesCheck}
            label="Yes, I wrote this down."
            checked={this.state.inWallet}
            onCheck={inWallet => this.setState({inWallet})}
          />
          <Button type="Primary" label="Done" onClick={this.props.onFinish} disabled={!this.state.inWallet} />
        </Box2>
      </Box2>
    )
  }
}

const stylesHeader = {
  marginBottom: 5,
  marginTop: 60,
}
const stylesBody = {
  marginBottom: 35,
  marginTop: 16,
  maxWidth: 560,
  paddingLeft: 15,
  paddingRight: 15,
  textAlign: 'center',
}
const stylesPaperKeyContainer = {
  ...globalStyles.flexBoxCenter,
  backgroundColor: globalColors.white,
  border: `solid 3px ${globalColors.darkBlue}`,
  borderRadius: 3,
  marginBottom: 35,
  minHeight: 100,
  paddingBottom: 8,
  paddingLeft: 24,
  paddingRight: 24 * 2,
  paddingTop: 8,
  position: 'relative',
  width: 400,
}
const stylesPaperCorner = {
  position: 'absolute',
  right: -3,
  top: -3,
}
const stylesCheck = {
  marginBottom: 60,
}
const stylesPaperkey = {
  ...getStyle('Header', 'Normal'),
  ...globalStyles.fontTerminal,
  color: globalColors.darkBlue,
  display: 'inline-block',
  textAlign: 'center',
}

const styles = styleSheetCreate({
  header: {position: 'absolute'},
})

export default SuccessRender
