import MeetupDetails from "../../components/meetups/MeetupDetails";

function Meetupdetails() {
  return (
    <MeetupDetails
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      alt="a first meetup"
      title="First meeting"
      adress="2345 city some"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback:false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },

      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  //fetch data for a single meetup
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        id: "meetupId",
        alt: "a first meetup",
        title: "First meeting",
        adress: "2345 city some",
        description:'super'
      },
    },
    revalidate: 10,
  };
}
export default Meetupdetails;
