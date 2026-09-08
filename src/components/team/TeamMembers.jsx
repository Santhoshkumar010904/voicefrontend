function TeamMembers() {

  const members = [
    "John Doe",
    "Sarah Smith",
    "Emma Wilson",
    "David Lee",
  ];

  return (
    <div className="team-widget">

      <h2 className="widget-title">
        Team Members
      </h2>

      <div className="team-members-list">

        {
          members.map((member, index) => (
            <div
              className="team-member-item"
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

export default TeamMembers;