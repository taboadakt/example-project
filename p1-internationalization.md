# Internationalization

Our flower shop is expanding! We will need to support stores in Spain
ASAP. Staholders have a series of requirements around this new market
strategy.

First, we need some way to differentiate languages and locations. The
preferred universal approach is to combine ISO-639 with ISO-3166. We
then need some kind of language selector for the site. Users should be
able to choose between American English or Spanish. The language on
the site should update instantly once the language/locale is
selected. Make sure to detect the country your user's browser is in to
set the initial language. Lastly, update the URL so users can go to
directly to the specific language selected.

Secondly, as part of the new internationalization effort, we will need
to create a page for employees. On this page you will be displaying a
list of our employees which you can get from this API
http://dummy.restapiexample.com/. Display the employee's name on a
list. Management only want to launch this page to the North American
market for now so it shouldn't be available or accessible for users on
any other location/language.

Lastly, it has been brought to our product team's attention that
showing the date the flower was created drives sales up. Change the
the flowers page to display the date and time of creation of each
flower. Format the date and time in a way that's readable to a typical
user (humanize it). Make sure this is part of your
internationalization strategy.

(Bonus ask) Currently, users cannot add families. Add an "Add family"
button to the family tab and make it functional. Business wants this
feature to be rolled out in Spain first.
