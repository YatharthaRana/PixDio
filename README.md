# PixDio
Project Submitted to Nebula organised by MDG IITR

## Contents

☞ Setup

☞ What is PixDio?

☞ Aim & Features

☞ Problems Occurred

☞ Future Scopes

☞ References


## Setup

Clone the repository and then run it in IDE like Visual Studio Code

**!Some Backend Files require GPU and might not work on CPU or take much time!**

### Languages/Framework

❖ Python3

❖ ReactJS

❖ Google Colab

❖ Django REST API

# What is PixDio?
<img width="167" alt="Pixdio" src="https://github.com/YatharthaRana/PixDio/assets/95047694/bc898896-dd2b-4391-a358-605e5c74d9f4">

It is a web app made in view as an attempt to group all the works related to multimedia(Images, Audio and Video) on a single website at single platform. Pixdio include the services : Pixel Alchemy for all the things related to images, Neural Notes for audio whereas Robo Cinematics for video. The backend used in this project is based on Machine Learning models especially GAN Models while Frontend is made on ReactJs. The frontend and backend are connected using Django REST API(s).

<img width="1440" alt="Screenshot 2023-06-09 at 23 14 03" src="https://github.com/YatharthaRana/PixDio/assets/95047694/8d5d35dc-482c-41ff-96e6-af11c64983de">


# Features

## Pixel Alchemy


<img width="1440" alt="Screenshot 2023-06-09 at 23 16 07" src="https://github.com/YatharthaRana/PixDio/assets/95047694/fceebcb1-09f1-46e5-a017-aea580cf2a98">

### Word Canvas

Unleash your imagination with our Text to Image feature. Transform written ideas into stunning visual representations. Simply input your descriptive text, and watch as our AI-powered technology brings your words to life, generating vibrant and captivating images that match your imagination.

<img width="1440" alt="Screenshot 2023-06-10 at 00 29 23" src="https://github.com/YatharthaRana/PixDio/assets/95047694/b0674d59-b383-4435-8a36-5044a223e5a6">


### Face Morphix

Currently this tool is not able to connect to frontend, hence the red button is there. The reason for this is the python file is not running when the post request is sent to the backend using Django. There is no error displayed too. I don't know why its happening.

### Chroma Magic

Currently this tool is not able to connect to frontend, hence the red button is there. The reason for this is the python file is not able to run on my Macbook most likely GPU missing on my device. Hence I am not able to connect it. The file is there in Colab_Files folder, if you want to try then directly run it on Google Colab and have fun. 

### Reso Revive

This was working initially but now having same problem as in Face Morphix.
Some outputs of this feature are:

File from 77KB to 1.2MB

![rashmika](https://github.com/YatharthaRana/PixDio/assets/95047694/24aac339-eb75-436b-871a-1099c3000117)

![rashmika_out](https://github.com/YatharthaRana/PixDio/assets/95047694/a5e7f3e3-414f-4013-a710-9be02cae8f4a)

## Neural Notes

<img width="1440" alt="Screenshot 2023-06-09 at 23 34 57" src="https://github.com/YatharthaRana/PixDio/assets/95047694/07c4b66f-475f-4595-ac85-a6998768445d">

## Robo Cinematics

<img width="1440" alt="Screenshot 2023-06-09 at 23 35 09" src="https://github.com/YatharthaRana/PixDio/assets/95047694/52ef0363-30a5-4d49-98ff-f8e7720ff0ad">

# Problems Occurring

The main problem which I am facing is that the file is not running despite of showing 0 errors. Well, if no error is displayed, how to debug the code.
Another problems are inevitable like no GPU in MacBook and Transformer Library not working properly.

# Future Scope

Completing Features for Audio and Video and try to solve the errors

# References

[Reso Revive](https://github.com/xinntao/Real-ESRGAN)

[Word Canvas](https://www.tryleap.ai/projects/30fc43fa-9e27-4372-9f95-1b70be730008)

[Chroma Magic](https://github.com/jantic/DeOldify)

[Face Morphix](https://github.com/neuralchen/SimSwap)
