# Image cover

Image cover behavior is very usefull in webdesign. it allows to be sure an image 
fit perfectly a predefined area whatever its original width and height are.

CSS propertie ```object-fit:cover``` allow to apply cover behavior to an img but 
unfortunately [this property is not supported by IE11](https://caniuse.com/#feat=object-fit)

A solution based on background property (which support the cover behavior) and a tiny part 
or javascript can nicely replace object-fit usage.

As a bonus, it can be nicely coupled with image lazy-loading or other effects.

Test it by: 
* cloning this repository
* install dependencies using ``nmp i``
* install gulp-cli globally ``nmp i gulp-cli -g``
* run ``gulp`` from this repository dir
* open [example.html](example.html) in your favorite browser
