# Miscellaneous

This problem set lists a series of small to medium asks. Choose 3 from
the small tasks list and 2 from the medium task list to solve.

### Small Effort Tasks:

1. (UI) Currently, you can add a flower. Can you also make it so we
   can add a family?
2. (UI) Currently, there is a bug. If a flower is added it does not
   show up on the family page unless you refresh. Can you fix this so
   it shows up immediately?
3. (UI) Currently, the flowers have `CreatedAt` timestamps in their data
   but we do not display them in the UI. Can you add those to the UI
   list text and show it in a standard human readable format?
4. (Server) Currently, you can only add or remove flowers and/or
   families, can you add functionality to update them?
5. (Server) Currently, there are server integration tests for queries
   only, can you also add tests for mutations?
6. (UI) Currently, there are tests for the different Flower and
   Families tabs render, can you add a new test for adding a flower
   then testing the flowers view output?

### Medium Effort Tasks:

1. (fullstack) Currently, the list of flowers in the UI shows a
   standard flower icon.  Can you persist some flower pictures into
   the server and show them instead of the icon when they exist?
2. (fullstack) Currently, you can drill down from flower family to
   flowers. Can you also enable the server and client to drill down
   from flowers into families?
3. (UI) Currently, there is only 1 route `/`. Can you add URL based
   navigation and have url path `/` forward to `/flowers` then also
   update the url to `/families` when the tab changes?
4. (UI) Currently you can only list the flowers, can you add a
   filtering system for the flowers?
