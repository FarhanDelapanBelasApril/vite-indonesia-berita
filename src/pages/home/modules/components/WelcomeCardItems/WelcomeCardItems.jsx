/* eslint-disable no-unused-vars */
import {
  CardHeading,
  CardHeadingTitle,
} from "../../../../berita/modules/Loadable";

import WelcomeCardItemsMessage from "./WelcomeCardItemsMessage";

export default function WelcomeCardItems() {
  const date = new Date();
  const hours = date.getHours();
  let sayHello;

  if (hours >= 4 && hours < 12) {
    sayHello = "Selamat Pagi";
  } else if (hours >= 12 && hours <= 17) {
    sayHello = "Selamat Siang";
  } else if (hours >= 17 && hours <= 20) {
    sayHello = "Selamat Sore";
  } else {
    sayHello = "Selamat Malam";
  }
  return (
    <>
      <div>
        <CardHeading>
          <CardHeadingTitle title={sayHello} />
          <WelcomeCardItemsMessage
            message="Selamat Datang Di Indonesia Berita , Indonesia Berita merupakan sebuah
     website yang bertujuan untuk menampilkan data data terkini dari beberapa
     portal berita di Indonesia."
          />
        </CardHeading>
      </div>
    </>
  );
}
