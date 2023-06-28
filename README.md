# HushShare - The Whisper Project
HushShare, codenamed "Whisper", is an open-source, free project built with Nuxt.js 3 and MongoDB. This project aims to provide a platform for sharing anonymous secrets, confessions, gossips, or anything else that individuals would like to express, without revealing their identity. The user interaction is designed to be similar to platforms like TikTok, where only one post is visible at a time for easy and engaging scrolling.

## Features
- Anonymity: Users can submit secrets anonymously.
- Single-Post View: Similar to platforms like TikTok, only one post is visible at a time, enabling an easy scrolling experience.
- Likes/Dislikes: Other users can react by liking or disliking these posts.
- Sorting: Posts can be sorted by the newest, most liked (trending), or most disliked (controversial).
- Local Storage: The application generates a unique UUID for each user, enabling a better user experience. 
- Users can reset this by clearing local storage.
- Admin Approval: Each post requires administrator approval for publishing.
- SSR (Server-Side Rendering): Provides better SEO optimization.
- Mock Data: Use the init-mongo.js script to generate mock data.
- Future updates will include mobile responsivnes + PWA, comment features and an admin dashboard.

## Local Setup
Follow these instructions to set up the project locally:

## Prerequisites
- Rename .env.example to .env  
- Docker  
- Node.js  

Steps:

Clone the repository:

```sh
git clone https://github.com/aaljukic/project-whisper.git
```
Navigate to the project folder:
```sh
cd project-whisper
```
Install the necessary NPM packages:
```sh
npm install
```
Spin up the MongoDB instance using Docker Compose:
```sh
docker-compose -f docker-compose.dev.yml up
```
- To generate mock data, uncomment the relevant lines in init-mongo.js.  

Start the Nuxt.js application:

```sh
npm run dev
```
You can now visit http://localhost:3000 in your browser to see the application running.
## Contribution
This is a free and open-source project. Feel free to contribute by submitting pull requests or by reporting bugs and issues.

## License
HushShare is open-source software licensed under the MIT License.

## Disclaimer: 

The application tracks user actions by generating a unique UUID stored in local storage. This UUID can be cleared by the user at any time, effectively creating new account. Every post must be approved by an administrator, enhancing the integrity of content shared on the platform. Please use this platform responsibly.
