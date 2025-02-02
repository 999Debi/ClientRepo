import React, { useState } from "react";
import Wrapper from "../css-wrapper/Home";
import { FaSort, FaTimes, FaUpload } from "react-icons/fa";
import { IoCloudUploadOutline, IoClose } from "react-icons/io5";

const Home = () => {
  const [meetings, setMeetings] = useState([
    {
      date: new Date(),
      title: "Project Kickoff",
      organizer: "Alice",
      duration: 45,
      videoUrl: "#",
      transcriptUrl: "#",
      summaryUrl: "#",
    },
    {
      date: new Date(),
      title: "Weekly Sync",
      organizer: "Bob",
      duration: 30,
      videoUrl: "#",
      transcriptUrl: "#",
      summaryUrl: "#",
    },
    {
      date: new Date(),
      title: "Client Meeting",
      organizer: "Charlie",
      duration: 60,
      videoUrl: "#",
      transcriptUrl: "#",
      summaryUrl: "#",
    },
    {
      date: new Date(),
      title: "Sprint Review",
      organizer: "Diana",
      duration: 90,
      videoUrl: "#",
      transcriptUrl: "#",
      summaryUrl: "#",
    },
    {
      date: new Date(),
      title: "Retrospective",
      organizer: "Eve",
      duration: 30,
      videoUrl: "#",
      transcriptUrl: "#",
      summaryUrl: "#",
    },
  ]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newMeeting, setNewMeeting] = useState({
    title: "",
    organizer: "",
    video: null,
    transcript: null,
  });
  const [errors, setErrors] = useState({});
      const [dragOver, setDragOver] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const togglePopup = () => {
    setNewMeeting({ title: "", organizer: "", video: null, transcript: null });
    setErrors({});
    setIsPopupOpen(!isPopupOpen);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedMeetings = [...meetings].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setMeetings(sortedMeetings);
  };

      const handleDrop = (e, type) => {
        e.preventDefault();
        setDragOver(null);
        const file = e.dataTransfer.files[0];
        if (!file) return;
        const error = validateFile(file, type);
        if (error) {
          setErrors((prev) => ({ ...prev, [type]: error }));
        } else {
          setNewMeeting((prev) => ({ ...prev, [type]: file }));
          setErrors((prev) => ({ ...prev, [type]: null }));
        }
      };

          const validateFile = (file, type) => {
            if (type === "video" && file.type !== "video/mp4")
              return "Only MP4 files allowed";
            if (
              type === "transcript" &&
              file.type !==
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            )
              return "Only DOCX files allowed";
            return null;
          };

    const handleFileChange = (e, type) => {
      const file = e.target.files[0];
      if (!file) return;

      if (type === "video" && file.type !== "video/mp4") {
        setErrors((prev) => ({ ...prev, video: "Only MP4 files allowed" }));
      } else if (
        type === "transcript" &&
        file.type !==
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        setErrors((prev) => ({
          ...prev,
          transcript: "Only DOCX files allowed",
        }));
      } else {
        setNewMeeting((prev) => ({ ...prev, [type]: file }));
        setErrors((prev) => ({ ...prev, [type]: null }));
      }
    };

        const removeFile = (type) => {
          setNewMeeting((prev) => ({ ...prev, [type]: null }));
        };

  const handleSubmit = () => {
    const { title, organizer, video, transcript } = newMeeting;
    let validationErrors = {};

    if (!title.trim()) validationErrors.title = "Meeting title is required";
    if (!organizer.trim())
      validationErrors.organizer = "Organizer name is required";
    if (!video) validationErrors.video = "MP4 video is required";
    if (!transcript)
      validationErrors.transcript = "DOCX transcript is required";

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setTimeout(() => {
      setMeetings([
        {
          ...newMeeting,
          date: new Date(),
          duration: 30,
          videoUrl: "#",
          transcriptUrl: "#",
          summaryUrl: "#",
        },
        ...meetings,
      ]);
      togglePopup();
    }, 1000);
  };

  return (
    <Wrapper>
      <div className="home-container">
        <div className="upload-div">
          <button className="upload-btn" onClick={togglePopup}>
            Upload
          </button>
        </div>

        <table className="meeting-table">
          <thead>
            <tr>
              <th onClick={() => handleSort("date")}>
                Date <FaSort />
              </th>
              <th>Title</th>
              <th>Organizer</th>
              <th onClick={() => handleSort("duration")}>
                Duration <FaSort />
              </th>
              <th>Video</th>
              <th>Transcript</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {meetings.map((meeting, index) => (
              <tr key={index}>
                <td>{meeting.date.toDateString()}</td>
                <td>{meeting.title}</td>
                <td>{meeting.organizer}</td>
                <td>{meeting.duration} min</td>
                <td>
                  <a
                    href={meeting.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </td>
                <td>
                  <a
                    href={meeting.transcriptUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </td>
                <td>
                  <a
                    href={meeting.summaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isPopupOpen && (
          <div className="popup-overlay">
            <div className="popup-content">
              <button className="close-btn" onClick={togglePopup}>
                <FaTimes />
              </button>
              <h2>Upload Meeting</h2>

              <div className="input-group">
                <label>Meeting Title</label>
                <input
                  type="text"
                  value={newMeeting.title}
                  onChange={(e) =>
                    setNewMeeting({ ...newMeeting, title: e.target.value })
                  }
                />
                {errors.title && <span className="error">{errors.title}</span>}
              </div>

              <div className="input-group">
                <label>Organizer Name</label>
                <input
                  type="text"
                  value={newMeeting.organizer}
                  onChange={(e) =>
                    setNewMeeting({ ...newMeeting, organizer: e.target.value })
                  }
                />
                {errors.organizer && (
                  <span className="error">{errors.organizer}</span>
                )}
              </div>

              <h3>Upload Video</h3>

              <div
                className={`file-upload ${
                  dragOver === "video" ? "drag-over" : ""
                }`}
                onClick={() => document.getElementById("videoUpload").click()}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver("video");
                }}
                onDragLeave={() => setDragOver(null)}
                onDrop={(e) => handleDrop(e, "video")}
              >
                {newMeeting.video ? (
                  <div className="uploaded-file">
                    <span>{newMeeting.video.name}</span>
                    <IoClose
                      className="remove-icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile("video");
                      }}
                    />
                  </div>
                ) : (
                  <>
                    <IoCloudUploadOutline className="upload-icon" />
                    <p>Drag & Drop MP4 file</p>
                    <p style={{ color: "#464eb8" }}>Or Browse File</p>
                    <input
                      id="videoUpload"
                      type="file"
                      accept="video/mp4"
                      onChange={(e) => handleFileChange(e, "video")}
                      hidden
                    />
                  </>
                )}
                {errors.video && <span className="error">{errors.video}</span>}
              </div>

              {/* Drag & Drop for Transcript */}
              <h3>Upload Transcript</h3>
              <div
                className={`file-upload ${
                  dragOver === "transcript" ? "drag-over" : ""
                }`}
                onClick={() =>
                  document.getElementById("transcriptUpload").click()
                }
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver("transcript");
                }}
                onDragLeave={() => setDragOver(null)}
                onDrop={(e) => handleDrop(e, "transcript")}
              >
                {newMeeting.transcript ? (
                  <div className="uploaded-file">
                    <span title={newMeeting.transcript.name}>
                      {newMeeting.transcript.name}
                    </span>
                    <IoClose
                      className="remove-icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile("transcript");
                      }}
                    />
                  </div>
                ) : (
                  <>
                    <IoCloudUploadOutline className="upload-icon" />
                    <p>Drag & Drop DOCX file </p>
                    <p style={{ color: "#464eb8" }}>Or Browse File</p>
                    <input
                      id="transcriptUpload"
                      type="file"
                      accept=".docx"
                      onChange={(e) => handleFileChange(e, "transcript")}
                      hidden
                    />
                  </>
                )}
                {errors.transcript && (
                  <span className="error">{errors.transcript}</span>
                )}
              </div>

              <button className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Home;

