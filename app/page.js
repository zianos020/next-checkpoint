import Image from "next/image";
import zaiden from "../public/zaiden.jpg"


export default function Home() {
  return (
    <div className="container">
      <div className="image">
        <Image src={zaiden} alt="Description" width={250} height={400} style={{borderRadius:"50%"}}/>
      </div>
      <div className="text">
        <h3>Zaiden Machouch</h3>
        <p>Hi my name is Zaiden Machouch a passionate web developer with a strong focus on creating dynamic and responsive web applications. With a background in development, I have honed my skills in front-end and back-end development, specializing in technologies like React, Node.js, and MongoDB. My goal is to build user-friendly and efficient web solutions that meet the needs of clients and users alike.</p>
      </div>
    </div>
  );
}
