import cv2
v = cv2.VideoCapture(0)
t=True
while(t):
    ret , fram = v.read()
    cv2.imwrite("NewPicture.jpg",fram)
    t=False
v.release()
