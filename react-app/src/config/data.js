export const steps = [
    {
        name: "1",
        header: "Create a React App",
        desc: "You can create a React App using any of the following methods:",
        subSteps: [
            { desc: "npx create-react-app my-app", imagePath: "" },
            { desc: "npm init react-app my-app", imagePath: "" },
            { desc: "yarn create react-app my-app", imagePath: "" },
        ]

    },
    {
        name: "2",
        header: 'Add gh-pages npm dependency',
        subSteps: [
            { desc: "npm install gh-pages --save-dev", imagePath: "" },
        ]
    },
    {
        name: "3",
        header: 'Add predeploy and deploy scripts in package.json',
        desc: "",
        subSteps: [
            { desc: '"predeploy": "npm run build"', imagePath: "" },
            { desc: '"deploy": "gh-pages -d build"', imagePath: "" },
        ]
    },
    {
        name: "4",
        header: 'Create GitHub repo & push the code',
        desc: "You need to create a new GitHub repository and push you code to that repository.",
        subSteps: [
        ]
    },

    {
        name: "5",
        header: 'Setup GitHub Actions',
        desc: "In GitHub UI, you need to go to Actions tab, select NodeJs workflow and then you need to make some changes in config file.",
        subSteps: [
            { desc: 'Reference', imagePath: "", link: "https://github.com/rounakraj8/react-build-using-github-actions/blob/master/.github/workflows/ci.yml" },
    
        ]
    }

];