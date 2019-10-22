## SPECS

### Primary User Story

As a user, I would like a web application that allows me to search for a specific Marvel comic book and displays relevant results in a thumbnail grid view. I would also like to be able to view details for a selected result in a detail view.

### Assignment

#### Functional Requirements

Create a single page web application using the Marvel API that allows a user to search for a given comic book by typing the name into a search field.
The application should then display a clickable, thumbnail view of the search results with an image (if available) and any other relevant information.

When clicking a search result, the user will be taken to a new "details" page for the individual comic, along with the option to navigate back to the original search page.

The application should be aesthetically pleasing and easy to use.


#### Technical Requirements

Use the Marvel api, developer.marvel.com. 

The following API endpoints should provide the necessary data: 
* GET /v1/public/comics 
* GET /v1/public/comics/{comicId} 

The application should be built using React and include the use of one of the following React component libraries - Semantic UI React or Reactstrap.

All source code, with relevant commit notes, should be delivered through a public repo related to your GitHub account.

A working version of the application should be accessible via your platform of choice, such as Heroku, GitHub.io, etc.