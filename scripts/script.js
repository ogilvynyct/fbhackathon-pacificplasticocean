// Load in the required modules
const CameraInfo = require('CameraInfo');
const Scene = require('Scene');
const Diagnostics = require('Diagnostics');

// Locate the plane in the Scene
// const toggleMsg = Scene.root.find('rectangle-toggle');

//==============================================================================
// Hide the plane when capturing a photo or recording a video
//==============================================================================

// Store references to the photo capture and video recording boolean signals
// const isCapturingPhoto = CameraInfo.isCapturingPhoto;
// const isRecordingVideo = CameraInfo.isRecordingVideo;

// Create a boolean signal that returns true if either boolean signal are true
// const hideToggleMsg = isCapturingPhoto.or(isRecordingVideo);

// Bind the hidePlane signal to the hidden property of the plane
// toggleMsg.hidden = hideToggleMsg;
// plane.hidden = true;



//======================================================================
// const cone = Scene.root.find('Test');

// var cameraPos = CameraInfo.captureDevicePosition.signal;
// Diagnostics.log("CAMERA POS:" + cameraPos);
// // if(CameraInfo.captureDevicePosition === CameraInfo.CameraPosition.BACK)
// if(CameraInfo.captureDevicePosition === CameraInfo.CameraPosition.BACK)
// {
// 	isCameraPositioningToBack = true;
// 	Diagnostics.log("BACK CAMERA");

// 	cone.hidden = false;
// }
// else
// {
// 	isCameraPositioningToBack = false;
// 	Diagnostics.log("REAR CAMERA");


// 	cone.hidden = true;


// }



