function TeamCard({
  team,
  members,
  performance,
}) {
  return (
    <div className="team-card">

      <h2 className="team-name">
        {team}
      </h2>

      <p className="team-members">
        Members: {members}
      </p>

      <h1 className="team-performance">
        {performance}
      </h1>

    </div>
  );
}

export default TeamCard;