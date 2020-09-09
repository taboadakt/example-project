# Example Project
This is boilerplate code for a Full Stack application.

## Developer Setup
1. Start the server application   
    `cd server && npm i && npm run dev`
    - Check out the [server README](./server/README.md) for more information.
    - Default Server GraphQL address: http://localhost:4000
    
2. Start the client frontend

    `cd frontend && npm i && npm start`
    - Check out the [frontend README](./frontend/README.md) for more information.
    - Default Frontend address: http://localhost:3000/



## Good Learning Ideas

### Small Effort Tasks:
> 5-15 minutes expectation
1. (UI) Currently, you can add a flower.  Can you also make it so we can add a family?
2. (UI) Currently, there is a bug. If a flower is added it does not show up on the family page unless you refresh. Can you fix this so it shows up immediately?
3. (UI) Currently, the flowers have CreatedAt timestamps in their data but we do not display them in the UI. Can you add those to the UI list text and show it in a standard human readable format?
4. (Server) Currently, you can only add or remove flowers and/or families, can you add functionality to update them?

### Medium Effort Tasks:
> 10-30 minute expectation
1. (fullstack) Currently, the list of flowers in the UI shows a standard flower icon.  Can you persist some flower pictures into the server and show them instead of the icon when they exist? 
2. (fullstack) Currently, you can drill down from flower family to flowers. Can you also enable the server and client to drill down from flowers into families?
3. (UI) Currently, there is only 1 route `/`. Can you add URL based navigation and have url path `/` forward to `/flowers` then also update the url to `/families` when the tab changes?
4. (UI) Currently you can only list the flowers, can you add a filtering system for the flowers?

### Large Effort Tasks:
> 20-60 minute expectation
1. (UI/Sever) Currently the whole site is in English, can you internationalize it to a different language?
2. (fullstack) Currently the site only works locally, can you deploy it to any hosted environment?

