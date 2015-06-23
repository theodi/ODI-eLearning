# ODI eLearning

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
6. Clone the repository again
7. Change directory into this new clone (cd ODI-eLearning)
8. mv .git .master
9. git --git-dir=.master checkout master

## Merge the two
10. From the master directory (ODI-eLearning)
11. mv ../ODI-modules/.module .
12. mv ../ODI-modules/src/course src
13. mv ../ODI-modules/src/theme/adapt-contrib-vanilla/less/\* src/theme/adapt-contrib-vanilla/less/

## Add shorcut git commands (Linux)
14. cat "alias gitmodule='cp .gitignore_module .gitignore && git --git-dir=.module'" >> ~/.bashrc
15. cat "alias gitmaster='cp .gitignore_master .gitignore && git --git-dir=.master'" >> ~/.bashrc

## Add shorcut git commands (OS X)
14. cat "alias gitmodule='cp .gitignore_module .gitignore && git --git-dir=.module'" >> ~/.bash_profile
15. cat "alias gitmaster='cp .gitignore_master .gitignore && git --git-dir=.master'" >> ~/.bash_profile
