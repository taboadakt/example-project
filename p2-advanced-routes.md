# Advanced Routes

Currently, the URL does not update when the user toggles between
`flowers` and `family`. This is bed for permalink purposes. We need
the URL to update and react to `/family` when we are/want to be on the
`family` tab and to `/flowers` when we are/want to be on the `flowers`
tab.

On the `family` tab users can expand/collapse families to show the
flowers in them, however, on refresh the families return to a
collapsed position. Allow the users keep their expanded/collapsed
state when they refresh the page. Ideally users can share URLs with
friends that represent exactly what they see.

We need a new flower details page that is accessible by selecting a
flower from the flower tab. The page should contain the flower's name,
family, and created at date/time. Do the same for a family detail's
page and make sure to show the family's name, flowers in the family,
as well as created at date/time.

Lastly, create a new page for employees. On this page you will be
displaying a list of our employees which you can get from here
http://dummy.restapiexample.com/. Display the employee's name. We need
an employees details page that is accessible by selecting an
employee. This page should contain the employee's name, salary, and
age. We would like to keep track of our employee's favorite
flowers. From their details page, allow the user to add/remove flowers
to their favorites list.

(Bonus ask) Currently, users cannot edit flowers or families. Add edit
buttons to the flower and family details page. On the flower edit
page, users should be able to edit the flower's name and family or
delete the flower altogether. On the family edit page, users should be
able to edit the family's name, add/remove flowers from the family, or
delete the family altogether. Make sure that browser refreshes work as
expected and that the changes made get reflected on the UI without
needing refresh.
