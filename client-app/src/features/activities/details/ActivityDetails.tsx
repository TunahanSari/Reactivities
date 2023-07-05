import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";

const ActivityDetails = () => {
    const {activityStore} = useStore();
    const {selectedActivity, loadActivity, loadingInitial,clearSelectedActivity} = activityStore;
    const {id} = useParams();

    useEffect(() => {
        if(id) {
            loadActivity(id);
        }
        return () => clearSelectedActivity();
    }, [id, loadActivity, clearSelectedActivity]);

    if(loadingInitial || !selectedActivity) return <LoadingComponent/>; //This should not happen since we're not displaying this comp. without a selected activity
    return <Grid>
        <Grid.Column width={10}>
            <ActivityDetailedHeader activity={selectedActivity}/>
            <ActivityDetailedInfo activity={selectedActivity}/>
            <ActivityDetailedChat activityId={selectedActivity.id}/>
        </Grid.Column>
        <Grid.Column width={6}>
            <ActivityDetailedSidebar activity={selectedActivity}/>
        </Grid.Column>
    </Grid>
}

export default observer(ActivityDetails);