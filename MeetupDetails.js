import classes from "./MeetupDetail.module.css";

function MeetupDetails(props) {
  return (
    <section className={classes.details}>
      <img src={props.image} alt={props.title} />

      <h3>{props.title}</h3>
      <address>{props.address}</address>
    </section>
  );
}

export default MeetupDetails;
