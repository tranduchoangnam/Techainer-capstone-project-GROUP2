import streamlit as st
from PIL import Image, ImageEnhance
import numpy as np
import cv2
from retinaface import RetinaFace
from byte2vid import write_vid
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.models import load_model


class Model():
    def mask_image(self, image: np.ndarray):
        Dictionary = {}

        model = load_model("mask_detector.model")

        resp = RetinaFace.detect_faces(image)
        count = 0
        try:
            for face in resp.keys():
                count += 1
                area = resp[face]['facial_area']
                output_face = image[area[1]:area[3],area[0]:area[2]]

                face = cv2.cvtColor(output_face, cv2.COLOR_BGR2RGB)
                face = cv2.resize(face, (224, 224))
                face = img_to_array(face)
                face = preprocess_input(face)
                face = np.expand_dims(face, axis=0)

                (mask, withoutMask) = model.predict(face)[0]
                label = "Mask" if mask > withoutMask else "No Mask"
                label = "{}: {:.2f}%".format(label, max(mask, withoutMask) * 100)

                Dictionary[f'face_{count}'] = {'label':label, 'coordinates':[str(area[0]), str(area[1]), str(area[2]), str(area[3])]}
        except:
            pass
        return Dictionary

    def masked_video(self, video: bytes, export_rate: int):
        stream = write_vid('temp.mp4',video)
        count = 0
        result = {}
        while stream.isOpened():
            ret,frame = stream.read()
            if not ret:
                break
            if count%export_rate == 0:
                result[str(count)] = self.mask_image(frame)
                #print(self.mask_image(frame))
            count += 1
        return result
        

# if __name__ == "__main__":
#     PATH  = "images/pic2.jpg"
#     desired_frame_rate = 30
#     #image = cv2.imread("./images/out.jpg")

#     a = Model()
#     print(a.mask_image(cv2.imread(PATH)))

if __name__ == "__main__":
    PATH  = "./video/Sample_Mask.mp4"
    desired_frame_rate = 30
    #image = cv2.imread("./images/out.jpg")

    video = cv2.VideoCapture(PATH)
    frame_count = 0
    a = Model()
    # cv2.namedWindow('Result',cv2.WINDOW_NORMAL)
    # cv2.resizeWindow('Result',600,400)
    while video.isOpened():
        ret, frame = video.read()
        if not ret:
            break
        if frame_count%desired_frame_rate == 0:
            print(a.mask_image(frame))
            cv2.imshow('Result',frame)
        frame_count += 1
        if cv2.waitKey(1) == ord('x'):
            video.release()
            cv2.destroyAllWindows()
    
    #print(mask_image(image))