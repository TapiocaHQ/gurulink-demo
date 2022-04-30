# Response

## Part 1

- I had to use a library to play the m3u8 files, HLS.js, so I created a VideoPlayer component so the interface would be similar to a standard video element
- Since I uploaded the videos to Mux, I created a new column in the SQLite table to store the stream url. Ideally this would get set during upload, but I exceeded my time limit during this exercise.
- I would have organized the file structure a bit differently. I usually do:
- src/
  - components/ (React components shared across pages)
  - pages/ (Main views the user interacts with)
  - services/ (Modules for interacting with APIs and external services)
  - providers/ (React Contexts, used for encapsulating logic related to fetching data and updating state)

## Part 2 - Prioritization:

Roughly categorized backlog:

### Tech Debt:

- Full test coverage
- Move hard-coded credentials to something like AWS Parameter Store
- Dockerize application / deployment

### Features:

- Like/Dislike with swipe gestures
- Browse with swipe gestures
- Set different display name

### Bugs:

- Investigate reported crash

### Discussion:

The overall philosophy I have when prioritizing the backlog is: if there is no immediate threat of an outage, we should, in general, prioritize user value over tech debt, unless paying down the tech debt would directly unlock new user value. To prevent tech debt from accumulating too quickly, we'll allocate some time each sprint to address the most pressing issues.

Based on the early user feedback, it seems that the app is not showing them content they want to see. We can start to address this by implementing a feedback mechanism (like/dislikes) into the app. Eventually we'll use this data to recommend them better content, but the first step is collection. This addresses two pieces of user feedback:

- "There's not enough to do here"
- "It keeps showing me videos that aren't my style at all."

Assuming we do the above, we can capture additional user value by allowing them to browse by swiping (since we are already in the mode of developing swiping gestures). This addresses:

- "I don't like having to hit play every time"

The next observation is that users are complaining that things look bad on mobile. Mobile is critical since the vast majority of browsing happens on a mobile device. To give us peace of mind and minimize breaking changes as we address this, we will need good test coverage (as a bonus, this will also unlock other things in our backlog such as Dockerization).

We'll prioritize the rest of the backlog by using a similar formula: user first, leave room for tech debt.

Thus, the final prioritized backlog is:

- Users should be able to browse videos with intuitive swipe gestures
- Users should be able to engage (like / dislike) with intuitive swipe gestures
- Full integration test coverage
- Improve address matching logic (addresses to some user feedback, so prioritized)
- Users should be able to set a different display name
- Move API credentials outside of the repository (not super critical, but worth doing and should go before Dockerization)
- Dockerization (larger effort; need full test coverage before doing this)
- Investigate infrequent crash (either a quick win or a time sink, but in either case it doesn't seem to be affecting many users. If it becomes a larger problem, we will address it sooner.)

## Wrapping Up

- With more time I would have styled the upload form and DRY'd out the code (have the API base url in one place, maybe within a module that interacts with the API)
