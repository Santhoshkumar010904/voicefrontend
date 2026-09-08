function TeamActivity() {

  const activities = [
    "Development team completed sprint",
    "Marketing launched new campaign",
    "HR updated onboarding tasks",
    "Support team resolved tickets",
  ];

  return (
    <div className="team-widget">

      <h2 className="widget-title">
        Team Activity
      </h2>

      <div className="team-activity-list">

        {
          activities.map((activity, index) => (
            <div
              className="team-activity-item"
              key={index}
            >
              {activity}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default TeamActivity;