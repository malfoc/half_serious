# Half-Serious Test Angular frontend

Angular application that allows evaluating the quality of the code, meets the requirements with attention to detail.

The purpose of this application is to connect an APIRestful and get starships and pilots from Star Wars.

## Requirements

- The landing page should show the list of all Star Wars spaceships with a summary of the specifications for each of them.

- When clicking on a starship, it shows the details of the spaceship, including the list of the pilots.

- When clicking on a pilot listed in the spaceship details, the app leads the user to the details of the selected pilot.

### Constraints

1. It’s mandatory to be able to come back to the spaceship list at any moment, or to the last
page visited.
2. Data should load only once when the app is launched. It should not call the API
thereafter, as long as the page is not refreshed.
3. You can’t use the “wrapper swapi” offered on the site for the calls made to the web
service.

## Technologies

||Version|Command for checking
|-|-:|-|
|node|19.8.1|node --version|
|npm|9.5.1|npm --version|
|angular-cli|15.2.4|ng --version|
|git|2.39.2|git --version|

## Design Thinking Process

Due to the creative freedom that this project had, certain stages of the Design Thinking methodology were implemented. Others were omitted due to time constraints.

After empathizing with and defining the requirements of the project, we proceeded with ideating.

> Note:
>
>This project is an Angular test for a hiring process, in which we aimed to assess code quality and meet the requested functional requirements. As such, the design is not optimized for mobile devices, and responsiveness was not taken into account during development. While we understand the importance of responsiveness in most projects, in this case we chose to focus on other technical aspects.

### Inspiration & References

- https://dribbble.com/shots/14543693--Artist-Info-Carousel-Concept
- https://dribbble.com/shots/17471156-MetaSpace-Metaverse-Landing-Page
- https://dribbble.com/shots/20247474-Education-Website-Design-business-landing-web-page-site-designer
- https://dribbble.com/shots/4686153-Toy-store-website
- https://dribbble.com/shots/14921442-Mandalorian-CONCEPT

> **Credits:**
>
> The Loading Page:
>
> See the Pen *[Loading Animation CSS](https://codepen.io/42EG4M1/pen/bVMzze)* by Tatsuya Azegami (*[@42EG4M1](https://codepen.io/42EG4M1)*)

### Wireframes
In the folder ./wireframes you will find four schematic pages as a visual guide that represents the skeletal framework of the project, created using [Adobe XD](https://www.adobe.com/products/xd.html).

### Mockups
In the folder ./mockups you will find the model pages as graphic guidelines of the to-be system, created using [Figma](https://www.figma.com/).

__Graphic Guidelines__

_Colors:_

||HEX Color|
|-|-|
|bg|#E3E7EB|
|primary|#181A1C|
|secondary|#EDF1F4|
|tertiary|#B0B4B7|

_Fonts:_

|Provider|Font Family|Font Size|Font Weight|CSS Selector|
|-|-|-:|-:|-|
|Google Fonts|Montserrat|150px|Bold|H1|
|Google Fonts|Montserrat|70px|Bold|H2|
|Google Fonts|Montserrat|36px|Bold|H3|
|Adobe Fonts|Proxima Nova|24px|Bold|.text-title|
|Adobe Fonts|Proxima Nova|20px|Bold|.text-subtitle|
|Adobe Fonts|Proxima Nova|18px|Bold|.text-bold|
|Adobe Fonts|Proxima Nova|18px|Regular||

_Iconography_

The iconography was taken from *[Fontello](https://fontello.com/)*

_Illustrations_

The iconography was taken from *[PNG Find](https://www.pngfind.com/)*

> **Note:**
>
> Prototyping and testing stages were ommited
>
> *[ProtoPie](https://www.protopie.io/)* is highly recommended for the prototyping process.

## Deployment

This section explains the necessary steps to deploy the project.

To install the npm libraries, run the following command in your terminal:

```bash
  npm install
```

To compile the project and prepare it for deployment, use:

```bash
  ng build
```

To deploy the project in a development environment, use:

```bash
  ng serve
```

## Running Tests

Before deploying your project, it's always a good idea to run tests to ensure that everything is working as expected. Here's how you can do that:

To run tests, use the following command in your terminal:

```bash
  ng tests
```

> Note:
>
> I would like to clarify that I have implemented some unit tests as a demonstration of my technical skills in programming. While I understand that achieving 100% coverage is ideal, I have performed a representative sample for this technical test that showcases my knowledge in this area.


## Additional Features

At least one of the following bonuses should be used for the project demo.

- Show what you can do with css/scss. (chosen)
- If you have time, use other parts of the SWAPI (like the planets, the films, etc) (chosen)
- Connect an API like https://unsplash.com/developers to add visuals.

In this case, this project did require hinting at the planet's API to get the name of the planet related to the key `Pilot.Homeworld` and attach it to the pilot model.

*Implementation File*: `@/app/services/swapi.service.ts`

```javascript
async _pilots(): Promise<PilotInterface[]> {
  const pilots: PilotInterface[] = await this._get('people')
  return pilots.map((pilot, key) => {

    let homeworld: Planet[] = [];
    const planet = this.planets.find(planet => planet.url == pilot.homeworld);
    if (planet) {
      homeworld = [planet];
    }

    ...
  })
}
```