#ODI eLearning

WARNING: The setup of this repository is not like a normal GitHub repository

In order to build each module you require:

1. The master branch
2. A selected module branch

This means that you need two Git trackers in the same directory

# Setup

## Modules
1. Clone the repository and then rename the directory from ODI-eLearning to ODI-modules
2. Change into this directory (cd ODI-modules)
3. mv .git .module
4. git --git-dir=.module checkout module1

## Master
5. Change directory to the one above the modules one.
6. Clone the repository as a single master branch (git clone <url> --branch master --single-branch)
7. Change directory into this new clone (cd ODI-eLearning)
8. mv .git .master
9. git --git-dir=.master checkout master

## Merge the two
10. From the master directory (ODI-eLearning)
11. mv ../ODI-modules/.module .
12. mv ../ODI-modules/src/course src
13. mv ../ODI-modules/src/theme/default/less/\* src/theme/default/less/

## Add shortcut git commands (Linux)
14. echo "alias gitmodule='cp .gitignore_module .gitignore && git --git-dir=.module'" >> ~/.bashrc
15. echo "alias gitmaster='cp .gitignore_master .gitignore && git --git-dir=.master'" >> ~/.bashrc
16. bash

## Add shortcut git commands (OS X)
14. echo "alias gitmodule='cp .gitignore_module .gitignore && git --git-dir=.module'" >> ~/.bash_profile
15. echo "alias gitmaster='cp .gitignore_master .gitignore && git --git-dir=.master'" >> ~/.bash_profile
16. bash

## Using

You MUST be in the top level directory of the repository to execute any git commands now! 

You MUST now only modify the master branch with the `gitmaster` command rather than git, e.g. `gitmaster status`

The modules branch can be modified using the `gitmodule` command, e.g. `gitmodule checkout module2`

## Pushing changes

It is HIGHLY advised that changes to branches be push individually to each branch and not all at the same time.

* gitmaster push -u origin master
* gitmodule push -u origin moduleX

# Build scripts

The build scripts will build individidual modules or all modules into the modules directory.

Note that you must be in the top level directory of the repository in order to build any modules.

## Building individual modules

While this can still be done with the `grunt build` command it is recommended that the build scripts are used.

### Build odi style module

* ./bin/build-odi module1 en

Change the module number and language for different languages

### Build eu style module

* ./bin/build-eu module1 en

Change the module number and language for different languages

## Building all 13 modules

WARNING: You must be up to date and have commited all changes before attempting to build all modules!

### Building all modules in ODI style

* ./bin/build-odi-all en

Change the language for different language builds

### Building all modules in EU style

* ./bin/build-eu-all en

Change the language for different language builds

## Viewing and exporting modules

All modules are built into the modules/ dirctory. 

At the top level is the ODI build with the different languages.

There is also an eu directory for the eu-theme modules. 

Each module can be compressed as a scorm package or be used natively using browser local storage to track progress. 

