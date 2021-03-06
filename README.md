
# JSUI
### A full featured, object oriented front-end framework with a fluent API.

## Goals
1. Create a fluent, good looking API that is easy to read and maintain. Reducing maintenance time is a primary concern. 
2. Make everything accessible through JavaScript. DOM structure, theming, style sheets, routing, data, etc. 
3. JavaScript is still JavaScript. Outside of next generation JavaScript, all code should run in a modern browser without alteration.
4. Push separation of concerns and single responsibility principle as part of the framework's opinion. Although not directly enforceable, code written under the framework should tend towards using these principles naturally. 

## Installation
JSUI is built to UMD format. The built version can be used in any environment.
### In your browser
```html
<script type="text/javascript" src="JSUI.js"></script>
```
### In a Parcello project
Simply clone the repo in your dependencies folder and start working. JSUI occupies the JSUI namespace.

### In Node/NPM
Coming soon, package naming dispute is in progress.


## Usage

### Application concepts
JSUI defines classes for certain application concepts. These are:
* Navigation
* Application
* Roles
* Features
* Pages
* Endpoints
* Routes
#### tldr; the gist of it
An ```Application``` contains ```Roles```. ```Roles``` contain ```Features```.  ```Features``` are composed of ```Pages``` and other services. ```Pages``` have ```Endpoints``` that are the terminal destination of a route. ```Routes``` are automatically generated by the composition of an ```Application``` or any other traversable class. ```Navigation``` allows movement between ```Applications```, ```Pages```, and ```Endpoints```. 

#### Navigation
The Navigation class contains visual elements that allow the user to navigate the content of ```Applications```, ```Pages``` and ```Endpoints```. Navigation is fully aware of all routes and their emitted  metadata. 

#### Application
Contains roles and references to routing and navigation. In most cases the application class would represent the content area of a website or mobile app.  For example purposes let's say we're building a gym management app. Let's call it "Callipygian". We'll build on this as we go along.

#### Role
Represents a grouping of features that a particular user is expected to use within an application. Continuing with the prior example, our Callipygian app would likely contain a few roles such as  "Trainer", "Member", and "Guest".

#### Feature
Features are groups of related pages and functionality.  Compositing makes it easy to create new roles with existing features. The "Workout" feature, for example, would be present in all three of the imaginary roles listed in our prior example. A "Workout" feature would likely contain pages for designing, viewing and running workout routines.

#### Page
Pages are visual elements that contain the contents of an application (except navigational components). Pages also contain endpoints, which have special significance with respect to routing. Our example feature "Workout" would likely contain "Design", "View" and "Run" pages. 

#### Endpoint
Endpoints allow for deep linking within a page. They can also potentially receive special context for their execution. These include the current Application, Role, Feature, Page and URL parameters. An endpoint in our gym app could be "resume" on the "Run" page. It could receive parameters relating to how to resume a previously paused workout.

#### Routes
These are automatically generated based on the composition of an application. In our hypothetical gym app, the route ```/Callipygian/Member/Workout/Run/resume?exercise=2&time=35```would traverse the tree of routable classes, instatiating each if necessary and passing the exercise and time values to the resume endpoint. Alternatively, if non key value pair parameters need to be passed they can be done by adding to the URL. Let's say we needed to specify a workout plan, and one called "plyometrics" existed. The ```/Callipygian/Member/Workout/Run/resume/plyometrics?exercise=2&time=35``` route would pass "plyometrics" as non key value argument 0 and exercise:2, time:35 as key value pairs to the resume endpoint. Routes can also be shortened.

##### A note on modularity
You don't have to build your whole app using JSUI's scaffolding. Components can be built independently and used with other frameworks. Selectively importing what you need will allow for a lean build. Any part of JSUI's framework can be selectively imported, and will only add itself plus any dependencies it needs to function.

### Components and other core concepts
* Components
* Elements
* Identities
* Settings
* Styles
* Data
* Events
* Receipts
* Relationships
* Errors

### Building components
All HTML elements inherit from JSUI's ```Element``` class.

### API is in progress, so docs are in progress