// @flow
/* eslint-disable sort-keys */
import * as React from 'react'
import * as I from 'immutable'
import * as Constants from '../../constants/types/chat2'
import * as PropProviders from '../../stories/prop-providers'

import {isDarwin} from '../../constants/platform'
import {storiesOf, action, createPropProvider} from '../../stories/storybook'
import {isMobile, globalColors, globalMargins} from '../../styles'

import Inbox from '.'

/*
 * Rows
 */
const makeRowItemSmall = (conversationIDKey: string = '') => ({
  type: 'small',
  conversationIDKey: Constants.stringToConversationIDKey(conversationIDKey),
})
const makeRowItemBigHeader = (teamname: string = '') => ({type: 'bigHeader', teamname})
const makeRowItemBigChannel = (conversationIDKey, teamname, channelname) => ({
  type: 'big',
  teamname,
  channelname,
  conversationIDKey: Constants.stringToConversationIDKey(conversationIDKey),
})
const makeRowItemDivider = (showButton: boolean = false) => ({type: 'divider', showButton})

/*
 * Component Prop Map
 *
 * mapPropProviderProps: [coversationIDKey] -> PropProvider props
 */

const commonSmallTeam = {
  backgroundColor: globalColors.white,
  conversationIDKey: '',
  hasResetUsers: false,
  hasUnread: false,
  iconHoverColor: globalColors.black_60,
  isLocked: false,
  isMuted: false,
  isSelected: false,
  isFinalized: false,
  onSelectConversation: action('onSelectConversation'),
  participants: ['chris'],
  participantNeedToRekey: false,
  rekeyInfo: null,
  showBold: false,
  snippet: 'snippet',
  snippetDecoration: '',
  subColor: globalColors.black_40,
  teamname: '',
  timestamp: '1:23 pm',
  unreadCount: 0,
  usernameColor: globalColors.darkBlue,
  youAreReset: false,
  youNeedToRekey: false,
}

const commonSmallFilter = {
  backgroundColor: globalColors.white,
  isLocked: false,
  isMuted: false,
  isSelected: false,
  onSelectConversation: action('onSelectConversation'),
  participants: ['chris', 'mikem'],
  showBold: false,
  teamname: '',
  usernameColor: globalColors.darkBlue,
}

const commonBigChannel = {
  hasBadge: false,
  hasUnread: false,
  isError: false,
  isMuted: false,
  isSelected: false,
  onSelectConversation: action('onSelectConversation'),
  showBold: false,
}

const commonBigFilter = {
  isSelected: false,
  onSelectConversation: action('onSelectConversation'),
  teamname: 'stripe',
  isTeam: true,
}

const mapPropProviderProps = {
  // Small Teams
  smallTeamA: {
    ...commonSmallTeam,
    conversationIDKey: '3',
    hasUnread: false,
    hasBadge: false,
    showBold: false,
    snippet: 'elisa: Hopefully not',
    teamname: 'fortgreenmoms',
    timestamp: 'Tue',
  },
  smallTeamB: {
    ...commonSmallTeam,
    conversationIDKey: '1',
    hasUnread: true,
    hasBadge: true,
    showBold: true,
    snippet: 'in the top-drawer i believe',
    subColor: globalColors.black_75,
    usernameColor: globalColors.black_75,
  },
  smallTeamC: {
    ...commonSmallTeam,
    conversationIDKey: '2',
    hasUnread: false,
    hasBadge: false,
    participants: ['jzila'],
    showBold: false,
    snippet: "I don't know that I would want.",
    timestamp: '5:12 pm',
  },
  smallTeamD: {
    ...commonSmallTeam,
    conversationIDKey: '5',
    hasBadge: false,
    hasResetUsers: true,
    hasUnread: false,
    participants: ['jzila'],
    showBold: false,
    snippet: "I don't know that I would want.",
    timestamp: '5:12 pm',
  },
  smallTeamE: {
    ...commonSmallTeam,
    backgroundColor: isMobile ? commonSmallFilter.backgroundColor : globalColors.blue,
    conversationIDKey: '4',
    hasUnread: false,
    hasBadge: false,
    iconHoverColor: globalColors.white_75,
    isSelected: !isMobile,
    showBold: false,
    snippet: 'jork: what article?',
    subColor: isMobile ? commonSmallTeam.subColor : globalColors.white,
    teamname: 'atracks',
    timestamp: '5:13 pm',
    usernameColor: isMobile ? commonSmallTeam.usernameColor : globalColors.white,
  },
  smallTeamF: {
    ...commonSmallTeam,
    conversationIDKey: '6',
    participants: ['jacobyoung'],
    hasUnread: false,
    hasBadge: false,
    showBold: false,
    snippet: 'what does the scouter say about his power level?',
    subColor: globalColors.black_40,
    usernameColor: globalColors.black_40,
  },
  smallTeamG: {
    ...commonSmallTeam,
    conversationIDKey: '7',
    participants: ['nathunsmitty'],
    snippet: 'whoops',
    timestamp: '11:06 am',
    snippetDecoration: '💣',
  },
  smallTeamH: {
    conversationIDKey: '8',
    participants: ['nathunsmitty'],
    snippet: 'lol',
    timestamp: '1:37 pm',
    snippetDecoration: '💥',
  },

  // Big Team A
  bigTeamAHeader: {
    teamname: 'Keybase',
    memberCount: 0, // Handled by PropProviders.TeamDropdownMenu
    badgeSubscribe: false,
  },
  bigTeamAChannel1: {
    ...commonBigChannel,
    teamname: 'Keybase',
    channelname: 'general',
  },
  bigTeamAChannel2: {
    ...commonBigChannel,
    teamname: 'Keybase',
    channelname: 'random',
    showBold: true,
  },
  bigTeamAChannel3: {
    ...commonBigChannel,
    teamname: 'Keybase',
    channelname: 'zzz',
    showBold: true,
    hasUnread: true,
  },
  bigTeamAChannel4: {
    ...commonBigChannel,
    teamname: 'Keybase',
    channelname: 'video-games',
    isMuted: true,
  },

  // Big Team B
  bigTeamBHeader: {
    teamname: 'techtonica',
    memberCount: 0, // Handled by PropProviders.TeamDropdownMenu
    badgeSubscribe: false,
  },
  bigTeamBChannel1: {
    ...commonBigChannel,
    teamname: 'techtonica',
    channelname: 'general',
    isSelected: !isMobile,
  },
  bigTeamBChannel2: {
    ...commonBigChannel,
    teamname: 'techtonica',
    channelname: 'ignore-selected-below',
  },
  bigTeamBChannel3: {
    ...commonBigChannel,
    teamname: 'techtonica',
    channelname: 'random',
    isMuted: true,
  },
  bigTeamBChannel4: {
    ...commonBigChannel,
    teamname: 'techtonica',
    channelname: 'happy-hour',
    isMuted: true,
  },

  // Small Teams Filter
  smallFilterTeamA: {
    ...commonSmallFilter,
  },
  smallFilterTeamB: {
    ...commonSmallFilter,
    paricipants: ['chris'],
  },
  smallFilterTeamC: {
    ...commonSmallFilter,
    teamname: 'pokerpals',
  },

  // Big Teams Filter
  bigTeamFilterAChannel1: {
    ...commonBigFilter,
    channelname: 'general',
  },
  bigTeamFilterAChannel2: {
    ...commonBigFilter,
    channelname: 'random',
  },
  bigTeamFilterBChannel1: {
    ...commonBigFilter,
    teamname: 'stripe.usa',
    channelname: 'this-is-a-very-long-channel-name',
  },
  bigTeamFilterCChannel1: {
    ...commonBigFilter,
    teamname: 'this.is.a.very.long.team.name.situation',
    channelname: 'general',
  },
}

/*
 * Prop Provider Helpers
 */

/*
 * Look up the correct props to return for a given row component
 * Called from the row component's PropProvider
 * Uses either conversationIDKey or teamname as a key in mapPropProviderProps
 */
const getPropProviderProps = own => {
  if (own.conversationIDKey) {
    const props = mapPropProviderProps[own.conversationIDKey]
    return {
      ...props,
      key: props.conversationIDKey,
    }
  }

  return own.teamnames ? mapPropProviderProps[own.teamname] : {}
}

/*
 * Inbox
 */
const propsInboxCommon = {
  focusFilter: () => {},
  filter: '',
  filterFocusCount: 0,
  isLoading: false,
  nowOverride: 0, // just for dumb rendering
  onBuildTeam: action('onBuildTeam'),
  onHotkey: action('onHotkey'),
  onNewChat: action('onNewChat'),
  onUntrustedInboxVisible: action('onUntrustedInboxVisible'),
  rows: [],
  showBuildATeam: false,
  showNewChat: false,
  showNewConversation: false,
  showSmallTeamsExpandDivider: false,
  smallIDsHidden: [],
  smallTeamsExpanded: false,
  toggleSmallTeamsExpanded: action('toggleSmallTeamsExpanded'),
}

const propsInboxEmpty = {
  ...propsInboxCommon,
  showNewChat: true,
  showBuildATeam: true,
}

const propsInboxSimple = {
  ...propsInboxCommon,
  rows: [
    makeRowItemSmall('smallTeamA'),
    makeRowItemSmall('smallTeamB'),
    makeRowItemSmall('smallTeamC'),
    makeRowItemSmall('smallTeamD'),
    makeRowItemSmall('smallTeamE'),
    makeRowItemSmall('smallTeamF'),
    makeRowItemSmall('smallTeamG'),
    makeRowItemSmall('smallTeamH'),
  ],
}

const propsInboxTeam = {
  ...propsInboxCommon,
  rows: [
    makeRowItemBigHeader('bigTeamAHeader'),
    makeRowItemBigChannel('bigTeamAChannel1', 'Keybase', 'general'),
    makeRowItemBigChannel('bigTeamAChannel2', 'Keybase', 'random'),
    makeRowItemBigChannel('bigTeamAChannel3', 'Keybase', 'zzz'),
    makeRowItemBigChannel('bigTeamAChannel4', 'Keybase', 'video-games'),

    makeRowItemBigHeader('bigTeamBHeader'),
    makeRowItemBigChannel('bigTeamBChannel1', 'techtonica', 'general'),
    makeRowItemBigChannel('bigTeamBChannel2', 'techtonica', 'ignore-selected-below'),
    makeRowItemBigChannel('bigTeamBChannel3', 'techtonica', 'random'),
    makeRowItemBigChannel('bigTeamBChannel4', 'techtonica', 'happy-hour'),
  ],
}

const propsInboxDivider = {
  ...propsInboxCommon,
  smallTeamsExpanded: false,
  smallIDsHidden: [
    Constants.stringToConversationIDKey(mapPropProviderProps['smallTeamC'].conversationIDKey),
    Constants.stringToConversationIDKey(mapPropProviderProps['smallTeamD'].conversationIDKey),
    Constants.stringToConversationIDKey(mapPropProviderProps['smallTeamE'].conversationIDKey),
    Constants.stringToConversationIDKey(mapPropProviderProps['smallTeamF'].conversationIDKey),
  ],
  rows: [
    // Small
    makeRowItemSmall('smallTeamA'),
    makeRowItemSmall('smallTeamB'),
    makeRowItemSmall('smallTeamC'),
    makeRowItemSmall('smallTeamD'),
    makeRowItemSmall('smallTeamE'),
    makeRowItemSmall('smallTeamF'),

    // Divider
    makeRowItemDivider(true),

    // Big Team A
    makeRowItemBigHeader('bigTeamAHeader'),
    makeRowItemBigChannel('bigTeamAChannel1', 'Keybase', 'general'),
    makeRowItemBigChannel('bigTeamAChannel2', 'Keybase', 'random'),
    makeRowItemBigChannel('bigTeamAChannel3', 'Keybase', 'zzz'),
    makeRowItemBigChannel('bigTeamAChannel4', 'Keybase', 'video-games'),

    // Big Team B
    makeRowItemBigHeader('bigTeamBHeader'),
    makeRowItemBigChannel('bigTeamBChannel1', 'techtonica', 'general'),
    makeRowItemBigChannel('bigTeamBChannel2', 'techtonica', 'ignore-selected-below'),
    makeRowItemBigChannel('bigTeamBChannel3', 'techtonica', 'random'),
    makeRowItemBigChannel('bigTeamBChannel4', 'techtonica', 'happy-hour'),
  ],
}

const propsInboxFilter = {
  ...propsInboxCommon,
  filter: ' ',
  rows: [
    // Small
    makeRowItemSmall('smallFilterTeamA'),
    makeRowItemSmall('smallFilterTeamB'),
    makeRowItemSmall('smallFilterTeamC'),

    // Big Team A
    makeRowItemBigChannel('bigTeamFilterAChannel1', 'stripe', 'general'),
    makeRowItemBigChannel('bigTeamFilterAChannel2', 'stripe', 'random'),

    // Big Team B
    makeRowItemBigChannel('bigTeamFilterBChannel1', 'stripe.usa', 'this-is-a-very-long-channel-name'),
    makeRowItemBigChannel('bigTeamFilterCChannel1', 'this.is.a.very.long.team.name.situation', 'general'),
  ],
}

/*
 * Prop Providers
 */
const teamMemberCounts = {
  Keybase: 30,
  techtonica: 30,
  stripe: 1337,
}

/* Define a teamsEmpty to be used by BuildTeam PropProvider to
 * determine if story is 'Empty' teams. This is done because showBuildATeam
 * can't de derived from ownProps.
 */
let teamsEmpty = false

const provider = createPropProvider(
  PropProviders.Common(),
  PropProviders.TeamDropdownMenu(undefined, teamMemberCounts),
  {
    ChatInboxHeaderContainer: p => {
      const showNewChat = !(p.rows.length || p.filter)
      return {
        focusFilter: () => {},
        filterFocusCount: p.filterFocusCount,
        onNewChat: action('onNewChat'),
        rows: p.rows,
        showNewChat,
      }
    },
    ChatFilterRow: p => ({
      focusFilter: () => {},
      fitler: p.filter,
      filterFocusCount: p.filterFocusCount,
      isLoading: false,
      hotkeys: isDarwin ? ['command+n', 'command+k'] : ['ctrl+n', 'ctrl+k'],
      onHotkey: action('onHotkey'),
      onNewChat: action('onNewChat'),
      onSelectDown: action('onSelectDown'),
      onSelectUp: action('onSelectUp'),
      onSetFilter: action('onSetFilter'),
      rows: p.rows,
    }),
    BuildTeam: p => ({
      onBuildTeam: action('onBuildTeam'),
      showBuildATeam: teamsEmpty,
    }),
    NewChooser: p => ({
      isSelected: false,
      onCancel: action('onCancel'),
      onClick: action('onClick'),
      shouldShow: false,
      users: I.OrderedSet(['']),
    }),
    Divider: p => ({
      badgeCount: 0,
      showButton: p.showButton,
      hiddenCount: p.smallIDsHidden.length,
      style: {marginBottom: globalMargins.tiny},
      toggle: action('onToggle'),
    }),
    // BigTeamHeader is wrapped by FloatingMenuParent
    FloatingMenuParent: getPropProviderProps,
    SmallTeam: getPropProviderProps,
    BigTeamHeader: p => {
      return getPropProviderProps(p)
    },
    BigTeamChannel: getPropProviderProps,
    FilterSmallTeam: getPropProviderProps,
    FilterBigTeamChannel: getPropProviderProps,
  }
)

const load = () => {
  storiesOf('Chat/Inbox')
    .addDecorator(provider)
    .add('Empty', () => {
      teamsEmpty = true
      return <Inbox {...propsInboxEmpty} />
    })
    .add('Simple', () => {
      teamsEmpty = false
      return <Inbox {...propsInboxSimple} />
    })
    .add('Big Teams', () => {
      teamsEmpty = false
      return <Inbox {...propsInboxTeam} />
    })
    .add('Divider', () => {
      teamsEmpty = false
      return <Inbox {...propsInboxDivider} />
    })
    .add('Filter', () => {
      teamsEmpty = false
      return <Inbox {...propsInboxFilter} />
    })
}

export default load
