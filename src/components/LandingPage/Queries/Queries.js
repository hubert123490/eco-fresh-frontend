import classes from "./Queries.module.scss";
import QueryButton from "./QueryButton";

const Queries = () => {
  const facebookSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
    </svg>
  );

  return (
    <>
      <div className={classes["queries"]}>
        <h1 className={classes["queries__label"]}>So what do you think?</h1>
        <div className={classes["queries__container"]}>
          <div className={classes["queries__container--query"]}>
            <h2>Sounds good?</h2>
            <div className={classes["queries__container--query__options"]}>
              <div>
                <a href="#">
                  <QueryButton>Order a delivery!</QueryButton>
                </a>
              </div>
            </div>
          </div>

          <div className={classes["queries__container--query"]}>
            <h2>Need more info?</h2>
            <div className={classes["queries__container--query__options"]}>
              <div>
                <a href="#">
                  <QueryButton svg={facebookSVG}></QueryButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Queries;
