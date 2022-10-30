import rboot from '../public/assets/react-pics/category/react-bootstrap.jpg'
import nextboot from '../public/assets/react-pics/category/nextjs-bootstrap.jpg'
import nexttail from '../public/assets/react-pics/category/nextjs-tailwind.jpg'
import deploy from '../public/assets/react-pics/category/deploy_react.jpg'

export const ReactCategory=[
    {
        id: 1,
        name: "React-Bootstrap",
        description: "Create a dynamic web app with react and bootstrap", 
        img:rboot,
        url:"react/react-bootstrap"

    },
    {
        id: 2,
        name: "NextJS-Bootstrap",
        description: "Build multipage webapp using NextJS aand bootstrap",
        img: nextboot,
        url: "react/nextjs-bootstrap"

    },
    {
        id: 3,
        name: "NextJS with Tailwind CSS",
        description: "Build multipage webapp using NextJS and tailwind css",
        img:nexttail,
        url:"react/nextjs-tailwind"

    },
    {
        id: 4,
        name: "Deployment",
        description: "Deploy a React App with AWS, Heroku, Firebase",
        img:deploy,
        url:"react/deployment"
    }
]