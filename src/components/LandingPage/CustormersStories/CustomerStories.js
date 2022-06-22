import CustomerStory from "./CustomerStory";
import classes from "./CustomerStories.module.scss";
import gregorImg from "./Gregor.jpg"
import janImg from "./Jan.jpg"
import dorotaImg from "./Dorota.jpg"

const CustomerStories = () => {
    return (
        <div className={classes["stories"]}>
          <div className={classes["stories__label"]}>
            <h1>Opinions from our customers!</h1>
          </div>
          <CustomerStory
            imagePath={gregorImg}
            imageAlt="Gregor Notwell"
            customer="Gregor Notwell"
            bio="Father of none"
          >
           Thanks to eco-fresh fresh ingredients delivery I don't have to move my lazy ass. It saved my life, my introvert nature doesn't allow me to go outside.
           I don't know how long will I make it with only pizza and kebabs.
          </CustomerStory>
          <CustomerStory
            even={true}
            imagePath={janImg}
            imageAlt="Jan Kowalski"
            customer="Jan Kowalski"
            bio="Father of 5 children"
          >
            Thanks to eco-fresh I don't have to make shopping for like 3 hours in order to get top quality ingredients for my family.
          </CustomerStory>
          <CustomerStory
            imagePath={dorotaImg}
            imageAlt="Github projects"
            customer="Dorota Kozidrak"
            bio="Random wife"
          >
           My husband loves me more than ever. I used to make food from not fresh ingredients, because I didn't want to throw away food. Now I am free from my burden.
          </CustomerStory>
        </div>
      );
}

export default CustomerStories;