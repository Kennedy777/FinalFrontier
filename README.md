# Galactic Age Calculator

#### An app to convert a person's age on Earth to their age in the solar years of other planets.  

#### *By: Marguerite Kennedy*

## Description
Feeling a bit old?? Or too young? Fix that by calculating your age on other planets!  

This is an app to calculate a person's age on other planets, such as Mercury or Mars, where years are longer or shorter in relation to Earth years. The app will also "determine" many years a person has left to live, based on their life expectancy. If a person has outlived their life expectancy (we're looking at you, Keith Richards...), the app will tell them how long ago they were expected to shuffle off their mortal coil.


## Setup/Installation Requirement
* Clone repository at www.github.com/Kennedy777/SpaceAge
* _Clone GitHub repository to desktop or desired directory_
* _Navigate to directory in terminal_
* _Run the following commands:_
    $ npm install (to install dependencies)
    $ ./node_modules/.bin/jasmine init (to initialize Jasmine)
    $ karma init (to initialize Karma)
    $ npm install -g karma-cli (to use Karma in the terminal)

## Known Bugs
_The program doesn't account for Leap Years\
_UI is not currently connected to back-end


## Contact Information
_Get in touch via Github!_

## Technologies Used
| Development dependencies | Front end dependencies |
| :------------ | :------------- |
| * webpack | * bootstrap |
| * eslint | * jquery |
| * karma & jasmine | * popper
|

### Specs
1. The program will take an age in years and convert it into seconds
  * Input: 1
  * Output: 31,536,000
2. The program will return a human's age in Mercury years (.24 Earth years).
  * Input: 30
  * Output:
3. Return the age of a human in Venus years. (A Venus year is .62 Earth years).
  * Input: 30
  * Output:
4. Return the age of a human in Mars years (1.88 Earth years).
  * Input: 30
  * Output:
6. Return age of a human in Jupiter years. (11.86 Earth years).
  * Input: 30
  * Output: 3
7. Life Expectancy: the app will provide an estimate of how many years a person has until they croak, based on *user-inputted* age AND life expectancy on Earth:
  * Input: 30, 78.3
  * Output (Mercury):
  * Output (Venus):
  * Output (Mars):
  * Output (Jupiter):

9. If a person has lived beyond their life expectancy, the program will return the difference between a person's age and the life expectancy.
