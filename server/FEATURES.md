## About

This is a simple example of a http graphql server with Typescript and apollo. 

| Category  | Pro | Cons |
| ------------- | ------------- | ------------- |
| Language<br />(TypeScript)  | - [Widely Excepted](https://trends.google.com/trends/explore?geo=US&q=%2Fm%2F02p97,%2Fm%2F07sbkfb,%2Fm%2F05z1_,%2Fm%2F03yb8hb) in dev community <br />- [Type Safe](https://en.wikipedia.org/wiki/Type_safety) <br />- [npm](https://www.npmjs.com/) (350,000+ packages) <br /> - Instant hot reload on save   |  - Async coding nuances for new JS learners  |
| Pure<br />(1 Prerequisite)  | - Only prerequisite is Node/NPM <br /> - Dev on any major OS (OSX, *nix, Windows, etc.) <br /> - No addition configuration or permissions for new devs <br /> - Software principles of demarcation points for apps <br /> - Quick, repeatable dev patters <br /> - Enforce clean code with auto linters | - Restricted to Node  |

List of other cool features thrown in:
- [Auto code formatting](https://prettier.io/docs/en/)
- [Git Coventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#summary)
    - automatic changelog and versioning with easy filtering/finding
- [Tests, Setup and Hooks Autorun](https://www.npmjs.com/package/husky)
    - TODO finish setting up auto install and possibly swap NVM to prerequisites
- [CI tools that will report to git automatically](https://circleci.com/)
- [GraphQLI out of the box for free](https://www.apollographql.com/docs/apollo-server/#:~:text=Apollo%20Server%20provides%3A,you%20to%20ship%20features%20faster), no need for external apps to query and view docs
- Use an IDE of your choice, recommended [Visual Studio Code](https://code.visualstudio.com/) or [IntelliJ](https://www.jetbrains.com/idea/) for intelliSense, prettier and file watcher plugins among others


## Learning Curve
### Recommended Developer Knowledge
- :white_check_mark: JavaScript <br />

## Things I Value
- Being Inclusive
    - Allow any dev or user to use our app with as little knowledge and skill level and configuration as possible
- Quick Development
    - I invest time upfront to use tools and create patterns that enable developer focus on their intended goal
- Less Complexity
    - Achieved by using a single language allowing a user to focus on only what they need to know
- Enforced standards
    - Achieved by using many tools and type safety that allow users to have their own experience but are enforced 


## TODO
- :white_check_mark: Initialize GraphQL server with type safety and graphql schema generation
- :white_check_mark: Basic working GraphQL schema 
- :white_check_mark: Hot Reload
- :white_check_mark: In Memory DB with hooked up 
- :white_check_mark: Create and Delete basic Orders to roughly match the domain
- :white_check_mark: Write basic resolvers that do some logic and don't go straight to DB
- :x: File structure clean up: Move functions to individual files
- :x: Unit Testing
    - Test individual helper or resolver functions by creating inputs and expecting outputs
- :x: E2E Testing
    - Tests for the full app running by creating inputs and expecting outputs
    - Allow for an internal database interface to be preloaded with test content and/or mocking
- :x: Automated CI Tests reporting to Github
    - Set up free CircleCI config that runs both test suites
    - Set up git configuration to protect master from CI errors
- :x: AWS configured deployments with environments
    - Deploy to AWS with simple NPM commands such as `npm run deploy:dev` `npm run deploy:prod`
- :x: Document dev patterns and explain npm scripts commands
    - Models for database interface, Resolvers for business logic, Helpers for universal functions, Schema for external interface
