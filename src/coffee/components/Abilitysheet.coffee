class Abilitysheet extends React.Component
  constructor: ->
    @state =
      users: 'loading now...'

  onChangeUsers: =>
    @setState users: AbilitysheetStore.getUsersCount()

  componentWillMount: ->
    AbilitysheetStore.addChangeListener(@onChangeUsers)

  componentDidMount: ->
    AbilitysheetActionCreators.getCount()

  componentWillUnmount: ->
    AbilitysheetStore.removeChangeListener(@onChangeUsers)

  render: ->
    <li>
      <a href='https://github.com/8398a7/abilitysheet'>
        <i className='fa fa-github' />
      </a>
      [Ruby on Rails] IIDX☆12参考表
      <a className='btn btn-default btn-xs' href='https://iidx12.tk' target='_blank'>
        <i className='fa fa-external-link' />
        &nbsp;Web site
      </a>
      -> 上記拡張版，2014/11 公開開始，利用者<span key='users'>{@state.users}</span>名
    </li>

Abilitysheet.displayName = 'Abilitysheet'

ReactDOM.render(<Abilitysheet />, $('#iidx12')[0])
