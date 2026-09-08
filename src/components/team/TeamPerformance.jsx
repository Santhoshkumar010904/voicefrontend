import TeamCard from "./TeamCard";

function TeamPerformance() {

  const teams = [
    {
      team: "Development",
      members: 18,
      performance: "94%",
    },

    {
      team: "Marketing",
      members: 10,
      performance: "82%",
    },

    {
      team: "HR",
      members: 6,
      performance: "76%",
    },
  ];

  return (
    <div className="team-grid">

      {
        teams.map((team, index) => (
          <TeamCard
            key={index}
            team={team.team}
            members={team.members}
            performance={team.performance}
          />
        ))
      }

    </div>
  );
}

export default TeamPerformance;