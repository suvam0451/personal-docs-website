
echo $GH_TOKEN
gh-pages-clean
yarn gatsby build
gh-pages -d public -r https://suvam0451@github.com/suvam0451/suvam0451.github.io.git