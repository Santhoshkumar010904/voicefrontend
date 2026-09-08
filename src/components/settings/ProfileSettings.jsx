function ProfileSettings() {
  return (
    <div className="settings-widget">

      <h2 className="widget-title">
        Profile Settings
      </h2>

      <form className="profile-settings-form">

        <input
          type="text"
          placeholder="Admin Name"
        />

        <input
          type="email"
          placeholder="Admin Email"
        />

        <button type="submit">
          Save Changes
        </button>

      </form>

    </div>
  );
}

export default ProfileSettings;