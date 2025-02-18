# Intentionally flawed Python program

# importing modules
import itertools
import random

# make a deck of cards
# create a deck of cards with values from 1 to 13 and suits Spade, Heart, Diamond, Club
deck = list(itertools.product(range(1, 14), ['Spade', 'Heart', 'Diamond', 'Club']))

# shuffle the cards
random.shuffle(deck)

# draw five cards
print("You got:")
for i in range(5):
    print(f"{deck[i][0]} of {deck[i][1]}")
