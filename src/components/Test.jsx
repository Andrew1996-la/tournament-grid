import { Bracket } from "react-brackets";
import { generateRandomId } from "../utils/utils";

const Component = ({ members }) => {
  function generateRound(title, members) {
    return {
      id: generateRandomId(),
      title,
      seeds: generateGames(members),
    };
  }

  function generateGames(members) {
    const membersCopy = structuredClone(members);
    const gameCount = getGameCount(members.length);

    const games = [];
    for (let i = 0; i < gameCount; i++) {
      games.push({
        id: i,
        teams: [getRandomMember(membersCopy), getRandomMember(membersCopy)],
      });
    }

    return games;
  }

  function getGameCount(memberCount) {
    return memberCount / 2;
  }

  function getRandomMember(membersList) {
    const randomMemberNumber = Math.floor(Math.random() * membersList.length);
    const currentMember = membersList[randomMemberNumber];
    membersList.filter((item) => {
      return item.id !== currentMember.id;
    });
    return currentMember;
  }

  function playGames(round) {
    const winners = round.seeds.map(playGame);

    if (winners.length === 1) {
      finishTournament(winners[0]);
      return null;
    }

    return generateRound("Next round", winners);
  }

  function playGame(game) {
    // игра, в ходе которой определяется и возвращается победитель
    return determineWinner(game);
  }

  function determineWinner(game) {
    // логика определения победителя
    return game.teams[0];
  }

  function finishTournament(winner) {
    announceWinner(winner);
  }

  function announceWinner(winner) {
    // объявить победителя
    console.log(`${winner} has won`);
  }
  // return <Bracket rounds={rounds} />;
};

export default Component;
