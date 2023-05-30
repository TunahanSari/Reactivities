import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/Models/activity';
import ActivityList from './ActivityList';
import ActivityDetail from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface ActivityDashboardProps {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    submitting: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

const ActivityDashboard = (props: ActivityDashboardProps) => {
    const { activities, selectedActivity, selectActivity, cancelSelectActivity, editMode, 
        openForm, closeForm, createOrEdit, deleteActivity, submitting} = props;

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList 
                    activities={activities} 
                    selectActivity={selectActivity} 
                    deleteActivity={deleteActivity} 
                    submitting={submitting}
                />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode &&
                    <ActivityDetail
                        activity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm}
                    />
                }
                {editMode && 
                    <ActivityForm 
                        activity={selectedActivity} 
                        closeForm={closeForm} 
                        createOrEdit={createOrEdit}
                        submitting={submitting}
                    />
                }
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDashboard;