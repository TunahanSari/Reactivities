import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/Models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

interface ActivityDashboardProps {
    activities: Activity[];
    submitting: boolean;
    deleteActivity: (id: string) => void;
}

const ActivityDashboard = ({ activities, deleteActivity, submitting}: ActivityDashboardProps) => {
    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore;
    
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode &&
                    <ActivityDetails/>
                }
                {editMode && 
                    <ActivityForm />
                }
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDashboard);