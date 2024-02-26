# LikeYourDream

## The purpose

LikeYourDream allows people to look for images that are actually free of copyright.

## Menu
- [How does the user look for free images](#how-does-the-user-look-for-free-images)
- [How to utilize the project? ](#how-to-utilize-the-project?)
- [What does the project work](#what-does-the-project-work)

## How does the user look for free images? 

The API which provides all the resources for us is the Pexels API and besides it brings us a limit of images for each request, which is 80 images.   so, it's likely the user may look at alike images in their search. 

***Into the repository there's my key API which I used in the whole project, however, by security I removed it from my Pexels account and certainly the project won't show you the resources.***

## How to utilize the project? 

If you want to utilize my design, I suggest you create an account at [https://www.pexels.com/], it will provide you with a key.

After you have made an account, go to the path js/API/connection.js, there,  you can find a class which has the attribute key, delete the whole key, and put your key, as a result, it will work. 

## What does the project work? 

* In the whole project, I'm using localStorage to store images the user liked. 
* If you go over any image you will trigger an animation that shows you a button to store it in the DDBB.
* The slideshow is a decoration, you can't store the images are into it. 
* If you go to the warehouse and actually have stored images, you can delete them from the warehouse and localStorage. 
