function FileCard({
  title,
  type,
  size,
}) {
  return (
    <div className="file-card">

      <div className="file-icon">
        📄
      </div>

      <h3 className="file-title">
        {title}
      </h3>

      <p className="file-meta">
        {type} • {size}
      </p>

    </div>
  );
}

export default FileCard;