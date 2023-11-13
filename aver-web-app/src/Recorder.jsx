import React, { useEffect, useRef, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import './assets/Recorder.css'

const Recorder = () => {
  const {
    startRecording,
    stopRecording,
    mediaBlobUrl,
    previewStream,
    error,
    clearBlobUrl
  } = useReactMediaRecorder({
    video: true,
    askPermissionOnMount: true
  });

  const previewVideoRef = useRef(null);
  const recordedVideoRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(false);

  useEffect(() => {
    if (previewVideoRef.current) {
      previewVideoRef.current.srcObject = previewStream;
    }
  }, [previewStream]);

  useEffect(() => {
    if (recordedVideoRef.current && mediaBlobUrl) {
      recordedVideoRef.current.src = mediaBlobUrl;
    }
  }, [mediaBlobUrl]);

  const handleStartRecording = () => {
    startRecording();
    setIsRecording(true);
    setHasRecorded(false);
  };

  const handleStopRecording = () => {
    stopRecording();
    setIsRecording(false);
    setHasRecorded(true);
  };

  const handleRecordAnotherVideo = () => {
    window.location.reload();
  };

  const handleUploadVideo = () => {
    // Placeholder for upload logic
    alert("Upload the video to database")
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="recorder-container">
      <video
        ref={previewVideoRef}
        className="preview-video"
        autoPlay
        playsInline
        muted
        style={{ display: isRecording || !hasRecorded ? 'block' : 'none' }}
      />
      {!isRecording && hasRecorded && mediaBlobUrl && (
        <video
          ref={recordedVideoRef}
          className="recorded-video"
          src={mediaBlobUrl}
          controls
          autoPlay
          loop
          style={{ display: 'block' }}
        />
      )}
      {!isRecording && !hasRecorded && (
        <button
          className="btn-start-recording"
          onClick={handleStartRecording}
        >
          Start Recording
        </button>
      )}
      {isRecording && (
        <button
          className="btn-stop-recording"
          onClick={handleStopRecording}
        >
          Stop Recording
        </button>
      )}
      {!isRecording && hasRecorded && (
        <>
          <button
            className="btn-upload-video"
            onClick={handleUploadVideo}
          >
            Upload Video
          </button>
          <button
            className="btn-record-another"
            onClick={handleRecordAnotherVideo}
          >
            Record Another Video
          </button>
        </>
      )}
    </div>
  );
};

export default Recorder;