# Redstor-Challenge-JS
![redstorlogo](https://github.com/AnoshMalik/Redstor-Challenge-Java/assets/3519251/1c6c37b5-e6c5-43f2-9ec6-05cff1218577)

------------------------------------------------------------------------------------------

Project Specs :
Written in JS(X) in React using create-react-app in VS Code
Tested using react-testing-library
Deployed on render and azure
1. Azure - https://nice-bush-0fde8aa03.4.azurestaticapps.net/
2. Render - https://redstor-challenge.onrender.com/

Build/Compilation Instructions
1. Clone repo
2. In terminal > Move to redstor-challenge folder > cd redstor-challenge
3. Type npm i
4. Type > npm start (to start server)
5. Type > npm test (type a after npm run test to run all tests, if prompted)
6. Type > npm build (should you choose to build and deploy elsewhere)


------------------------------------------------------------------------------------------
##The Challenge
###Implement the code for a supermarket checkout that calculates the total price of a number of
items. In a normal supermarket, items are identified using Stock Keeping Units (SKUs), but
in our store we’ll be using individual letters of the alphabet (A, B, C etc). Our goods are
priced individually, but some items also have multibuy offers. For example, item A might cost
60 individually, but if you buy three A’s then they’ll cost you 150. This week’s prices are as
follows:
Item Unit Price Special Price
A 60 3 for 150
B 30 2 for 45
C 30
D 25
Items can be scanned in any order, so if we scan a B, an A, then another B, we’ll recognise
the offer for two B’s and price them at 45, giving a total price of 105. Because our store
changes its pricing frequently, we need to be able to pass in a set of pricing rules each time
we begin handling a checkout transaction.
You may use any language and technologies to design and implement your solution. The
interface for the checkout should look similar to the following pseudocode:
checkout = new Checkout(pricingRules)
checkout.Scan(item)
checkout.Scan(item)
…
price = checkout.Total


------------------------------------------------------------------------------------------
