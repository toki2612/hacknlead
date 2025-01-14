import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './Dashboard.module.css'
import { RouteComponentProps } from 'react-router-dom'
import { TabsContainer } from '../common/TabsContainer'
import { PortfolioView } from './PortfolioView'
import { DataView } from './DataView'

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
        name: 'Risks',
        to: `/risks`,
        render: () => <PortfolioView />
      },
      {
        name: 'Algo',
        to: `/algo`,
        render: () => <DataView type= 'algo' />
      },
      {
        name: 'Data',
        to: `/data`,
        render: () => <DataView type= 'data'/>
      },
      {
        name: 'Report',
        to: `/report`,
        render: () => <div className={styles.reportBox}>
          <div className={styles.reportContent}></div>
        </div>
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
