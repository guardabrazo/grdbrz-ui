import React from 'react';
import {
    Heading,
    Text,
    Pill,
    Button
} from '../../lib';
import styles from './KanbanLayout.module.scss';

interface Task {
    id: string;
    title: string;
    tag: string;
    tagVariant: 'primary' | 'muted' | 'default';
    description?: string;
}

const COLUMNS: { id: string; title: string; tasks: Task[] }[] = [
    {
        id: 'backlog',
        title: 'Backlog',
        tasks: [
            { id: '1', title: 'Research competitors', tag: 'Research', tagVariant: 'muted', description: 'Analyze market trends and competitor features.' },
            { id: '2', title: 'Draft user stories', tag: 'Design', tagVariant: 'primary' },
            { id: '3', title: 'Update documentation', tag: 'Docs', tagVariant: 'muted' },
        ]
    },
    {
        id: 'todo',
        title: 'To Do',
        tasks: [
            { id: '4', title: 'Setup project repo', tag: 'DevOps', tagVariant: 'default' },
            { id: '5', title: 'Design system tokens', tag: 'Design', tagVariant: 'primary', description: 'Define colors, typography, and spacing.' },
        ]
    },
    {
        id: 'inprogress',
        title: 'In Progress',
        tasks: [
            { id: '6', title: 'Implement Button component', tag: 'Dev', tagVariant: 'primary' },
            { id: '7', title: 'Fix navigation bug', tag: 'Bug', tagVariant: 'default' },
        ]
    },
    {
        id: 'done',
        title: 'Done',
        tasks: [
            { id: '8', title: 'Initial commit', tag: 'DevOps', tagVariant: 'muted' },
            { id: '9', title: 'Project kickoff', tag: 'Meeting', tagVariant: 'muted' },
        ]
    }
];

export const KanbanLayout: React.FC = () => {
    return (
        <div className={styles.board}>
            <div className={styles.columnsContainer}>
                {COLUMNS.map((column) => (
                    <div key={column.id} className={styles.column}>
                        {/* Column Header */}
                        <div className={styles.columnHeader}>
                            <Heading as="h3" size="sm">{column.title}</Heading>
                            <Pill label={column.tasks.length.toString()} variant="muted" />
                        </div>

                        {/* Column Content */}
                        <div className={styles.columnContent}>
                            {column.tasks.map((task) => (
                                <div key={task.id} className={styles.taskCard}>
                                    <div className={styles.taskCardInner}>
                                        <div className={styles.taskHeader}>
                                            <Pill label={task.tag} variant={task.tagVariant} />
                                            <Button variant="subtle" className={styles.moreButton}>
                                                ...
                                            </Button>
                                        </div>

                                        <Text size="sm" style={{ fontWeight: 500 }}>{task.title}</Text>

                                        {task.description && (
                                            <Text size="xs" variant="secondary" style={{ lineHeight: '1.4' }}>
                                                {task.description}
                                            </Text>
                                        )}

                                        <div className={styles.taskFooter}>
                                            <Text size="xs" variant="muted">#{task.id}</Text>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <Button variant="subtle" className={styles.addTaskButton}>
                                + Add Task
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
