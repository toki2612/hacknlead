import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './Dashboard.module.css'
import { RouteComponentProps } from 'react-router-dom'
import { TabsContainer } from '../common/TabsContainer'

type MatchParams = {
  outputUid: string
}

interface IDashboardProps extends RouteComponentProps<MatchParams> {

}

@observer
export class Dashboard extends React.Component<IDashboardProps> {

  render () {

    const tabs = [
      {
        name: 'tab1',
        to: `/tab1`,
        render: () => <div/>
      },
      {
        name: 'tab2',
        to: `/tab2`,
        render: () => <div/>
      },
      {
        name: 'tab3',
        to: `/tab3`,
        render: () => <div/>
      }
    ]

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logoBox} />
        </div>
        <TabsContainer tabs={tabs} />
      </div>
    )
  }
}