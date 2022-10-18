package main

import (
	"fmt"
	"io/ioutil"
	"math/rand"
	"os"
	"strings"
	"time"
)

type deck []string

func newDeck() deck {
	deck := deck{}
	cardSuits := []string{"diamons", "hearts", "spades", "clubs"}
	cardValues := []string{"Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "Ace", "King"}

	for _, cardSuit := range cardSuits {
		for _, cardValue := range cardValues {
			deck = append(deck, cardValue+" of "+cardSuit)
		}
	}

	return deck
}

func (d deck) print() {
	for _, card := range d {
		fmt.Println(card)
	}
}

func deal(d deck, handSize int) (deck, deck) {
	return d[:handSize], d[handSize:]
}

func (d deck) toString() string {
	return strings.Join(d, ",")
}

func (d deck) saveToFile(fileName string) error {
	return ioutil.WriteFile(fileName, []byte(d.toString()), 0666)
}

func newDeckFromFile(fileName string) deck {
	bs, error := ioutil.ReadFile(fileName)
	if error != nil {
		fmt.Println(error)
		os.Exit(1)
	}
	s := strings.Split(string(bs), ",")

	return deck(s)
}

func (d deck) shuffle() {
	source := rand.NewSource(time.Now().UnixNano())
	r := rand.New(source)
	for i := range d {
		ranPos := r.Intn(len(d) - 1)
		d[i], d[ranPos] = d[ranPos], d[i]
	}
}
