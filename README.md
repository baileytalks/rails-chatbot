# Simplified chat bot with pre-written messages and admin editor interface

* Ruby 2.4.1
* Rails 5.1.2
* Test framework: RSpec
* VCS: GIT

bundle exec rspec



## Description

A user lands on the page and sends the first pre-written message to the bot (this is the root of the tree), they receive a response, for which they are then are presented with 2-3 optional possible pre-written messages to choose from to send back, each of which lead to a new 'response' from from the bot, and so on.

At particular points the response they choose may also lead to the end of the game (end is simply pass / fail).

All routes down the message tree should ultimately end in a pass/fail.

## Admin / backend:

* Authorisation system
* Ability to create / view /edit the messages and responses which form the chat flow
* Ability to mark a message the user receives as triggering the end of the game (with success or failure), otherwise the message received should give 2-3 possible responses the user will be able to choose

## User / Front end:

* First message from bot shown to user after short delay
* Available choices of response can be cycled through, allows user to pick one and 'send'
* Corresponding response message comes back from bot after short delay
* Repeat above steps until game end is triggered by one of the responses
* Present game end screen (pass / fail) and option to replay

## Bonus points

Add some feature specs:
* Make it feel 'chatty' by implying the bot is typing during the delay periods
* Stats dashboard showing # of times game played, # times completed, # of wins, # of losses, # of replays and anything else you feel is appropriate
