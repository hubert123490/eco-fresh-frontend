import classes from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <>
      <article className={classes["welcome"]}>
        <section className={classes["welcome__section"]}>
          <h1>Eco Fresh provides fresh ingredients delivery.</h1>
          <h2>
            Get top notch ingredients at any time. You choose how much and what
            you order.
          </h2>
          <div className={classes["welcome__section--link"]}>
            <a href="#">Order a delivery!</a>
          </div>
        </section>
        <div className={classes["welcome__image--container"]}>
          <img />
        </div>
      </article>
    </>
  );
};

export default Welcome;
