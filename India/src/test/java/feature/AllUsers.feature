Feature: All Users 

Scenario Outline: <state> User

Given Navigate to the "https://shop.unicity.com/#/home" application
Given <username> and <password>
Then Home Page <username>

Then Add Products To Cart <username>
Then Check Product
Then Check Cart

Then Check Form Fields

Then Payment Avenue

Then Review Orders

When Review Fields <username>
Then Shipping Information <username>
Then Contact Information <username>
Then Payment Information CCAvenue

Then CCAvenue Payment Details

Examples:
|username  |password   |state         |
|206914401 |0155       |Andama Nicobar|
|314852591 |asiaaktar  |Andhra Pradesh|
|312579891 |FXmpqm     |Arunachal Pradesh|
|205146001 |baba69     |Assam            |
|312709091 |JjQtYS     |Bihar            |
|313979091 |acSjac     |Chandigarh       |
|314573291 |1985       |Chhatisgarh      |
|314304891 |PQU5RF	   |Dadar & Nagar    |
|312837491 |wGn7C9     |Delhi            | 
|310141491 |ttR8Jy     |Goa              |
|314195991 |9vnaTy     |Gujarat          |
|301941991 |sonu3264   |Haryana          |
|314573491 |7982701596 |Himachal Pradesh |
|309938991 |pratik143  |Jharkhand        |
|314195391 |37yud5     |Maharastra       |
|313691891 |44f85294480c|Manipur         |
|313307391 |VuNqZj     |Meghalaya        |
|305652791 |mTVWRq     |Nagaland         |
|314893991 |W67UN9     |Orrisa           |
|314224491 |UXtRBx     |Ponducherry      |
|310586191 |v3BRT5     |Punjab           |
|304000191 |7YbrPa     |Rajasthan        |
|200357401 |unicity1234|Sikkim           |
|311846191 |7666       |Tamil Nadu       |
|314504491 |xHAQQY     |Telangana        |
|313909791 |Qn8KyY     |Tripura          |
|314573191 |UrT8nK     |Uttar Pradesh    |
|312289691 |GC7Jcy     |West Bengal      |
|312930091 |C7P59f     |Lakshadweep      |