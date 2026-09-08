function SharedNotesCard() {

  const notes = [
    "Meeting scheduled at 4 PM",
    "Client presentation tomorrow",
    "Update UI animations",
    "Review employee reports",
  ];

  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Shared Notes
      </h2>

      <div className="shared-notes-list">

        {
          notes.map((note, index) => (
            <div
              className="shared-note-item"
              key={index}
            >
              {note}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default SharedNotesCard;