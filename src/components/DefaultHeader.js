import { Avatar, Dropdown, Icon, Layout, Menu } from 'antd'
import React from 'react'
import { useStore } from '../store/helpers'
import { observer } from 'mobx-react-lite'

const { Header } = Layout

export const DefaultHeader = observer(() => {
  const { logoff, userName } = useStore('authStore')
  const logoffBtn = (
    <Menu onClick={logoff}>
      <Menu.Item>
        <Icon type="logout" style={{ marginRight: 5 }} /> Sair
      </Menu.Item>
    </Menu>
  )

  const AvatarName = (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a style={{ margin: 16 }}>
      <Avatar style={{ backgroundColor: '#43B9DF' }} icon="user" />
      <span style={{ margin: 10 }}>{userName}</span>
      <Icon type="down" />
    </a>
  )

  return (
    <Header style={{ background: '#fff', padding: 0, textAlign: 'right', boxShadow: '0px 1px 5px 0px #00000010', zIndex: 1 }}>
      <Dropdown overlay={logoffBtn} placement="bottomCenter">
        {AvatarName}
      </Dropdown>
    </Header>
  )
})
