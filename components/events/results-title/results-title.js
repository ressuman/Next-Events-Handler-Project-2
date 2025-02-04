import Button from "@/components/ui/button";
import styles from "./results-title.module.css";
import PropTypes from "prop-types";

export default function ResultsTitle({ date }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={styles.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}

ResultsTitle.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};
