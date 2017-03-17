# Deploying static projects utilizing Git hooks

## Prerequisites
* You must have [git](https://git-scm.com/downloads) and [xcode](https://developer.apple.com/xcode/) installed
* You must have a [Ubuntu 16.04.02](https://github.com/spencerlee200/static-sites-pipeline/blob/master/setup.md) server set up

## 1. Setting up your local repo
Lets get the easy part out of the way. Navigate to the folder where you want to keep your local files and clone down your git repository. If you don't already have a git repository go create one making sure to initialise it with a readme.md file and clone it down with into your desired folder. Go ahead and cd into that project folder 

```shell
cd <your project directory>
```

## 2. Adding CodeShip to your project
Next we are going to add CodeShip to our project. Thankfully you only have to go through this process the one time. To get started head over to codeship.com and make a free account. Once you are logged in hit the new project button.

You will be presented with three options, github, bitbucket, and gitlabs. Click on the github icon on the far left.

Next you are going to be prompted to enter the cloning URL for your github repository. Go copy that from your repo and paste it in the box.


## 3. Deploying
First lets set up our branch structure. From the root of your directory we are going to first branch off the master branch to create a branch for our releases and then branch off of that to create a branch for our development to take place on. Under dev you should be creating feature branches that you merge back into dev. For this example though we are just going to work directly on dev.Lets go ahead and create our release and dev branch. 

```shell
git checkout -b release
git checkout -b dev
```

Next drop in any files you want to upload into the folder and add your files to the git stage.

```shell
bash deploy.sh
```

Its going to ask you to enter a commit message and once you’ve done that everything will be done. You can now go check out your project on codeship to see the changes as they take place.