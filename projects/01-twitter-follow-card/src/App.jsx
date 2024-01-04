import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "judacarrillo",
    name: "Judá Carrillo Pacherres",
    isFollowing: true,
  },
  {
    userName: "midudev",
    name: "Míguel Ángel Durán",
    isFollowing: false,
  },
  {
    userName: "Samcp_0205",
    name: "David S. Carrillo",
    isFollowing: true,
  },
  {
    userName: "SofiPame_",
    name: "Sofía Pamela Carrillo Pacherres",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo H.",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
