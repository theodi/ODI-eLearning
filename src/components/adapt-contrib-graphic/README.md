#adapt-contrib-graphic

A component for the Adapt Framework that dynamically displays image of different resolutions based upon device width.  

Three image widths from the _AdaptBuilder.screenSize_ object are handled:
* small
* medium
* large

In order to render images, these three corresponding data attributes in the JSON must be set to the source of the various images.
* _data-small_ 
* _data-medium_
* _data-large_

When the viewport size changes, these attributes will be swapped.

##Installation

First, be sure to install the [Adapt Command Line Interface](https://github.com/adaptlearning/adapt-cli), then from the command line run:-

        adapt install adapt-contrib-graphic

This component can also be installed by adding the component to the adapt.json file before running `adapt install`:

        "adapt-contrib-graphic": "*"

##Usage

For content that needs a visual effect we have the graphic component. To optimise this for various devices, this component swaps out images based upon your screen size. Giving the user the best experience possible according to their device's spec.

##Settings overview
 
An complete example of this components settings can be found in the [example.json](https://github.com/adaptlearning/adapt-contrib-gmcq/blob/master/example.json) file. A description of the core settings can be found at: [Core model attributes](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes)

Further settings for this component are:

####_component

This value must be: `graphic`

####_classes

You can use this setting to add custom classes to your template and LESS file.

####_layout

This defines the position of the component in the block. Values can be `full`, `left` or `right`. 

####_graphic

The image for this component is defined within this element. The _graphic element should contain only one value for `alt`, `title`, `large`, `medium` and `small`.

####alt

The alt setting provides alternative information for the image.

####title

This setting is for the title attribute on the image.

####large

Enter a path to the image for large device width. Paths should be relative to the src folder, e.g.

course/en/images/origami-menu-two.jpg

####medium

Enter a path to the image for medium device width. Paths should be relative to the src folder, e.g.

course/en/images/origami-menu-two.jpg

####small

Enter a path to the image for small device width. Paths should be relative to the src folder, e.g.

course/en/images/origami-menu-two.jpg

##Limitations

To be completed.

##Browser spec

This component has been tested to the standard Adapt browser specification.