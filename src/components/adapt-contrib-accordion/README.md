#adapt-contrib-accordion


An Adapt core contributed accordion component that displays clickable titles, which reveal display text.

##Installation

First, be sure to install the [Adapt Command Line Interface](https://github.com/adaptlearning/adapt-cli), then from the command line run:-

        adapt install adapt-contrib-accordion

This component can also be installed by adding the component to the adapt.json file before running `adapt install`:

        "adapt-contrib-accordion": "*"

##Usage

Once installed, the component can be used to create an accordion comprised of collapsible content panels containing display text.
Clickable title items are used to toggle the visibility of these content panels.


##Settings overview

For example JSON format, see [example.json](https://github.com/adaptlearning/adapt-contrib-accordion/blob/master/example.json)

A description of the core settings can be found at: [Core model attributes](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes). The following explains further settings for the accordion component:

####_component

This value must be: `accordion`


####_classes

You can use this setting to add custom classes to your template and LESS file.

####_layout

This defines the position of the component in the block. Values can be `full`, `left` or `right`. 

####_items

Each item represents one element of the accordion. Text values can be entered for `alt`, `title` and `body` for each element.

####alt

The alt setting provides alternative information for the image.

####title

Enter a title value for this accordion element. This text is displayed at all times.

####body

The text entered for the body will be shown when the reader opens this accordion element.

##Limitations
 
To be completed.
 
##Browser spec
 
This component has been tested to the standard Adapt browser specification.