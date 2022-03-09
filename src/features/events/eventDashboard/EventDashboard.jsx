import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { useDispatch, useSelector } from "react-redux";
import EventListItemPlaceholder from "./EventListItemPlaceholder";
import useFirestoreCollection from '../../../app/hooks/useFirestoreCollection';
import EventFilters from "./EventFilters";
import { listenToEventsFromFirestore } from "../../../app/firestore/firestoreService";
import { listenToEvents } from "../eventActions";

export default function EventDashboard() {
  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(asyncActionStart());
  //   const unSubscribe = getEventsFromFirestore({
  //     next: (snapshot) => {
  //       dispatch(
  //         listenToEvents(snapshot.docs.map((doc) => dataFromSnapshot(doc)))
  //       );
  //       dispatch(asyncActionFinish());
  //     },
  //     error: (error) => {
  //       console.log(error);
  //       dispatch(asyncActionError());
  //     },
  //   });
  //   return unSubscribe;
  // }, [dispatch]);

    useFirestoreCollection({
    query: () => listenToEventsFromFirestore(),
    data: events => dispatch(listenToEvents(events)),
    deps: [dispatch]
  })

  return (
    <Grid>
      <Grid.Column width={10}>
        {loading && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventFilters />
      </Grid.Column>
    </Grid>
  );
}
