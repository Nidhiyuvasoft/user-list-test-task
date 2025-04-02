import UserList from "../../components/UserList";
import user1 from "../../public/images/user1.avif";
import user2 from "../../public/images/user2.jpg";
import user3 from "../../public/images/user3.avif";
import user4 from "../../public/images/user4.avif";
import user5 from "../../public/images/user5.avif";
import user6 from "../../public/images/user6.avif";
import user7 from "../../public/images/user7.avif";
import user8 from "../../public/images/user8.avif";
import user9 from "../../public/images/user9.avif";
import user10 from "../../public/images/user10.avif";



async function getUsers() {
  const users = [
    {
      id: 1,
      image: user1,
      name: "Alice",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 2,
      image: user2,
      name: "Bob",
      description:
        "A look at the most significant corporate mergers and acquisitions in the tech industry this year.",
    },
    {
      id: 3,
      image: user3,
      name: "Charlie",
      description: 
      "Reviewing the top technology acquisitions of the year, listed in descending order by date.",
    },
    {
      id: 4,
      image: user4,
      name: "David",
      description: 
      "Examining major business takeovers in the technology sector, presented in reverse order of occurrence.",
    },
    {
      id: 5,
      image: user5,
      name: "Emma",
      description: 
      "An overview of the biggest tech industry acquisitions this year, sorted from most recent to oldest.",
    },
    {
      id: 6,
      image: user6,
      name: "Frank",
      description: 
      "Key technology acquisitions of this year, ranked from the most recent to the oldest",
    },
    {
      id: 7,
      image: user7,
      name: "Grace",
      description: 
      "Major corporate takeovers in tech, listed in descending order by date for easy reference.",
    },
    {
      id: 8,
      image: user8,
      name: "Henry",
      description: 
      "This year’s biggest tech buyouts, shown in reverse sequence to track industry trends.",
    },
    {
      id: 9,
      image: user9,
      name: "Ivy",
      description:
       "A timeline of the most significant tech acquisitions, from the latest to the earliest.",
    },
    {
      id: 10,
      image: user10,
      name: "Jack",
      description: 
      "The most impactful tech mergers of the year, arranged in reverse order of occurrence.",
    },
  ];
  return users;
}

export default async function Home() {
  const users = await getUsers(); // Fetch users on the server

  return (
    <>
      <UserList users={users} />
    </>
  );
}
