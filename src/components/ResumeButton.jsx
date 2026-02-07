/**
 * A reusable Resume button component.
 * When clicked, it opens the resume PDF in a new tab.
 */

const ResumeButton = ({ className }) => {
  const handleResumeClick = () => {
    // Open the resume PDF in a new tab
    window.open('/images/resume.pdf', '_blank');
  };

  return (
    <button
      onClick={handleResumeClick}
      className={`${className ?? ""} resume-button-wrapper`}
    >
      <div className="resume-button">
        <div className="resume-icon-wrapper">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="resume-icon"
          >
            <path
              d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <polyline
              points="14,2 14,8 20,8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <line
              x1="16"
              y1="13"
              x2="8"
              y2="13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="16"
              y1="17"
              x2="8"
              y2="17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="text">Resume</span>
      </div>
    </button>
  );
};

export default ResumeButton;
