# final-project

Charity volunteering app where charities can list opportunities and volunteers can search for them!

# minimum requirements

node.js v16.0.0

# setting up this project locally

`cd` into the folder you want to have the project. </br>

`git clone https://github.com/nolixul/final-project` </br>

`npm install` </br>

`npm start` will open local version of the console and QR codes. </br>

Download Expo in PlayStore and Apple Store. </br>

Change the connection into `tunnel` to get a new QR code so all the members of the team can have access to the App into their mobile. </br>

# uploading changes to github

## create a new branch

Create a new branch for the github repository with a name appropriate for the feature you're adding or changes you're making.

```
git checkout -b branch_name
```

## check which files you have modified

```
git status
```

## add modified files to upload to github

Add the files you've modified.

```
git add file_name another_file_name
```

## if eslint errors

Run a fix command to fix these errors automatically. You may need to save some modified files, you can check if you've made new changes by using `git status`.

```
npm run fix
```

## upload files to github

```
git push origin branch_name
```
