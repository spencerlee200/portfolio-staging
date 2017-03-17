#!bin/bash
git add .
echo "Please enter commit message: "
read input_variable
git commit -m "$input_variable"
git checkout release
git merge dev
git push origin dev
