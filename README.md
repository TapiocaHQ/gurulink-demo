# Welcome!
We're really excited about helping you land your next role. Since resumes don't capture all that you're capable of, we designed this 1-hour work sample test to mimic the types of challenges you may encounter on the job. This work sample gives hiring managers a much better sense of what it would be like to work with you, and we'll use it to increase your odds of landing your next opportunity at any of the companies we partner with.


## About the challenge
Below, you'll find 2 exercises we've created to simulate the type of project-based work you might encounter. There is no single right answer — we've left these intentionally open-ended to see how you think.

We designed this hiring challenge to:

* Learn as much as we can about how you work.
* Require as little of your time as possible. By limiting this to an hour, we hope this is manageable with your busy schedule.


## Getting Started

```
The provided code should be used as a baseline for question 1. There is a very simple node & express backend that stores files
locally and stores the metadata in a simple sqlite database. The frontend is a basic react app (initialized with 
create-react-app) with minimal styling.
```

1. Install dependencies with `yarn install`
2. Start the backend server with `yarn start`
3. Access your react server in your browser from localhost:3000 (backend is in localhost:4000)
4. As you make updates, nodemon will generally update the server with your updates but you will manually need to reload your browser window.
5. Complete the two exercises below. Any text discussion should be placed in `discussion.md`. Note that we aren't evaluating you on your familiarity with Markdown but feel free to add formatting if you wish.


## Part 1: Create an immersive mobile experience
`45 minutes`

### Background
Imagine that our team starts working on a completely new product, a TikTok-style app for browsing real estate content. Currently, there is an index page for displaying uploaded videos along with the property's address and some basic navigation, as well as a form for uploading new videos. All uploads are stored locally as mp4 files with a corresponding entry in a SQLite database.

Our prototype has extremely bare-bones styling. We want to build on this prototype to create an immersive mobile experience. Videos should start playing as fast as possible, be front and center, and have property information overlaid on top of a full-screen video.

![UI Example](https://user-images.githubusercontent.com/84157523/164535838-4d681d62-501b-465e-9f68-503ae9c751a8.png)

### Tasks
Within the recommended 45 minutes, see how much progress you can make toward the immersive mobile experience described above. Let us know why you decided to work on what you did and where you would continue to spend more time if it was available.

Here are some ideas for directions you might take:

* Create a mobile layout where videos are displayed in full screen with the address overlaid on the bottom of the screen.  Don't worry about the desktop view— we only care about mobile.
* Replace the navigation buttons so that users can navigate with intuitive swiping gestures. 
* Before an mp4 video can play, the entire file must be transferred, as opposed to a stream which can begin playing immediately. Take the existing prototype and convert it to use Mux to stream the video content instead of delivering mp4 files directly. 
* Any other meaningful improvement you can think of.


## Part 2: Prioritization
`15 minutes`

### Background
Being in a fast-paced environment means we have to deal with many competing priorities. Our ideal candidate can prioritize effectively, think through tradeoffs, and clearly articulate their reasoning.

Imagine that for our simple video application, we've started hearing feedback from early testers, and that we have some features in our backlog we want to eventually implement.

### Tasks
Take a look at the feature backlog and product feedback below.

* How would you prioritize what to work on? Why did you make the choices you did?
* Are there questions you need to answer first to prioritize effectively? What new information would cause you to shift your priorities?

#### 💬 Early user feedback
* "I don't like having to hit play every time"
* "It keeps showing me videos that aren't my style at all."
* "On mobile everything looks screwy"
* "There's not enough to do here"
* "Why doesn't it start with the places closest to me?"

#### Feature backlog
* Some of our API integrations have the credentials hard-coded into our private repository
* There are some duplicate listings because we weren't able to match address data effectively
* Dockerize application for repeatable deployments
* One of our testers reported a crash that recurs once every few days. Cursory investigation hasn't been able to reproduce the issue
* Users should be able to browse videos with intuitive swipe gestures
* Users should be able to engage (like / dislike) with intuitive swipe gestures
* Users should be able to set a different display name


## Submission instructions
Once you are ready to submit:

1. Commit and push your changes with `git commit` and `git push`.
2. Return to the landing page you were originally provided (should be in your email), check that the latest commit we have from you is accurate, and then click the submit button. This will notify the engineers on our team that your work is ready for review.
