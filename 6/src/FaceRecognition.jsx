import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';


const FaceRecognition = () => {
    const videoRef = useRef(null);
  
    useEffect(() => {
      const loadModels = async () => {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
          faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
          faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
          faceapi.nets.faceExpressionNet.loadFromUri('/models')
        ]);
        startVideo();
      };
  
      loadModels();
    }, []);
  
    const startVideo = () => {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(err => console.error(err));
    };
  
    useEffect(() => {
      if (!videoRef.current) return;
  
      videoRef.current.addEventListener('play', () => {
        const canvas = faceapi.createCanvasFromMedia(videoRef.current);
        document.body.append(canvas);
        const displaySize = { width: videoRef.current.width, height: videoRef.current.height };
        faceapi.matchDimensions(canvas, displaySize);
  
        const intervalId = setInterval(async () => {
          const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
          const resizedDetections = faceapi.resizeResults(detections, displaySize);
          canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
          faceapi.draw.drawDetections(canvas, resizedDetections);
          faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
          faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
        }, 100);
  
        return () => clearInterval(intervalId);
      });
    }, []);
  
    return <video id="video" width="720" height="560" ref={videoRef} autoPlay muted></video>;
  };
  
  export default FaceRecognition;
  