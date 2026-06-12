import Image from "next/image";
import Hero from "./components/Hero";
import Introductions from "./components/Introductions";
import image1 from "../../public/img/Blue Cartoon Bitcoin.H02.2k 1.png";
import image2 from "../../public/img/Blue Cartoon Bitcoin.H02.2k 1 (1).png";
import Banner from "./components/Banner";
export default function Home() {
  const content = [
    {
      text: "Our Vision",
      title1: "Prosperity",
      title2: " For All",
      image: image1,
      para: `Since 2018, we’ve been on a mission to democratize access to high-growth economic benefits. We believe 
that everyone, regardless of financial background or expertise, deserves the chance to build a prosperous future.`,
    },
    {
      text: "Core Difference",
      title1: "The ",
      title2: "CSC base",
      title3: " Difference",
      image: image2,
      para: `At the core of our platform is the innovative Crypto Share Cloud (CSC) technology. This cutting-edge solution simplifies complex financial processes, making them accessible and secure for everyone.`,
    },
  ];
  return (
    <>
      <main className="   mx-auto">
        <Hero />
        <Introductions
          text={content[0].text}
          title1={content[0].title1}
          title2={content[0].title2}
          title3={content[0].title3}
          image={content[0].image}
          para={content[0].para}
        />
        <Introductions
          text={content[1].text}
          title1={content[1].title1}
          title2={content[1].title2}
          title3={content[1].title3}
          image={content[1].image}
          para={content[1].para}
          isReverse={true}
        />
        <Banner />
      </main>
    </>
  );
}
