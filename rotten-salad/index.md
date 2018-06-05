# Rotten Salad

The goal of this problem is to build out the rules to a simple game. This is a modelling question. Maximum points will be given to simple, easy to read code, which ideally is well tested.

## Rules of The Game

In each round of the game, you will open one card. This card will have one of the following pictures on it: Apple, Banana, Mango, Orange, or a Garbage Can.

After picking each card, the player must announce what picture is on the card, subject to the following rules.

1) By default, the player must announce the picture on the card. For example, if the card has an apple, the player must say "Apple".
2) If the previous card had the same picture, then the player must announce any other fruit. For example, if the previous card was an apple, and the current card is also an apple, the player may say "Banana".
3) If the player had announced the same fruit for the previous card, then the player must announce any other fruit for this card. For example, if the previous card was an apple (and banana was announced), and the current card is a banana, then the player may announce "Mango".
4) If the picture on the card is a garbage can, then the player must announce "Garbage Can". However, the card that came before the garbage can becomes taboo. No player may announce the taboo card. The effects of this is negated once another garbage can card is picked, causing another fruit to become taboo.

### Objective of the program

When a card is opened, the program must state which statement to Announce. The input will be provided via standard input, one card per line. The announcements must be made on standard output, one announcement per line.

### Sample Input and Output

| Input        | Output           | Comment  |
| ------------- |---------------| -----|
| Apple <br> Apple <br> Banana | Apple <br> Banana <br> Mango | Truth <br> Can't say Apple <br> Can't say Apple or Banana |
| Apple <br> Garbage Can <br> Banana <br> Apple  | Apple <br> Garbage Can <br> Banana <br> Mango | Truth <br> Truth (Apple is now taboo) <br> Truth <br> Can't say Banana or Apple |

## Credits

This programming question is based on the excellent game (Cockroach Salad)[https://www.amazon.com/Schmidt-SCH87148-Cockroach-Salad-Card/dp/B00LNFP9G6]. It's an amazingly fun game, so do pick up a copy.
