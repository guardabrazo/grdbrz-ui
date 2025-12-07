import React from 'react';
import {
    Panel,
    Heading,
    Text,
    Button,
    Select
} from '../../lib';
import styles from './DashboardLayout.module.scss';

interface DashboardLayoutProps {
    layoutMode?: 'stacked' | 'distributed' | 'centered';
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ layoutMode = 'stacked' }) => {
    const [user, setUser] = React.useState('user');

    const mainContentClass = `${styles.mainContent} ${layoutMode === 'distributed' ? styles.distributed : layoutMode === 'centered' ? styles.centered : ''}`;

    return (
        <div className={styles.container}>
            {/* Top Bar */}
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <Heading as="h2" size="lg">DASHBOARD</Heading>
                </div>
                <div className={styles.userSelect}>
                    <Select
                        value={user}
                        options={[{ value: 'user', label: 'ADMIN USER' }, { value: 'guest', label: 'GUEST' }]}
                        onChange={setUser}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className={mainContentClass}>
                <div className={styles.contentStack}>
                    <div className={styles.titleRow}>
                        <div className={styles.titleBlock}>
                            <Heading as="h1" size="xl">SYSTEM STATUS</Heading>
                            <Text variant="secondary">LAST UPDATED: 10:42 AM</Text>
                        </div>
                        <Button variant="primary">REFRESH DATA</Button>
                    </div>

                    <div className={styles.statsGrid}>
                        <Panel header="SERVER LOAD">
                            <div className={styles.statValue}>
                                <Heading size="xl">42%</Heading>
                            </div>
                        </Panel>
                        <Panel header="ACTIVE USERS">
                            <div className={styles.statValue}>
                                <Heading size="xl">1,284</Heading>
                            </div>
                        </Panel>
                        <Panel header="ERROR RATE">
                            <div className={styles.statValue}>
                                <Heading size="xl" className={styles.errorRate}>0.01%</Heading>
                            </div>
                        </Panel>
                    </div>

                    <Panel header="RECENT ACTIVITY">
                        <div className={styles.activityList}>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className={styles.activityRow}>
                                    <Text>USER ACTION #{i}</Text>
                                    <Text variant="muted">2 MIN AGO</Text>
                                </div>
                            ))}
                        </div>
                    </Panel>
                </div>
            </div>
        </div>
    );
};
