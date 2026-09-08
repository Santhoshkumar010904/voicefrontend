import FileCard from "./FileCard";

function SharedFiles() {

  const files = [
    {
      title: "Project Proposal",
      type: "PDF",
      size: "2.4 MB",
    },

    {
      title: "UI Design Assets",
      type: "ZIP",
      size: "14 MB",
    },

    {
      title: "Employee Report",
      type: "DOCX",
      size: "1.2 MB",
    },

    {
      title: "Analytics Data",
      type: "XLSX",
      size: "5.8 MB",
    },
  ];

  return (
    <div className="shared-files-grid">

      {
        files.map((file, index) => (
          <FileCard
            key={index}
            title={file.title}
            type={file.type}
            size={file.size}
          />
        ))
      }

    </div>
  );
}

export default SharedFiles;