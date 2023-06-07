# Text-Editor
- This text editor's functionality is to both save text placed into the editor, whether that be to the cache to be loaded up or to the index, bundle the different components using webpack, and to be able to be installed on a device
- To start out, I cloned the repository from github ran an npm init and npm install in the root repository. Checking the to-do sections, I ignored the server folder as it was already completed.
- The webpack config file was what I did first, and ultimately it gave me the most trouble for reasons I am still unsure of. Everything seemed in order, but I kept getting an error when I ran npm start or the like. The fix eventually came in the form of slack, where the webpack config file was pasted. Everything seemed the same, but when I copied and pasted it into my webpack config file things magically worked.
- After that I set up the asset caching for the service worker in the src-sw file.
- Going into the package.json in the root folder, I added the scripts so that both the client and server would be activated at the same time.
- Lastly was the js files in the client/src folder. Most of these files didn't need changing, but the database.js file and the install file both had to have some logic added.

![link]()