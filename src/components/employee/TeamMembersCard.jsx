function TeamMembersCard() {

  const members = [
    "John Doe",
    "Sarah Smith",
    "Emma Wilson",
    "David Lee",
  ];

  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Team Members
      </h2>

      <div className="team-members-list">

        {
          members.map((member, index) => (
            <div
              className="team-member-card"
              key={index}
            >
              {member}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default TeamMembersCard;