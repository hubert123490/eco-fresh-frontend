import classes from "./CompanyValues.module.scss";

const CompanyValues = () => {
  return (
    <div className={classes["values"]}>
      <div className={classes["values__label"]}>
        <h1 className={classes["values__label--title"]}>Our company goals</h1>
        <ul className={classes["values__label--list"]}>
          <li className={classes["values__label--list__item"]}>
            <h2>Food waste reduction</h2>
            <div>
              We want to prevent food wasting, that's why you can order exactly
              how much you need.
            </div>
          </li>
          <li className={classes["values__label--list__item"]}>
            <h2>Highest quality</h2>
            <div>
              Our providers are passionate farmers, food manufacturers and
              gardeners. They have been selling top quality ingredients for
              ages.
            </div>
          </li>
          <li className={classes["values__label--list__item"]}>
            <h2>Eco-friendly</h2>
            <div>We care for environment. That's why we provide eco-friendly packaging!</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyValues;
