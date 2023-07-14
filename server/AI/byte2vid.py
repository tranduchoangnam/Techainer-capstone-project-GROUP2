import PIL.Image as Image
import cv2

def write_vid(vidname: str, data):
    with open(vidname, 'wb') as wfile:
        wfile.write(data)
    vidCap = cv2.VideoCapture(vidname)
    return vidCap