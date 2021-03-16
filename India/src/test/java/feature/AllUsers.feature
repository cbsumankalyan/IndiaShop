Feature: All Users 

Scenario Outline: <state> User

Given Navigate to the "https://shop.unicity.com/#/home" application
Given <username> and <password>
Then Home Page <username>

Then Add Products To Cart <username>
Then Check Product
Then Check Cart

Then Check Form Fields

Then Review Orders

When Review Fields <username>
Then Shipping Information <username>
Then Contact Information <username>
Then Payment Information CCAvenue

Then CCAvenue Payment Details

Examples:
|username  |password   |state         |
|206914401 |0155       |Andama Nicobar|
|315576891 |7KPjwz     |Assam            |
|314213791 |tMvt8B     |Chandigarh       |
|312837491 |wGn7C9     |Delhi            |
|314195991 |9vnaTy     |Gujarat          |
|301941991 |sonu3264   |Haryana          |
|316562491 |8894112602 |Himachal Pradesh |
|195836101 |anushka123 |Maharastra       |
|313307391 |VuNqZj     |Meghalaya        |
|305652791 |mTVWRq     |Nagaland         |
|314678591 |OM1234     |Punjab           |
|304000191 |7YbrPa     |Rajasthan        |
|200357401 |unicity1234|Sikkim           |
|316104791 |asif       |Uttar Pradesh    |
