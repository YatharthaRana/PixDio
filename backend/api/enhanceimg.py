
# import RealESRGAN.inference_realesrgan as ups
from .RealESRGAN import Upscale as ups
# import inference_realesrgan as ups

def ehce(txt):
    print("enhance")
    img_name = txt
    ups.upres(img_name)

    

    # /Users/lordvoldemort/django_react/Nebula/backend/media/Ily_400x400.jpg